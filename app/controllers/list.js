"use strict";
module.exports = app => {
    
    const get = async (req, res) => {
        let limit = 10;
        const page = req.params.page || 1
        try {
            const result = await app.db('users')
            const count = parseInt(result.length)
            let pages = Math.ceil(count/limit)
            console.log(pages)            
            let users = await app.db('users')
                .select('*')
                .limit(limit)
                .offset(page * limit - limit)
                
            return res.status(200).render("list", { erro: {},list: users, pag: pages})

        } catch (err) {

            return res.status(500).render("list", { erro: "Erro ao Carregar", list: {} })
        }
    }
    return { get }
}