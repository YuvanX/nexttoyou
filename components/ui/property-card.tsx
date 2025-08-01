import { MapIcon, Star } from "lucide-react"
import Image from "next/image"
import { StarIcon } from "./star-icon"


export const PropertyCard = () => {
    return <div className="flex flex-col shadow rounded-lg bg-card">
        <div className="h-64 relative">
            <Image src="/house-1.jpg" fill alt="house" className="object-cover rounded-t-lg" />
        </div>
        <div className="px-4 py-5">
            <div className="flex justify-between">
                <div className="text-xl font-semibold">Yuvan Hostels</div>
                <div className="flex items-center gap-1 text-muted-foreground"><StarIcon /> 4.8</div>
            </div>

            <div className="text-muted-foreground space-y-2">
                <div>Hostel</div>
                <div className="flex items-center gap-1"><MapIcon />Medchal, Hyderabad</div>
                <div className="flex justify-between items-center">
                    <div>2 sharing</div>
                    <div><span className="text-xl font-bold text-black dark:text-white">&#8377;6000/</span>month</div>
                </div>
            </div>
        </div>
    </div>
}