let mongoose = require('mongoose');

let server_url = 'mongodb+srv://barreto:301440@cms-test.52sga.mongodb.net/CMS-Test?retryWrites=true&w=majority';

mongoose.connect(server_url,
                { useNewUrlParser: true });

var db = mongoose.connection;
        
if (!db) {
    console.log('Erro de conexão com o bd');
} else {
    console.log('conectado ao db');
}

exports.module = db;