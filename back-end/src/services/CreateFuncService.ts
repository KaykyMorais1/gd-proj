import { Departamentos } from './../entities/Departamentos';
import { getRepository } from "typeorm";
import { Funcionarios } from './../entities/Funcionarios';

type FuncRequest = {
    departamento_id: string;
    nome : string;
    foto: string;
    rg: number;
};

export class CreateFuncService {
    async execute({ departamento_id, nome,foto, rg }:FuncRequest): Promise<Error | Funcionarios>{
        const repo = getRepository(Funcionarios);
        const repoDep = getRepository(Departamentos);


        /*O método cria o objeto na tabela*/
        const funcionario = repo.create({
            
            departamento_id,
            nome,
            foto,
            rg
        }) 

        await repo.save(funcionario);

        return funcionario;
    }
}