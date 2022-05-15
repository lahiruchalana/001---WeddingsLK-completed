import React, {useEffect} from 'react'
import styled from 'styled-components';
// import BtnRender from './BtnRender'
import Button from '@material-ui/core/Button';
import Aos from "aos";
import 'aos/dist/aos.css';

function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

    return (
        <Product_card>

            <div data-aos="fade-left" className="product_box">
                <h1 data-aos="fade-left" name={user.name}>{user.name}</h1>
                
                { user.role === 0 ? <span>User Role: Customer </span>
                :   user.role === 1 ? <span>User Role: Admin </span> 
                    : <span>User Role: Employee</span>
                }

                <h5>{user.email}</h5>
                <h5>0{user.contactFirst}</h5>
                <h5>0{user.contactSecond}</h5>

                <h6>{user.updatedAt}</h6>

                <br></br>

            </div>

        </Product_card>
    )
}

const Product_card = styled.div`
  width: 400px;
  overflow: hidden;
  height: 200px;
  padding: 15px;
  box-shadow: 0 0 15px rgb(104, 7, 104);
  margin: 10px 0;
  position: relative;
`;

export default UserItem
