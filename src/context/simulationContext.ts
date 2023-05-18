import { createContext } from "react";

export const validateContext = createContext({
    isValid: false, 
    validate: (newValue: boolean) => {}
})