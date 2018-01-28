module.exports.noticias = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModels = new app.app.models.NoticiasDAO(connection);

    noticiasModels.getNoticias(connection, function(error, result) {
    
        res.render("noticias/noticias", {noticias : result});
    });

}

module.exports.noticia = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModels = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiasModels.getNoticia(id_noticia, connection, function(error, result) {
    
        res.render("noticias/noticia", {noticia : result});
    });

}