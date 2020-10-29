import { createContext } from 'react';

const AuthContext = createContext({
  logIn: (a: string, b: string) => {
    console.log(a, b);
  },
  signUp: (a: string, b: string, c: string, d: string) => {
    console.log(a, b, c, d);
  },
  signOut: () => {
    console.log(null);
  },
});

export default AuthContext;
