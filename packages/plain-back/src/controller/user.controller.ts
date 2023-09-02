import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createUser } from '../service/user.service';
import { omit } from "lodash";


export async function createUserHandler(req: Request, res: Response){
  try {
    const user = await createUser(req.body);
    
    return res.send(omit(user.toJSON(), "password"));
    
  } catch (e) {
    logger.error(e)
    res.status(409).send(e.message)
  }
}