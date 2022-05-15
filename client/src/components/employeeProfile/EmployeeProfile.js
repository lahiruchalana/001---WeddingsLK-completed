import styled from "styled-components";
import SideBarAdmin from "./SideBarEmployee";
import Header from "../header/Header";
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import Aos from "aos";
import 'aos/dist/aos.css';

function YourInfo() {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.user
    const [users, setUsers] = state.userInfoAPI.users
    const [totalCompletedWeddings, setTotalCompletedWeddings] = useState(0)
    const [totalProgressInWeddings, setTotalProgressInWeddings] = useState(0)
    const [totalTasksToDo, setTotalTasksToDo] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const totalCompletedWeddings = users.reduce((prev, user1) => {
                return  user1.progress == '1' && user1.emp_name == user.name ? prev + 1 : prev + 0
            },0)
            setTotalCompletedWeddings(totalCompletedWeddings)
            const totalProgressInWeddings = users.reduce((prev, user1) => {
                return  user1.progress == '2' && user1.emp_name == user.name ? prev + 1 : prev + 0
            },0)
            setTotalProgressInWeddings(totalProgressInWeddings)
            const totalTasksToDo = users.reduce((prev, user1) => {
                return  user1.progress == '2' && user1.emp_name == user.name ? prev + 1 : prev + 0
            },0)
            setTotalTasksToDo(totalTasksToDo)
        }
        Aos.init({ duration: 2500 });
        getTotal()
    },[users])


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
                <Product_card1 data-aos="fade-left">
                    <Text9>Task to do</Text9>
                    <Text10>8</Text10>
                </Product_card1>
                <Product_card2 data-aos="fade-left">
                    <Text9>Progress in Weddings</Text9>
                    <Text10>{totalProgressInWeddings}</Text10>
                </Product_card2>
                <Product_card3 data-aos="fade-left">
                    <Text9>Completed Weddings</Text9>
                    <Text10>{totalCompletedWeddings}</Text10>
                </Product_card3>
                <Product_card7 data-aos="fade-left">
                    <Text9>Employee Info</Text9>
                    <Text12>{user.name}</Text12>
                    <Text12>0{user.contactFirst}</Text12>
                </Product_card7>
                <Product_card8 data-aos="fade-left">
                    <Text9>Current Customers Info</Text9>
                    {
                        users.map(user1 => {
                            return user1.progress == '2' && user1.emp_name == user.name ? 
                            <div>
                                <div>
                                    <Text13>{user1.name}</Text13>
                                    <Text12>{user1.contactFirst}</Text12>
                                </div> 
                                <Product_card9>
                                <Line1></Line1>
                                {user1.confirmed_vendors.map(vendor => {
                                    return  <div>
                                            <Text13>{vendor.title}</Text13>
                                            <Text12>{vendor.address_line_1}</Text12>
                                            <Line1></Line1>
                                        </div> 
                                })}
                                {user1.confirmed_wedding_plans.map(vendor => (
                                    <div>
                                        <Text13>{vendor.title}</Text13>
                                        <Text13>{vendor.vendor_1}</Text13>
                                        <Text12>{vendor.address_1}</Text12>
                                        <Text13>{vendor.vendor_2}</Text13>
                                        <Text12>{vendor.address_2}</Text12>
                                    { vendor.vendor_3 == null ? '' :
                                        <div>
                                            <Text13>{vendor.vendor_3}</Text13>
                                            <Text12>{vendor.address_3}</Text12>
                                        </div>
                                    }
                                    <Line1></Line1>
                                    </div>
                                ))}
                                </Product_card9>
                            </div>   : null
                        })
                    }
                </Product_card8>
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
    font-size: 14px;
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
  background-color: #faa307;
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
  background-color: #006400;
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

const Product_card7 = styled.div`
  width: 300px;
  background-color: #ff8700;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 775px;
  margin-top: 40px;
  align-items: center;
`; 

const Product_card8 = styled.div`
  width: 600px;
  background-color: #1b4332;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 100px;
  align-items: center;
  margin-top: -105px;
`; 

const Product_card9 = styled.div`
  width: 570px;
  background-color: #40916c;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  margin-top: 5px;
  align-items: center;
`; 

const Line1 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: white;
`;
export default YourInfo;