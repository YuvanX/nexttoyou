"use client";
import { signIn } from "next-auth/react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, DialogTitle } from "./dialog"
import { FcGoogle } from "react-icons/fc"

export const TopBar = () => {
    return <div className="fixed top-5 w-full px-20">
        <div className="w-full flex items-center   justify-between border px-4 py-3 rounded-lg">
            <div className="tracking-tighter font-semibold underline">nexttoyou</div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Sign In</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader className="text-center">
                        <DialogTitle>Welcome to <span className="underline">nexttoyou</span></DialogTitle>
                        <DialogDescription>Click below to access the website</DialogDescription>
                    </DialogHeader>

                    <Button onClick={() => signIn("google", { callbackUrl: '/usertype'})}> 
                        <FcGoogle />Login with google
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    </div>
}