import { CreateDepService } from './../services/CreateDepService';
import { Request, Response } from "express";



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