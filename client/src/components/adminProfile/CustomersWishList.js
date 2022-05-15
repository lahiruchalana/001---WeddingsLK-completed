import styled from "styled-components";
import SideBarAdmin from "./SideBarAdmin";
import Header from "../header/Header";
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import UserItemCustomerWishList from '../mainpages/utils/userItem/UserItemCustomerWishList'
import Loading from '../mainpages/utils/loading/Loading'
import LoadMore from './LoadMore'
import Aos from "aos";
import 'aos/dist/aos.css';

function AdminProfile() {
    const state = useContext(GlobalState)
    const [users, setUsers] = state.userInfoAPI.users
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = users.reduce((prev, user) => {
                return  user.confirmed_vendors && user.confirmed_wedding_plans == '' ? prev + 0 : prev + 1
            },0)

            setTotal(total)
        }

        Aos.init({ duration: 2500 });

        getTotal()

    },[users])

    if(loading) return <div><Loading /></div>
    
    return (
        <>
        <Container>
            <Header/>
            <SideBarAdmin/>
            <Content>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Text4>Customer's WishList</Text4>
                <Product_card data-aos="fade-left">
                    <Text9>Number of Wishlists of Customers</Text9>
                    <Text10>{total}</Text10>
                </Product_card>
                <Products>
                    {
                        users.map(user => {
                            return user.wish_to_buy && user.wish_to_buy_wedding_plans == '' ? null : <UserItemCustomerWishList key={user._id} user={user} />
                        })
                    } 
                </Products>
                <LoadMore />
                {users.length === 0 && <Loading />}
            </Content>
        </Container>  
        </>
    )
}

const Container = styled.div`

`;

const Products = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(900px, 1fr));
  justify-items: center;
  margin: 20px 0;
`;

const Content = styled.div`
margin-left: 250px;
margin-right: 50px;
`;

const Bg = styled.div`
    min-height: 1500px;
    width: 100%;
    background-color: #FFF;
`;

const Text4 = styled.div`
    margin-left: 25px;
    font-size: 25px;
    color: rgb(78, 6, 69);
    font-weight: 700;
    text-transform: uppercase;
`;

const Text9 = styled.div`
    font-size: 12px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
`;

const Text10 = styled.div`
    margin-left: auto;
    margin-top: auto;
    font-size: 35px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    width: auto;
    text-align: center;
    margin-top: 5px;
`;

const Product_card = styled.div`
  width: 600px;
  background-color: #240046;
  overflow: hidden;
  height: 100px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 430px;
  margin-top: -25px;
  align-items: center;
`;

export default AdminProfile;