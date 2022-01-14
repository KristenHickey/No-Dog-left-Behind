import React, { createContext, useState, FC } from "react";
import { IUserContext } from "../interfaces";

const contextDefaultValues: IUserContext = { userId: null, login: () => { } };

export const UserContext = createContext<IUserContext>(
  contextDefaultValues
);

const UserProvider: FC = ({ children }) => {
  const [userId, setUserId] = useState<IUserContext["userId"]>(contextDefaultValues.userId);

  const login = (newUser: string): void => setUserId(newUser);

  return (
    <UserContext.Provider
      value={{ userId, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;