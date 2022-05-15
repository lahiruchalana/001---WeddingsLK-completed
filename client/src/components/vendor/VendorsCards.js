import styled from "styled-components";
import React, { useState, useEffect } from 'react';

function VendorsCards({ id, name, serviceType, description, rating, image}) {
    return (
        <Vendor>
            <VendorImage>
                <img src= {image} alt=""></img>
            </VendorImage>
            <VendorInfo>
                <VendorName>
                    <a href="/">{name}</a>
                </VendorName>
                <VendorServiceType>{serviceType}</VendorServiceType>
                <VendorDescription>{description}</VendorDescription>
                <VendorRating>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </VendorRating>
            </VendorInfo>
            <button>Buy Service</button>
        </Vendor>
    )

}

const Vendor = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #270721;
    padding: 20px 20px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
    max-width: 100%;
    button {
        background-color: #650D53;
        color: white;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        word-spacing: 4px;
        letter-spacing: 2px;
        border-radius: 10px;
        border-color: white;
    }
`;

const VendorImage = styled.div`
    img {
        max-width: 400px;
        max-height: 500px;
        object-fit: contain;
        z-index: 1;
    }
`;


const VendorInfo = styled.div`
    color: white;
`;

const VendorName = styled.div`
    font-size: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 4px;
    a {
        z-index: 5;
        text-decoration: none;
        color: white;
    }
`;

const VendorServiceType = styled.div`
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;
`;

const VendorDescription = styled.div`
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 300;
    max-width: 400px;
    color: gray;
`;

const VendorRating = styled.div`
    display: flex;
`;
export default VendorsCards;
