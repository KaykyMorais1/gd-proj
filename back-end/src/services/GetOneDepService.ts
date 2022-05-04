import { getRepository } from 'typeorm';
import { Funcionarios } from './../entities/Funcionarios';



export class GetOneDepService{
    async execute(departamento_id: string){
        const repo = getRepository(Funcionarios);

        const funcionarios = repo.find({where: {departamento_id}});

        return funcionarios;
    }
}