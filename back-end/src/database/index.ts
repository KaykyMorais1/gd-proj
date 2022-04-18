import {createConnection} from "typeorm";

/*O index criará a conexão com o banco de dados Postgres */

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
const connection = createConnection();