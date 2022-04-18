/*Arquivo de configuração do TypeORM */

module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "pyetra123",
    "database": "gd-proj",
    "entities": [
        __dirname + "/src/entities/*ts"]
 }