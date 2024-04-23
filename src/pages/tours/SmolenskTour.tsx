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
import smolenskPhoto from "./../../assets/img/smolenck.jpeg"

const SmolenskTour = () => {
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
                <h3>Тур в Смоленск :</h3>
                <StyledCase>

                    <StyledImg src={smolenskPhoto}/>



                    <StyledTextTour>
                        <h2> Смоленск </h2>
                        <p><span className="tab">День 1:</span> </p>
                        <p> <span className = "tab">После </span> прибытия в Смоленск предлагается начать знакомство с городом с посещения его исторического центра. Вы сможете увидеть знаменитую Смоленскую крепость, построенную в XII веке, а также побродить по улицам, где сохранились дома с деревянными заборами в старинном стиле. После этого будет экскурсия в Смоленский кремль с посещением музея истории города. Ужин в уютном ресторане с местными деликатессами.

                        </p>
                            <p> <span className = "tab">День 2:</span> </p>
                        <p>   <span className = "tab">Утром</span>  предлагается поездка к Смоленскому озеру, где вы сможете насладиться природой и чистым воздухом. После этого экскурсия в музей-усадьбу "Сафоново", где вы сможете узнать о быте и культуре смолян. Затем посещение Смоленского Государственного музея изобразительных искусств. В конце дня ужин в ресторане с видом на озеро.

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

export default SmolenskTour;
