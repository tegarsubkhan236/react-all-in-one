import {useEffect, useState} from "react";

export function getSession (key, defaultValue = false) {
    const stored =  sessionStorage.getItem(key)
    if (!stored) {
        return defaultValue
    }
    return JSON.parse(stored);
}

export function useSession(key, defaultValue = false){
    const [value, setValue] = useState(getSession(key, defaultValue))
    useEffect(
        () => {sessionStorage.setItem(key, JSON.stringify(value))},
        [key, value]
    )
    return [value, setValue]
}
