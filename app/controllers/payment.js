module.exports = function(app) {

    var Payment = app.models.payment;

    var controller = {};

    controller.findAll = function(req, res){
    	var payments = [{
    		name: 'Payment 1'
    	}, {
    		name: 'Payment 2'
    	}];
    	res.json(payments);
        // Contato.find().exec().then(
        //     function(contatos) {
        //         res.json(contatos);
        //     },
        //     function(error) {
        //         console.log(error);
        //         res.status(500).json(error);
        //     }
        // )
    };

    return controller;
};
