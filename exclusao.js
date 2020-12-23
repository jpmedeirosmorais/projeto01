const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/';


MongoClient.connect(servidor, function(erro, client){
    var db = client.db ('db_site');

    let filtro = {codigo : 1};

    //Deleta um dado da lista deleteOne()   
    db.collection("clientes").deleteOne(filtro, function(erro, resultado){
      if(erro)
          console.log("Erro ao inserir documento: " + erro);
      else
          console.log("Documento deletado com sucesso");
    });

   client.close();

});