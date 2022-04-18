import { MigrationInterface, QueryRunner, Table } from "typeorm"

/*As migrations farão o trabalho de criar as tabelas e verificar se já temos alguma existente*/

export class CreateDepartamento1649949423588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "departamentos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "sigla",
                        type: "char",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("departamentos");
    }

}
