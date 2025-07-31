'use client'
import { ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export const UserSelection = () => {
    const router = useRouter()
    const session =  useSession()
    console.log(session);
    

    const normalUserFeatures = ["Searching for nearby hostels, PG's.", "Want to compare prices, amenities & reviews.", "Need verified listings near college areas."]

    const ownerUserFeatures = ["Want to list all buildings you own.", "Receive and manage booking requests.", "Track user interest and engagement."]

    return <div className="flex gap-3">
        <Card className="min-w-sm">
            <CardHeader>
                <CardTitle>Normal User</CardTitle>
                <CardDescription>Select this if below is your need</CardDescription>
                <CardContent className="my-2 text-neutral-200 space-y-1 whitespace-nowrap">
                    {normalUserFeatures.map((f, idx) => <div key={idx} className="flex items-center gap-2">
                        <Check size={15} />
                        <div className="text-sm">{f}</div>
                    </div>)}

                    <div className="flex justify-end mt-3">
                        <Button onClick={async () => {
                            const response = await axios.post("/api/usertype", { 
                                type: "normaluser",
                                redirect: false
                             })
                            if (response.status === 200) router.push("/home")
                        }} className="cursor-pointer">Select<ArrowRight /></Button></div>
                </CardContent>
            </CardHeader>
        </Card>

        <Card className="min-w-sm">
            <CardHeader>
                <CardTitle>Owner</CardTitle>
                <CardDescription>Select this if below is your need</CardDescription>
                <CardContent className="my-2 space-y-1 text-neutral-200">
                    {ownerUserFeatures.map((f, idx) => <div key={idx} className="flex items-center gap-2">
                        <Check size={15} />
                        <div className="text-sm">{f}</div>
                    </div>)}
                    <div className="flex justify-end mt-3">
                        <Button onClick={async () => {
                            const response = await axios.post("/api/usertype", { 
                                type: "owner",
                                redirect: false
                             })
                            if (response.status === 200) router.push("/dashboard")
                        }} className="cursor-pointer">Select<ArrowRight /></Button>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    </div>
}