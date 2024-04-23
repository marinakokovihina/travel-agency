import styled from "styled-components";

export const StyledBody = styled.div `
  height: 100vh;
  width: 100%;
  background-color: #0c73fe;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledMain = styled.main `
  
  
`
export const ModalWindow = styled.div `
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 600px;
  height: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-family: "Open Sans";
  .lastInput {
    margin-bottom: 30px;
  }
  input {
    width: 400px;
    height: 60px;
    margin: 10px;
    border-radius: 10px;
    border-color: #0c73fe;
    font-size: 18px;
    border-width: 0.5px;
    padding-left: 15px;
  }

  h2 {
    color: #0c73fe;
    font-size: 32px;

  }
  button{
    min-height: 65px;
    min-width: 250px;
    border-radius: 20px;
    background-color: #0c73fe;
    color: white;
    border-width: 0.5px;
    border-color: white;
    font-size: 20px;
  }
`
