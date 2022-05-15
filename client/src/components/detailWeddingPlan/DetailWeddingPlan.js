import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Aos from "aos";
import 'aos/dist/aos.css';

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [weddingPlans] = state.weddingPlansAPI.weddingPlans
    // const addCart = state.userAPI.addCart
    // const addConfirmedVendors = state.userAPI.addConfirmedVendors
    // const addWishToBuy = state.userAPI.addWishToBuy
    const [detailWeddingPlan, setDetailWeddingPlan] = useState([])
    const addWishToBuyWeddingPlans = state.userAPI.addWishToBuyWeddingPlans
    const addConfirmedWeddingPlans = state.userAPI.addConfirmedWeddingPlans


    useEffect(() =>{
        if(params.id){
            weddingPlans.forEach(weddingPlan => {
                if(weddingPlan._id === params.id) setDetailWeddingPlan(weddingPlan)
            })
        }
        
        Aos.init({ duration: 2500 });
        
        
    },[params.id, weddingPlans])

    if(detailWeddingPlan.length === 0) return null;

    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
            <Product_card data-aos="fade-left">
                
                <img data-aos="fade-left" src={detailWeddingPlan.images_1.url} alt="" />
                <h2 title={detailWeddingPlan.title}>{detailWeddingPlan.title}</h2>
                <Box>
                    <Product_box>
                        <h2 title={detailWeddingPlan.vendor_1}>{detailWeddingPlan.vendor_1}</h2>
                        <h5>Service: {detailWeddingPlan.category_1}</h5>
                        <span>Rs {detailWeddingPlan.price_1} - Rs {detailWeddingPlan.max_price_1}</span>
                        <p>{detailWeddingPlan.description_1}</p>
                        <h5>Address: {detailWeddingPlan.address_1}</h5>
                    </Product_box>
                    <Product_box>
                        <h2 title={detailWeddingPlan.vendor_2}>{detailWeddingPlan.vendor_2}</h2>
                        <h5>Service: {detailWeddingPlan.category_2}</h5>
                        <span>Rs {detailWeddingPlan.price_2} - Rs {detailWeddingPlan.max_price_2}</span>
                        <p>{detailWeddingPlan.description_2}</p>
                        <h5>Address: {detailWeddingPlan.address_2}</h5>
                    </Product_box>
                    { detailWeddingPlan.vendor_3 == null ? '' : 
                        <Product_box>
                            <h2 title={detailWeddingPlan.vendor_3}>{detailWeddingPlan.vendor_3}</h2>
                            <h5>Service: {detailWeddingPlan.category_3}</h5>
                            <span>Rs {detailWeddingPlan.price_3} - Rs {detailWeddingPlan.max_price_3}</span>
                            <p>{detailWeddingPlan.description_3}</p>
                            <h5>Address: {detailWeddingPlan.address_3}</h5>
                        </Product_box>
                    }
                </Box>
                <br/>
                <div className="row_btn">
                    <Link id="btn_buy" to="/wish_to_buy_wedding_plans" onClick={() => addWishToBuyWeddingPlans(detailWeddingPlan)}>
                                Add to Wish List
                    </Link>
                    <Link id="btn_view" to="/confirmed_wedding_plans" onClick={() => addConfirmedWeddingPlans(detailWeddingPlan)}>
                                Confirm Wedding Plan
                    </Link>
                </div>
            </Product_card>
        <Footer/>
        </>
    )
};

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

const Product_card = styled.div`

  width: 1200px;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px #03045e;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
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
export default DetailProduct
