module.exports = app => {
    let controllers = app.app.controllers

    app.route('/')
        .get(controllers.list.get)

    app.route('/cadastrar')
        .get(controllers.cadUser.get)
        .post(controllers.cadUser.save)

    app.route('/list')
        .get(controllers.list.get)
        
    app.route('/list/id')
        .get(controllers.list.get)
}