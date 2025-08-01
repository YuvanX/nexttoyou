import { Ban, CheckCheck, MapPinHouse, Plus, Star } from "lucide-react"
import { Button } from "./ui/button"
import { Stats } from "./ui/stats"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { PropertyCard } from "./ui/property-card"

export const DashBoard = () => {
    const stats = [{
        title: "Total Properties",
        value: "4",
        icon: MapPinHouse,
    }, {
        title: "Available",
        value: "2",
        icon: CheckCheck
    }, {
        title: "occupied",
        value: "2",
        icon: Ban
    }, {
        title: "Avg. Rating",
        value: "4.8",
        icon: Star
    }]
    return <div>
        <div className="flex justify-between items-center px-8 my-5">
            <div>
                <div className="text-xl font-bold">Your Properties</div>
                <div className="text-muted-foreground">Manage your accommodation portfolio</div>
            </div>
            <Button><Plus /> Add Property</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-3 my-5">
            {stats.map((s, idx) => <Stats key={idx} Icon={s.icon} title={s.title} value={s.value}/>)}
        </div>

        
        <div className="px-8 mt-8">
            <Input placeholder="Search Properties..." className="max-w-sm"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 ">
                <PropertyCard/>
            </div>
        </div>
    </div>
}