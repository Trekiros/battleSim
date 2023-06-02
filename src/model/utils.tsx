import { DependencyList, FC, ReactNode, createContext, useContext, useEffect, useState } from "react"
import { semiPersistentContext } from "./simulationContext"

export function clone<T>(obj: T): T {
    return structuredClone(obj)
}

// A wrapper for useState which automatically backs up the state into the localStorage if the user has agreed to it
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
// Useful for example to save search params in a modal, and re-load those same search params later, without having to save them in local storage, or in a parent component.
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

// Returns an array of numbers from 0 to n
export function range(n: number) {
    return Array.from(Array(n).keys())
}

// Capitalizes The First Letter Of Every Word
export function capitalize(str: string) {
    const words = str.split(' ')
    return words.map(word => {
        const firstLetter = word.charAt(0)
        const otherLetters = word.substring(1)
        return firstLetter.toLocaleUpperCase() + otherLetters.toLocaleLowerCase()
    }).join(' ')
}

// Sort by multiple criteria, e.g. first sort by challenge rating, then by name
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

// Can be useful for debug purposes
let inDevEnvironment = false;
if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true;
}
export {inDevEnvironment};
