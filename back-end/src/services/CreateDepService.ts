import { getRepository } from "typeorm";
import { Departamentos } from './../entities/Departamentos';

type DepartamentoRequest = {
    nome : string;
    sigla: string;
};

export class CreateDepService {
    async execute({ nome, sigla }:DepartamentoRequest): Promise<Departamentos>{
        const repo = getRepository(Departamentos);

        /*O método cria o objeto na tabela*/
        const departamento = repo.create({
            nome,
            sigla
        }) 

        await repo.save(departamento);

        return departamento;
    }
}