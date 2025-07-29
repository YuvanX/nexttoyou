'use client';

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ModeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null; 

    function handleToggle() {
        console.log("triggerd");
        
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }

    return <div onClick={handleToggle}>
        {resolvedTheme === 'light' ? <Moon /> : <Sun />}
    </div>
}