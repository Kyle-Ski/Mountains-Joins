
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mountain').del()
    .then(function () {
      // Inserts seed entries
      return knex('mountain').insert([
        {id: 1, name: 'Mt. Elbert', elevation: 14433, range: 'Sawatch Range', rank: 1, imageUrl: 'https://www.14ers.com/photos/mtelbert/peakphotos/thumb/201207_Elbert01.jpg?lu=20180101'},
        {id: 2, name: 'Mt. Massive', elevation: 14421, range: 'Sawatch Range', rank: 2, imageUrl: 'https://www.14ers.com/photos/mtmassive/peakphotos/thumb/201108_Massive01.jpg?lu=20180101'},
        {id: 3, name: 'Mt. Lincoln', elevation: 14286, range: 'Mosquito Range', rank: 8, imageUrl: 'https://www.14ers.com/photos/lincolngroup/peakphotos/thumb/200811_Linc01.jpg?lu=20180101'},
        {id: 4, name: 'Mt. Cameron', elevation: 14238, range: 'Mosquito Range', rank: 17, imageUrl: 'https://www.14ers.com/photos/lincolngroup/peakphotos/thumb/200409_Cam01.jpg?lu=20180101'},
        {id: 5, name: 'Mt. Shavano', elevation: 14229, range: 'Sawatch Range', rank: 18, imageUrl: 'https://www.14ers.com/photos/shavanogroup/peakphotos/thumb/200509_Shav02.jpg?lu=20180101'},
        {id: 6, name: 'Mt. Princeton', elevation: 14179, range: 'Sawatch Range', rank: 21, imageUrl: 'https://www.14ers.com/photos/mtprinceton/peakphotos/thumb/201506_Prin01.jpg?lu=20180101'},
        {id: 7, name: 'Mt. Bross', elevation: 14172, range: 'Mosquito Range', rank: 23, imageUrl: 'https://www.14ers.com/photos/lincolngroup/peakphotos/thumb/200105_Linc01.jpg?lu=20180101'},
        {id: 8, name: 'Mt. Democrat', elevation: 14148, range: 'Mosquito Range', rank: 0, imageUrl: 'https://www.14ers.com/photos/lincolngroup/peakphotos/thumb/201706_Demo01.jpg?lu=20180101'},
        {id: 9, name: 'Pikes Peak', elevation: 14110, range: 'Front Range', rank: 31, imageUrl: 'https://www.14ers.com/photos/pikespeak/peakphotos/thumb/201506_Pikes01.jpg?lu=20180101'},
        {id: 10, name: 'Tabeguache Peak', elevation: 14115, range: 'Sawatch Range', rank: 26, imageUrl: 'https://www.14ers.com/photos/shavanogroup/peakphotos/thumb/201005_Tabe01.jpg?lu=20180101'}
      ]);
    });
};
