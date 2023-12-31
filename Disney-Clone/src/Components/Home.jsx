//this will go to App.jsx
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trendings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    useEffect(() => {
        const colRef = collection(db, "movies");
            onSnapshot(colRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                // console.log(recommends);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        // recommends.push([...doc.data(), id= doc.id]);
                        break;

                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case 'trending':
                        trendings = [...trendings, { id: doc.id, ...doc.data() }];
                        break;

                        default:
                            break;

                }
            });
            
        

        dispatch(
            setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trendings,
            })
        );
    });
    }, [userName]);


    return (

        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />

        </Container>
    );
}



const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);


    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;

        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
    
    `;

export default Home