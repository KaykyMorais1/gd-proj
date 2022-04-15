import { GetAllDepController } from './controllers/GetAllDepController';
import { Router } from "express";
import { CreateDepController } from './controllers/CreateDepController';
import { DeleteDepController } from './controllers/DeleteDepController';
import { UpdateDepController } from './controllers/UpdateDepController';

const routes = Router();

routes.post("/departamentos", new CreateDepController().handle);
routes.get("/departamentos", new GetAllDepController().handle);
routes.delete("/departamentos/:id", new DeleteDepController().handle);
routes.put("/departamentos/:id", new UpdateDepController().handle);

export { routes };