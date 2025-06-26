import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        // console.log(credentials);
        return {
          id: '1',
          name: 'Anna Smith',
          email: 'Nt8B8@example.com',
          role: 'student',
        };
      },
    }),
  ],
});
