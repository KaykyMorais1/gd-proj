import { getRepository } from 'typeorm';
import { Departamentos } from './../entities/Departamentos';

type DepUpdateRequest = {
    id: string;
    nome: string;
    sigla: string;
}

export class UpdateDepService{
    async execute({ id, nome, sigla }: DepUpdateRequest){
        const repo = getRepository(Departamentos);
        
        const departamento = await repo.findOne({where: {id}});

        if (!departamento){
            return new Error("Departamento não existe");
        }

        departamento.nome = nome ? nome : departamento.nome;
        departamento.sigla = sigla ? sigla : departamento.sigla;

        await repo.save(departamento);

        return(departamento);

    }
}