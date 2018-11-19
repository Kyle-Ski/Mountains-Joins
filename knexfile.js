module.exports = {

  development: {
      client: 'pg',
      connection: 'postgres://localhost/mountainsTest'
  },

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL + '?ssl=true'
  }

};