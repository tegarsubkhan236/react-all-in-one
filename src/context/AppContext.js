import {createContext, useMemo, useState} from "react";

export const CollapseContext = createContext({
    collapsed : false,
    setCollapsed : () => {}
})

export default function CollapseProvider({children}) {
    const [collapsed, setCollapsed] = useState(false)
    const value = useMemo(
        () => ({ collapsed, setCollapsed}),
        [collapsed]
    );
    return (
        <CollapseContext.Provider value={value}>
            {children}
        </CollapseContext.Provider>
    )
}
