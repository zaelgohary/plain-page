import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createUser } from '../service/user.service';


export async function createUserHandler(req: Request, res: Response){
  try {
    const user = await createUser(req.body);
    
    return res.send(user);
    
  } catch (e) {
    logger.error(e)
    res.status(409).send(e.message)
  }
}