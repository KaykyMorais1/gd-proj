import { getRepository } from 'typeorm';
import { Departamentos } from './../entities/Departamentos';

export class DeleteDepService{
    async execute(id: string) {
        const repo = getRepository(Departamentos);

        await repo.delete(id);
    }
}