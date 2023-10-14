import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase";
import { signInWithPopup, signOut } from "firebase/auth"
import { selectUserName, selectUserPhoto, setSignOutSate, setUserLoginDetails } from "../features/user/userSlice"
// import { useEffect, useState } from "react";

const Header = (props) => {

    // const [value, setvalue] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=> {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history("/home");
            }
           
        });
    }, [userName]);

    const handleAuth = () => {
        if(!userName){
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user);
            // localStorage.setItem("email", result.user.email);
            // console.log(result);
        }).catch((error) => {
            alert(error)
        });
    }else if(userName){
        signOut(auth).then(() => {
            dispatch(setSignOutSate());
            history('/');

        }).catch((error) => {
                alert(error.message);
        });
    }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    // useEffect(()=>{
    //     setvalue(localStorage.getItem('email'));
    // })

    return (
        <div>
            <Nav>
                <Logo>
                    <img src="/images/logo.svg" alt="Disney+" />
                </Logo>

                {
                    !userName ?
                        <LoginB onClick={handleAuth}>LOGIN</LoginB> :

                        <>
                            <NavMenu>
                                <a href="/home">
                                    <img src="/images/home-icon.svg" alt="HOME" />
                                    <span>HOME</span>
                                </a>
                                <a>
                                    <img src="/images/search-icon.svg" alt="SEARCH" />
                                    <span>SEARCH</span>
                                </a>
                                <a>
                                    <img src="/images/original-icon.svg" alt="ORIGINAL" />
                                    <span>ORIGINAL</span>
                                </a>
                                <a>
                                    <img src="/images/movie-icon.svg" alt="MOVIE" />
                                    <span>MOVIE</span>
                                </a>
                                <a>
                                    <img src="/images/series-icon.svg" alt="SERIES" />
                                    <span>SERIES</span>
                                </a>
                                <a>
                                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                                    <span>WATCHLIST</span>
                                </a>
                            </NavMenu>
                            <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                            </SignOut>
                        </>
                }



            </Nav>
        </div>
    )
};

const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    //styling inside a
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            width: 20px;
            min-width: 20px;
            z-index: auto;
        }

        span{
            color: white;
            font-size: 13px;
            letter-spacing: 1.4px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before{
                background-color: whitesmoke;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                opacity: 0;
                position: absolute;
                left: 0px;
                right: 0px;
                transform-origin: left center;
                tarnsform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

 

    @media (max-width: 768px){
        display: none;
    }

`;

const LoginB = styled.a`
    background-color: black;
    color: white;
    padding: 8px 16px;
    letter-spacing: 1.4px;
    border: 1px solid white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: white;
        color: black;
       
    }
`;

const UserImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50px;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: black;
    border: 1px solid rgba(255, 166, 0, 0.34);
    border-radius: 5px;
    box-shadow: rgba(5, 5, 0, 0.4) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;

`;

const SignOut = styled.div` 
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    
    &:hover {
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }

`;




export default Header