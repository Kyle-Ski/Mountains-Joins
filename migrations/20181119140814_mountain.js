
exports.up = function(knex, Promise) {
    knex.schema.createTable('mountain', function (table) {
        table.increments()
        table.string('name')
        table.integer('elevation')
        table.integer('range')
        table.integer('rank')
        table.string('imageUrl', 100)
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('mountain')
};
