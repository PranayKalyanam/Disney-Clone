//this will go to Home.jsx
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = (props) => {
    const movies = useSelector(selectRecommend);
    // console.log(movies);
    return(
        <Container>
            <h2>Recommends for you </h2>
            <Contents>
             {
                movies && movies.map((movie, key) =>(
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={'/detail/' + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>

                ))
             }

            </Contents>
        
        </Container>
    )
}

const Container = styled.div` 
    // padding: 0 0 26px;
    padding-bottom: 26px;
`;

const Contents = styled.div`
display: grid;
grid-gap: 20px;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width: 768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

`;

const Wrap = styled.div`
    padding-top: 55%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                rgb(0 0 0 / 73% ) 0px 16px 10px -10px;

    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250px cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 4px solid rgb(245, 245, 245, 0.2);

    img{
        inset: 0;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }


    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        
        transform: scale(1.05);
        border-color: rgba(255, 255, 255, 0.6);
    }
`;

export default Recommends