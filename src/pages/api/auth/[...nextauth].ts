import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  secret: "axkcjnjka%^&*(@#$%^&*",

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const DEFAULT_USER = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          username: "abc",
          password: "123",
        };
        const username = credentials?.username;
        const password = credentials?.password;

        if (
          username == DEFAULT_USER.username &&
          password == DEFAULT_USER.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return DEFAULT_USER;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);
