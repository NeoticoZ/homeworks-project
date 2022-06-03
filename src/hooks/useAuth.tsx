import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/apiClient";

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

interface ISignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  loading: boolean;
  setIsLoading(): void;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signUp(credentials: ISignUpCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

let authChannel: BroadcastChannel;

export const signOut = () => {
  destroyCookie(undefined, "token");
  destroyCookie(undefined, "refreshToken");

  authChannel.postMessage("signOut");

  Router.push("/");
};

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState({} as IUser);
  const isAuthenticated = !!user;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          setUser({} as IUser);
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { token } = parseCookies();

    if (token) {
      api
        .get("/user")
        .then((response) => {
          const user = response.data;

          setUser(user);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const setIsLoading = () => {
    setLoading(true);
  };

  const signIn = async ({ email, password }: ISignInCredentials) => {
    try {
      const response = await api.post("/login", { email, password });

      const { token, refreshToken, user } = response.data;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      setCookie(null, "refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      setLoading(false);

      setUser(user);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err: any) {
      setLoading(false);

      toast.error(err.response.data.error);
    }
  };

  const signUp = async ({ name, email, password }: ISignUpCredentials) => {
    try {
      const response = await api.post("/register", { name, email, password });

      const { token, refreshToken, user } = response.data;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      setCookie(null, "refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      setUser(user);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setIsLoading,
        signIn,
        signUp,
        signOut,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
