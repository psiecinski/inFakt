import { createContext, ReactNode, useState } from "react";
import { AccountantsContextType } from "./types";

type PropsType = {
  children?: ReactNode;
};

const defaultState = {
  seed: "",
  setSeed: () => {},
};

export const AccountantsContext =
  createContext<AccountantsContextType>(defaultState);

/* 
    At the beginning i thought, that this app is gonna be much bigger, 
    however it can stay as a presentational version of ContextApi.
    Normally if not needed - as we can see here - should be deleted :)
*/

export const AccountantsProvider = ({ children }: PropsType) => {
  const [seed, setSeed] = useState<string>("");

  return (
    <AccountantsContext.Provider
      value={{
        seed,
        setSeed,
      }}
    >
      {children}
    </AccountantsContext.Provider>
  );
};
