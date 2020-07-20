var Adress = require('../model/address.model');

exports.index = function (req, res) {
    Adress.get(function (err, address) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                message: "Endereços recuperados com sucesso",
                data: address
            });
        }    
    });
};

// Criando um endereço
exports.new = function (req, res) {
    var address = new Adress();
    address.user_id = req.body.user_id;
    address.cep = req.body.cep;
    address.endereco = req.body.endereco;
    address.numero = req.body.numero;
    address.bairro = req.body.bairro;
    address.cidade = req.body.cidade;
    address.estado = req.body.estado;
    
    // Salva o endereço e checa se existe erros
    address.save(function (err) {
        if (err)
            res.json(err);
            
        res.json({
            message: 'Novo endereço registrado!',
            data: address
        });
    });
};

// Manipulando informações da view
exports.view = function (req, res) {
    Adress.findById(req.params.address_id, function (err, address) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Detalhes do endereço carregando..',
                data: address
            });
        }
    });
};

// Manipulando updates no endereço
exports.patch = function (req, res) {
    Adress.findById(req.params.address_id, function (err, address) {
        if (err) 
            res.send(err);

        address.user_id = req.body.user_id;
        address.cep = req.body.cep;
        address.endereco = req.body.endereco;
        address.numero = req.body.numero;
        address.bairro = req.body.bairro;
        address.cidade = req.body.cidade;
        address.estado = req.body.estado;

        // salva o usuario
        address.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Endereço atualizado',
                data: address
            })
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Adress.findById(req.params.address_id).remove(err => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                status: "success",
                message: 'Endereço deletado'
            });
        }
    });
};