import styled from "styled-components";

import AnimatedBg from "react-animated-bg";
import AnimatedImages from "react-animated-bg";
import React, { useState, useEffect, useContext } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
// hover sets
import "../css/hover-min.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import {GlobalState} from '../../GlobalState'
import WeddingPlanItem from '../utils/weddingPlanItem/WeddingPlanItem'
import Loading from '../mainpages/utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'




const WeddingPlans = () => {


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


    const state = useContext(GlobalState)
    const [weddingPlans, setWeddingPlans] = state.weddingPlansAPI.weddingPlans
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.weddingPlansAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        weddingPlans.forEach(weddingPlan => {
            if(weddingPlan._id === id) weddingPlan.checked = !weddingPlan.checked
        })
        setWeddingPlans([...weddingPlans])
    }

    const deleteWeddingPlan = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteWeddingPlan = axios.delete(`/api/wedding_plans/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteWeddingPlan
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        weddingPlans.forEach(weddingPlan => {
            weddingPlan.checked = !isCheck
        })
        setWeddingPlans([...weddingPlans])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        weddingPlans.forEach(weddingPlan => {
            if(weddingPlan.checked) deleteWeddingPlan(weddingPlan._id, weddingPlan.images_1.public_id)
        })
    }

    if(loading) return <div><Loading /></div>


    return (
        <Container>
            <Header/>
            <Content>
                {/* ////////////////////////// Start of common page top section //////////////////// */}

                <ContentWeddingPlan>

                    <br></br>
                    <br></br>
                    <br></br>
                    <Filters />
                    
                    {
                        isAdmin && 
                        <div className="delete-all">
                            <span>Select all</span>
                            <input type="checkbox" checked={isCheck} onChange={checkAll} />
                            <button onClick={deleteAll}>Delete ALL</button>
                        </div>
                    }

                    <Products>
                        {
                            weddingPlans.map(weddingPlan => {
                                return <WeddingPlanItem key={weddingPlan._id} weddingPlan={weddingPlan}
                                isAdmin={isAdmin} deleteWeddingPlan={deleteWeddingPlan} handleCheck={handleCheck} />
                            })
                        } 
                    </Products>

                    <LoadMore />
                    {weddingPlans.length === 0 && <Loading />}


                </ContentWeddingPlan>
        
                
                <AnimatedImages
                    colors={imagesList}
                    duration={2}
                    delay={1}
                    timingFunction="ease-out"
                >

                    <BgImageHome src="/images/WeddingPlans - Copy.jpg" />

                </AnimatedImages>

                <Title1>WEDDING PLANS</Title1>
                <TitleUnderline1></TitleUnderline1>
                <P1>We provide 3 type of wedding plans and customized wedding plans for your precious wedding</P1>
                <Title2>VENDOR BUNCHES</Title2>
                <TitleUnderline2></TitleUnderline2>
                <P2>We provide you set of vendors contained, vendor bunches for your beautiful wedding</P2>
                <Btns>
                    <BtnVWeddingPlans>
                        <a href="/user/profile">
                            <BtnWeddingPlansText>Wedding Plans</BtnWeddingPlansText>
                        </a>
                    </BtnVWeddingPlans>
                    <BtnVendorBunches>
                        <a href="/user/profile">
                            <BtnVendorBunchesText>Vendor Bunches</BtnVendorBunchesText>
                        </a>
                    </BtnVendorBunches>
                    <BtnCustomizedPlans>
                        <a href="/user/profile">
                            <BtnCustomizedPlansText>Customized Plans</BtnCustomizedPlansText>
                        </a>
                    </BtnCustomizedPlans>
                </Btns>
                <BgColoredSection1></BgColoredSection1>



                <BgWeddingPlans></BgWeddingPlans>
                <TitleWeddingPlans>WEDDING PLANS</TitleWeddingPlans>
                <TitleUnderLineWeddingPlans></TitleUnderLineWeddingPlans>
                <SectionWeddingPlansContainer>
                    <SectionPlatinumWeddingPlan>
                        <a href="/">
                            <BtnSectionPlatinumWeddingPlan>Platinum Wedding Plan</BtnSectionPlatinumWeddingPlan>
                            <p>We provide to you Best Rated and Most Popular Vendor Brands for Platinum Wedding Plan. Customize your wedding with this precious plan</p>
                        </a>
                        <img src="./images/WeddingPlans1.jpg" />
                    </SectionPlatinumWeddingPlan>
                    <SectionGoldWeddingPlan>
                        <img src="./images/WeddingPlans2.jpg" />
                        <a href="/">
                            <BtnSectionGoldWeddingPlan>Gold Wedding Plan</BtnSectionGoldWeddingPlan>
                            <p>We provide to you Best and Popular Vendor Brands for Gold Wedding Plan with flexible cost which you could spend. Customize your wedding with this precious plan.</p>
                        </a>
                    </SectionGoldWeddingPlan>
                    <SectionSilverWeddingPlan>
                        <a href="/">
                            <BtnSectionSilverWeddingPlan>Silver Wedding Plan</BtnSectionSilverWeddingPlan>
                            <p>We provide to you Best Vendors for Silver Wedding Plan with high flexible cost which you could spend. Customize your wedding with this beautiful plan..</p>
                        </a>
                        <img src="./images/WeddingPlans3.jpg" />
                    </SectionSilverWeddingPlan>
                </SectionWeddingPlansContainer>
                <UnderLineWeddingPlans></UnderLineWeddingPlans>


                {/* <BgSectionWeddingPlans></BgSectionWeddingPlans>
                <TitleWeddingPlans>WEDDING PLANS</TitleWeddingPlans>
                <TitleWeddingPlansUnderLine></TitleWeddingPlansUnderLine> */}


                <BgVendorBunches></BgVendorBunches>
                <TitleVendorBunches>VENDOR BUNCHES</TitleVendorBunches>
                <TitleUnderLineVendorBunches></TitleUnderLineVendorBunches>
                <BgVendorBunchA>
                    <a href="/">
                        <BtnSectionVendorBunchA>VENDOR BUNCH-A</BtnSectionVendorBunchA>
                        <p>Cinnamon Grands</p>
                        <p>Lassana Flora</p>
                        <p>Wills Design</p>
                        <p>Geeshan Bandara Photography</p>
                        <p>Salon Nayana</p>
                    </a>
                    <img src="./images/WeddingPlans4.JPG" />
                    <img src="./images/WeddingPlans5.JPG" />
                    <img src="./images/WeddingPlans6.JPG" />
                </BgVendorBunchA>
                <BgVendorBunchB>
                    <a href="/">
                        <BtnSectionVendorBunchB>VENDOR BUNCH-B</BtnSectionVendorBunchB>
                        <p>Cinnamon Grands</p>
                        <p>Lassana Flora</p>
                        <p>Wills Design</p>
                        <p>Geeshan Bandara Photography</p>
                        <p>Salon Nayana</p>
                    </a>
                    <img src="./images/WeddingPlans1.JPG" />
                    <img src="./images/WeddingPlans2.JPG" />
                    <img src="./images/WeddingPlans5.JPG" />
                </BgVendorBunchB>
                <BgVendorBunchC>
                    <a href="/">
                        <BtnSectionVendorBunchC>VENDOR BUNCH-C</BtnSectionVendorBunchC>
                        <p>Hilton</p>
                        <p>Lassana Flora</p>
                        <p>Wills Design</p>
                        <p>Geeshan Bandara Photography</p>
                        <p>Salon Nayana</p>
                    </a>
                    <img src="./images/WeddingPlans4.JPG" />
                    <img src="./images/WeddingPlans3.JPG" />
                    <img src="./images/WeddingPlans1.JPG" />
                </BgVendorBunchC>


                <BgSectionCustomizedPlans></BgSectionCustomizedPlans>
                <TitleCustomizedPlans>CUSTOMIZED PLANS</TitleCustomizedPlans>
                <TitleCustomizedPlansUnderLine></TitleCustomizedPlansUnderLine>
                <a href="/">
                    <BtnSectionCustomizedPlans>Start Customized Plans</BtnSectionCustomizedPlans>
                    <PCustomizedPlan>We provide you the Structured Services Plan and you can customize it as you want. Customized Plans start here</PCustomizedPlan>
                </a>

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

const ContentWeddingPlan = styled.div`

`;

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Top Image starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////


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
    width: 23%;
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
    width: 23%;
    margin-left: 840px;
`;

const P2 = styled.div`
    margin-top: 10px;
    width: 600px;
    margin-left: 840px;
    color: #FFF;
    font-size: 15px;
    font-weight: 800;
    z-index: 1;
    position: relative;
`;

const Btns = styled.div`
    display: flex;
`;

const BtnVWeddingPlans = styled.div`
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
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnVendorBunches = styled.div`
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
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnCustomizedPlans = styled.div`
    opacity: 80%;
    text-align: center;
    font-family: 'Gabriela', serif;
    color: #FFF;
    font-size: 25px; 
    font-weight: 900;
    word-spacing: 10px;
    letter-spacing: 10px;
    border-radius: 10px;
    background-color: #3A0C1D;  
    padding: 15px 30px;
    z-index: 1;
    margin-top: 40px;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

`;

const BtnWeddingPlansText = styled.div`

`;

const BtnVendorBunchesText = styled.div`

`;

const BtnCustomizedPlansText = styled.div`

`;


const BgColoredSection1 = styled.div`
    margin-top: -340px;
    opacity: 80%;
    z-index: 0;
    position: relative;
    background-color: #07464D;
    height: 500px;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;


///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Top Image Ends ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Wedding Plan starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

const BgWeddingPlans = styled.div`
    margin-top: -115px;
    z-index: -11;
    background-color: #08210B;
    opacity: 80%;
    height: 1650px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleWeddingPlans = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1600px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;


const TitleUnderLineWeddingPlans = styled.div`
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

const SectionPlatinumWeddingPlan = styled.div`
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
            margin-left: 50px;
        }
    }
    img {
        margin-top: 150px;
        height: 550px;
        width: 450px;
        width: auto;
    }
`;


const BtnSectionPlatinumWeddingPlan = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    background-color: #7E938C;
    opacity: 100%;
    padding: 20px 30px;
    width: 60%;
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

const SectionGoldWeddingPlan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    width: 100%;
    z-index: 2;
    position: relative;
    height: 400px;
    margin-right: 0px;
    a {
        p{
            color: #FFF;
            z-index: 2;
            margin-right: 100px;
            margin-left: 50px;
        }
    }
    img {
        margin-top: 40px;
        height: 500px;
        width: 450px;
        width: auto;
    }
`;

const BtnSectionGoldWeddingPlan = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 80px;
    background-color: #8D3C03;
    opacity: 100%;
    padding: 20px 30px;
    width: 50%;
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

const SectionSilverWeddingPlan = styled.div`
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
            margin-left: 30px;
        }
    }
    img {
        margin-top: 40px;
        height: 550px;
        width: 500px;
        width: auto;
    }
`;

const BtnSectionSilverWeddingPlan = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 40px;
    background-color: #67605B;
    opacity: 100%;
    padding: 20px 30px;
    width: 60%;
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

const UnderLineWeddingPlans = styled.div`
    margin-top: 160px;
    background-color: #FFF;
    opacity: 80%;
    border-radius: 20px;
    padding: 5px 30px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`;



///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Wedding Plan Ends ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////

///////////////////*********************************//////////////////////////////////////////////////////
///////////////////// Vendor Bunches starts ////////////////////////////////////////////////////////////////
///////////////////*********************************//////////////////////////////////////////////////////




const BgVendorBunches = styled.div`
    margin-top: 65px;
    z-index: -11;
    background-color: #211D1D;
    opacity: 80%;
    height: 1550px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleVendorBunches = styled.div`
    color: #FFF;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: 'Gabriela', serif;
    width: 50%;
    z-index: 1;
    margin-top: -1500px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 6px;
    position: relative;
`;

const TitleUnderLineVendorBunches = styled.div`
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

const SectionWeddingPlansContainer = styled.div`
  
`;

const BgVendorBunchA = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #0F3635;
    opacity: 80%;
    height: 450px;
    width: 100%;

    a {
        z-index: 1;
        margin-top: 90px;
        margin-left: 150px;
        width: 40%;
        display: flex;
        flex-direction: column;
        margin-right: -50px;
        font-size: 22px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;

        p {
            margin-top: 5px;
        }
    }
    img {
        z-index: -5;
        margin-top: 50px;
        width: 400px;
        height: 350px;
        margin-left: -100px;

    }
`;

const BtnSectionVendorBunchA = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    margin-right: -20px;
    background-color: #076D6A;
    opacity: 100%;
    padding: 20px 30px;
    width: 80%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const BgVendorBunchB = styled.div`
     display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #3C0C0C;
    opacity: 80%;
    height: 450px;
    width: 100%;

    a {
        z-index: 1;
        margin-top: 90px;
        margin-left: 150px;
        width: 40%;
        display: flex;
        flex-direction: column;
        margin-right: -50px;
        font-size: 22px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;

        p {
            margin-top: 5px;
        }
    }
    img {
        z-index: -5;
        margin-top: 50px;
        width: 400px;
        height: 350px;
        margin-left: -100px;

    }
`;

const BtnSectionVendorBunchB = styled.div`
     color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    margin-right: -20px;
    background-color: #6D0A0A;
    opacity: 100%;
    padding: 20px 30px;
    width: 80%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const BgVendorBunchC = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    z-index: -1;
    background-color: #4B4923;
    opacity: 80%;
    height: 450px;
    width: 100%;

    a {
        z-index: 1;
        margin-top: 90px;
        margin-left: 150px;
        width: 40%;
        display: flex;
        flex-direction: column;
        margin-right: -50px;
        font-size: 22px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;

        p {
            margin-top: 5px;
        }
    }
    img {
        z-index: -5;
        margin-top: 50px;
        width: 400px;
        height: 350px;
        margin-left: -100px;

    }
`;

const BtnSectionVendorBunchC = styled.div`
     color: #FFF;
    z-index: 2;
    position: relative;
    margin-top: 20px;
    margin-right: -20px;
    background-color: #8D7207;
    opacity: 100%;
    padding: 20px 30px;
    width: 80%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;



////////////////////////////////////// wrong? ///////////////////////////////////////////////
const BgSectionCustomizedPlans = styled.div`  
    z-index: 0;
    margin-top: 40px;
    background-color: #FFF;
    opacity: 80%;
    padding: 50px 30px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const TitleCustomizedPlans = styled.div`
    color: #103C3B;
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

const TitleCustomizedPlansUnderLine = styled.div`
    width: 600px;
    border-radius: 20px;
    z-index: 1;
    margin-top: 10px;
    background-color: #103C3B;
    opacity: 80%;
    padding: 5px 30px;
    margin-left: auto;
    margin-right: auto;
`;

const BtnSectionCustomizedPlans = styled.div`
    color: #FFF;
    z-index: 2;
    position: relative;
    background-color: #101A1A;
    opacity: 100%;
    padding: 20px 30px;
    width: 70%;
    font-size: 25px;
    word-spacing: 6px;
    font-weight: 800;
    letter-spacing: 4px;
    border-radius: 2px;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: 220px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

const PCustomizedPlan = styled.div`
    color: #103C3B;
    margin-bottom: 40px;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600px;
    position: relative;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`;

const Products = styled.div`
    width: 100%;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    justify-items: center;
    margin: 20px 0;
`;


export default WeddingPlans;