import { GetOneDepService } from './../services/GetOneDepService';
import { Request, Response } from "express";



export class GetOneDepController{
    async handle(request : Request, response : Response){
        const { departamento_id } = request.params;

        const service = new GetOneDepService();

        const result = await service.execute(departamento_id);

        return response.json(result)
    }
}