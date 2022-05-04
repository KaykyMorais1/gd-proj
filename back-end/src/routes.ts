import { GetOneDepController } from './controllers/GetOneDepController';
import { UpdateFuncController } from './controllers/UpdateFuncController';
import { DeleteFuncController } from './controllers/DeleteFuncController';
import { GetAllFuncController } from './controllers/GetAllFuncController';
import { CreateFuncController } from './controllers/CreateFuncController';
import { GetAllDepController } from './controllers/GetAllDepController';
import { Router } from "express";
import { CreateDepController } from './controllers/CreateDepController';
import { DeleteDepController } from './controllers/DeleteDepController';
import { UpdateDepController } from './controllers/UpdateDepController';

/*As routes nada mais são do que as rotas que precisaremos passar para aplicação 
para que seja possível a execução da API*/

const routes = Router();

routes.post("/departamentos", new CreateDepController().handle);
routes.get("/departamentos", new GetAllDepController().handle);
routes.delete("/departamentos/:id", new DeleteDepController().handle);
routes.put("/departamentos/:id", new UpdateDepController().handle);

routes.get("/funcionarios/:departamento_id", new GetOneDepController().handle);
routes.post("/funcionarios", new CreateFuncController().handle);
routes.get("/funcionarios", new GetAllFuncController().handle);
routes.delete("/funcionarios/:id", new DeleteFuncController().handle);
routes.put("/funcionarios/:id", new UpdateFuncController().handle);

export { routes };