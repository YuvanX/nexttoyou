import { auth } from "@/auth"
import { UserSelection } from "@/components/ui/user-selection" 
import { redirect } from "next/navigation"

export default async function UserTypePage() {
    const session = await auth()
    if(!session?.user) redirect("/")
        
    return <div className="flex justify-center items-center h-screen">
        <UserSelection />
    </div>
}