import {z} from 'zod';

export const appOwnerSignupInput = z.object({
   email:z.string().email(),
   password:z.string().min(8)
})

export const appOwnerSigninInput = z.object({
   email:z.string().email(),
   password:z.string().min(8)
})

export const appAuthSignupInput = z.object({
   email:z.string().email(),
   password:z.string().min(8)
})

export type AppOwnerSignupInput = z.infer<typeof appOwnerSignupInput>;
export type AppOwnerSignInInput = z.infer<typeof appOwnerSigninInput>;
export type AppAuthSignupInput = z.infer<typeof appAuthSignupInput>;
