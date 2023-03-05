import { createContext } from "react";
import { MainContextProps } from "../types/types";

const MainContext = createContext<MainContextProps | null>(null)

const MainProvider = MainContext.Provider

export { MainContext, MainProvider }