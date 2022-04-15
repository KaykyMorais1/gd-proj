import { Entity, Column, PrimaryColumn, UpdateQueryBuilder } from "typeorm";
import { v4 as uuid } from "uuid";

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