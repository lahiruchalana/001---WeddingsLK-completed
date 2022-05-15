import styled from "styled-components";
import React from "react";

function ServicesCards2({ id, serviceType, image}) {
    return (
        <Container>
            <Content>
                <ServiceImage>
                    <img src= {image} alt=""></img>
                </ServiceImage>
                <ServiceType>
                    <a href="/">{serviceType}</a>
                </ServiceType>
            </Content>
        </Container>
    )

}



////////////////////////////////  Image size -        width: 1300px;
///////////////////////////////                       height: 300px;




const Container = styled.div`

`;

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #1C180B;
    padding: 20px 20px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 1400px;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 5px;
`;

const ServiceImage = styled.div`
    img {
        width: 655px;
        height: 300px;
        object-fit: contain;
        z-index: 1;
    }
`;

const ServiceType = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 4px;

    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;



    a {
        z-index: 1;
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 12px;


        font-size: 18px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

  
        &:before {
            background-color: white;
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }  

        &:hover {
            a:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            z-index: 5;
            }
        } 
    
`;

export default ServicesCards2;