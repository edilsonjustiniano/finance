module.exports = function(app) {
    var controller = app.controllers.creditCard;
    app.route('/creditCard')
    .get(controller.findAll)
    .post(controller.save);

    // app.route('/contatos/:id')
    // .get(controller.obtemContato)
    // .delete(controller.removeContato);
};
