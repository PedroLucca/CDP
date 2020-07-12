import React, {Component} from 'react';
import { Link, useLocation, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

class BuscarNoticia extends Component{
    
    constructor(props){
        super(props);
        
        this.state={
          news:[],
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
                this.setState({ news: info});
            })
    }

    showImg(img){
    const data = new Buffer(img).toString('base64')
    const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />
    ReactDOM.render(<Example data={data} />, document.getElementById('container'))
        /*const buffer = img // e.g., <Buffer 89 50 4e ... >
        const b64 = new Buffer(buffer).toString('base64')
        const mimeType = " image/png" // e.g., image/png
        return (<img src={`data:${mimeType};base64,${b64}`} />);*/
        
    }
    render(){
    const {news} = this.state;
    return(
        <div id="container">
           <h1>Noticias Buscadas</h1>
            {news.map((noticia) =>{
               return(
                    <article className="noticia">
                        <h2>{noticia.titulo}</h2>  
                        <br/>
                        <p>{noticia.subtitulo}</p>
                   </article>
               );
            })  
            }   
        </div>
    );
    }
 }
export default BuscarNoticia;