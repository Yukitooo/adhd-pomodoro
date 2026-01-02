import { useContext } from "react";
import { DurationContext } from "./DurationContext";

export function useDuration(){
    const ctx = useContext(DurationContext);
    if (!ctx) throw new Error('useDuration must be under the useDuration component');
    return ctx;
}