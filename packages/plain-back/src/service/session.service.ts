import { FilterQuery } from 'mongoose';
import SessionModel, { SessionDocument } from '../models/session.model';

export async function createSession(userId: string){

  const session = await SessionModel.create(userId);
  return session.toJSON();
}


export async function findSessions(query: FilterQuery<SessionDocument>){
  if (typeof query !== 'object' || query === null) {
    throw new Error('Invalid query parameter');
  }
  return SessionModel.find(query).lean();
}