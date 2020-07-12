import React, { Component, useCallback } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Authentication} from "./auth";
import Home from "./views/Home";
import Cadastro from "./views/Cadastro";
import CadastroNoticia from "./views/CadastroNoticia";
import NavBar from "./components/Navbar/Navbar";
import Buscar from "./components/Buscar/Buscar";
import BuscarNoticia from "./views/BuscarNoticia";
import Login from "./views/Login";
import LoginT from "./views/LoginT";
import Profile from "./views/Profile";
import News from "./views/Noticias";
import NewsId from "./views/NoticiaId";
import Sobre from "./views/Sobre";
import Footer from "./components/Footer/Footer";
//import Doar from "./views/Doar";


const PrivateRoute = ({ component: Component, ... rest}) => (
    <Route 
    { ... rest}
    render={props => 
        Authentication.isAuthenticated === true ? (//Se estiver autenticado
            <Component {... props}/>
        ) : (//Senao
            <Redirect to={{ pathname: "/cadastro" , state: { from: props.location } }}/>
        )
    }
    />
);

export default function Routes(){
    return(
        <BrowserRouter>
            <NavBar/>
            
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/cadastro"  component = {Cadastro}/>
                <Route path="/sobre"  component = {Sobre}/>
                <Route path="/cadastronoticia"  component = {CadastroNoticia}/>
                <Route path="/login"  component = {Login}/>
                <Route path="/logint/:usuario/:senha"  component = {LoginT}/>
                <Route path="/buscar/:search" component={BuscarNoticia}/> 
                <Route path="/noticias" component={News}/> 
                <Route path="/noticia/:id" component={NewsId}/>
                <PrivateRoute path="/profile/:id" component = {Profile}/>
                
            </Switch>
        <Footer/>
        </BrowserRouter>
    );
}