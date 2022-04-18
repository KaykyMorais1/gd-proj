import { getRepository } from 'typeorm';
import { Funcionarios } from '../entities/Funcionarios';


export class DeleteFuncService{
    async execute(id: string){
        const repo = getRepository(Funcionarios);

        await repo.delete(id);
    }
}