import { Request, Response, NextFunction } from 'express';
import { get } from "lodash"
import { verifyJwt } from '../utils/jwt.utils';

export const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  if (!accessToken) return res.status(401).json({error: "Access token is missing"});
  
  const {decoded, expired} = verifyJwt(accessToken);
  
  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
}