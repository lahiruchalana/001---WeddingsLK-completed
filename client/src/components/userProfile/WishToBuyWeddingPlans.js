import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SideBarUser from './SideBarUser';
import {Link} from 'react-router-dom'
import Aos from "aos";
import 'aos/dist/aos.css';


function ConfirmedWeddingPlans() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [wish_to_buy_wedding_plans, setWishToBuyWeddingPlans] = state.userAPI.wish_to_buy_wedding_plans
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const addConfirmedWeddingPlans = state.userAPI.addConfirmedWeddingPlans

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

    const addToWishToBuyWeddingPlans = async (wish_to_buy_wedding_plans) =>{
        await axios.patch('/user/addwish_to_buy_wedding_plans', {wish_to_buy_wedding_plans}, {
            headers: {Authorization: token}
        })
    }

    ///////////// remove vendors /////////////
    const removeWishToBuyWeddingPlans = id =>{
        if(window.confirm("Do you want to Remove this Wedding Plan from Wish List?")){
            wish_to_buy_wedding_plans.forEach((item, index) => {
                if(item._id === id){
                    wish_to_buy_wedding_plans.splice(index, 1)
                }
            })

            setWishToBuyWeddingPlans([...wish_to_buy_wedding_plans])
            addToWishToBuyWeddingPlans(wish_to_buy_wedding_plans)
        }
    }

    if(wish_to_buy_wedding_plans.length === 0) 
        return (<Content>
            <Header/>
            <SideBarUser/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h2  data-aos="fade-left"  style={{marginLeft: "250px", textAlign: "center", fontSize: "40px"}}>There is no any Wedding Plans in the Wish List</h2>
        </Content>);

    return (
        <div>
        <Header/>
        <SideBarUser/>
        <Container>
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextTitle data-aos="fade-left" >Your Wish List of Wedding Plans</TextTitle>
            <br></br>
            {
                wish_to_buy_wedding_plans.map(weddingPlan => (
                    <div data-aos="fade-left"  key={weddingPlan._id}>
                        <Product_card>
                            <h2 data-aos="fade-left"  title={weddingPlan.title}>{weddingPlan.title}</h2>
                            <img data-aos="fade-left" src={weddingPlan.images_1.url} alt="" />
                            
                            <Box>
                                <Product_box data-aos="fade-left" >
                                    <h2 title={weddingPlan.vendor_1}>{weddingPlan.vendor_1}</h2>
                                    <h5>Service: {weddingPlan.category_1}</h5>
                                    <span>Rs {weddingPlan.price_1} - Rs {weddingPlan.max_price_1}</span>
                                    <p>{weddingPlan.description_1}</p>
                                    <h5>Address: {weddingPlan.address_1}</h5>
                                </Product_box>
                                <Product_box data-aos="fade-left" >
                                    <h2 title={weddingPlan.vendor_2}>{weddingPlan.vendor_2}</h2>
                                    <h5>Service: {weddingPlan.category_2}</h5>
                                    <span>Rs {weddingPlan.price_2} - Rs {weddingPlan.max_price_2}</span>
                                    <p>{weddingPlan.description_2}</p>
                                    <h5>Address: {weddingPlan.address_2}</h5>
                                </Product_box>
                                { weddingPlan.vendor_3 == '' ? '' :
                                    <Product_box data-aos="fade-left" >
                                        <h2 title={weddingPlan.vendor_3}>{weddingPlan.vendor_3}</h2>
                                        <h5>Service: {weddingPlan.category_3}</h5>
                                        <span>Rs {weddingPlan.price_3} - Rs {weddingPlan.max_price_3}</span>
                                        <p>{weddingPlan.description_3}</p>
                                        <h5>Address: {weddingPlan.address_3}</h5>
                                    </Product_box>
                                }
                            </Box>
                            <div className="delete" 
                            onClick={() => removeWishToBuyWeddingPlans(weddingPlan._id)}>
                                <Button variant="contained" color="inherit">
                                Remove Wedding Plan
                                </Button>
                            </div>

                            <div className="row_btn">
                                <Link id="btn_view" to="/confirmed_wedding_plans" onClick={() => addConfirmedWeddingPlans(weddingPlan)}>
                                            Confirm Wedding Plan
                                </Link>
                            </div>
                        </Product_card>
                        
                    </div>
                ))
            }

        </div>
        </Container>
        <br></br>
        <br></br>
        <Footer/>
        </div>
    )
};

const TextTitle = styled.div`
    margin: 5px;
    font-size: 22px;
    font-weight: 700;
    color: darkblue;
    text-transform: uppercase;
`;

const Product_card = styled.div`

  width: 1000px;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px #03045e;
  margin: 10px 100px;
  position: relative;


  img {
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  }

  h2 {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
  cursor: pointer;
  color: #323232;
  }
  
  span {
  color: crimson;
  }
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
`;
 
const Product_box = styled.div`
    margin: 5px 5px;
`;


const Text1 = styled.div`
    margin: 5px;
    font-size: 22px;
    font-weight: 700;
    color: darkblue;
`;
const Text2 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkgreen;
`;
const Text3 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkred;
`;
const Text4 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkviolet;
`;
const Text5 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkcyan;
    text-align: center;
`;
const Text6 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkslategray;
    text-align: center;
`;
const Line1 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    background-color: black;
`;
const Line2 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: black;
`;
const Line3 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    background-color: black;
`;
const Line4 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: black;
`;
const LineLite1 = styled.div`
    padding: 2px;
    margin: 10px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: darkgrey;
`;

const Container = styled.div`
    margin-right: 50px;
    margin-left: 250px;
`;

const Content = styled.div`
    
`;

export default ConfirmedWeddingPlans
