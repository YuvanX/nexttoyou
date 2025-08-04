import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export const ExploreSection = () => {
    return <div className="font-bricolage flex flex-col items-center mb-20 space-y-5">
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            How it Works ?
        </div>

        <div className="flex flex-col md:flex-row flex-wrap  gap-5 w-full items-center justify-center px-2">
            <Card className="md:min-w-md lg:min-w-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Are you Searching for Accomodations ?</CardTitle>
                    <CardDescription>If you're looking for a place to stay, this is your use case.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-center gap-1"><Check size={18} /> Find verified hostels and PGs near your college.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Apply filters based on price, distance, or amenities.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Compare different options with ease.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Read real reviews from students like you.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Compare photos, amenities, and reviews.</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="md:min-w-md lg:min-w-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Own a Property?</CardTitle>
                    <CardDescription>List and manage your hostel or PG with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-center gap-1"><Check size={18} /> Set up your listing in just a few steps.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Add detailed info, images, and pricing.</li>
                        <li className="flex items-center gap-1"><Check size={18} /> Get discovered by verified student users.</li>
                        <li className="flex items-center gap-1"><Check size={18} />Receive real-time inquiries and bookings.</li>
                        <li className="flex items-center gap-1"><Check size={18} />Manage everything from a single dashboard</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
}  