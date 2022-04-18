import { GetAllFuncService } from './../services/GetAllFuncService';
import { Request, Response } from "express";


export class GetAllFuncController{
    async handle(request : Request, response : Response){

        const service = new GetAllFuncService();

        const funcionarios = await service.execute();

        return response.json(funcionarios);
    }
}