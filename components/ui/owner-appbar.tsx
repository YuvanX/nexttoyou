'use client'
import { useSession } from "next-auth/react"
// import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { ModeToggle } from "./mode-toggle"

export const AppBar = () => {
    const session = useSession()
    console.log(session.data?.user?.image)
    return <div className="flex justify-between items-center px-8 py-4 border-b w-full fixed backdrop-blur-lg top-0">
       <div className="tracking-tight underline font-semibold">nexttoyou</div>
        <div className="flex justify-center gap-4">
            <ModeToggle />
            {/* <Avatar>
                <AvatarImage src={session.data?.user?.image || ""} alt={session.data?.user?.name || ""}/>
                <AvatarFallback>Image</AvatarFallback>
            </Avatar> */}
        </div>
    </div>
}