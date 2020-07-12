const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("sequelize");
const path = require("path");
const connection = require("./database/database");
//const authenticate = require("./frontend/src/auth");
const app = express();
const {user, donation} = require("./database/Tables.js");
const news = require("./database/News");

//Conectando banco
connection
    .authenticate()
    .then(() => {
        console.log("Conexao feita!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//app.set('views', __dirname + '/views');
//app.set('view engine', 'jsx');
//app.engine('jsx', require('express-react-views').createEngine());


app.get("/help", (req,res) => {
    //res.send({express: "Pedro"});
    //let news;
   /**/ news.findAll({raw: true, order:[
        ['id', 'DESC'] //ASC = crescente || DESC = decrescente
    ], limit: 3}).then(news => {
        console.log(news);
        res.send({
        express: news
        });
    });
});

/*app.get("/helpnews", (req,res) => {
    //res.send({express: "Pedro"});
    //let news;
    news.findAll({raw: true, order:[
        ['id', 'DESC'] //ASC = crescente || DESC = decrescente
    ], limit:5, offset: 0}).then(news => {
        console.log(news);
        res.send({
        express: news
        });
    });
});*/

app.get("/buscar/:search", async (req,res) => {
    var search = req.params.search;
    const Op = sequelize.Op;
    const pesq = `%${search}`;
    await news.findAll({ where: {titulo : {[Op.like] : pesq}}})
        .then(news => {
            res.send({
                express: news
            });
        });
});

app.get("/helpnews/:page", (req,res) => {
    const page = req.params.page;
    //res.send({express: "Pedro"});
    //let news;
   /**/ news.findAll({raw: true, order:[
        ['id', 'DESC'] //ASC = crescente || DESC = decrescente
    ], limit:5, offset:(page - 1) *5}).then(news => {
        //console.log(news);
        res.send({
        express: news
        });
    });
});

app.get("/count", (req,res) => {
    news.count().then(news => {
        res.send({
            express: news
        });
    });
});
  

app.listen(3333,() => {console.log("App rodando!");});

app.get("/logint/:usuario/:senha", (req,res) => {
    var usuario = req.params.usuario;
    var senha = req.params.senha;
    user.findOne({ where: {usuario: usuario, senha: senha}})
        .then(user => {
            //if(user != undefined){
                res.send({
                    express: user
                });
            //}    
        });
});

app.get("/noticia/:id", (req,res) =>{
    var id = req.params.id;
    news.findOne({
        where: {id:id}
    }).then(news=>{
        if(news != undefined){
            res.send({
                express: news
            });
        }
        else{
            res.redirect("/");
        }
    });
});


/**/app.get("/profile/:id", (req,res) => {
    var id = req.params.id;
    donation .findAll({ where: {userId: id}})
        .then(donations => {
            //if(user != undefined){
                res.send({
                    express: donations
                });
            //}    
        });
});

app.post("/profile/:id/doar", (req,res) => {
    var id = req.params.id;
    var nome = req.body.nome;
    var numero = req.body.numero;
    var validade = req.body.validade;
    var cvv = req.body.cvv;
    var valor = req.body.valor;

    donation.create({
        nome: nome,
        numero: numero,
        validade: validade,
        cvv: cvv,
        valor: valor,
        userId: id
    }).then(() => {
            console.log("Doação feita!");
            res.redirect("/profile/"+ id);
        });
});


app.post("/cadastro",function(req,res){
    var usuario = req.body.usuario;
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    var contato = req.body.contato;
    var email = req.body.email;
    var senha = req.body.senha;

    
    console.log(usuario);
    
    user.create({
        usuario: usuario,
        nome: nome,
        cpf: cpf,
        contato: contato,
        email: email,
        senha: senha,

    }).then(() => {
        console.log("Usuário cadastrado com sucesso!");
        res.redirect("/");
    });
});

/*app.post("/login",function(req,res){
    var usuario = req.body.usuario;
    var senha = req.body.senha;

    console.log(usuario);
    
    users.findOne({
        where : {usuario : usuario, senha: senha}
    }).then(user => {
        if(user != undefined){
            console.log("Login com sucesso!");
            res.redirect("/profile");
            
        }else{
            console.log("Erro no login");
        }
        
    });
});

app.post("/login",(req,res) => {
    var usuario = req.body.usuario;
    var senha = req.body.senha;
    var valid = false
    users.findOne({
        where : {usuario : usuario, senha: senha}
    }).then(user => {
        if(user != undefined){
             //valid = true;
             res.redirect(`/login/tratamento/${user.id}`);
        }else{
             //valid = false;
             res.redirect(`/cadastro`);
            
        }
        
    });
});*/

app.post("/cadastronoticia",function(req,res){
    var titulo = req.body.titulo;
    var subtitulo = req.body.subtitulo;
    var corpo = req.body.corpo;
    var autor = req.body.autor;
    var img = req.body.img;
    
    console.log(titulo);
    
    news.create({
        titulo: titulo,
        subtitulo: subtitulo,
        corpo: corpo,
        autor: autor,
        img: img,
    }).then(() => {
        console.log("Noticia cadastrada com sucesso!");
        res.redirect("/");
    });
});

app.listen(8000, (erro) =>  {
    if(erro){
        console.log("Deu erro");
    }else{
        console.log("Deu certo");
    }
});