var mongoose = require('mongoose');

var orderDetailsSchema = mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    order_valor: Number,
    quantidade: {
        type: Number,
        default: 1
    }
});

var OrderDetails = module.exports = mongoose.model('orderDetails', orderDetailsSchema);

module.exports.get = function (callback, limit) {
    OrderDetails.find(callback).limit(limit);
}