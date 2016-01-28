module.exports = function(app) {

    var CreditCard = app.models.creditCard;

    var controller = {};

    controller.findAll = function(req, res) {
        CreditCard.find().exec().then(
            function(contatos) {
                res.json(contatos);
            },
            function(error) {
                console.log(error);
                res.status(500).json(error);
            }
        )
    };

    controller.save = function(req, res) {
        CreditCard.create(req.body).then(
            function(contato) {
                res.status(201).json(contato);
            },
            function(error) {
                console.error(error);
                res.status(500).json(error);
            }
        );
    };

    return controller;
};
