import styled from "styled-components";
import SideBarAdmin from "./SideBarUser";
import Header from "../header/Header";
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import Aos from "aos";
import 'aos/dist/aos.css';
import { Button } from '@material-ui/core';



function YourInfo() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [wish_to_buy] = state.userAPI.wish_to_buy
    const [confirmed_vendors] = state.userAPI.confirmed_vendors
    const [wish_to_buy_wedding_plans] = state.userAPI.wish_to_buy_wedding_plans
    const [confirmed_wedding_plans] = state.userAPI.confirmed_wedding_plans
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const addConfirmedVendors = state.userAPI.addConfirmedVendors
    const addWishToBuy = state.userAPI.addWishToBuy
    const [user] = state.userAPI.user


    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

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

                <Text4>Your Profile</Text4>
                <Product_card data-aos="fade-left">
                    <Text9>Confirmed Wedding Plans</Text9>
                    <Text10>{confirmed_wedding_plans.length}</Text10>
                </Product_card>
                <Product_card data-aos="fade-left">
                    <Text9>Confirmed Vendors</Text9>
                    <Text10>{confirmed_vendors.length}</Text10>
                </Product_card>
                <Product_card1 data-aos="fade-left">
                    <Text9>Number of Vendor Services on the Customer Cart</Text9>
                    <Text10>{cart.length}</Text10>
                </Product_card1>
                <Product_card2 data-aos="fade-left">
                    <Text9>Number of Vendor Services on the Wish to Buy List</Text9>
                    <Text10>{wish_to_buy.length}</Text10>
                </Product_card2>
                <Product_card3 data-aos="fade-left">
                    <Text9>Number of Wedding Plans on the Wishlist</Text9>
                    <Text10>{wish_to_buy_wedding_plans.length}</Text10>
                </Product_card3>
                <Product_card4 data-aos="fade-left">
                    <Text9>Your Employee</Text9>
                    <Text10>{user.emp_name == null ? <>
                    <Text11>Not Assigned Employee Yet</Text11>
                    <Text12>Sometimes, It takes few hours to assign an employee for your wedding. Please stay with us.</Text12>
                    </> : 
                    user.emp_name }
                    </Text10>
                </Product_card4>
                <Product_card4 data-aos="fade-left">
                    <Text9>Your Employee Contact Number</Text9>
                    <Text10>{user.emp_name == null ? <Text11>Not Assigned Employee Yet</Text11> : user.emp_contact }</Text10>
                </Product_card4>

                <Product_card5 data-aos="fade-left">
                    <Text9>Current Progress of Your Confirmed Vendors</Text9>
                    <Text10>{user.confirmed_vendors.map(vendor => (
                        <div>
                        <Text13>{vendor.title}</Text13>
                        <Text9>{vendor.address_line_1}</Text9>
                        <div>{ user.progress == '0' ? 
                        <ButtonBox>
                            <Button style={{
                                // borderRadius: 35,
                                backgroundColor: "#bf0603"
                                // padding: "18px 36px",
                                // fontSize: "18px"
                                }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                        Still Not Assigned a Employee
                            </Button>
                        </ButtonBox> 
                        :  user.progress == '1' ? 
                            <ButtonBox>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#31e000"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                            The wedding was successfully Completed
                                </Button>
                            </ButtonBox>
                            : 
                                <ButtonBox>
                                    <Button style={{
                                        // borderRadius: 35,
                                        backgroundColor: "#ffee32"
                                        // padding: "18px 36px",
                                        // fontSize: "18px"
                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                Work in Progress
                                    </Button>
                                </ButtonBox>
                            }
                        </div>    
                        </div>
                    
                    ))}</Text10>
                </Product_card5>

                <Product_card5 data-aos="fade-left">
                    <Text9>Current Progress of Your Confirmed Wedding Plans</Text9>
                    <Text10>{user.confirmed_wedding_plans.map(vendor => (
                        <div>
                        <Text13>{vendor.title}</Text13>
                        <Text13>{vendor.vendor_1}</Text13>
                        <Text9>{vendor.address_1}</Text9>
                        <Text13>{vendor.vendor_2}</Text13>
                        <Text9>{vendor.address_2}</Text9>
                        { vendor.vendor_3 == null ? '' :
                            <div>
                                <Text13>{vendor.vendor_3}</Text13>
                                <Text9>{vendor.address_3}</Text9>
                            </div>
                        }
                        <div>{ user.progress == '0' ? 
                        <ButtonBox>
                            <Button style={{
                                // borderRadius: 35,
                                backgroundColor: "#bf0603"
                                // padding: "18px 36px",
                                // fontSize: "18px"
                                }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                        Still Not Assigned a Employee
                            </Button>
                        </ButtonBox> 
                        :  user.progress == '1' ? 
                            <ButtonBox>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#31e000"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                            The wedding was successfully Completed
                                </Button>
                            </ButtonBox>
                            : 
                                <ButtonBox>
                                    <Button style={{
                                        // borderRadius: 35,
                                        backgroundColor: "#ffee32"
                                        // padding: "18px 36px",
                                        // fontSize: "18px"
                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                Work in Progress
                                    </Button>
                                </ButtonBox>
                            }
                        </div>  
                        </div>
                    ))}
                    </Text10>
                </Product_card5>
                <Product_card6 data-aos="fade-left">
                    <Text9>Current Overall Progress of your Wedding</Text9>
                    <Text10>{user.progress == '0' ? <Text11>Not Assigned an Employee</Text11> : 
                        user.progress == '1' ? <Text11>Confirmed Vendor Services and Wedding Plans are Completed</Text11> :
                            <Text11>Wedding is Progressed in</Text11>}</Text10>
                </Product_card6>


                <Text12>Sometimes, It takes few hours to assign an employee for your wedding. Please stay with us.</Text12>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Content>
        </Container>  
        </>
    )
}

const Container = styled.div`

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

const Text11 = styled.div`
    margin-left: auto;
    margin-top: auto;
    font-size: 20px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    width: auto;
    text-align: center;
    margin-top: 5px;
`;

const Text12 = styled.div`
    margin-left: auto;
    margin-top: auto;
    font-size: 9px;
    color: white;
    font-weight: 700;
    width: auto;
    text-align: center;
    margin-top: 10px;
`;

const Text13 = styled.div`
    margin-left: auto;
    margin-top: auto;
    font-size: 18px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    width: auto;
    text-align: center;
    margin-top: 15px;
`;

const Product_card = styled.div`
  width: 720px;
  background-color: #370617;
  overflow: hidden;
  height: 100px;
  padding: 15px;
  box-shadow: 0 0 15px red;
  position: relative;
  left: 220px;
  margin-top: 20px;
  align-items: center;
`;

const Product_card1 = styled.div`
  width: 300px;
  background-color: #bf0603;
  overflow: hidden;
  height: 130px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 780px;
  margin-top: 25px;
  align-items: center;
`;

const Product_card2 = styled.div`
  width: 300px;
  background-color: #ffba08;
  overflow: hidden;
  height: 130px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 440px;
  margin-top: -130px;
  align-items: center;
`;

const Product_card3 = styled.div`
  width: 300px;
  background-color: #70e000;
  overflow: hidden;
  height: 130px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 100px;
  margin-top: -130px;
  align-items: center;
`;

const Product_card4 = styled.div`
  width: 920px;
  background-color: #48392a;
  overflow: hidden;
  height: 100px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 135px;
  margin-top: 20px;
  align-items: center;
`;

const Product_card5 = styled.div`
  width: 720px;
  background-color: #0a1128;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 220px;
  margin-top: 30px;
  align-items: center;
`;

const Product_card6 = styled.div`
  width: 500px;
  background-color: #ffba08;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 340px;
  margin-top: 40px;
  align-items: center;
`; 

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export default YourInfo;