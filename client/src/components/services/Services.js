import styled from "styled-components";
import ServicesCards1 from "./ServicesCards1.js"
import ServicesCards2 from "./ServicesCards2.js"
import ServicesCards3 from "./ServicesCards3.js"
import ServicesCards4 from "./ServicesCards4.js"

import AnimatedBg from "react-animated-bg";
import AnimatedImages from "react-animated-bg";
import React, { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

// hover sets
import "../css/hover-min.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";


const Services = (props) => {


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

                    <BgImageHome src="/images/ServicePage.jpg" />

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
                {/* ////////////////////////// End of common page top section //////////////////// */}


                <BgSectionWhiteVendorServices></BgSectionWhiteVendorServices>
                <TitleVendorServices>VENDOR SERVICES</TitleVendorServices>
                <TitleVendorServicesUnderLine></TitleVendorServicesUnderLine>


                {/* ////////////////////////// Start of Services section //////////////////// */}
                <ServiceContainer>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Decorations"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Dresses"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Photographers"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards1
                            id="1238"
                            serviceType="Bridal Beauticians"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards2
                            id="1238"
                            serviceType="Wedding Stationaries"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards2
                            id="1238"
                            serviceType="Cultural Requirements"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Bouquets"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Entertainments"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Transports"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Cakes and Boxes"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards2
                            id="1238"
                            serviceType="Honeymoon Planning"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards2
                            id="1238"
                            serviceType="Wedding Souvenirs"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Jawelers"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Officiants"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Planners"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards1
                            id="1238"
                            serviceType="Wedding Florists"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Lighting"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Invitations"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Musicians"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Djs"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Bands"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Caterers"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Hair and Makeup"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Rentals"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Limos"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Travel Agents"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Poruwa Ceremonies"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards1
                            id="1238"
                            serviceType="Bridal Dressing"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Videographers"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Grooms Outfit"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Shoes"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards1
                            id="1238"
                            serviceType="Wedding Ashtaka Service"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Pre Shoot Locations"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Dress Design"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Dancing Groups"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardVendorEnd></CardVendorEnd>
                </ServiceContainer>

                <BgSectionWhiteOurServices></BgSectionWhiteOurServices>
                <TitleOurServices>OUR SERVICES</TitleOurServices>
                <TitleOurServicesUnderLine></TitleOurServicesUnderLine>
                <POurServices>WeddingsLk company provide you the best and comfortable services to make your memorable day more precious</POurServices>


                <ServiceContainer>
                    <CardRow>
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Websites"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Invitations"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards3
                            id="1238"
                            serviceType="Wedding Ideas"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards2
                            id="1238"
                            serviceType="Wedding Stationeries "
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards2
                            id="1238"
                            serviceType="Wedding Decorations"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                    <CardRow>
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Souvenirs"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Rentals"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Wedding Limos"
                            image="./images/SankalanaFlora.jpg"
                        />
                        <ServicesCards4
                            id="1238"
                            serviceType="Travel Agents"
                            image="./images/SankalanaFlora.jpg"
                        />
                    </CardRow>
                </ServiceContainer>
                {/* ////////////////////////// End of services section //////////////////// */}
            
            
            </Content>

            <Footer/>
            
        </Container>
    );
};

////////////////////////// Start of common page top section ////////////////////

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
    justify-content: space-between;
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
    justify-content: space-between;

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
    justify-content: space-between;

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



////////////////////////// End of page top section ////////////////////


const BgSectionWhiteVendorServices = styled.div`
    z-index: 0;
    margin-top: -120px;
    background-color: #FFF;
    opacity: 90%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendorServices = styled.div`
    color: #180A18;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -70px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleVendorServicesUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #180A18;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;



const ServiceContainer = styled.div`
   margin-left: 50px;
   margin-right: 50px;
   justify-content: space-between;
   align-items: center;
   position: relative;
`;

const CardRow = styled.div`
    display: flex;
    position: relative;
    align-items: center;

`;

const CardVendorEnd = styled.div`
   
`;


const BgSectionWhiteOurServices = styled.div`
    z-index: 0;
    margin-top: 10px;
    background-color: #FFF;
    opacity: 90%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleOurServices = styled.div`
    color: #180A18;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -70px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleOurServicesUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #180A18;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;

const POurServices = styled.div`
    margin-top: 5px;
    margin-bottom: 15px;
    width: 70%;
    margin-left: 350px;
    color: #180A18;
    font-size: 15px;
    font-weight: 700;
    z-index: 1;
    position: relative;
`;


export default Services;