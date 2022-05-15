import React, {useContext, useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import {GlobalState} from '../../GlobalState'
import Button from '@material-ui/core/Button';
import Header from '../header/Header';
import './ExportExample.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function BudgetReport() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [confirmed_vendors, setConfirmedVendors] = state.userAPI.confirmed_vendors
    const [confirmed_wedding_plans, setConfirmedWeddingPlans] = state.userAPI.confirmed_wedding_plans
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }
    const handleExportWithFunction = (event) => {
        savePDF(contentArea.current, { paperSize: "A2" });
    }
    //////////////////get total of prices of [ca] //////////////////
    useEffect(() =>{
        const getTotal = () =>{
            const total = confirmed_vendors.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    },[confirmed_vendors])

    ///////////// remove vendors /////////////
    if(confirmed_vendors.length === 0 && confirmed_wedding_plans.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}><div>
                <Header/>
                <h1>There is no Any Vendors or Wedding Plans in the Confirmed List</h1>
            </div></h2> 
    return (
        <div className="app-content">
            <PDFExport ref={pdfExportComponent} paperSize="A2">
        <div ref={contentArea}>
        <Container>
            <Line></Line>
            <Title>WEDDINGSLK</Title>
            <Info>Budget Report of The Wedding</Info>
        <div >
            <Line></Line>
            {
                confirmed_vendors.map(product => (
                    <div className="detail cart" key={product._id}>
                        <div >
                            <Text1>{product.title} - {product.address_line_1}</Text1>
                            <Text3>{product.description}</Text3>
                            <Text2>Rs {product.price * product.quantity} - {product.max_price}</Text2>
                            <Text4>Prices can be changed. this price is minimum price of the {product.title}</Text4>
                            <Text3>{product.contact_number_1} / {product.contact_number_2}</Text3>
                            
                        </div>
                    </div>
                ))
            }
            {
                confirmed_wedding_plans.map(product => (
                    <div className="detail cart" key={product._id}>
                        <div >
                            <Text1>{product.title}</Text1>
                            <VendorBox>
                            <LineSmall></LineSmall>
                                <Box>
                                    <Text1>{product.vendor_1}</Text1>
                                    <Text3>{product.category_1}</Text3>
                                    <Text4>{product.description_1}</Text4>
                                    <Text3>Rs {product.price_1 * product.quantity} - {product.max_price_1}</Text3>
                                    <Text4>Prices can be changed. this price is minimum price of the {product.title_1}</Text4>
                                    <Text3>{product.address_1}</Text3>
                                </Box>
                                <LineSmall></LineSmall>
                                <Box>
                                    <Text1>{product.vendor_2}</Text1>
                                    <Text3>{product.category_2}</Text3>
                                    <Text4>{product.description_2}</Text4>
                                    <Text3>Rs {product.price_2 * product.quantity} - {product.max_price_2}</Text3>
                                    <Text4>Prices can be changed. this price is minimum price of the {product.title_2}</Text4>
                                    <Text3>{product.address_2}</Text3>
                                </Box>
                                { product.vendor_3 == '' ? '' :
                                    <div>
                                        <LineSmall></LineSmall>
                                        <Box>
                                            <Text1>{product.vendor_3}</Text1>
                                            <Text3>{product.category_3}</Text3>
                                            <Text4>{product.description_3}</Text4>
                                            <Text3>Rs {product.price_3 * product.quantity} - {product.max_price_3}</Text3>
                                            <Text4>Prices can be changed. this price is minimum price of the {product.title_3}</Text4>
                                            <Text3>{product.address_3}</Text3>
                                        </Box>
                                    </div>
                                }
                            </VendorBox>
                        </div>
                    </div>
                ))
            }
            </div>  
            <div >
            <Text1>Summery of Cost</Text1>
            <Line></Line>
            {
                confirmed_vendors.map(product => (
                    <div  key={product._id}>
                        <div >
                            <Text2>Cost Range of {product.title} Services: Rs {product.price * product.quantity} - {product.max_price}</Text2>
                        </div>
                    </div>
                ))
            }
            {
                confirmed_wedding_plans.map(product => (
                    <div  key={product._id}>
                        <div >
                            <Text2>Cost Range of {product.vendor_1} Services: Rs {product.price_1 * product.quantity} - {product.max_price_1}</Text2>
                            <Text2>Cost Range of {product.vendor_2} Services: Rs {product.price_2 * product.quantity} - {product.max_price_2}</Text2>
                            { product.vendor_3 == '' ? '' :
                                <Text2>Cost Range of {product.vendor_3} Services: Rs {product.price_3 * product.quantity} - {product.max_price_3}</Text2>
                            }
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <br></br>
                <LineLong></LineLong>
                <Text1_1>Total Minimum Estimated Cost for Confirmed Vendors and Wedding Plans: Rs {total}</Text1_1>
                <LineLong></LineLong>
                <Text2>Note: this is the minimum cost of your wedding services </Text2>
                <Text3>This cost definetly will be increased</Text3>
                <Line></Line>
                <Text3>Thank You for Your Interesting, WeddingsLK Provide You Many Services</Text3>
                <Text3>We are WeddingsLK, Stay With Us</Text3>
                <Text4>Kaluthara,</Text4>
                <Text4>Mathugama,</Text4>
                <Text4>Aluthgama Road,</Text4>
                <Text4>No 234/56 (Near Court)</Text4>
                <Text4>0769018490</Text4>
                <Line></Line>
                <br></br>
            </div>
        </div>
        </Container>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </PDFExport>
        <div className="button-area" >
            <Button  primary={true} onClick={handleExportWithComponent}>Download The Budget Report</Button>
            <Button onClick={handleExportWithFunction}>Export File</Button>
            </div>
            <br></br>
                <br></br>
                <br></br>
        </div>
    )
};


const Container = styled.div`
    margin-right: 50px;
    margin-left: 50px;
    div {
        display: flex;
        flex-direction: column;
    }
`;
const Line = styled.div`
    padding: 4px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    width: 500px;
`;
const LineLong = styled.div`
    padding: 3px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    width: 1200px;
`;

const LineSmall = styled.div`
    padding: 2px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    width: 500px;
`;

const Info = styled.div`
    margin: 10px;
    font-weight: 500;
`;

const Title = styled.div`
    margin: 10px;
    font-weight: 700;
`;

const Text1 = styled.div`
    margin: 5px;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    /* border-radius: 1px;
    border-color: white;
     */

`;
const Text1_1 = styled.div`
    margin: 5px;
    font-size: 25px;
    font-weight: 700;
    /* text-transform: uppercase; */
    /* border-radius: 1px;
    border-color: white;
     */

`;
const Text2 = styled.div`
    margin: 5px;
    font-size: 20px;
`;
const Text3 = styled.div`
    margin: 5px;
    font-size: 15px;
`;

const Text4 = styled.div`
    margin: 5px;
    font-size: 10px;
`;

const VendorBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    margin: 5px;
`;


export default BudgetReport
