const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/';


MongoClient.connect(servidor, function(erro, client){
    var db = client.db ('db_site');

    db.collection("clientes").updateOne({codigo : 1}, {$set : {pontos : 0}}, function(err, rest){
        if(erro)
        console.log("\n\nErro ao atualizar dados!");
        else
        console.log("\n\nAtualização realizada com sucesso!");   
    });

    client.close();

});