import React, {Component} from 'react';
import  { Link, Redirect } from 'react-router-dom';
import {FiUser , FiChevronDown} from "react-icons/fi"
import logoImg from "../../assets/coracoes-do-poti-branco.png";
import Buscar from "../Buscar/Buscar";
import "./styles.css";


class Navbar extends Component{
    
    render(){
    return(
        <div>
            <a href="/">
                <img className="img" src={logoImg} alt="Home-Poti" width="150px" height="150px"/>
            </a>
        <nav className="navbar">
            
                <div className="menu">
                <Link to = "/sobre">
                <FiChevronDown size={20} color="#FFF"/>
                    <label>
                        Quem somos?
                    </label>
                </Link>
                <Link to = "/noticias">
                <FiChevronDown size={20} color="#FFF"/>
                    <label>
                        Notícias
                    </label>
                </Link>
                <Link to = "/cadastro">
                <FiChevronDown size={20} color="#FFF"/>
                    <label>
                        Participe
                    </label>
                </Link>
                <label><Buscar/></label>
                <Link to ="/login">
                    <label className="usercontainer">
                    <FiUser size={25} color="FFF"/>
                    </label>
                </Link>
                </div>
            
           </nav>
           <div className="container"></div>

        </div>
    );
    }
 }
    


export default Navbar;