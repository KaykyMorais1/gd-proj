import { Request, Response } from "express";
import { DeleteFuncService } from "../services/DeleteFuncService";

export class DeleteFuncController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteFuncService();

        const result = service.execute(id);

        return response.status(204).end();
    }
}