import { UpdateDepService } from './../services/UpdateDepService';
import { Request, Response } from "express";

export class UpdateDepController {
   async handle(request : Request, response : Response){
    const { id } = request.params;
    const{ nome, sigla } = request.body;

    const service = new UpdateDepService();
    const result = await service.execute({id, nome, sigla});

    if (result instanceof Error){
        return response.status(400).json(result.message);
    }

    return response.json(result);

   }
}