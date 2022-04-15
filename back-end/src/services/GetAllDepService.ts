import { Departamentos } from './../entities/Departamentos';
import { getRepository } from 'typeorm';



export class GetAllDepService {
    async execute(){
        const repo = getRepository(Departamentos);

        const departamentos = repo.find();

        return departamentos;
    }
}