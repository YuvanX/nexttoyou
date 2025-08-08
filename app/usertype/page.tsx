import { auth } from "@/auth"
import { UserSelection } from "@/components/ui/user-selection" 
import prisma from "@/db/src"
import { redirect } from "next/navigation"

export default async function UserTypePage() {
    const session = await auth()
    if(!session?.user) redirect("/")

    if(session?.user) {
        const user = await prisma.user.findUnique({ where: { id: session.user.id }})
        if(user?.userType === 'NormalUser') redirect("/home")
        else if(user?.userType === 'Owner') redirect("/dashboard")
    }


        
    return <div className="flex justify-center items-center h-screen">
        <UserSelection />
    </div>
}