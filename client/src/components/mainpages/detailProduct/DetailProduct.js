import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

import Aos from "aos";
import 'aos/dist/aos.css'; 

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const addConfirmedVendors = state.userAPI.addConfirmedVendors
    const addWishToBuy = state.userAPI.addWishToBuy
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }

        Aos.init({ duration: 2500 });


    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
            <div data-aos="fade-left" className="detail">
                <div className="box-detail">
                    <div >
                        <img data-aos="fade-left" src={detailProduct.images.url} alt="" />
                        <Line4></Line4>
                        <Text3>{detailProduct.content_5}</Text3>
                    </div>
                </div>        
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                    </div>
                    <LineLite1></LineLite1>
                    <h4>Rs {detailProduct.price} - {detailProduct.max_price}</h4>
                    <LineLite1></LineLite1>
                    <h4>{detailProduct.address_line_1}</h4>
                    <LineLite1></LineLite1>
                    <Text5>{detailProduct.description}</Text5>
                    <Line3></Line3>
                    <Text6>{detailProduct.content}</Text6>
                    <Line3></Line3>
                    <Text5>{detailProduct.content_2}</Text5>
                    <LineLite1></LineLite1>
                    <div className="row">
                    <Text7>{detailProduct.content_3}</Text7>
                    <Text7>{detailProduct.content_4}</Text7>
                    </div>
                    <LineLite1></LineLite1>
                        <Text2>{detailProduct.content_5}</Text2>
                    <Line3></Line3>
                    <h4>Total Buyers: 4</h4>
                    <Line2></Line2>
                    <h4>Contact: {detailProduct.contact_number_2} / {detailProduct.contact_number_1}</h4>
                    <Line1></Line1>
                    <Text4>{detailProduct.address_line_1}</Text4>
                    <Text4>{detailProduct.address_line_2}</Text4>
                    <Text4>{detailProduct.address_line_3}</Text4>
                    <LineLite1></LineLite1>
                    <Link data-aos="fade-left" to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        Add to Cart Now
                    </Link>
                    <Text8>After Confirmed the Vendor, WeddingsLK Employee will Contact You Soon. If You Need this Vendor Service Just Click on Confirm Vendor</Text8>
                    <Link data-aos="fade-left" to="/confirmed_vendors" className="cart"
                    onClick={() => addConfirmedVendors(detailProduct)}>
                        Confirm Vendor
                    </Link>
                    <Text8>Give More Priority to This Vendor, Adding This Vendor to Wish to Buy List, Just Click on Wish to Buy</Text8>
                    <Link data-aos="fade-left" to="/wish_to_buy" className="cart"
                    onClick={() => addWishToBuy(detailProduct)}>
                        Wish To Buy
                    </Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <LineLite1></LineLite1>
                    <Text1 >Other Services: {detailProduct.other_services}</Text1>
                    <LineLite1></LineLite1>
                </div>
            </div>

            <div>
                <h1>Related Vendors</h1>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
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
const Text8 = styled.div`
    margin: 5px;
    font-size: 16px;
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
export default DetailProduct
