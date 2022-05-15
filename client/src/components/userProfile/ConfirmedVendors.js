import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {GlobalState} from '../../GlobalState'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SideBarUser from './SideBarUser';
import Aos from "aos";
import 'aos/dist/aos.css';
import ReactStars from "react-rating-stars-component";


function ConfirmedVendors() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [confirmed_vendors, setConfirmedVendors] = state.userAPI.confirmed_vendors
    const [products, setProducts] = state.productsAPI.products
    const [token] = state.token
    const [total, setTotal] = useState(0)

    const [rating, setRating] = state.productsAPI.rating
    const [callback, setCallback] = state.productsAPI.callback


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    //////////////////get total of prices of [cart] //////////////////
    useEffect(() =>{
        const getTotal = () =>{
            const total = confirmed_vendors.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        Aos.init({ duration: 2500 });


        getTotal()

    },[cart])

    const addToConfirmedVendors = async (confirmed_vendors) =>{
        await axios.patch('/user/addconfirmed_vendors', {confirmed_vendors}, {
            headers: {Authorization: token}
        })
    }

    ///////////// remove vendors /////////////
    const removeConfirmedVendor = id =>{
        if(window.confirm("Do you want to Remove this Vendor?")){
            confirmed_vendors.forEach((item, index) => {
                if(item._id === id){
                    confirmed_vendors.splice(index, 1)
                }
            })

            setConfirmedVendors([...confirmed_vendors])
            addToConfirmedVendors(confirmed_vendors)
        }
    }
    if(confirmed_vendors.length === 0) 
        return(<Content>
            <Header/>
            <SideBarUser/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h2 data-aos="fade-left" style={{marginLeft: "250px", textAlign: "center", fontSize: "40px"}}>There is no any Confirmed Services of Vendors</h2>
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
            <TextTitle data-aos="fade-right">Your Confirmed Vendors</TextTitle>
            <br></br>
            <br></br>
            {
                confirmed_vendors.map(product => (
                    <div data-aos="fade-right" className="detail cart" key={product._id}>
                    <img data-aos="fade-right" src={product.images.url} alt="" />
                    
                    <div className="box-detail">
                    <h2 data-aos="fade-right">{product.title}</h2>
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

                    <h4>Rate {product.title} Service</h4>
                    <Star>
                        <ReactStars 
                            count={6}
                            onChange={ratingChanged}
                            size={28}
                            activeColor="#ffd700"
                        />
                    </Star>
                    <LineLite1></LineLite1>
                            <h6>Prices can be changed. this price is minimum price of the {product.title}</h6>

                            <div className="delete" 
                            onClick={() => removeConfirmedVendor(product._id)}>
                                <Button variant="contained" color="secondary">
                                Remove Confirmed Service of {product.title}
                                </Button>
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

const Star = styled.div`
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: 180px;
`;

const Container = styled.div`
    margin-right: 50px;
    margin-left: 250px;
`;

const Content = styled.div`

`;

export default ConfirmedVendors
