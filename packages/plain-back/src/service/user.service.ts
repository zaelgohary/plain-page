import UserModel, { UserInput } from '../models/user.model'


export async function createUser(input: UserInput){
  try {
    return await UserModel.create(input);
  } catch (error) {
    throw new Error(error)
  }
} 