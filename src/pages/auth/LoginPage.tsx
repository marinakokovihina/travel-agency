import React, {useState} from 'react';
import {ModalWindow, StyledBody, StyledMain} from "./StyledAuth";
import {UserLogin} from "../../store/store";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [phoneValue, setPhoneValue] = useState('');
    const navigation = useNavigate();

    const updateData = async () => {
        await UserLogin.setState((state) => ({firstName: 'Марина'}));
        await UserLogin.setState((state) => ({lastName: 'Коковихина'}));
        await UserLogin.setState((state) => ({phone: '+79524561791'}));
        navigation("/profile")

    }
    const navigateToReg = () => {
        navigation("/register")

    }
    return (
        <StyledBody>
            <ModalWindow>
                <h2> Войти в аккаунт </h2>
                <input placeholder="Введите номер телефона"/>
                <input type={"password"} className = "lastInput" placeholder = "Введите пароль" />
                <button onClick={updateData}> Войти в аккаунт </button>

                <p onClick={navigateToReg}> Ещё нет аккаунта? Зарегистрироваться! </p>
            </ModalWindow>
        </StyledBody>
    );
};

export default LoginPage;
