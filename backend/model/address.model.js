var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cep: String,
    endereco: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    data_gravacao: {
        type: Date,
        default: Date.now
    }
});

var Address = module.exports = mongoose.model('address', addressSchema);

module.exports.get = function (callback, limit) {
    Address.find(callback).limit(limit);
}