import styled from "styled-components";
import Header from "../header/Header"
import Footer from '../footer/Footer'
import SideBarUser from "./SideBarUser.js";
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Aos from "aos";
import 'aos/dist/aos.css';

const UserProfileCart = (props) => {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [user] = state.userAPI.user
    const [name] = state.userAPI.name
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const addConfirmedVendors = state.userAPI.addConfirmedVendors
    const addWishToBuy = state.userAPI.addWishToBuy

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        Aos.init({ duration: 2500 });

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }
    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }

    return (
        <Container>
            <Header/>
            <SideBarUser/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Content>
            <TextTitle data-aos="fade-right">{user.name}'s Cart of Vendor Services</TextTitle>
            <br></br>
            <br></br>
            <div>
                <div >
                    
                    {
                        cart.map(product => (
                            <div data-aos="fade-right" className="detail cart" key={product._id}>
                            <img data-aos="fade-right" src={product.images.url} alt="" />
                            
                            <div className="box-detail">
                            <h2>{product.title}</h2>
                            <LineLite1></LineLite1>
                            <h4>Rs {product.price} - {product.max_price}</h4>
                            <LineLite1></LineLite1>
                            <h4>{product.address_line_1}</h4>
                            <LineLite1></LineLite1>
                            <Text5>{product.description}</Text5>
                            <Line3></Line3>
                            <Text6>{product.content}</Text6>
                            <Line3></Line3>
                            <Text5>{product.content_2}</Text5>
                            <LineLite1></LineLite1>
                            <div className="row">
                            <Text7>{product.content_3}</Text7>
                            <Text7>{product.content_4}</Text7>
                            </div>
                            <LineLite1></LineLite1>
                                <Text2>{product.content_5}</Text2>
                            <Line3></Line3>
                            <h4>Total Buyers: 4</h4>
                            <Line2></Line2>
                            <h4>Contact: {product.contact_number_2} / {product.contact_number_1}</h4>
                            <Line1></Line1>
                            <Text4>{product.address_line_1}</Text4>
                            <Text4>{product.address_line_2}</Text4>
                            <Text4>{product.address_line_3}</Text4>
                            <LineLite1></LineLite1>
                                    <br></br>
                                    <h6>Prices can be changed. this price is minimum price of the {product.title}</h6>

                                    <div className="delete" 
                                    onClick={() => removeProduct(product._id)}>
                                        <Button data-aos="fade-right" variant="contained" color="secondary">
                                        Remove Vendor
                                        </Button>
                                    </div>

                                    <Text8>Give More Priority to This Vendor, Adding This Vendor to Wish to Buy List, Just Click on Wish to Buy</Text8>
                                    <Text8>After Confirmed the Vendor, WeddingsLK Employee will Contact You Soon. If You Need this Vendor Service Just Click on Confirm Vendor</Text8>

                                    <div className="row_btn">

                                        <Link data-aos="fade-right" to="/confirmed_vendors" className="cart"
                                        onClick={() => addConfirmedVendors(product)}>
                                            Confirmed Vendor
                                        </Link>
                                        <Link data-aos="fade-right" to="/wish_to_buy" className="cart"
                                        onClick={() => addWishToBuy(product)}>
                                            Wish To Buy
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="total">
                        <br></br>
                        <h1>Total: Rs {total}</h1>
                        
                        <h5>Note: this is the minimum price of your cart</h5>
                        <br></br>
                        <PaypalButton
                        total={total}
                        tranSuccess={tranSuccess} />
                        <br></br>
                    </div>
                </div>
            </div>
            </Content>
            <br></br>
            <br></br>
            <br></br>
        </Container>   
    );
};

const Text8 = styled.div`
    margin: 5px;
    font-size: 16px;
    font-weight: 700;
    color: darkblue;
`;
const TextTitle = styled.div`
    margin: 5px;
    font-size: 22px;
    font-weight: 700;
    color: darkblue;
    text-transform: uppercase;
`;

const Container = styled.div`

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
    text-transform: lowercase;
`;
const Text3 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkred;
    text-transform: lowercase;
`;
const Text4 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkviolet;
    text-transform: lowercase;
`;
const Text5 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkcyan;
    text-align: center;
    text-transform: lowercase;
`;
const Text6 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkslategray;
    text-align: center;
    text-transform: lowercase;
`;
const Text7 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkslategray;
    text-align: left;
    text-transform: uppercase;
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

const Content = styled.div`
    margin-left: 260px;
    margin-right: 50px;
`;

const Bg = styled.div`
    min-height: 1500px;
    width: 100%;
    background-color: #E0D6DC;
`;


export default UserProfileCart;