var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    data_pedido: {
        type: Date,
        default: Date.now()
    },
    pedido_concluido: Boolean,
    valor_total: Number,
    endereco_entrega: mongoose.Schema.ObjectId,
    pagamento_aprovado: Boolean
});

var Order = module.exports = mongoose.model('order', orderSchema);

module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}