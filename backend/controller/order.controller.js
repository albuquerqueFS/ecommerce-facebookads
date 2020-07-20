var Order = require('../model/order.model.model');

exports.index = function (req, res) {
    Order.get(function (err, order) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                message: "Usuarios recuperados com sucesso",
                data: order
            });
        }    
    });
};

// Criando um pedido
exports.new = function (req, res) {
    var order = new Order();
    order.user_id = req.body.user_id;
    order.pedido_concluido = req.body.pedido_concluido;
    order.valor_total = req.body.valor_total;
    order.endereco_entrega = req.body.endereco_entrega;
    order.pagamento_aprovado = req.body.pagamento_aprovado;
    
    // Salva o pedido e checa se existe erros
    order.save(function (err) {
        if (err)
            res.json(err);
            
            res.json({
                message: 'Novo pedido registrado!',
                data: order
        });
    });
};

// Manipulando informações da view
exports.view = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Detalhes do pedido carregando..',
                data: order
            });
        }
    });
};

// Manipulando updates no pedido
exports.patch = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err) 
            res.send(err);

        order.user_id = req.body.user_id;
        order.pedido_concluido = req.body.pedido_concluido;
        order.valor_total = req.body.valor_total;
        order.endereco_entrega = req.body.endereco_entrega;
        order.pagamento_aprovado = req.body.pagamento_aprovado;

        // salva o usuario
        order.save(function (err) {
            if (err)
                res.json(err);
            
            res.json({
                message: 'Usuario atualizado',
                data: order
            })
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Order.findById(req.params.order_id).remove(err => {
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