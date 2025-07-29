import prisma from "@/db/src";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Google from "next-auth/providers/google";

export const authOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "database"
    },
    pages: {
        signIn: "/"
    },
    callbacks: {
        async session({ session, user }: any) {
            if(session.user) {
                session.user.id = user.id
            }

            return session;
        }   
    }
}