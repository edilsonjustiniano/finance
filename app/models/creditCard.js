var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        bank: {
            type: String,
            required: true
        },
        flag: {
            type: String
        },
        paymentDay: {
            type: Number,
            required: true
        },
        closingDay: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('CreditCard', schema);
};
