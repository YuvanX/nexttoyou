'use client'
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { ModeToggle } from "./mode-toggle"

export const AppBar = () => {
    const session = useSession()
    console.log(session.data?.user?.image)
    return <div className="flex justify-between items-center px-8 py-4 border-b">
        <img src="/n2u.png" className="w-10 h-10 rounded-lg"/>

        <div className="flex justify-center gap-4">
            <ModeToggle />
            {/* <Avatar>
                <AvatarImage src={session.data?.user?.image || ""} alt={session.data?.user?.name || ""}/>
                <AvatarFallback>Image</AvatarFallback>
            </Avatar> */}
        </div>
    </div>
}