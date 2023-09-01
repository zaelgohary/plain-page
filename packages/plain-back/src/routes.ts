import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource  from "./middleware/validateResource"
import { createUseSchema } from './schema/user.schema';


function routes(app: Express){
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/users",  validateResource(createUseSchema), createUserHandler);
}

export default routes