import React from 'react';
import {
    StyledCase, StyledFooter,
    StyledHeader, StyledHomePage, StyledImg,
    StyledLogoText,
    StyledMenu,
    StyledNav, StyledText,
    StyledWrapper
} from "./HomePage/StyledHomePage";
import catPhoto from "../assets/img/cat.jpeg";
import {Link} from "react-router-dom";
import {UserLogin} from "../store/store";

const ProfilePage = () => {
    return (
        <StyledHomePage>
            <StyledHeader>

            </StyledHeader>
            <StyledWrapper>
                <h3>Ваш профиль!</h3>
                <StyledCase>

                    <StyledImg src={catPhoto}/>



                    <StyledText>
                        <h2> Информация о пользователе:  </h2>

                        <p className="infoId">
                            <span className="info"> Фамилия : {UserLogin.getState().lastName}</span>
                            <span className="info"> Имя : {UserLogin.getState().firstName}</span>
                            <span className="info"> Телефон : {UserLogin.getState().phone}</span>
                            <Link className="linkStyle" to="/"><button > Перейти на страницу с турами! </button> </Link>
                        </p>

                    </StyledText>

                </StyledCase>
            </StyledWrapper>
            добавить плашку про соц сети наши
            <StyledFooter>
                тут подвал

            </StyledFooter>





        </StyledHomePage>
    );
};

export default ProfilePage;
