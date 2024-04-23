import React, {useEffect, useState} from 'react';
import {ModalWindow, StyledBody} from "./StyledAuth";
import {AuthUser, UserLogin} from "../../store/store";
import {Link, useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigation = useNavigate();
    const navigateToLogin = () => {
        navigation("/login")

    }
    const updateData = async () => {
        await UserLogin.setState((state) => ({firstName: firstNameValue}));
        await UserLogin.setState((state) => ({lastName: lastNameValue}));
        await UserLogin.setState((state) => ({phone: phoneValue}));
        await UserLogin.setState((state) => ({password: passwordValue}));

        const NameLog = UserLogin.getState().firstName;
        const LastNameLog = UserLogin.getState().lastName;
        const PhoneLog = UserLogin.getState().phone;
        const PasswordLog = UserLogin.getState().password;

        console.log('Значение поля "Name":', NameLog);
        console.log('Значение поля "LastName":', LastNameLog);
        console.log('Значение поля "Phone":', PhoneLog);
        console.log('Значение поля "Password":', PasswordLog);

        if (NameLog !== '' && LastNameLog !== '' && PhoneLog !== '' && PasswordLog !== '') {
            AuthUser.setState({ auth: true });
            console.log(AuthUser.getState().auth);
            navigation("/profile")
        } else {
            alert("Введите данные для регистрации!");
        }
    }
    const changeFirstName = (e:any) => {
        setFirstNameValue(e.target.value);
    }

    const changeLastName = (e:any) => {
        setLastNameValue(e.target.value);
    }

    const changePhone = (e:any) => {
        setPhoneValue(e.target.value);
    }

    const changePassword = (e:any) => {
        setPasswordValue(e.target.value);
    }

    return (
        <StyledBody>
            <ModalWindow>
                <h2>Зарегистрироваться</h2>
                {/*<h3> Введите ваш номер телефона </h3>*/}
                <input
                    placeholder="Введите номер телефона:"
                    value={phoneValue}
                    onChange={changePhone}
                />
                {/*<h3> Введите вашу фамилию </h3>*/}

                <input
                    placeholder="Введите фамилию:"
                    value={lastNameValue}
                    onChange={changeLastName}
                />
                {/*<h3> Введите ваше имя </h3>*/}

                <input
                    placeholder="Введите имя:"
                    value={firstNameValue}
                    onChange={changeFirstName}
                />
                {/*<h3> Введите ваш пароль </h3>*/}

                <input
                    type={"password"}
                    placeholder="Введите пароль:"
                    value={passwordValue}
                    onChange={changePassword}
                    className={"lastInput"}
                />
                <button
                    onClick={updateData}
                >Зарегистрироваться</button>
                <p onClick={navigateToLogin}>Уже есть аккаунт? Войти!</p>
            </ModalWindow>
        </StyledBody>
    );
};

export default RegisterPage;
