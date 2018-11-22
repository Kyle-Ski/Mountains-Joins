
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_mountains', function (table) {
        table.increments()
        table.string('name')
        table.integer('elevation')
        table.string('range')
        table.integer('rank')
        table.string('imageUrl', 250)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_mountains')
};
