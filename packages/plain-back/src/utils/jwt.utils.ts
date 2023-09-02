import jwt from "jsonwebtoken";



const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

export function signJwt(object: Object, options: jwt.SignOptions | undefined){
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "ES256"
  })
}


export function verifyJwt(token: string){
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (e) {
    return {
      valid: false,
      expired: e.message === "jwt is expired.",
      decoded: null,
    }
  }
}