import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {FiArrowRight} from "react-icons/fi";
import "./styles.css";

class Noticias extends Component{
    
    constructor(props){
        super(props);
        this.state={
          news: [],
          url: '',
          coun: 0,
          pagina: 2
        };
        this.getResponse = this.getResponse.bind(this);
        
    }
    getResponse = async(url) => {
        console.log(url);
        const response = await fetch(url);
        const body = await response.json()
        if (response.status !== 200) throw Error("Deu erro");
        return body;
    }

   componentDidMount(){
    this.setPage("1");
    this.count();
    }

    count(){
        const url = '/count';
        this.getResponse(url)
        .then(res =>{
            const info = res.express;
            this.setState({count: info})

        })
    }
    newPage(page){
        const url = `/helpnews/${page}`
        console.log(url);
        this.getResponse(url)
        .then(res =>{
            const info = res.express;
            this.setState({ news: info});
        })
    }
    setPage(page){  
        const {count} = this.state;
        const {pagina} = this.state;
        console.log(count);
        if((count/5) > pagina){
            var incrementa = pagina;
            incrementa += 1;
            this.setState({pagina: incrementa})
        }
        this.newPage(page);
    }


    render(){
    const {news} = this.state;
    const {pagina} = this.state;
    return(
        <div className="container-geral">
            
            <div className="container-noticias">
            <div className="titulo">
            <h1>Noticias</h1>
            </div>
            <div className="noticia-total">
          {news.map((noticia) =>{
              const urlNews = `/noticia/${noticia.id}`
              return(
                  <div className="noticia">
                       <Link to={urlNews}><h2>{noticia.titulo}</h2> </Link>
                       <br/>
                       <p>{noticia.subtitulo}</p>
                       <br/>
                 </div>
              );
              })           
          }
          </div>
          
          <button className="button" onClick={() => this.setPage(`${pagina}`)}><FiArrowRight className="seta" size={32}/></button>  
       </div>
        </div>
       
    );
    }
 }

export default Noticias;