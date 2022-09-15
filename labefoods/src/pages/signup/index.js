import React from 'react';
import logo from '../../img/logo.svg'
import { useState } from 'react';
import { ButtonSend, FormStyled, InputStyled, Main } from './style';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [passw, setPassw] = useState("")
    const [confSenha, setConfSenha] = useState("")

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changeCPF = (event) => {
        setCPF(event.target.value)
    }
    const changePassw = (event) => {
        setPassw(event.target.value)
    }
    const changeCheckPassw = (event) => {
        setConfSenha(event.target.value)
    }



    return (
        <Main>
            <img src={logo} alt='logo' />
            <h2>Cadastrar</h2>
            <FormStyled onSubmit={"#"}>
                <InputStyled
                    placeholder="Nome"
                    value={name}
                    onChange={changeName}
                    type="text" />
                <InputStyled
                    placeholder="E-mail"
                    value={email}
                    onChange={changeEmail}
                    type="email"
                />
                <InputStyled
                    placeholder="CPF"
                    value={cpf}
                    onChange={changeCPF}
                    type="email"
                />
                <InputStyled
                    placeholder="Senha"
                    value={passw}
                    onChange={changePassw}
                    type="email"
                />
                <InputStyled
                    placeholder="Confirme a Senha"
                    value={confSenha}
                    onChange={changeCheckPassw}
                    type="password"
                />
                <ButtonSend type="submit" >Enviar</ButtonSend>
            </FormStyled>
        </Main>
    );
    
}