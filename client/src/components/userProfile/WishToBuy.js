import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
// import PaypalButton from '../../userProfile/PaypalButton'
import Button from '@material-ui/core/Button';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SideBarUser from './SideBarUser';
import {Link} from 'react-router-dom'
import Aos from "aos";
import 'aos/dist/aos.css';


function WishToBuy() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [wish_to_buy, setWishToBuy] = state.userAPI.wish_to_buy
    const [confirmed_vendors, setConfirmedVendors] = state.userAPI.confirmed_vendors
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const addConfirmedVendors = state.userAPI.addConfirmedVendors


    //////////////////get total of prices of [cart] //////////////////
    useEffect(() =>{
        const getTotal = () =>{
            const total = wish_to_buy.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }


        Aos.init({ duration: 2500 });

        getTotal()

    },[cart])

    const addToWishToBuy = async (wish_to_buy) =>{
        await axios.patch('/user/addwish_to_buy', {wish_to_buy}, {
            headers: {Authorization: token}
        })
    }
    
    ///////////// remove vendors /////////////
    const removeWishToBuy = id =>{
        if(window.confirm("Do you want to Remove this Vendor?")){
            wish_to_buy.forEach((item, index) => {
                if(item._id === id){
                    wish_to_buy.splice(index, 1)
                }
            })

            setWishToBuy([...wish_to_buy])
            addToWishToBuy(wish_to_buy)
        }
    }

    if(wish_to_buy.length === 0) 
        return (<Content>
            <Header/>
            <SideBarUser/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h2 style={{marginLeft: "250px", textAlign: "center", fontSize: "40px"}}>There is no any Wish to Buy Vendors</h2>
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
            <TextTitle data-aos="fade-left">Your Vendors of Wish To Buy List</TextTitle>
            <br></br>
            <br></br>
            {
                wish_to_buy.map(product => (
                    <div data-aos="fade-left" className="detail cart" key={product._id}>
                    <img  data-aos="fade-left" src={product.images.url} alt="" />
                    
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
                            <h6>Prices can be changed. this price is minimum price of the {product.title}</h6>
                            
                            <div className="delete" 
                            onClick={() => removeWishToBuy(product._id)}>
                                <Button variant="contained" color="secondary">
                                Remove Wish to Buy Vendor 
                                </Button>
                            </div>
                            <Text8>After Confirmed the Vendor, WeddingsLK Employee will Contact You Soon. If You Need this Vendor Service Just Click on Confirm Vendor</Text8>

                            <div className="row_btn">

                                <Link data-aos="fade-left" to="/confirmed_vendors" className="cart"
                                onClick={() => addConfirmedVendors(product)}>
                                    Confirmed Vendor
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        </Container>
        <Footer/>
        </div>
    )
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

const Container = styled.div`
    margin-right: 50px;
    margin-left: 250px;
`;

const Content = styled.div`

`;

export default WishToBuy
