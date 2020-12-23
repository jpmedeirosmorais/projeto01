const MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/';


MongoClient.connect(servidor, function(erro, client){
    var db = client.db ('db_site');
    
    let cliente = {
        codigo : 1,
        nome : "Joel Rodrigues",
        endereco : {
            logradouro : "Rua Fulano de Tal",
            numero : "123",
            bairro : "Bairro Qualquer",
            cidade : "Rio de Janeiro",
            estado : "RJ"
        },
        status : "Ativo",
        pontos : 10
    }
    
    //Inserindo dados utilizado o insertOne()
    db.collection("clientes").insertOne(cliente, function(erro, resultado){
        if(erro)
            console.log("Erro ao inserir documento: " + erro);
        else
            console.clear();
            console.log("\n\n\nDocumento inserido com sucesso!!\n\n\n");
      });

      client.close();
});