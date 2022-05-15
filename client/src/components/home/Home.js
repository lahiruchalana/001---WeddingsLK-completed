import styled from "styled-components";
import React, { useState, useEffect } from 'react';

import StoreIcon from '@material-ui/icons/Store';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import WebIcon from '@material-ui/icons/Web';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import AnimatedBg from "react-animated-bg";
import AnimatedImages from "react-animated-bg";

import Aos from "aos";
import 'aos/dist/aos.css';

// hover sets
import "../css/hover-min.css";
import Header from "../header/Header";
import Headers from "../headers/Headers";
import Footer from "../footer/Footer";

const Home = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);


    const imagesList = [
        // 'url("https://static.independent.co.uk/2021/05/22/13/newFile-1.jpg?width=990&auto=webp&quality=75")',
        'url("https://images.pexels.com/photos/3217513/pexels-photo-3217513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        'url("https://images.pexels.com/photos/2403569/pexels-photo-2403569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        'url("https://images.pexels.com/photos/2496344/pexels-photo-2496344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        'url("https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        'url("https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        // 'url("https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        'url("https://images.pexels.com/photos/1589820/pexels-photo-1589820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")'
    ];


    return (
        <Container>
            <Header/>
            <Content>
                {/* Strat of background image for home */}
                <AnimatedImages
                    colors={imagesList}
                    duration={3}
                    delay={2}
                    timingFunction="ease-out"
                >
                    {/* <div className="App">
                    <h1>Animated images</h1>
                    <h3>- duration: 2s</h3>
                    <h3>- delay: 1s</h3>
                    <h3>- transition type: ease-out</h3>
                </div> */}
                    <BgImageHome src="/images/BgImageHome.jpg" />

                </AnimatedImages>

                <BtnHostYourWedding data-aos="fade" >
                    <a href="/login" class='button hvr-grow-shadow' >
                        <BtnHostYourWeddingText>HOST YOUR WEDDING</BtnHostYourWeddingText>
                    </a>
                </BtnHostYourWedding>
                <TextTop1 data-aos="fade">comfortably plan the most valuable day of your life with us.</TextTop1>
                <TextTop2 data-aos="fade">I appreciate you getting this to me so comfortably so I have time to spend fill of joyness my wedding. 'Kasun'</TextTop2>
                <BgColoredSection1></BgColoredSection1>

                {/* End of background image for home */}
                {/* Done */}

                <br />
                <BgColoredSection2 data-aos="fade-up"></BgColoredSection2>
                <Title1 data-aos="fade-down">How You Can Plan Your Wedding, Learn It Step By Step</Title1>
                <TitleUnderLine></TitleUnderLine>
                <BgImageSteps data-aos="fade-down" src="/images/BgImageSteps.jpg" />
                <BtnSteps >
                    <a href="/" >
                        <BtnStepsNo1 data-aos="fade" >Sign Up and Log In</BtnStepsNo1>
                    </a>
                    <ImgArrowNo1>
                        <img class='button hvr-grow-shadow' src="/images/ImgArrow.ico" />
                    </ImgArrowNo1>
                    <a href="/">
                        <BtnStepsNo2 data-aos="fade">Check Out Our Services, Vendors and Our Wedding Plans</BtnStepsNo2>
                    </a>
                    <ImgArrowNo2>
                        <img class='button hvr-grow-shadow' src="/images/ImgArrow.ico" />
                    </ImgArrowNo2>
                    <a href="/">
                        <BtnStepsNo3 data-aos="fade">Meet Your Wedding Oraganizer</BtnStepsNo3>
                    </a>
                    <ImgArrowNo3>
                        <img class='button hvr-grow-shadow' src="/images/ImgArrow.ico" />
                    </ImgArrowNo3>
                    <a href="/">
                        <BtnStepsNo4 data-aos="fade">Confirm and Buy Your Services and Vendors</BtnStepsNo4>
                    </a>
                    <ImgArrowNo4>
                        <img class='button hvr-grow-shadow' src="/images/ImgArrow.ico" />
                    </ImgArrowNo4>
                    <a href="/">
                        <BtnStepsNo5 data-aos="fade">Manage Your Services and Vendors</BtnStepsNo5>
                    </a>
                    <ImgArrowNo5>
                        <img class='button hvr-grow-shadow' src="/images/ImgArrow.ico" />
                    </ImgArrowNo5>
                    <a href="/">
                        <BtnStepsNo6 data-aos="fade">View The Progress of The Wedding</BtnStepsNo6>
                    </a>
                </BtnSteps>
                <BgColoredSection3></BgColoredSection3>
                <br />

                {/* End of background image for home */}
                {/* Done */}

                <UnderLine1></UnderLine1>
                <BtnBarUp data-aos="fade-down">
                    <a href="/">
                        <BtnBarUpBtns href="/">
                            <StoreIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Find Wedding Vendors</span>
                        </BtnBarUpBtns>
                    </a>
                    <a href="/">
                        <BtnBarUpBtns href="/">
                            <FormatListNumberedIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Manage Your Services List</span>
                        </BtnBarUpBtns>
                    </a>
                    <a href="/">
                        <BtnBarUpBtns href="/">
                            <SupervisorAccountIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Meet Your Event Organizers</span>
                        </BtnBarUpBtns>
                    </a>
                    <a href="/">
                        <BtnBarUpBtns href="/">
                            <PlaylistAddCheckIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Your Wedding Progress</span>
                        </BtnBarUpBtns>
                    </a>
                    <a href="/">
                        <BtnBarUpBtns href="/">
                            <WebIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Create Web Site for Your Wedding</span>
                        </BtnBarUpBtns>
                    </a>
                </BtnBarUp>
                <BtnBarDown data-aos="fade-down">
                    <a href="/communityfeedbacks">
                        <BtnBarDownBtns>
                            <FeedbackIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Community Feed Backs</span>
                        </BtnBarDownBtns>
                    </a>
                    <a href="/">
                        <BtnBarDownBtns>
                            <AddShoppingCartIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Add New Services</span>
                        </BtnBarDownBtns>
                    </a>
                    <a href="/">
                        <BtnBarDownBtns>
                            <AttachMoneyIcon data-aos="fade-up" fontSize="large" />
                            <span class='button hvr-grow-shadow'>Your Wedding Budget Planning</span>
                        </BtnBarDownBtns>
                    </a>
                </BtnBarDown>
                <UnderLine2></UnderLine2>

                {/* End of background image for home */}
                {/* Done */}

                <BtnHostYourWedding1 data-aos="fade-down">
                    <a href="/user/profile" class='button hvr-grow-shadow'>
                        <BtnHostYourWeddingText data-aos="fade-down" >HOST YOUR WEDDING</BtnHostYourWeddingText>
                    </a>
                </BtnHostYourWedding1>
                <UnderLine3></UnderLine3>
                <BgColoredSection4></BgColoredSection4>

                {/* End of background image for home */}
                {/* Done */}

                <Title data-aos="fade-down" >WEDDING PLANNING</Title>
                <TitleUnderLine></TitleUnderLine>
                <Nav>
                    <NavSection data-aos="fade-right">
                        <a href="/">
                            <NavSectionText>Wedding Plans(Fixed)</NavSectionText>
                        </a>
                        <a href="/">
                            <NavSectionText>Wedding Plans(Flexible)</NavSectionText>
                        </a>
                    </NavSection>
                    <NavSection data-aos="fade-down">
                        <a href="/">
                            <NavSectionText>Plan Platinum</NavSectionText>
                        </a>
                        <a href="/">
                            <NavSectionText>Plan Gold</NavSectionText>
                        </a>
                        <a href="/">
                            <NavSectionText>Plan Silver</NavSectionText>
                        </a>
                    </NavSection >
                    <NavSection data-aos="fade-left">
                        <a href="/">
                            <NavSectionText>Vendor Bunches(Group of Vendors)</NavSectionText>
                        </a>
                        <a href="/">
                            <NavSectionText>Customized Plans</NavSectionText>
                        </a>
                    </NavSection>
                </Nav>
                <UnderLine4></UnderLine4>

                {/* End of background image for home */}
                {/* Done */}
                <br></br>
                <br></br>

                <Title data-aos="fade-down">WEDDING IDEAS AND TIPS</Title>
                <TitleUnderLine></TitleUnderLine>
                <BgOurIdeasTips data-aos="fade-right"></BgOurIdeasTips>
                <SectionOurIdeasTips>
                    <BgImageIdeasTipsNo1>
                        <img data-aos="fade-right" src="/images/BgImageIdeasTipsNo1.jpg" />
                    </BgImageIdeasTipsNo1>
                    <a href="/" class='button hvr-grow-shadow'>
                        <BtnSectionOurIdeasTips data-aos="fade-right">Our New Wedding Ideas and Tips</BtnSectionOurIdeasTips>
                        <p data-aos="fade-right">Let's make your precious day more attractive and beautiful with new ideas and tips</p>
                    </a>
                </SectionOurIdeasTips>
                <br></br>
                <br></br>
                <BgPopularIdeasTips data-aos="fade-left"></BgPopularIdeasTips>
                <SectionPopularIdeasTips>
                    <a href="/" class='button hvr-grow-shadow'>
                        <BtnSectionPopularIdeasTips data-aos="fade-left">Popular Wedding Ideas and Tips</BtnSectionPopularIdeasTips>
                        <p data-aos="fade-left">Let's make your precious day more attractive and beautiful with our most popular ideas and tips</p>
                    </a>
                    <BgImageIdeasTipsNo2>
                        <img data-aos="fade-left" src="/images/BgImageIdeasTipsNo2.jpg" />
                    </BgImageIdeasTipsNo2>
                </SectionPopularIdeasTips>
                <br></br>
                <br></br>
                <UnderLine5></UnderLine5>

                {/* End of background image for home */}
                <br></br>
                <br></br>


                <SectionVendors>
                    <BgImageVendors data-aos="fade-down">
                        <img data-aos="fade-down" src="/images/BgImageVendors.jpg" />
                    </BgImageVendors>
                    <BgSectionWhite></BgSectionWhite>
                    <TitleVendors data-aos="fade-down">WEDDING VENDORS</TitleVendors>
                    <TitleVendorsUnderLine></TitleVendorsUnderLine>
                    <TitleVendorsP data-aos="fade-down">Find your preferred vendors through these services.....</TitleVendorsP>
                    <ColumSectionVendorsContainer >
                        <ColumSectionVendors data-aos="fade-right">
                            <a href="/weddingvenue" >
                                <ServiceName>Wedding Venues</ServiceName>
                            </a>
                            <a href="/weddingdresses" >
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
                        </ColumSectionVendors>
                        <ColumSectionVendors data-aos="fade-up">
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
                        </ColumSectionVendors>
                        <ColumSectionVendors data-aos="fade-left">
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
                        </ColumSectionVendors>
                    </ColumSectionVendorsContainer>
                </SectionVendors>

                {/* End of background image for home */}

                <BgCreateYourWebsite data-aos="fade-down"></BgCreateYourWebsite>
                <TitleCreateYourWebsite data-aos="fade-down">CREATE YOUR WEBSITE</TitleCreateYourWebsite>
                <TitleUnderLineCreateYourWebsite></TitleUnderLineCreateYourWebsite>
                <SectionWebsiteContainer>
                    <SectionPopularWebsite>
                        <a href="/" class='button hvr-grow-shadow'>
                            <BtnSectionPopularWebsite data-aos="fade-up">Popular Wedding Websites</BtnSectionPopularWebsite>
                            <p data-aos="fade-up">50+ popular wedding websites templates designed to include your wedding day info and give guests everything they need.</p>
                        </a>
                        <img data-aos="fade-down" src="./images/Wedding-Website1.JPG" />
                    </SectionPopularWebsite>
                    <SectionBestWebsite>
                        <img data-aos="fade-up" src="./images/Wedding-Website2.JPG" />
                        <a href="/" class='button hvr-grow-shadow'>
                            <BtnSectionBestWebsite data-aos="fade-down">Best Wedding Websites</BtnSectionBestWebsite>
                            <p data-aos="fade-down">30+ best wedding website templates designed to include your wedding day info and give guests everything they need.</p>
                        </a>
                    </SectionBestWebsite>
                    <SectionCustomWebsite>
                        <a href="/" class='button hvr-grow-shadow'>
                            <BtnSectionCustomWebsite data-aos="fade-up" >Custom Wedding Website</BtnSectionCustomWebsite>
                            <p data-aos="fade-up" >Design your wedding website to include your wedding day info and give guests everything they need. you can customize any features as you want.</p>
                        </a>
                        <img data-aos="fade-down" src="./images/Wedding-Website3.JPG" />
                    </SectionCustomWebsite>
                </SectionWebsiteContainer>
                <UnderLineCreateYourWebsite data-aos="fade-down"></UnderLineCreateYourWebsite>

                {/* End of background image for home */}

                <BgGallery ></BgGallery>
                <TitleGallery data-aos="fade-down">GALLERY</TitleGallery>
                <TitleUnderLineGallery data-aos="fade-up"></TitleUnderLineGallery>
                <SectionExploreGallery>
                    <img data-aos="fade-down" src="../images/HomeGallery2.jpg" />
                    <a href="/" class='button hvr-grow-shadow'>
                        <BtnSectionExploreGallery data-aos="fade-up">Explore Wedding Photo Gallery</BtnSectionExploreGallery>
                        {/* <p>Design your wedding website to include your wedding day info and give guests everything they need. you can customize any features as you want.</p> */}
                    </a>
                </SectionExploreGallery>
                <SectionGalleryImages>
                    <BgImageGallery1>
                        <img data-aos="fade-down" src="../images/HomeGallery1.jpg" />
                    </BgImageGallery1>
                    <BgImageGallery2>
                        <img data-aos="fade-up" src="../images/HomeGallery7.jpg" />
                    </BgImageGallery2>
                    <BgImageGallery3>
                        <img data-aos="fade-down" src="../images/HomeGallery3.jpg" />
                    </BgImageGallery3>
                    <BgImageGallery4>
                        <img data-aos="fade-up" src="../images/HomeGallery4.jpg" />
                    </BgImageGallery4>
                    <BgImageGallery5>
                        <img data-aos="fade-down" src="../images/HomeGallery6.jpg" />
                    </BgImageGallery5>
                </SectionGalleryImages>
                <SectionYourGallery>
                    <a href="/" class='button hvr-grow-shadow'>
                        <BtnSectionYourGallery data-aos="fade-right">Your Wedding Photo Gallery</BtnSectionYourGallery>
                        {/* <p>Design your wedding website to include your wedding day info and give guests everything they need. you can customize any features as you want.</p> */}
                    </a>
                    <img data-aos="fade-up" src="../images/HomeGallery5.jpg" />
                </SectionYourGallery>
                <UnderLineGallery data-aos="fade-down"></UnderLineGallery>

                {/* End of background image for home */}

                <CommunityFeedBacksText data-aos="fade-down">Lets Look at the Community Feed Backs for Services and Vendors</CommunityFeedBacksText>
                <a href="/communityfeedbacks" >
                    <BtnCommunityFeedBacks data-aos="fade-down">Community Feed Backs</BtnCommunityFeedBacks>
                </a>

                <TitleRegisterVendor data-aos="fade-up">Now Available You to Register As a Vendor</TitleRegisterVendor>
                <a href="/">
                    <BtnVendorSignUp data-aos="fade-up">Vendor Sign Up</BtnVendorSignUp>
                </a>
            </Content>
            <Footer/>
        </Container >
    );
}

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
    z-index: -5;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 2), rgba(0, 0, 0, 2)); */

`;

const BtnHostYourWedding = styled.div`
    background-color: #0E2023;
    margin-left: 0px;
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
    margin-top: -350px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnHostYourWeddingText = styled.div`

`;

const TextTop1 = styled.div`
    margin-top: 5px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    color: #FFF;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    z-index: 1;
    position: relative;
`;

const TextTop2 = styled.div`
    margin-top: 40px;
    margin-right: 30px;
    width: 500px;
    margin-left: auto;
    color: #FFF;
    font-size: 12px;
    text-align: right;
    font-weight: 600;
    z-index: 1;
    position: relative;
`;

const BgColoredSection1 = styled.div`
    margin-top: -200px;
    opacity: 80%;
    z-index: 0;
    position: relative;
    background-color: #3E0B2D;
    height: 300px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Title1 = styled.div`
    margin-top: 140px;
    color: #360B2C;
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;

`;

const TitleUnderLine = styled.div`
    margin-top: 15px;
    background-color: #360B2C;
    margin-left: 0px;
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 20px;
    background-color: #360B2C;  
    padding: 5px 30px;
    z-index: 1;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;


const BgColoredSection2 = styled.div`
    opacity: 100%;
    z-index: -5;
    margin-bottom: -170px;
    position: relative;
    background-color: #FFFFFF;
    height: 150px;
    width: 100%;
`;

const BgImageSteps = styled.img`
    margin-top: 35px;
    height: 950px;
    width: 100%;
    position: relative;
    z-index: -100;
`;

const BtnSteps = styled.div`
    margin-left: 0px;
    text-align: center;
    font-family: 'Gabriela', serif;
    font-size: 25px; 
    font-weight: 900;
    padding: 10px 30px;
    z-index: 1;
    margin-top: -910px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    a {
        font-weight: 800;
        color: white;
        background-color: white;
        opacity: 80%;
        word-spacing: 10px;
        letter-spacing: 10px;
        border-radius: 20px;
        z-index: 1;
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
`;

const BgColoredSection3 = styled.div`
    opacity: 40%;
    z-index: -5;
    margin-top: -880px;
    position: relative;
    background-color: #123338;
    height: 955px;
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
`;

const BtnStepsNo1 = styled.div`
    
`;

const ImgArrowNo1 = styled.div`

`;

const BtnStepsNo2 = styled.div`
   
`;

const ImgArrowNo2 = styled.div`
    
`;

const BtnStepsNo3 = styled.div`
    
`;

const ImgArrowNo3 = styled.div`
    
`;

const BtnStepsNo4 = styled.div`
    
`;

const ImgArrowNo4 = styled.div`
    
`;

const BtnStepsNo5 = styled.div`
    
`;

const ImgArrowNo5 = styled.div`
    
`;

const BtnStepsNo6 = styled.div`
    
`;

const UnderLine1 = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    opacity: 100%;
    border-radius: 20px;
    background-color: #2D0626;  
    padding: 5px 30px;
    z-index: 10;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
`;

const BtnBarUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 90%;
    margin-left: auto;
    margin-right: auto;  
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const BtnBarDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;

const BtnBarUpBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: #601111;
    font-weight: 800;
    font-size: 15px;
    span {
        margin-top: 15px;
        font-size: 18px;
        font-weight: 900;
    }
`;

const BtnBarDownBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: #601111;
    font-weight: 800;
    font-size: 15px;
    span {
        margin-top: 15px;
        font-size: 18px;
        font-weight: 900;
    }
`;

const UnderLine2 = styled.div`
    margin-top: 50px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 10;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
`;

const BtnHostYourWedding1 = styled.div`
    background-color: #103A45;
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 20px;
    padding: 15px 30px;
    z-index: 1;
    margin-top: 30px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const UnderLine3 = styled.div`
    margin-top: 30px;
    background-color: #071218;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 10;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
`;

const BgColoredSection4 = styled.div`
    opacity: 100%;
    z-index: -5;
    margin-top: -155px;
    position: relative;
    background-color: #071218;
    height: 170px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Title = styled.div`
    margin-top: 50px;
    color: #360B2C;
    width: 50%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Gabriela', serif;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
    z-index: 1;

`;


const Nav = styled.div`
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
`;

const NavSection = styled.div`
    text-align: center;
`;


const NavSectionText = styled.div`
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: #0D2D41;
    font-weight: 800;
    font-size: 20px;
`;

const UnderLine4 = styled.div`
    margin-top: 30px;
    background-color: #360B2C;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    z-index: 10;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
`;

// const UnderLine = styled.div`
//     margin-top: 35px;
//     background-color: #360B2C;
//     margin-left: 0px;
//     opacity: 80%;
//     text-align: center;
//     font-family: 'Gabriela', serif;
//     color: #FFF;
//     font-size: 25px; 
//     font-weight: 900;
//     word-spacing: 10px;
//     letter-spacing: 10px;
//     border-radius: 20px;
//     background-color: #360B2C;  
//     padding: 5px 30px;
//     z-index: 10;
//     width: 1000px;
//     margin-left: auto;
//     margin-right: auto;
// `;

const BgOurIdeasTips = styled.div`
    margin-top: 40px;
    margin-right: 0px;
    margin-left: 115px;
    margin-bottom: -500px;
    width: 1400px;
    background-color: #2D060F;  
    height: 500px;
    z-index: -5;
`;

const BgImageIdeasTipsNo1 = styled.div`
     img{
        max-height: 800px;
        max-width: 750px;
        border-radius: 2px;
        margin-right: 100px;
    }
`;

const SectionOurIdeasTips = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1400px;
    z-index: 0;
    position: relative;
    margin-left: 100px;
    a{
        text-decoration: none;
        color: #FFF;
        font-size: 15px;
        z-index: 0;
        position: relative;
        margin-right: 150px;
        p{
            margin-right: 20px;
            margin-top: 20px;
            text-align: center;
            z-index: 0;
            position: relative;
        }
    }
`;

const BtnSectionOurIdeasTips = styled.div`
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    border-radius: 2px;
    background-color: #9C085F;  
    padding: 10px 20px;
    z-index: 5;
`;

const BgPopularIdeasTips = styled.div`
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: -500px;
    width: 1400px;
    background-color: #0E2114;  
    height: 500px;
    z-index: -5;
`;

const SectionPopularIdeasTips = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1400px;
    z-index: 0;
    position: relative;
    margin-right: 100px;
    a{
        text-decoration: none;
        color: #FFF;
        z-index: 0;
        position: relative;
        margin-left: 100px;
        p{
            margin-left: 20px;
            margin-top: 20px;
            text-align: center;
            position: relative;
            z-index: 0;
        }
    }
`;


const BgImageIdeasTipsNo2 = styled.div`
    img{
        max-height: 800px;
        max-width: 750px;
        border-radius: 2px;
        margin-left: 100px;
    }
`;

const BtnSectionPopularIdeasTips = styled.div`
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    border-radius: 2px;
    background-color: #9BBA16;  
    padding: 10px 20px;
    z-index: 1;

`;

const SectionVendors = styled.div`
    z-index: 1;
    margin-top: 20px;
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
    color: #1B5852;
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
    width: 500px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #1B5852;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendorsP = styled.div`
    color: #FFF;
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

const ColumSectionVendors = styled.div`

`;

const ServiceName = styled.div`
    z-index: 1;
    padding: 22px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 3px;

`;

const BgCreateYourWebsite = styled.div`
    margin-top: 0px;
    z-index: -11;
    background-color: #211D1D;
    opacity: 80%;
    height: 1400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleCreateYourWebsite = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1350px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleUnderLineCreateYourWebsite = styled.div`
    margin-top: 20px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const SectionWebsiteContainer = styled.div`
  
`;

const SectionPopularWebsite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 350px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 60px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;


const BtnSectionPopularWebsite = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const SectionBestWebsite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 250px;
    margin-left: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-left: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;


const BtnSectionBestWebsite = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 100%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    margin-left: 100px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;


const SectionCustomWebsite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 90%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
        }
    }
    img {
        height: 400px;
        width: auto;
    }
`;

const BtnSectionCustomWebsite = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const UnderLineCreateYourWebsite = styled.div`
    margin-top: 100px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const BgGallery = styled.div`
    margin-top: 30px;
    z-index: -11;
    background-color: #432B1B;
    opacity: 100%;
    height: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto
`;


const TitleGallery = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1170px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleUnderLineGallery = styled.div`
    margin-top: 20px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const SectionExploreGallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin-top: 150px;
    margin-left: 0px;
    height: 250px;
    img {
            z-index: 2;
            max-width: 600px;
            max-height: 550px;
    }
`;


const BtnSectionExploreGallery = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #181707;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 100px;
    margin-left: 200px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const SectionGalleryImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-top: 30px;
    height: 250px;
`;

const BgImageGallery1 = styled.div`
    margin-left: 0px;
    img {
            max-width: 400px;
            max-height: 350px;
        }
`;


const BgImageGallery2 = styled.div`
    margin-left: -100px;
    img {
            max-width: 400px;
            max-height: 350px;
        }
`;


const BgImageGallery3 = styled.div`
    margin-left: -150px;
    img {
            max-width: 400px;
            max-height: 350px;
        }
`;


const BgImageGallery4 = styled.div`
margin-left: -100px;
    img {
            max-width: 400px;
            max-height: 350px;
        }
`;

const BgImageGallery5 = styled.div`
margin-left: -150px;
    img {
            max-width: 400px;
            max-height: 350px;
        }
`;

const SectionYourGallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin-top: 30px;
    margin-right: 0px;
    height: 250px;
    img {
            max-width: 600px;
            max-height: 550px;
    }
`;

const BtnSectionYourGallery = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    background-color: #1C0819;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-right: 200px;
    margin-top: 80px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const UnderLineGallery = styled.div`
    margin-top: 180px;
    background-color: #1B4341;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;

const CommunityFeedBacksText = styled.div`
    color: #1E413F;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: 20px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative; 
`;

const BtnCommunityFeedBacks = styled.div`
    margin-top: 20px;
    background-color: #0D2C32;
    opacity: 100%;
    padding: 50px 30px;
    width: 100%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
`;


const TitleRegisterVendor = styled.div`
    color: #1E413F;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: 20px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative; 
`;

const BtnVendorSignUp = styled.div`
    margin-top: 20px;
    background-color: #101A1A;
    opacity: 100%;
    padding: 50px 30px;
    width: 50%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
`;



export default Home;

