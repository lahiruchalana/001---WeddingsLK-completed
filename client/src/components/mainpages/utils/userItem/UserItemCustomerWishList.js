import React, {useEffect} from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Aos from "aos";
import 'aos/dist/aos.css';


function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

  useEffect(() =>{
    Aos.init({ duration: 2500 });
},[])

    return (
        <div data-aos="fade-left">
            { user.role == 1 || user.role == 2 ? '' : 
                user.wish_to_buy.length && user.wish_to_buy_wedding_plans.length === 0 ? null 
                  :
                    <Product_card data-aos="fade-left">
                
                        <div data-aos="fade-left" className="product_box">
                            <TextName data-aos="fade-left" name={user.name}>{user.name}</TextName>
                            <h5>{user.email}</h5>
                            <h5>0{user.contactFirst}</h5>
                            <h5>0{user.contactSecond}</h5>
                            <br></br>
                        
                            <div>{user.wish_to_buy.map(wish_to_buy => {
                                return( 
                                <>
                                    <div data-aos="fade-left">
                                        <Text1>{wish_to_buy.title}</Text1>
                                        <Text2>{wish_to_buy.address_line_1}</Text2>
                                        <Text3>Rs: {wish_to_buy.price} - {wish_to_buy.max_price}</Text3>
                                        <Line1></Line1>
                                        <br/>
                                    </div>
                                </>
                            )})}</div>
                            <div>{user.wish_to_buy_wedding_plans.map(wish_to_buy => {
                                return( 
                                <>
                                    <Text1>{wish_to_buy.title}</Text1>
                                    <div>
                                        <Text4>{wish_to_buy.vendor_1}</Text4>
                                        <Text3>Rs: {wish_to_buy.price_1} - {wish_to_buy.max_price_1}</Text3>
                                        <Text2>{wish_to_buy.address_1}</Text2>
                                        <br></br>
                                    </div>
                                    <div>
                                        <Text4>{wish_to_buy.vendor_2}</Text4>
                                        <Text3>Rs: {wish_to_buy.price_2} - {wish_to_buy.max_price_2}</Text3>
                                        <Text2>{wish_to_buy.address_2}</Text2>
                                        <br></br>
                                    </div>
                                    { wish_to_buy.vendor_3 == '' ? '' :
                                        <div>
                                            <Text4>{wish_to_buy.vendor_3}</Text4>
                                            <Text3>Rs: {wish_to_buy.price_3} - {wish_to_buy.max_price_3}</Text3>
                                            <Text2>{wish_to_buy.address_3}</Text2>
                                            <br></br>
                                            <Line1></Line1>
                                        </div>
                                    }
                                </>
                            )})}</div>
                        </div>
                    </Product_card>
            }
        </div>

    )
}

const Product_card = styled.div`
  width: 900px;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px rgb(5, 97, 5);
  margin: 10px 0;
  position: relative;
`;

const Line1 = styled.div`
  margin-top: 8px;
  padding: 1px;
  width: 700px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
`;

const TextName = styled.div`
  width: auto;
  font-size: 30px;
  font-weight: 700;
  color: darkred;
  text-align: left;
  text-transform: uppercase;
`;

const Text1 = styled.div`
  width: auto;
  font-size: 22px;
  font-weight: 700;
  color: darkblue;
  text-align: center;
  text-transform: uppercase;
`;

const Text4 = styled.div`
  width: auto;
  font-size: 20px;
  font-weight: 700;
  color: darkred;
  text-align: center;
  text-transform: uppercase;
`;

const Text2 = styled.div`
  width: auto;
  font-size: 16px;
  font-weight: 700;
  color: darkgreen;
  text-align: center;
`;
const Text3 = styled.div`
  width: auto;
  font-size: 12px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 8px;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;


export default UserItem
