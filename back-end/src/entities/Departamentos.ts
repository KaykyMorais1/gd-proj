import { Entity, Column, PrimaryColumn, UpdateQueryBuilder } from "typeorm";
import { v4 as uuid } from "uuid";

/*As entities são as classes que representarão as nossas tabelas(equivalentes ao DTO no java)*/

@Entity("departamentos")
export class Departamentos {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    sigla: string;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}