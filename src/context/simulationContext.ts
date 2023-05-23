import { createContext } from "react";

export const semiPersistentContext = createContext({
    state: new Map<string, any>(), 
    setState: (newValue: Map<string, any>) => {},
})