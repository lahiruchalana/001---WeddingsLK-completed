import styled from "styled-components";
import YourService from '@material-ui/icons/FormatListNumbered';
import WeddingPlan from '@material-ui/icons/Assignment';
import Settings from '@material-ui/icons/SettingsApplications';
import HomeIcon from '@material-ui/icons/Home';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import StoreIcon from '@material-ui/icons/Store';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ContactsIcon from '@material-ui/icons/Contacts';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {GlobalState} from '../../GlobalState'
import React, {useContext, useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

const SideBarAdmin = (props) => {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.user

    return (
        <Container>
            <Content>
            <ImageBg src="/images/HomeGallery5.jpg"
                    ></ImageBg>
                <NavBar>
                    <Logo>
                        <a href= '/'>
                            <img src= "../images/Logo.png"/> 
                        </a>
                    </Logo>
                    <Designation>Admin</Designation>
                    <Row>
                        <a href="/">
                            <HomeIcon></HomeIcon>
                            <BtnYourServices>Home</BtnYourServices>
                        </a>
                    </Row>
                    <Row>
                        <a href="/admin_profile">
                            <ContactsIcon></ContactsIcon>
                            <BtnYourServices>Users</BtnYourServices>
                        </a>
                    </Row>
                    <Row>
                        <a href="/confirmed_customers">
                            <PlaylistAddCheckIcon></PlaylistAddCheckIcon>
                            <BtnYourServices>Confirmed Customers</BtnYourServices>
                        </a>
                    </Row>
                    <Row>
                        <a href="/customers_wishlist">
                            <ShoppingCartIcon></ShoppingCartIcon>
                            <BtnYourServices>Customer's WishList</BtnYourServices>
                        </a>
                    </Row>
                    <Row>
                        <a href="/vendor_management">
                            <FolderSharedIcon></FolderSharedIcon>
                            <BtnBugdetReport>Vendor Management</BtnBugdetReport>
                        </a>
                    </Row>
                    <Row>
                        <a href="/admin_services">
                            <YourService></YourService>
                            <BtnMessanger>Service Management</BtnMessanger>
                        </a>
                    </Row>
                    <Row>
                        <a href="/create_weddingPlan">
                            <PlaylistAddIcon></PlaylistAddIcon>
                            <BtnWeddingPlan>WedPlan Management</BtnWeddingPlan> 
                        </a>
                    </Row>
                    <Row>
                        <a href="/current_emp">
                            <AssignmentIndIcon></AssignmentIndIcon>
                            <BtnMessanger>Current Employees</BtnMessanger>
                        </a>
                    </Row>
                    <Row>
                        <a href="/not_assigned_weddings">
                            <AssignmentLateIcon></AssignmentLateIcon>
                            <BtnWeddingPlan>Weddings not Assigned</BtnWeddingPlan> 
                        </a>
                    </Row>
                    <Row>
                        <a href="/progress_in_weddings">
                            <WeddingPlan></WeddingPlan>
                            <BtnWeddingPlan>Weddings in Progress</BtnWeddingPlan> 
                        </a>
                    </Row>
                    <Row>
                        <a href="/completed_weddings">
                            <AssessmentIcon></AssessmentIcon>
                            <BtnWeddingPlan>Completed Weddings</BtnWeddingPlan> 
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <StoreIcon></StoreIcon>
                            <BtnMessanger>Shop</BtnMessanger>
                        </a>
                    </Row>
                    {/* <Row>
                        <a href="/">
                            <AssessmentIcon></AssessmentIcon>
                            <BtnCurrentVendors>Pending Weddings</BtnCurrentVendors>
                        </a>
                    </Row> */}
                    {/* <Row>
                        <a href="/">
                            <AddToPhotosIcon></AddToPhotosIcon>
                            <BtnMessanger>Add New Services</BtnMessanger>
                        </a>
                    </Row> */}
                    {/* <Row>
                        <a href="/">
                            <EventIcon></EventIcon>
                            <BtnMessanger>Schedule</BtnMessanger>
                        </a>
                    </Row> */}
                    <Row>
                        <a href="/">
                            <PermMediaIcon></PermMediaIcon>
                            <BtnMessanger>Advertisements</BtnMessanger>
                        </a>
                    </Row>
                    <Row>
                        <a href="/">
                            <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
                            <BtnMessanger>Tasks Management</BtnMessanger>
                        </a>
                    </Row>
                    {/* <Row>
                        <a href="/">
                            <AssessmentIcon></AssessmentIcon>
                            <BtnMessanger>Analytics</BtnMessanger>
                        </a>
                    </Row> */}
                    <RowLast>
                        <a href="/">
                            <Settings></Settings>
                            <BtnSettings>Settings</BtnSettings>
                        </a>
                    </RowLast>
                </NavBar>
            </Content>
            { user.name == '' ? '' :
                <CommunityButton>
                    <Button style={{
                        backgroundColor: "#c9184a"
                        }}
                        data-aos="fade-left" size="large" variant="contained" color="gray" href="/admin_profile" >
                        {user.name}
                    </Button>
                </CommunityButton>
            }
        </Container>
    );
};

const Container = styled.div`
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #0E2225;
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
    margin-top: 15px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: white;
    } 
`;

const Designation = styled.div`
    max-width: 210px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    text-align: center;
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
    margin-top: 15px;
    margin-left: 20px;
    a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
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



export default SideBarAdmin;