import React from "react";
//import {Link} from "react-router-dom";
//import {FiLogIn} from "react-icons/fi";

import "./styles.css";

export default function CadastroNoticia(){
    return(
        <div>
            <form method="POST" action="/cadastronoticia">
                <h1>Insira os dados da noticia:</h1>
                <input name="titulo" placeholder="Digite o titulo"/>
                <input name="subtitulo" placeholder="Digite o subtitulo"/>
                <input type= "text" name="corpo" placeholder="Digite o corpo"/>
                <input name="autor" placeholder="Digite o nome do autor"/>
                <input type="file" accept="image/png, image/jpeg"  multiple  name="img"/>
                <button className="button" type = "submit">Cadastrar</button>
            </form>
            
        </div>
    );
}