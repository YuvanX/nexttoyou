import { House, MapPinHouse } from "lucide-react"

export const Stats = ({ title, value, Icon }: { title: string, value: string, Icon: any }) => {
    return <div className="flex justify-between items-center w-full border px-3 py-4 rounded-xl">
        <div className="flex flex-col">
            <div className="text-muted-foreground">{title}</div>
            <div className="font-semibold text-2xl">{value}</div>
        </div>

        <Icon />
    </div>
}