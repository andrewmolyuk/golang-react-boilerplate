import React from 'react';

// Create a context interface
interface IAuthContext {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Create a context with a default value
export const AuthContext = React.createContext<IAuthContext>({
  isAuthenticated: false,
  login: () => {
    console.warn('no auth context provider');
  },
  logout: () => {
    console.warn('no auth context provider');
  },
});
