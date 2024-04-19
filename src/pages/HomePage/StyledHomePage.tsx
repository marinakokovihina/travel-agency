import styled from "styled-components";
import React from "react";

export const StyledHomePage = styled.div `
  background-color: #0c73fe;
  min-height: 100vh;
  min-width: 100vw;
 
  
`;
export const StyledHeader = styled.header `
  display: flex;
  justify-content: center;
`
export const StyledLogoText = styled.p `
  font-size: 60px;
  color: white;
  font-family: "Open Sans";
  font-weight: bold;
  padding-left: 400px;



`

export const StyledNav = styled.div`
  width: 95%;
  height: 300px;
  border-radius: 20px;
  //background-color: white;
  display: flex;
  margin-top: 120px;
  justify-content: space-between;
  align-items: center;

`;


export const StyledMenu = styled.div `
    a {
      text-decoration: none;
      color: white;
      font-size: 30px;
      font-family: "Open Sans", "Courier New";
      padding-left: 30px;

    }
      padding-right: 150px;
      display: flex;
      justify-content: space-between;
`;

export const StyledWrapper = styled.div `
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0c73fe;
  h2 {
    color: white;
    font-size: 44px;
  }
  
`
export const StyledImg = styled.img `
  max-width: 45%;
  max-height: 80%;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 50px;
  border-radius: 10px;
  display: block;



`
export const StyledText = styled.div `
  min-width: 45%;
  min-height: 90%;
  margin: 20px 40px 20px 40px;
 
   
  
  letter-spacing: 0.9px;
  line-height: 37px;

  h2 {
    font-size: 45px;
    text-align: center;
  }

  p {
    font-size: 27px;
  }
  .tab {
    padding-left: 40px;
  }
  
  button{
    display: flex;
    justify-content: center;
    background-color: #0c73fe;
    margin: 0 auto;
    border: none;
    width: 450px;
    height: 70px;
    text-decoration: none;
    color: white;
    outline: none;
    border-radius: 20px;
    align-items: center;
    line-height: 1;
    font-size: 26px;
   
  }
  .linkStyle {
    text-decoration: none;
  }
`
export const StyledCase = styled.div `
  min-height: 700px;
  max-width: 85%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  object-fit: cover;
`

export const StyledFooter = styled.footer `
  margin-top: auto;
  width: 100%;
  background-color: white;
  height: 200px;
  padding-top: 100px;
`
