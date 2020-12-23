const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/';


MongoClient.connect(servidor, function(erro, client){
    var db = client.db ('db_site');


    //Listando arquivos utilizando o find() e o toArray()
    db.collection("clientes").find({}).toArray(function(erro, documentos){
        console.clear();
        documentos.forEach(function(doc){
            //console.log(documentos);
            console.log("\n----------------------------------------------------");
            console.log("Codigo: "+ doc.codigo);
            console.log("Nome "+ doc.nome);
            console.log("Status: "+ doc.status);
            console.log("Pontos: "+ doc.pontos);
            console.log("Estado: "+ doc.endereco.estado);
            console.log("----------------------------------------------------\n");
        }, this);
    });

    /*db.collection("clientes").find({}).toArray(function(erro, documentos){
        console.clear();
        documentos.forEach(function(doc){
            console.log("\n----------------------------------------------------");
            console.log(documentos);
            console.log("----------------------------------------------------\n");      
        });
    }, this);
    */
    client.close();

});