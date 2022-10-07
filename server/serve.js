const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser')

const pg = require('pg');

app.use(cors());
app.use(bodyParser.json());


const client = new pg.Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'admin',
        port: 5432
    }
)


client.connect();




app.get('/filmes',function(req,res) {
    client.query('select * from filmes')
        .then(
            function (ret) {

                let array = [];
                let filmes = ret.rows[0];
                for(filmes of ret.rows){
                    array.push(
                        {
                            titulo: filmes.titulo,
                            diretor: filmes.diretor,
                            dataDelancamento: filmes.datal,
                            duracao: filmes.duracao,
                            idioma: filmes.idioma,
                        }
                    )
                }
                res.json(
                    {
                        status: 'OK',
                        tamanho: array.length,
                        filmes: array,
    
                    }
                );
                
            }
        );
    
});





app.get('/filmes/:id', function(req,res){
    client.query(
        {
            text: 'select * from filmes where id = $1',
            values: [req.params.id]
        }
    )
    .then(
        function(ret){
            let filmes = ret.rows[0];
            res.json(
                {
                    status: 'OK',
                    titulo: filmes.titulo,
                    diretor: filmes.diretor,
                    data: filmes.datal,
                    duracao: filmes.duracao,
                    idioma: filmes.idioma,


                }
            );
            
            
        }
    );
});




app.post('/add', function(req, res){
    client.query(
        {
            text: "insert into filmes (titulo,diretor,duracao,datal,idioma) values ($1,$2,$3,$4,$5) ",
            values: [req.body.titulo, req.body.diretor, req.body.duracao, req.body.datal, req.body.idioma]
        }
    )
    .then(
        function(){
            res.json(
                {
                    status: 'OK',
                    dadosEnviados: req.body

                }
            )
        }
    )
});




app.get('/quantidade',function(req,res) {
    client.query('select * from filmes')
        .then(
            function (ret) {

                let array = [];
                let filmes = ret.rows[0];
                for(filmes of ret.rows){
                    array.push(
                        {
                            
                        }
                    )

                }
                res.json(
                    {
                        status: 'OK',
                        tamanho: array.length,
                        
    
                    }
                );
                
            }
        );
    
});






app.listen(
    3000,
    function () {
        console.log('Inicialização OK!');
        
    }

);