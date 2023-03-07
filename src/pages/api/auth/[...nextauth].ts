import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
  session: {strategy: 'jwt'},
  secret: process.env.JWT_SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({token, account}) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({session, token, user}) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};
export default NextAuth(authOptions);
