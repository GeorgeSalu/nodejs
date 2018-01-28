function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(connection, callback) {
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(connection, callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, connection, callback) {
    this._connection.query('insert into noticias set ? ', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}


module.exports = function() {
    return NoticiasDAO;
}