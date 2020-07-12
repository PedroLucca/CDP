import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {FiPhone, FiSettings} from "react-icons/fi";
import Logo from '../../assets/coracoes-do-poti-branco.png';
import './styles.css';

class Footer extends Component{
    render(){
       return(
           <div className="footer">
               <div className="logo">
                    <img src={Logo} alt="Corações do Poti" width="170px" height="170px"/>
                </div>
            <div className="icons">
            <FiPhone className="phone" size={20} color="FFF"/>
            <FiSettings className="settings" size={20} color="FFF"/>
            </div>
            <div className="components">
            <h2>Precisa de ajuda?</h2>
            <p>Ligue para 1800-234-98XX</p>
            <p>ou envie um email para naum_celestino@hotmail.com</p>
            <h2>Dúvidas</h2>
            <p>Estamos abertos para lhe atender</p>
            </div>
            <div className="signature">
            <a>Desenvolvido por: Naum Celestino e Pedro Lucca</a>
            </div>
            
            </div>
       );
    };
}

export default Footer;