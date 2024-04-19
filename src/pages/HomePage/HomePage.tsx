import React from 'react';
import {
    StyledCase, StyledFooter,
    StyledHeader,
    StyledHomePage, StyledImg,
    StyledLogoText,
    StyledMenu,
    StyledNav, StyledText,
    StyledWrapper
} from "./StyledHomePage";
import moscowPhoto from "./../../assets/img/moscow.jpeg"
import novgorodPhoto from "./../../assets/img/nNovgorod.webp"
import smolenskPhoto from "./../../assets/img/smolenck.jpeg"
import {Link} from "react-router-dom";
const HomePage = () => {
    return (
        <StyledHomePage>
            <StyledHeader>
                <StyledNav>
                        <StyledLogoText> Travel Hype </StyledLogoText>
                        <StyledMenu>
                            <a href={"/login"}>Войти в аккаунт</a>
                            <a href={"/register"}>Зарегистрироваться</a>
                        </StyledMenu>
                </StyledNav>
            </StyledHeader>
            <StyledWrapper>
                <h2>Популярные направления:</h2>
                <StyledCase>

                    <StyledImg src={moscowPhoto}/>



                    <StyledText>
                        <h2> Москва </h2>
                        <p ><span className="tab">Добро пожаловать в самое сердце России </span>- в мощные объятия Москвы, города, в котором каждый камень навеян историей и величием прошлого. </p>
                        <p> <span className="tab">Этот тур в Москву </span>станет для вас настоящим путешествием во времени и культуре, окутав вас магией величественного прошлого и
                            умиротворенностью настоящего. Погрузитесь в атмосферу Москвы - города, который пленит своей красотой
                            и могуществом, и откройте для себя новые грани волшебства и истории</p>
                        <Link className="linkStyle" to="/moscow"><button >Узнать подробности о туре</button></Link>

                    </StyledText>

                </StyledCase>
                <StyledCase>
                    <StyledImg src={novgorodPhoto}/>



                    <StyledText>
                        <h2> Нижний Новгород </h2>
                        <p> <span className="tab">Добро</span> пожаловать в Нижний Новгород, город на берегах Волги, где каждая улица хранит древние секреты и тайны, переплетенные с великими событиями истории.</p>
                        <p><span className="tab">Путешествие</span> в Нижний Новгород заставит вас ощутить наследие великих событий и увлекательных обрядов, сделая ваш отдых незабываемым и богатым впечатлениями. Не упустите возможность погрузиться в магию этого удивительного города и почувствовать его дух истории на каждом этапе вашего путешествия.
                        </p>
                        <Link className="linkStyle" to="/nnovgorod"><button>Узнать подробности о туре</button></Link>

                    </StyledText>

                </StyledCase>
                <StyledCase>
                    <StyledImg src={smolenskPhoto}/>



                    <StyledText>
                        <h2> Смоленск </h2>
                        <p> <span className="tab">Добро</span> пожаловать в Смоленск, город на реке Днепр,
                            где каждый уголок пропитан духом истории и глубокими корнями культуры, уходящими веками назад.
                        </p>
                        <p>
                            <span className="tab">Этот</span> тур в Смоленск откроет перед вами богатое наследие прошлого и культурные сокровища, погрузив в атмосферу величия древнего города и современного развития. Ощутите волшебство времени, проникнитесь уникальной атмосферой уютных улиц и ухоженных площадей Смоленска, откроете для себя новые грани истории, живущей на каждом шагу.



                        </p>
                        <Link className="linkStyle" to="/smolensk"><button>Узнать подробности о туре</button></Link>

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


export default HomePage;
