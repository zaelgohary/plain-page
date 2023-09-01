import { TypeOf, object, string } from "zod"


export const createUseSchema = object({
  body: object({
    name: string({
      required_error: "Name is required."
    }),
    email: string({
      required_error: "Email is required."
    }).email("Not a valid email."),
    password: string({
      required_error: "Password is required."
    }).min(6, "Password is too short. Should be 6 chars minimum."),
    passwordConfirmation: string({
      required_error: "Password confirm is required."
    }),
  }).refine((data) => data.password === data.passwordConfirmation,{
    message: "Passwords do not match.",
    path: ["passwordConfirmation"]
  })
})

export type createUserInput = TypeOf<typeof createUseSchema>