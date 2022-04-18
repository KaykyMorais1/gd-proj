import { Request, Response } from "express";
import { UpdateFuncService } from "../services/UpdateFuncService";



export class UpdateFuncController{
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { nome, departamento_id, foto, rg } = request.body;

        const service = new UpdateFuncService();
        const result = await service.execute({id, nome, departamento_id, foto, rg});

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }
    
        return response.json(result);
    }
}