import styled from "styled-components";

import AnimatedBg from "react-animated-bg";
import AnimatedImages from "react-animated-bg";
import React, { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

// hover sets
import "../css/hover-min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Galleries = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);


    const imagesList = [
        'url("https://image.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg")',
        'url("https://image.freepik.com/free-photo/groom-bride-together-are-holding-wedding-pink-bouquet_8353-9794.jpg")',
        'url("https://image.freepik.com/free-photo/groom-black-tuxedo-hugs-tender-stunning-bride-while-they-stand_8353-8050.jpg")',
        'url("https://image.freepik.com/free-photo/young-beautiful-stylish-woman-wedding-dress_285396-7822.jpg")',
        'url("https://image.freepik.com/free-photo/valentines-day-marry-me-wedding-engagement-ring-box-with-red-rose-gift_114579-402.jpg")'
    ];


    return (
        <Container>
            <Header/>
            <Content>
                {/* ////////////////////////// Start of common page top section //////////////////// */}

                <AnimatedImages
                    colors={imagesList}
                    duration={2}
                    delay={1}
                    timingFunction="ease-out"
                >

                    <BgImageHome src="/images/GalleriesPage.jpg" />

                </AnimatedImages>

                <Title1>SERVICES</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide wide range of services for your precious wedding</P1>
                <Title2>VENDOR AND OUR SERVICES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you mainly two different services</P2>
                <Btns>
                    <BtnOurServices>
                        <a href="/user/profile">
                            <BtnOurServicesText>OUR SERVICES</BtnOurServicesText>
                        </a>
                    </BtnOurServices>
                    <BtnVendorServices>
                        <a href="/user/profile">
                            <BtnVendorServicesText>VENDOR SERVICES</BtnVendorServicesText>
                        </a>
                    </BtnVendorServices>
                </Btns>
                <BgColoredSection1></BgColoredSection1>
            </Content>
            <Footer/>
        </Container>
    );
};



const Container = styled.div`
    a {
        text-decoration: none;
        color: white;
    }
`;

const Content = styled.div`
 
`;

const BgImageHome = styled.img`
    height: 850px;
    width: 100%;
    z-index: -100;
    position: relative;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 2)); */

`;

const Title1 = styled.div`
    margin-top: -350px;
    margin-left: 150px;
    color: #FFF;
    width: 50%;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;
`;

const TitleUnderline1 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 15%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: 130px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Title2 = styled.div`
    margin-top: 10px;
    margin-left: 850px;
    color: #FFF;
    width: 500px;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;

`;

const TitleUnderline2 = styled.div`
    margin-top: 10px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 1;
    width: 35%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: 1000px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVendorServices = styled.div`
    background-color: #02031A;
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServices = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #101F0B;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnOurServicesText = styled.div`

`;

const BtnVendorServicesText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -320px;
    opacity: 80%;
    z-index: 0;
    position: relative;
    background-color: #3E0C33;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;


export default Galleries;
