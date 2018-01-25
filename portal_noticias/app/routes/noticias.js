//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

    app.get('/noticias', function(req, res) {
 
        var connection = app.config.dbConnection();
        var noticiasModels = app.app.models.noticiasModels;

        noticiasModels.getNoticias(connection, function(error, result) {
        
            res.render("noticias/noticias", {noticias : result});
        });
       

    });
}
