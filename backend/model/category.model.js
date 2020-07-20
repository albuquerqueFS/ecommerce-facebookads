var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

var Category = module.exports = mongoose.model('category', categorySchema);

module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}