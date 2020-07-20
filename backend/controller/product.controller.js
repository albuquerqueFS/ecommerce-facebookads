var Product = require('../model/product.model');

exports.index = function (req, res) {
    Product.get(function (err, product) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                message: "Usuarios recuperados com sucesso",
                data: product
            });
        }    
    });
};

// Criando um usuário
exports.new = function (req, res) {
    var product = new Product();
    
    product.nome = req.body.nome;
    
    // Salva o usuário e checa se existe erros
    product.save(function (err) {
        if (err)
            res.json(err);
            
            res.json({
                message: 'Novo usuário registrado!',
                data: product
        });
    });
};

// Manipulando informações da view
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Detalhes do produto',
                data: product
            });
        }
    });
};

// Manipulando updates no usuário
exports.patch = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err) 
            res.send(err);

        product.nome = req.body.nome ? req.body.nome : product.name;
        product.genero = req.body.genero;
        product.email = req.body.email;
        product.celular = req.body.celular;

        // salva o usuario
        product.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Produto atualizado',
                data: product
            })
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Product.findById(req.params.product_id).remove(err => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: "success",
                message: 'Produto deletado!'
            });
        }
    });
};