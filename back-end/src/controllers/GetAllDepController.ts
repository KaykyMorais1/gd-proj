import { GetAllDepService } from './../services/GetAllDepService';
import { Request, Response } from "express";

export class GetAllDepController {
   async handle(request : Request, response : Response){
    const service = new GetAllDepService();

    const todosDep = await service.execute();

    return response.json(todosDep);
   }
}