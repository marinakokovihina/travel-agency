import React from 'react';
import {
    StyledCase, StyledFooter,
    StyledHeader, StyledHomePage, StyledImg,
    StyledLogoText,
    StyledMenu,
    StyledNav, StyledText, StyledTextTour,
    StyledWrapper
} from "../HomePage/StyledHomePage";
import moscowPhoto from "../../assets/img/moscow.jpeg";
import {Link} from "react-router-dom";
import novgorodPhoto from "../../assets/img/nNovgorod.webp";
import smolenskPhoto from "../../assets/img/smolenck.jpeg";

const MoscowTour = () => {
    return (
        <StyledHomePage>
            <StyledHeader>
                <StyledNav>
                    <StyledLogoText> Travel Agency </StyledLogoText>
                    <StyledMenu>
                        <a href={"/login"}>Войти в аккаунт</a>
                        <a href={"/"}>Список туров</a>
                    </StyledMenu>
                </StyledNav>
            </StyledHeader>
            <StyledWrapper>
                <h3>Тур в Москву :</h3>
                <StyledCase>

                    <StyledImg src={moscowPhoto}/>



                    <StyledTextTour>
                        <h2> Москва </h2>
                        <p><span className="tab">День 1:</span> </p>
                        <p>    <span className = "tab"> После </span> прибытия в Москву предлагается посетить
                            Красную площадь, где вы сможете увидеть символы России: Собор Василия Блаженного,
                            Мавзолей Ленина, ГУМ и Кремль. Затем вы отправитесь на экскурсию в Третьяковскую Галерею, одно
                            из крупнейших хранилищ русского искусства. После этого ужин в ресторане с традиционной русской кухней.</p>

                        <p> <span className = "tab">День 2:</span> </p>
                        <p>   <span className = "tab">Утром</span> предлагается поездка во ВДНХ, где вы посетите
                            достопримечательности научного и культурного комплекса. Затем у вас будет возможность
                            отправиться на экскурсию в исторический музей и кафедральный Собор Христа Спасителя.
                            После обеда посещение одного из самых известных московских парков — Горки. Вечерний ужин в ресторане с панорамным видом на город.</p>


                        <button onClick={()=> {alert("Ваш тур забронирован! ")}} >Забронировать </button>

                    </StyledTextTour>

                </StyledCase>
            </StyledWrapper>
            добавить плашку про соц сети наши
            <StyledFooter>
                тут подвал

            </StyledFooter>





        </StyledHomePage>
    );
};

export default MoscowTour;
