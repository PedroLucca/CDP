import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {FiSearch} from "react-icons/fi";
import Logo from '../../assets/coracoes-do-poti-home.png';
import './styles.css';

class Buscar extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            pesquisa: '',
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    //função responsavel por mudar o valor no formulario
    //e mudar autorizar o redirect
    handleSubmit(){
        this.setState({redirect: true});
    }

    handleChange(event){
        this.setState({pesquisa: event.target.value});
    }

    //Função responsavel por redirecionar para o link da palavra pesquisada
    verifica(redirect, pesquisa){
        const url = `/buscar/${pesquisa}`;
        if(redirect){
        return <Redirect to={url}/>
        }
    }

    render(){
        const {pesquisa} = this.state;
        const{redirect} = this.state;
       return(

           <div>
            <form method="GET" onSubmit ={this.handleSubmit}>
                <input className="pesquisa" placeholder=" Busque uma notícia." type="text" value={pesquisa} onChange={this.handleChange} name="search"/>
                <button className="searchbutton" type="submit"><FiSearch size={16} color="FFF"/></button>
            </form>
            
            {this.verifica(redirect, pesquisa)}
            
            </div>
       );
    };
}

export default Buscar;