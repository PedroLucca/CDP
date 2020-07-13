import React, {Component} from "react";
import {Link , Redirect} from "react-router-dom";
import {Authentication} from "../../auth";
import {FiUser} from "react-icons/fi"

import "./styles.css";

//import {FiLogIn} from "react-icons/fi";

class Doar extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '' 
        }
    }
    
    render(){
        const id =`${this.props.text}/doar`;
        return(
            <div className="doar">
            <form method = "POST" action={id}>
                <h2>Faça a sua doação!</h2>
                <input name="nome" placeholder="Digite o nome que consta no cartão."/>
                <input name="numero" placeholder="Digite o número do cartão."/>
                <input name="validade" placeholder="Digite a validade."/>
                <input name="cvv" placeholder="Digite o cvv do cartão."/>
                <input name="valor" placeholder="Digite o valor da doação."/>
                <button type="submit" className="button-doar">Doar</button>
            </form>
        </div>
        );
    }
}

class Profile extends Component{
    
    constructor(props){
        super(props);
        
        this.state={
          donation:[],
        };
    
        this.getResponse = this.getResponse.bind(this);
    } 
    
    //a função recebe a url da pagina atual e envia para a busca no banco de dados
    getResponse = async() => {
        const url = window.location.pathname;
        const response = await fetch(url);
        //const response = await fetch("/buscar");
        const body = await response.json()
        if (response.status !== 200) throw Error("Deu erro");
        return body;
    }

    componentDidMount(){
        
        this.getResponse()
            .then(res =>{
                const info = res.express;
                this.setState({donation: info});
            })
    }

    render(){
        const id = window.location.pathname;
        const {donation} = this.state;
        return(
            <div className="profile-geral">
                <h1>Bem-vindo!</h1>
            <div className="profile">
            <h2>Suas doações:</h2>
            <div className="doacao-img">
            <div className="img-icon">
                <FiUser size={150} className="icon"/>
                <Link to = "/">
                    <button onClick={Authentication.signout()} className="logout">Logout</button>
                </Link>
            </div>
            <div className="doacoes">
            {donation.map((donation) =>{
               return(
                    <article className="doacao">
                        <h2>Doador: {donation.nome}</h2>  
                        <br/>
                        <p>Valor da doação:</p>
                        <b> R$ {donation.valor},00</b>
                        <br/>
                        <p>Data:</p>
                        <b>{donation.createdAt.slice(0, 10)}</b>
                   </article>
               );
            })  
            }   
        </div>
        </div>
           <Doar text={id}/>
            </div>
            </div>
        );
    }
    

}

export default Profile;