import styled from "styled-components";
import YourService from '@material-ui/icons/FormatListNumbered';
import WeddingPlan from '@material-ui/icons/Assignment';
import CurrentVendors from '@material-ui/icons/Store';
import BugdetReport from '@material-ui/icons/LocalAtm';
import Messanger from '@material-ui/icons/Message';
import Settings from '@material-ui/icons/SettingsApplications';
import HomeIcon from '@material-ui/icons/Home';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import { Button } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import Aos from "aos";
import 'aos/dist/aos.css';


const SideBarUser = (props) => {


    
    const state = useContext(GlobalState)
    const [user] = state.userAPI.user
    // const [user, setUser] = state.userAPI.user

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])


    return (
        <Container>
            <Content>
            <ImageBg data-aos="fade-right" src="/images/HomeGallery2.jpg"
                    ></ImageBg>
                <NavBar >
                    
                    {/* Use Id to assign the couple name here  */}
                    <Logo data-aos="fade-right">
                        <a href= '/'>
                            <img src= "../images/Logo.png"/> 
                        </a>
                    </Logo>
                    <TxtCoupleNames data-aos="fade-right">My Profile</TxtCoupleNames>
                    <Row data-aos="fade-right">
                        <a href="/">
                            <HomeIcon></HomeIcon>
                            <BtnYourServices data-aos="fade-right">Home</BtnYourServices>
                        </a>
                    </Row >
                    <Row data-aos="fade-right">
                        <a href="/your_info">
                            <AccountBoxIcon></AccountBoxIcon>
                            <BtnYourServices data-aos="fade-right">Your Profile</BtnYourServices>
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/user_profile">
                        <ShoppingCartIcon></ShoppingCartIcon>
                            <BtnYourServices data-aos="fade-right">Your Cart</BtnYourServices>
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/user_dashboard_wish_to_buy">
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                            <BtnYourServices data-aos="fade-right">Wish To Buy</BtnYourServices>
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/user_dashboard_confirmed_vendors">
                            <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
                            <BtnYourServices data-aos="fade-right">Confirmed Vendors</BtnYourServices>
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/confirmed_wedding_plans">
                            <CheckCircleTwoToneIcon></CheckCircleTwoToneIcon>
                            <BtnYourServices data-aos="fade-right">C Wedding Plans</BtnYourServices> 
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/wish_to_buy_wedding_plans">
                            <WeddingPlan></WeddingPlan>
                            <BtnYourServices data-aos="fade-right">WL Wedding Plans</BtnYourServices> 
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/budget_report">
                            <BugdetReport></BugdetReport>
                            <BtnYourServices data-aos="fade-right">Budget Report</BtnYourServices>
                        </a>
                    </Row>
                    <Row data-aos="fade-right">
                        <a href="/">
                            <CurrentVendors></CurrentVendors>
                            <BtnYourServices data-aos="fade-right">Current Vendors</BtnYourServices>
                        </a>
                    </Row>
                    {/* <Row>
                        <a href="/">
                            <Messanger></Messanger>
                            <BtnMessanger>Messanger</BtnMessanger>
                        </a>
                    </Row> */}
                    <RowLast data-aos="fade-right">
                        <a href="/">
                            <Settings></Settings>
                            <BtnSettings data-aos="fade-right">Settings</BtnSettings>
                        </a>
                    </RowLast>
                    
                </NavBar>
            </Content>
            { user.name == '' ? '' :
                <CommunityButton>
                    <Button style={{
                        // borderRadius: 35,
                        backgroundColor: "#b5179e"
                        // padding: "18px 36px",
                        // fontSize: "18px"
                        }}
                        data-aos="fade-left" size="large" variant="contained" color="gray" href="/user_profile" >
                        {user.name}
                    </Button>
                </CommunityButton>
            }
            { user.emp_name == null ? <CommunityButton2>
                    <Button style={{
                        // borderRadius: 35,
                        backgroundColor: "#b5e48c"
                        // padding: "18px 36px",
                        // fontSize: "18px"
                        }}
                        data-aos="fade-left" size="small" variant="contained" color="gray" href="/user_profile" >
                        Employee - Not Assigned
                    </Button>
                </CommunityButton2> :
                <CommunityButton2>
                    <Button style={{
                        // borderRadius: 35,
                        backgroundColor: "#b5e48c"
                        // padding: "18px 36px",
                        // fontSize: "18px"
                        }}
                        data-aos="fade-left" size="small" variant="contained" color="gray" href="/user_profile" >
                        Employee - {user.emp_name}
                    </Button>
                </CommunityButton2>
            }
        </Container>
    );
};

const Container = styled.div`
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #242021;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    min-width: 210px;
    min-height: 900px;
`;

const Content = styled.div`

`;

const NavBar = styled.div`
    z-index: 0;
    filter: brightness(100%);
`;

const ImageBg = styled.img`
        z-index: -10;
        width: 210px;
        height: 900px;
        object-fit: cover;
        filter: brightness(30%);

`;


const Logo = styled.div`
margin-top: -900px;
    a{
        img{

            max-width: 210px;
            opacity: 70%;
        }
    }
`;

const Row = styled.div`
    margin-top: 17px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: white;
    } 
`;

const TxtCoupleNames = styled.div`
    width: 210px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px 60px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    background-color: #FFFFFF;
    color: #122322;

`;

const BtnYourServices = styled.div`
    margin-left: 10px;
`;

const BtnWeddingPlan = styled.div`
    margin-left: 10px;
`;

const BtnCurrentVendors = styled.div`
    margin-left: 10px;
`;


const BtnBugdetReport = styled.div`
    margin-left: 10px;
`;

const BtnMessanger = styled.div`
    margin-left: 10px;
`;


const BtnSettings = styled.div`
    margin-left: 10px;
`;

const RowLast = styled.div`
    margin-top: 20px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: white;
    } 
`;


const CommunityButton = styled.div`
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 3;
    color: white;
`;

const CommunityButton2 = styled.div`
    position: fixed;
    right: 0;
    top: 130px;
    z-index: 3;
    color: white;
`;



export default SideBarUser;

// import styled from "styled-components";
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
// import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
// import Header from "./Header.js"


// const SideBarUser = (props) => {
//     return (
//         <Container>
//             <Header></Header>
//             <ProSidebar>
//             <Menu iconShape="square">
//                 <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
//                 <SubMenu title="Components" icon={<FaHeart />}>
//                 <MenuItem>Component 1</MenuItem>
//                 <MenuItem>Component 2</MenuItem>
//                 </SubMenu>
//             </Menu>
//             </ProSidebar>
//         </Container>
//     );
// };

// const Container = styled.div`
//      top: 0px;
//      bottom: 0px;
//      left: 0px;
//      display: flex;
//      z-index: -20;
// `;

// export default SideBarUser;