import { omit } from 'lodash';
import UserModel, { UserInput } from '../models/user.model'


export async function createUser(input: UserInput){
  try {
    const user = await UserModel.create(input);
    return user;

  } catch (error) {
    throw new Error(error)
  }
}


export async function validatePassword({email, password}: {email: string, password: string}){
  const user = await UserModel.findOne({email})
  console.log("user", user);
  
  if (!user) return false;

  const isValid = await user.comparePassword(password);
  console.log("isValid", isValid);
  

  if (!isValid) return false;

  return omit(user.toJSON(), "password")
}