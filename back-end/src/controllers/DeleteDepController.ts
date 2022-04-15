import { DeleteDepService } from './../services/DeleteDepService';
import { Request, Response } from "express"


export class DeleteDepController {
    async handle(request : Request, response : Response){
        const { id } = request.params;

        const service = new DeleteDepService();

        const result = await service.execute(id);

        return response.status(204).end();
    }
}