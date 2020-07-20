var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    link_dropshipping: String
});

var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}