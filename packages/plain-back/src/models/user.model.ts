import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import config from 'config';

export interface UserInput {
  email: string;
  password: string;
  name: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string, userPassword: string): Promise<boolean>
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

// pre save hook
userSchema.pre("save", async function (next){
  let user = this as UserDocument;
  
  if (!user.isModified("password")) {
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});


userSchema.methods.comparePassword = async (candidatePassword: string, userPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(candidatePassword, userPassword)
  } catch (error) {
    throw new Error(error);
  }
}

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;