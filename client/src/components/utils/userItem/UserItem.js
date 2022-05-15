import React from 'react'
import styled from 'styled-components';


function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

    return (
        <Product_card>
            <div className="product_box">
                <h1 name={user.name}>{user.name}</h1>                
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
