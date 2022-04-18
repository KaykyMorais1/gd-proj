import { getRepository } from 'typeorm';
import { Funcionarios } from "../entities/Funcionarios"


type FuncRequest = {
    id: string,
    nome: string,
    departamento_id: string,
    foto: string,
    rg: number
}

export class UpdateFuncService{
    async execute({id, nome, departamento_id, foto, rg}: FuncRequest){
        const repo = getRepository(Funcionarios);

        const funcionarios = await repo.findOne({where: {id}});

        if (!funcionarios){
            return new Error("Funcionário não existe");
        }

        funcionarios.nome = nome ? nome : funcionarios.nome;
        funcionarios.departamento_id = departamento_id ? departamento_id : funcionarios.departamento_id;
        funcionarios.foto = foto ? foto : funcionarios.foto;
        funcionarios.rg = rg ? rg : funcionarios.rg;
        
        await repo.save(funcionarios);

        return(funcionarios);

    }
}