import { CreateDepService } from './../services/CreateDepService';
import { Request, Response } from "express";

/*Cada controller é responsável por chamar o service e executá-lo no banco de dados!*/

export class CreateDepController{
    async handle(request : Request, response : Response){
        const { nome, sigla } = request.body;

        const service = new CreateDepService();

        const result = await service.execute({nome, sigla});

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}