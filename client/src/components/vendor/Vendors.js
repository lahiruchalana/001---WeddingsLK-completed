import styled from "styled-components";
import VendorsCards from "./VendorsCards.js"
import SearchIcon from '@material-ui/icons/Search';

import AnimatedBg from "react-animated-bg";
import AnimatedImages from "react-animated-bg";
import React, { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

// hover sets
import "../css/hover-min.css";


const Vendors = (props) => {


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
            <Content>
                {/* ////////////////////////// Start of common page top section //////////////////// */}

                <AnimatedImages
                    colors={imagesList}
                    duration={2}
                    delay={1}
                    timingFunction="ease-out"
                >

                    <BgImageHome src="/images/VendorPage - Copy.jpg" />

                </AnimatedImages>

                <Title1>VENDORS</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>More than hundreds of vendors have connected with us to provide wide range of services for weddings</P1>
                {/* <SearchBar>
                    <input></input>
                    <a href="/Vendors/Search/Results">
                        <SearchIcon></SearchIcon>
                    </a>
                </SearchBar> */}
                {/* <P2>Search vendors here</P2> */}
                <BgColoredSection1></BgColoredSection1>

                <SectionVendors>
                    <BgImageVendors>
                        <img src="/images/BgVendorImageVendors.jpg" />
                    </BgImageVendors>
                    <BgSectionWhite></BgSectionWhite>
                    <TitleVendors>FIND VENDORS IN SERVICES</TitleVendors>
                    <TitleVendorsUnderLine></TitleVendorsUnderLine>
                    <TitleVendorsP>Find your preferred vendors through these services.....</TitleVendorsP>
                    <ColumSectionVendorsContainer>
                        <ColumSectionVendors1>
                            <a href="/">
                                <ServiceName>Wedding Venues</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Dresses </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Photographers</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Officiants</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Planners</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Bridal Dressing</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Grooms Outfit </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Poruwa Ceremonies</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Caterers</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Florists</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Suvenirs  </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Lightings</ServiceName>
                            </a>
                        </ColumSectionVendors1>
                        <ColumSectionVendors2>
                            <a href="/">
                                <ServiceName>Wedding Decorations</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Beauticians</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Cultural Requirements </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Cakes and Boxes </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Invitations</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Dress Design</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Hair and Makeup</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Shoes</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Videographers</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Rentals</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Limos</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Travel Agents</ServiceName>
                            </a>
                        </ColumSectionVendors2>
                        <ColumSectionVendors3>
                            <a href="/">
                                <ServiceName>Wedding Stationaries</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Bouquets</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Entertainment</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Jewelers</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Transports</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Ashtaka Service</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Honeymoon Planning</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Dancing Groups</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Musicians</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Djs </ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Wedding Bands</ServiceName>
                            </a>
                            <a href="/">
                                <ServiceName>Pre Shoot Locations</ServiceName>
                            </a>
                        </ColumSectionVendors3>
                    </ColumSectionVendorsContainer>
                </SectionVendors>

                <BgSectionPopularVendors></BgSectionPopularVendors>
                <TitlePopularVendors>MOST POPULAR VENDORS</TitlePopularVendors>
                <TitlePopularVendorsUnderLine></TitlePopularVendorsUnderLine>

                <PopularVendorContainer>
                    <CardColum>
                        <VendorsCards
                            id="1238"
                            name="Sankalana Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/SankalanaFlora.jpg"
                        />
                        <VendorsCards
                            id="1237"
                            name="Hilton Colombo"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/HiltonColombo.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1236"
                            name="Cinnamon Grands"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/CinnamonGrands.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Kandian Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={3}
                            image="./images/KandianFlora.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1234"
                            name="Ama Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AMaFlora.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Asvinda Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AsvindaFlora.jpg"
                        />
                    </CardColum>
                    <CardVendorEnd></CardVendorEnd>
                </PopularVendorContainer>

                <BgSectionBestVendors></BgSectionBestVendors>
                <TitleBestVendors>BEST RATED VENDORS</TitleBestVendors>
                <TitleBestVendorsUnderLine></TitleBestVendorsUnderLine>

                <BestVendorContainer>
                    <CardColum>
                        <VendorsCards
                            id="1238"
                            name="Sankalana Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/SankalanaFlora.jpg"
                        />
                        <VendorsCards
                            id="1237"
                            name="Hilton Colombo"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/HiltonColombo.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1236"
                            name="Cinnamon Grands"
                            serviceType="Wedding Venues"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={5}
                            image="./images/CinnamonGrands.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Kandian Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={3}
                            image="./images/KandianFlora.jpg"
                        />
                    </CardColum>
                    <CardColum>
                        <VendorsCards
                            id="1234"
                            name="Ama Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AMaFlora.jpg"
                        />
                        <VendorsCards
                            id="1235"
                            name="Asvinda Flora"
                            serviceType="Wedding Decorations"
                            description="We are professional wedding decorators since 2005 in Panadura area. We understand that your wedding is the most important day in your life that everything must be arranged perfectly."
                            rating={4}
                            image="./images/AsvindaFlora.jpg"
                        />
                    </CardColum>
                    <CardVendorEnd></CardVendorEnd>
                </BestVendorContainer>

            </Content>
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
    width: 14%;
    margin-left: 130px;
`;

const P1 = styled.div`
    margin-top: 10px;
    width: 600px;
    margin-left: 130px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;



const SearchBar = styled.div`
    z-index: 3;
    display: flex;
    align-items: center;
    margin-top: 40px;
    input {
        min-width: 40%;
        min-height: 60px;
        opacity: 80%;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 800;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #013C08;
        margin-left: 450px;
    }
    a {
        color: #013C08;
        margin-left: -40px;
        z-index: 4;
    }
`;



const P2 = styled.div`
    margin-top: 20px;
    width: 150px;
    color: #FFF;
    font-size: 13px;
    font-weight: 700;
    z-index: 1;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`;


const BgColoredSection1 = styled.div`
    margin-top: -260px;
    opacity: 80%;
    z-index: 0;
    position: relative;
    background-color: #013C08;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const SectionVendors = styled.div`
    z-index: 1;
    margin-top: 20px;
    margin-top: -200px;
`;

const UnderLine5 = styled.div`
    margin-top: 0px;
    background-color: #0A1C1B;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const BgImageVendors = styled.div`
    margin-top: 60px;
    img {
    width: 100%;
    max-height: 1200px;
    z-index: -10;
    }
`;

const BgSectionWhite = styled.div`
    z-index: 0;
    margin-top: -1000px;
    background-color: #FFF;
    opacity: 80%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendors = styled.div`
    color: #113605;
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

const TitleVendorsUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #113605;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendorsP = styled.div`
    color: #113605;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: 50px;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 3px;
    position: relative;
`;

const ColumSectionVendorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 100px;
    z-index: 1;
    letter-spacing: 2px;
`;

const ColumSectionVendors1 = styled.div`
    a {
        color: #1C0819;
    }
`;

const ColumSectionVendors2 = styled.div`
    a {
        color: #113605;
    }
`;

const ColumSectionVendors3 = styled.div`
    a {
        color: #FFF;
    }
`;

const ServiceName = styled.div`
    z-index: 1;
    padding: 22px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 3px;
`;

const BgSectionPopularVendors = styled.div`
    z-index: 0;
    margin-top: 30px;
    background-color: #FFF;
    opacity: 80%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitlePopularVendors = styled.div`
    color: #113605;
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

const TitlePopularVendorsUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #113605;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;



const PopularVendorContainer = styled.div`
    display: flex;
    margin-left: 50px;
    margin-right: 30px;
    margin-top: 20px;
    z-index: 1;
    background-color: #666D6D;
`;

const CardColum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
`;

const CardVendorEnd = styled.div`

`;

const BgSectionBestVendors = styled.div`
    z-index: 0;
    margin-top: 0px;
    background-color: #FFF;
    opacity: 80%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleBestVendors = styled.div`
    color: #113605;
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

const TitleBestVendorsUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #113605;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;



const BestVendorContainer = styled.div`
    display: flex;
    margin-left: 50px;
    margin-right: 30px;
    margin-top: 20px;
    z-index: 1;
    background-color: #8F888B;
`;


export default Vendors;