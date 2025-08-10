import { AddProperty } from "@/components/ui/add-property";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";


export default function AddPropertyPage() {
    return <SidebarInset>
    <SiteHeader title="Add Property" />
    <AddProperty />
</SidebarInset>
}