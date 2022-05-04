import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFuncionario1650975072411 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "funcionarios",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "departamento_id",
            type: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "foto",
            type: "varchar",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "rg",
            type: "numeric",
            isNullable: false,
            isUnique: true,
          },
        ],
        foreignKeys: [
          {
            name: "fk_dep_func",
            columnNames: ["departamento_id"],
            referencedTableName: "departamentos",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("funcionarios")
  }
}
