import { useEffect, useState } from "react"

export function clone<T>(obj: T): T {
    return structuredClone(obj)
}

export function useStoredState<T>(key: string, defaultValue: T, parser: (str: string) => T|null) {
    const [state, setState] = useState(defaultValue)
    
    useEffect(() => {
        if (!localStorage) return

        const storedValue = localStorage.getItem(key)

        if (storedValue !== null) {
            const parsedValue = parser(storedValue)
            if (parsedValue !== null) setState(parsedValue)
            else console.error('Could not parse', key, 'from localStorage')
        }
    })

    const stateSaver = (newValue: T) => {
        setState(newValue)
        
        if (!localStorage) return
        
        const useRGPD = localStorage.getItem('useLocalStorage')
        if (useRGPD !== null) localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [state, stateSaver] as const
}

export function range(n: number) {
    return Array.from(Array(n).keys())
}