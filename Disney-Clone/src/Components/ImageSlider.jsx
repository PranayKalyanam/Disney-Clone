//This will go to Home.jsx
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const ImageSlider = (props) => {

    let setting = {
        dots: true,
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Carousel {...setting}>
            <Wrap>
                <a >
                    <img src="/images/slider-badging.jpg" alt="HOME" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-badag.jpg" alt="HOME" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-scale.jpg" alt="HOME" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-scales.jpg" alt="HOME" />
                </a>
            </Wrap>

            <Wrap>
                <a >
                    <img src="/images/slider-scaler.jpg" alt="HOME" />
                </a>
            </Wrap>
        </Carousel>

    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;

    &> button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;


        &:hover {
            opacity: 1;
            transition-duration: 0.5s;
        }
    }

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button: before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 5px;
    position: relative;

    a{
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                    rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        
        display: block;
        position: relative;
        padding: 8px;

        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            cursor: pointer;
            padding: 0;
            border: 4px solid rgba(255, 255, 255, 0.5);
            tansition-duration: 300ms;
        }
    }
`;


export default ImageSlider