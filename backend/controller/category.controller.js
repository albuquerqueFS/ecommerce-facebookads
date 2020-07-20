var Category = require('../model/category.model');

exports.index = function (req, res) {
    Category.get(function (err, category) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                message: "Categorias recuperados com sucesso",
                data: category
            });
        }    
    });
};

// Criando um categoria
exports.new = function (req, res) {
    var category = new Category();

    category.nome = req.body.nome;
    
    // Salva o categoria e checa se existe erros
    category.save(function (err) {
        if (err)
            res.json(err);
            
        res.json({
            message: 'Nova categoria registrado!',
            data: category
        });
    });
};

// Manipulando informações da view
exports.view = function (req, res) {
    Category.findById(req.params.category_id, function (err, category) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Detalhes do categoria carregando..',
                data: category
            });
        }
    });
};

// Manipulando updates no categoria
exports.patch = function (req, res) {
    Category.findById(req.params.category_id, function (err, category) {
        if (err) 
            res.send(err);

        category.nome = req.body.nome;

        // salva o usuario
        category.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Categoria atualizado',
                data: category
            })
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Category.findById(req.params.category_id).remove(err => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: "success",
                message: 'Categoria deletado'
            });
        }
    });
};