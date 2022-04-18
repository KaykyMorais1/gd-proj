import { CreateFuncService } from './../services/CreateFuncService';
import { Request, Response } from 'express';

export class CreateFuncController{
    async handle( request : Request, response : Response){
        const { departamento_id, nome, foto, rg } = request.body;

        const service = new CreateFuncService()

        const result = await service.execute({
            
            departamento_id,
            nome,
            foto,
            rg
        })

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);

    }
}