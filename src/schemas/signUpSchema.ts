import {z} from "zod"


export const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email({
        message: "Invalid email address."
    }),
    phone_number: z.number()
})