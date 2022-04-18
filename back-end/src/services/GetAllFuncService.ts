import { getRepository } from 'typeorm';
import { Funcionarios } from '../entities/Funcionarios';




export class GetAllFuncService{
    async execute(){
        const repo = getRepository(Funcionarios);

        const funcionarios = repo.find({
            relations: ['departamentos'],
        });

        return funcionarios;
    }
}