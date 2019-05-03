"use strict";
module.exports = app => {
    
    const get = async (req, res) => {
        try {
            return res.status(200).render("list", { erro: {}})

        } catch (err) {

            return res.status(500).render("list", { erro: "Erro ao Carregar"})
        }
    }


    const gets = async (req, res) => {
                 
            let users = await app.db('users')
                .select('*')
                
                
          return res.json(users) 

      
    }


    return { get, gets }
}