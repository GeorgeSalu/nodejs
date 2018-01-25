var mysql = require('mysql');

var connMySQl = function() {
    console.log("Conexao estabelecida")
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'
    });
}

module.exports = function() {
    return connMySQl;
}
