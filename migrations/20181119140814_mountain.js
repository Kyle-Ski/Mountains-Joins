
exports.up = function(knex, Promise) {
    return knex.schema.createTable('mountain', function (table) {
        table.increments()
        table.string('name')
        table.integer('elevation')
        table.string('range')
        table.integer('rank')
        table.string('imageUrl', 100)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('mountain')
};
