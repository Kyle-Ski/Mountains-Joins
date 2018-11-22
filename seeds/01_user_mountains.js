
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_mountains"; ALTER SEQUENCE user_mountains_id_seq RESTART WITH 1;')
    .then(function () {
      // Inserts seed entries
      return knex('user_mountains').insert([
        {id: 1, name: 'Mount Elbert', elevation: 14433, range: 'Sawatch Range', rank: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mt._Elbert.jpg/560px-Mt._Elbert.jpg'},
      ]);
    });
};
