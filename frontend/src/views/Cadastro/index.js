import React from "react";
import logo from "../../assets/coracoes-poti-logo-transparente.png";
//import {Link} from "react-router-dom";
//import {FiLogIn} from "react-icons/fi";

import "./styles.css";

export default function Cadastro(){
    return(
        <div className="container-geral">
        <div className="container-cadastro">
            <h1>Faça parte da nossa luta!</h1>
            <form method="POST" action="/cadastro">
                <input name="usuario" placeholder="Digite seu usuário"/>
                <input name="nome" placeholder="Digite seu nome"/>
                <input name="cpf" placeholder="Digite seu CPF"/>
                <input name="contato" placeholder="Digite seu contato"/>
                <input name="email" placeholder="Digite seu e-mail"/>
                <input name="senha" placeholder="Digite seu senha"/>
                <div className="fundo"></div>
            <button className="button-cad" type = "submit">Cadastrar</button>
            </form>
        </div>
        <div className="logo-img">
            <img src={logo} alt="Corações do poti" height="350px" widht="350px"/>
        </div>
        </div>
    );
}