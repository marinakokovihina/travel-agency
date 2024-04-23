import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoscowTour from "./pages/tours/MoscowTour";
import SmolenskTour from "./pages/tours/SmolenskTour";
import NNovgorodTour from "./pages/tours/NNovgorodTour";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import styled from "styled-components";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/auth/RegisterPage";






// фейковая аутентификация потом сюда ченить прикрутить

function App() {
  return (
      <StyledApp>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/moscow" element={<MoscowTour />} />
                  <Route path="/smolensk" element={<SmolenskTour />} />
                  <Route path="/nnovgorod" element={<NNovgorodTour />} />
                  <Route path="*" element={<NotFoundPage />}/>

                  <Route path="/login" element={ <LoginPage />} />
                  <Route path="/register" element={ <RegisterPage />} />
                  <Route path="/profile" element={<ProfilePage/>}/>
              </Routes>
          </BrowserRouter>
      </StyledApp>
    );
  };

  const StyledApp = styled.div `
    //margin-top: -15px;
    padding: 0;
    font-face {
    font-family: 'Open Sans';
    src: url('./assets/Open_Sans/static/OpenSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

body {
    font-family: 'Open Sans', sans-serif;
}
`;


export default App;
