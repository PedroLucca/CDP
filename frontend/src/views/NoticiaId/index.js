import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./styles.css";

class Noticia extends Component{
    
  
    constructor(props){
        super(props);
        this.state={
          noticia:{
              id:0,
              titulo: "",
              subtitulo: "",
              corpo:"",
              autor:"",
              img:[],
              createdAt:"",
              updatedAt:""

          }
        };
    
        this.getResponse = this.getResponse.bind(this);

    }
    getResponse = async() => {
        const url = window.location.pathname;
        console.log(url);
        const response = await fetch(url);
        const body = await response.json()
        if (response.status !== 200) throw Error("Deu erro");
        return body;
    }

    componentDidMount(){
        
        this.getResponse()
            .then(res =>{
                const info = res.express;
                this.setState({ noticia: info});
            })
    }

    showImg(img){
    const data = new Buffer(img).toString('base64')
    const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />
    console.log(data);
    ReactDOM.render(<Example data={data} />, document.getElementById('container'))
        /*const buffer = img // e.g., <Buffer 89 50 4e ... >
        const b64 = new Buffer(buffer).toString('base64')
        const mimeType = " image/png" // e.g., image/png
        return (<img src={`data:${mimeType};base64,${b64}`} />);*/
        
    }

    render(){
        //const {news} = this.state;
        const {noticia} = this.state;
    return(
        
        <div className="container-id">
         
            <div className="noticia-id">
                <h2>{noticia.titulo}</h2> 
                <br/>
                <h3>{noticia.subtitulo}</h3>
                <br/>
                <p>{noticia.corpo}</p>
                <br/>
                <p>Autor: {noticia.autor}</p>
            </div>
               
            
        </div>
    );

    }
 }
    
export default Noticia;