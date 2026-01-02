import React, { createContext, useState } from "react";
import type { DurationContextValue } from "./types";


export const DurationContext = createContext<DurationContextValue>({duration: 0, setDuration: () => {}})

export function DurationProvider({children}: {children: React.ReactNode}){
    const [duration, setDuration] = useState(0)

    return(
        <DurationContext.Provider value={{duration, setDuration}}>
             {children}
        </DurationContext.Provider>
    );
}