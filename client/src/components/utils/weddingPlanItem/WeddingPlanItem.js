import React, {useEffect} from 'react'
import BtnRender from './BtnRender'
import styled from "styled-components";
import Aos from "aos";
import 'aos/dist/aos.css';

import ReactStars from "react-rating-stars-component";


function WeddingPlanItem({weddingPlan, isAdmin, deleteWeddingPlan, handleCheck}) {

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

    return (
        <Product_card data-aos="fade-left">
            {
                isAdmin && <input type="checkbox" checked={weddingPlan.checked}
                onChange={() => handleCheck(weddingPlan._id)} />
            }
            <img data-aos="fade-left" src={weddingPlan.images_1.url} alt="" />

            <h2 title={weddingPlan.title}>{weddingPlan.title}</h2>
            <ReactStars 
                        count={6}
                        value={weddingPlan.rating}
                        onChange={false}
                        size={24}
                        activeColor="#ffd700"
                    />

            <Box>
                <Product_box>
                    <h2 title={weddingPlan.vendor_1}>{weddingPlan.vendor_1}</h2>
                    <h5>Service: {weddingPlan.category_1}</h5>
                    <span>Rs {weddingPlan.price_1} - Rs {weddingPlan.max_price_1}</span>
                    <p>{weddingPlan.description_1}</p>
                    {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                    <h5>Address: {weddingPlan.address_1}</h5>
                </Product_box>
                <Product_box>
                    <h2 title={weddingPlan.vendor_2}>{weddingPlan.vendor_2}</h2>
                    <h5>Service: {weddingPlan.category_2}</h5>
                    <span>Rs {weddingPlan.price_2} - Rs {weddingPlan.max_price_2}</span>
                    <p>{weddingPlan.description_2}</p>
                    {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                    <h5>Address: {weddingPlan.address_2}</h5>
                </Product_box>
                <Product_box>
                    { weddingPlan.vendor_3 == "" ? null : <div>
                    <h2 title={weddingPlan.vendor_3}>{weddingPlan.vendor_3}</h2>
                    <h5>Service: {weddingPlan.category_3}</h5>
                    <span>Rs {weddingPlan.price_3} - Rs {weddingPlan.max_price_3}</span>
                    <p>{weddingPlan.description_3}</p>
                    {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                    <h5>Address: {weddingPlan.address_3}</h5>
                    </div>
                }
                </Product_box>
            </Box>

            
            <BtnRender weddingPlan={weddingPlan} deleteWeddingPlan={deleteWeddingPlan} />
        </Product_card>
    )
}

const Product_card = styled.div`

  width: 1200px;
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

export default WeddingPlanItem;
