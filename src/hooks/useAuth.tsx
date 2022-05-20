import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState({} as IUser);
  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: ISignInCredentials) => {
    try {
      const response = await api.post("/login", { email, password });

      const { token, user } = response.data;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      setUser(user);

      Router.push("/dashboard");
    } catch (err: any) {
      console.log(err.response.data.error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
