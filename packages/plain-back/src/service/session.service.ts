import SessionModel from '../models/session.model';

export async function createSession(userId: string){

  const session = await SessionModel.create(userId);
  return session.toJSON();
}