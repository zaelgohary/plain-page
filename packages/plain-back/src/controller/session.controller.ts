import config from 'config';
import { Request, Response } from 'express';
import { createSession, findSessions } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt, verifyJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response){
  // validate user password
  const user = await validatePassword(req.body);

  if(!user) return res.status(401).send("Invalid email or password");

  // create a session
  const session = await createSession(user._id)

  // create access token
  const accessToken = signJwt(
    {...user, session: session._id},
    { expiresIn: config.get<string>("accessTokenTtl")} //20 mins
  )

  // create refresh token
  const refreshToken = signJwt(
    {...user, session: session._id},
    { expiresIn: config.get<string>("refreshTokenTtl")} //1 year
  )
  
  // return access & refresh tokens
  return res.send({accessToken, refreshToken})
}

export async function getUserSessionsHandler(req: Request, res: Response){
  const userId = res.locals.user._id;
  
  const sessions = await findSessions({user: userId, valid: true});

  return res.send(sessions);
}