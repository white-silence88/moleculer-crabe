/* jshint esversion: 6 */
const AdapterSettings = {
    database: process.env.PGSQL_DBNAME || 'crabe',
    username: process.env.PGSQL_USERNAME || 'postgres',
    password: process.env.PGSQL_PWD || '123456789',
    postgres: {
        host: process.env.PGSQL_HOST || 'localhost',
        port: process.env.PGSQL_PORT || 5432,
        dialect: process.env.DB_DIALECT || 'postgres'
    }
};
/* Экспортируем настройки для PGSQL */
module.exports = AdapterSettings;
