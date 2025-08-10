import { DashBoard } from "@/components/ui/dashboard-section";
import { DataTable } from "@/components/ui/data-table";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { StatCard } from "@/components/ui/stats-card";


export default function OwnerDashBoard() {
    return <SidebarInset>
            <SiteHeader />
           <StatCard />
           <DataTable />
        </SidebarInset>

}