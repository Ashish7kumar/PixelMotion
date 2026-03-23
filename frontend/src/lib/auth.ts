import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "~/env";



// If your Prisma file is located elsewhere, you can change the path
import {db} from "~/server/db"
export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql", 
    }),
    emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    github: { 
      clientId:env.GITHUB_CLIENT_ID as string, 
      clientSecret: env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 
});