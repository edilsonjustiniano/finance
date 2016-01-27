module.exports = function(app) {
    var controller = app.controllers.payment;
    app.route('/payments')
    .get(controller.findAll);

    // app.route('/contatos/:id')
    // .get(controller.obtemContato)
    // .delete(controller.removeContato);
};
