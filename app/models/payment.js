var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    });

    return mongoose.model('Payment', schema);
};
