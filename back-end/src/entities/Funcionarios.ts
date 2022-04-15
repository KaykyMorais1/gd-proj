import { Departamentos } from './Departamentos';
import { Entity, Column, PrimaryColumn, UpdateQueryBuilder, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("funcionarios")
export class Funcionarios {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    departamento_id: string;

    @ManyToOne(() => Departamentos) /*Regra para que um departamento tenha vários funcionários porém um funcionário pode ser somente de um departamento */
    @JoinColumn({name: "departamento_id"})
    departamentos: Departamentos;

    @Column()
    foto: string;

    @Column()
    rg: number;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}