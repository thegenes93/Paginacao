"use strict";
module.exports = app => {
    const { existsOrError, notExistsOrError } = app.app.controllers.validation


    const get = async (req, res) => {
        let cats = await app.db('category')
            .select('*')

        res.render("signup", { erro: {}, campo: {}, cat: cats })
    }

    const save = async (req, res) => {

        let cats = await app.db('category')
            .select('*')

        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            const userEmailFromDB = await app.db('users')
                .where({ email: user.email }).first()
            notExistsOrError(userEmailFromDB, 'Email já cadastrado')


        } catch (msg) {
            return res.status(400).render("signup", { erro: msg, campo: user, cat: cats });
        }

        if (user.id) {
            await app.db('users')
                .update(user)
                .where({ id: user.id })

            let users = await app.db('users')
                .select('*')

            return res.status(200).render("list", { erro: "Cadastro ALTERADO", list: users, cat: cats })
        } else {
            delete user.id
            await app.db('users')
                .insert(user)
            let users = await app.db('users')
                .select('*')
            return res.status(200).render("list", { erro: "Cadastro Realizado", list: users, cat: cats })
        }
    }

    return { get, save }
}