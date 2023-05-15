import { DependencyList, useEffect, useState } from "react"

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
            const parsedValue = parser(storedValue)
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