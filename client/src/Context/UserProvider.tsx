import React, { createContext, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUserContext } from "../interfaces";

const contextDefaultValues: IUserContext = { userId: null, login: () => { }, logout: () => { } };

export const UserContext = createContext<IUserContext>(
  contextDefaultValues
);

const UserProvider: FC = ({ children }) => {
  const [userId, setUserId] = useState<IUserContext["userId"]>(contextDefaultValues.userId);
  const navigate = useNavigate()
  const login = (newUser: string): void => setUserId(newUser);

  const logout = (): void => {
    setUserId(null)
    navigate('/')
  }

  return (
    <UserContext.Provider
      value={{ userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;