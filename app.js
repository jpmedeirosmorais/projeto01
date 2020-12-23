const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/';


MongoClient.connect(servidor, function(erro, client){
    var db = client.db ('db_site');

    if(erro)

    console.log("Erro ao estabelecer conexão:" + erro);
    else
    console.clear();
    console.log("\n\nConexão estabelecida com sucesso.");
    
    client.close();
    
});