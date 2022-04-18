import { getRepository } from "typeorm";
import { Departamentos } from './../entities/Departamentos';

/*Em cada service usamos o TypeORM para facilitar a execução de cada método da API
Cada service é responsavél por executar um método do nosso CRUD*/

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