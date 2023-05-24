import { DependencyList, FC, ReactNode, createContext, useContext, useEffect, useState } from "react"
import { semiPersistentContext } from "../context/simulationContext"
import { v4 as uuid } from 'uuid'

export function clone<T>(obj: T): T {
    return structuredClone(obj)
}

export function useStoredState<T>(key: string, defaultValue: T, parser: (str: string) => T|null) {
    const [state, setState] = useState(defaultValue)
    
    useEffect(() => {
        if (!localStorage) return

        const storedValue = localStorage.getItem(key)
        if (storedValue === null) return
        
        try {
            const parsedValue = parser(JSON.parse(storedValue))
            if (parsedValue !== null) setState(parsedValue)
            else console.error('Could not parse', key, 'from localStorage')
        } catch (e) {
            console.error(e)
        }
    }, [])

    const stateSaver = (newValue: T) => {
        setState(newValue)
        
        if (!localStorage) return
        
        const useLocalStorage = localStorage.getItem('useLocalStorage')
        if (useLocalStorage !== null) localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [state, stateSaver] as const
}

// The state will be shared between identical components, even if the component is unmounted
// Useful for example to save search params in a modal, and re-load those same search params later, 
// without having to save them in local storage, or in a parent component.
// Do not overuse, because the performances aren't great. 
export function sharedStateGenerator(componentName: string) {
    const {state, setState} = useContext(semiPersistentContext)
    let key = 0

    // This variable exists so if a single function calls multiple setters, they don't overwrite one another
    const sharedState = clone(state)

    return function useSharedState<T>(initialValue: T) {
        const callKey = key++
        const mapKey = `${componentName}/${callKey}`

        async function setter(newValue: T) {
            sharedState.set(mapKey, {value: newValue})
            await setState(sharedState)
        }

        const existingValue = state.get(mapKey)?.value
        const value: T = (existingValue === undefined) ? initialValue : existingValue
    
        return [ value, setter ] as const
    }
}

export function useCalculatedState<T>(generator: () => T, dependencies: DependencyList) {
    const [state, setState] = useState(generator())

    useEffect(() => {
        setState(generator())
    }, dependencies)

    return state
}

export function range(n: number) {
    return Array.from(Array(n).keys())
}

export function capitalize(str: string) {
    const words = str.split(' ')
    return words.map(word => {
        const firstLetter = word.charAt(0)
        const otherLetters = word.substring(1)
        return firstLetter.toLocaleUpperCase() + otherLetters.toLocaleLowerCase()
    }).join(' ')
}

export function multiSort<T>(arr: T[], ...criteria: (keyof T)[]) {
    return arr.sort((a, b) => {
        for (let i = 0 ; i < criteria.length; i++) {
            const criterion = criteria[i]

            if (a[criterion] > b[criterion]) return 1
            if (a[criterion] < b[criterion]) return -1
        }
        return 0
    })
}


let inDevEnvironment = false;

if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true;
}

export {inDevEnvironment};


// Form Validation
const validationContext = createContext({
    isValid: true,
    validate: (key: string, isValid: boolean) => {},
})
export const ValidationContext:FC<{
    children: (reset: () => void) => ReactNode,
    onChange?: (newValue: boolean) => void
}> = ({children, onChange}) => {
    const [validationMap, setValidationMap] = useState(new Map<string, boolean>())
    const isValid = useCalculatedState(() => Array.from(validationMap.values()).reduce((a, b) => (a && b), true), [validationMap])
    
    useEffect(() => {
        if (onChange) onChange(isValid)
    }, [isValid])


    function validate(key: string, isValid: boolean) {
        if (isValid === validationMap.get(key)) return

        const validationMapClone = clone(validationMap)
        validationMapClone.set(key, isValid)
        setValidationMap(validationMapClone)
    }

    function reset() {
        setValidationMap(new Map())
    }

    return (
        <validationContext.Provider value={{ isValid, validate }}>
            {children(reset)}
        </validationContext.Provider>
    )
}
export function useValidation(validationCallback: () => boolean, dependencies: DependencyList) {
    const [validationKey] = useState(uuid())
    const {validate} = useContext(validationContext)

    useEffect(() => {
        validate(validationKey, validationCallback())
        //return () => validate(validationKey, true)
    }, [dependencies])
}