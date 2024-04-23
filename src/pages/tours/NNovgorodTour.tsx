import React from 'react';
import {
    StyledCase, StyledFooter,
    StyledHeader,
    StyledHomePage, StyledImg,
    StyledLogoText,
    StyledMenu,
    StyledNav, StyledTextTour,
    StyledWrapper
} from "../HomePage/StyledHomePage";
import novgorodPhoto from "./../../assets/img/nNovgorod.webp"

const NNovgorodTour = () => {
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
                <h3>Тур в Нижний Новгород :</h3>
                <StyledCase>

                    <StyledImg src={novgorodPhoto}/>



                    <StyledTextTour>
                        <h2> Нижний Новгород </h2>
                        <p><span className="tab">День 1:</span> </p>
                        <p> <span className = "tab">После </span>прибытия в Нижний Новгород предлагается посетить исторический центр города, где вы сможете увидеть Кремль,
                            Покровскую церковь, Чкаловскую лестницу и другие достопримечательности. Затем на программе экскурсия в
                            Нижегородский кремль с посещением памятников архитектуры и музеев. Ужин в ресторане с уютной атмосферой и традиционными блюдами региона.</p>

                        <p> <span className = "tab">День 2:</span> </p>
                        <p>   <span className = "tab">Утром</span> предлагается поездка на известное место "Стрелку" - место,
                            где Ока впадает в Волгу, с прекрасными видами на город. Затем экскурсия в Ледовый Дворец и Кремлевский собор.
                            После обеда посещение Музея истории Нижегородской железной дороги. Вечерний ужин в ресторане с рекой.

                        </p>


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

export default NNovgorodTour;
