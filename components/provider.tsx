'use client'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "./ui/theme-provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <SessionProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </SessionProvider>
    </div>
}