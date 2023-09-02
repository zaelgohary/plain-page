import SessionModel from '../models/session.model';

export async function createSession(userId: string){
  console.log("user id", userId);
  
  const session = await SessionModel.create(userId);
  return session.toJSON();
}