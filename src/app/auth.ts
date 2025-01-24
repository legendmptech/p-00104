import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ValidateSignIn } from "@/validate/auth.validate";
import { mysqlQuery } from "@/lib/db";
import { compareSync } from "bcrypt";
import { DB } from "@/types/database";

export default NextAuth({
    session: {
        strategy: "jwt", // Use JWT-based session management
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                user_email: { label: "Email", type: "text" },
                user_password: { label: "Password", type: "password" },
            },
            authorize: async (credentials): Promise<any> => {
                if (
                    !credentials ||
                    typeof credentials.user_email !== "string" ||
                    typeof credentials.user_password !== "string"
                ) {
                    throw new Error("Invalid Credentials");
                }

                const { user_email, user_password } = credentials;
                try {
                    // Validate credentials
                    await ValidateSignIn({ user_email, user_password });
                    // Fetch user from DB
                    const users = await mysqlQuery({
                        query: `SELECT * FROM ${DB.USERS_TABLE} WHERE user_email = ?`,
                        values: [user_email],
                    });
                    if (users.length === 0) throw new Error("Invalid Credentials");

                    const user = users[0];

                    // Compare passwords
                    const isPasswordSame = compareSync(user_password, user.user_password)
                    if (!isPasswordSame) throw new Error("Password Mismatch");
                    return { ...user, password: null };
                } catch (error) {
                    throw error;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.type = user.user_type; // Add user_type to the JWT token
                token.id = user.user_id; // Add user_id to the JWT token
                token.email = user.user_email
                token.name = user.user_name
            }
            return token;
        },
        session({ session, token }: any) {
            if (session.user) {
                session.user.email = token.email
                session.user.name = token.name
                session.user.type = token.type; // Add user_type to the session object
                session.user.id = token.id; // Add user_id to the session object
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});
