var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    genero: String,
    celular: String,
    data_gravacao: {
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}