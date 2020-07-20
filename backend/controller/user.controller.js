var User = require('../model/user.model');

exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                message: "Usuarios recuperados com sucesso",
                data: users
            });
        }    
    });
};

// Criando um usuário
exports.new = function (req, res) {
    var user = new User();
    user.nome = req.body.nome ? req.body.nome : user.name;
    user.genero = req.body.genero;
    user.email = req.body.email;
    user.celular = req.body.celular;
    
    // Salva o usuário e checa se existe erros
    user.save(function (err) {
        if (err)
            res.json(err);
            
            res.json({
                message: 'Novo usuário registrado!',
                data: user
        });
    });
};

// Manipulando informações da view
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Detalhes do usuário carregando..',
                data: user
            });
        }
    });
};

// Manipulando updates no usuário
exports.patch = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) 
            res.send(err);

        user.nome = req.body.nome ? req.body.nome : user.name;
        user.genero = req.body.genero;
        user.email = req.body.email;
        user.celular = req.body.celular;

        // salva o usuario
        user.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Usuario atualizado',
                data: user
            })
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    User.findById(req.params.user_id).remove(err => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: "success",
                message: 'Usuário deletado'
            });
        }
    });
};