import { createContext } from 'react';

const AuthContext = createContext({
  logIn: (a: string, b: string) => {
    console.log(a, b);
  },
  signUp: () => {
    console.log(null);
  },
  signOut: () => {
    console.log(null);
  },
});

export default AuthContext;
