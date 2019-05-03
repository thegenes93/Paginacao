exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('email').notNull().unique()
        table.string('name').notNull()
        table.integer('categoryId').notNull().unsigned().index().references('id').inTable('category')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};