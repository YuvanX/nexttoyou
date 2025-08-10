import { OwnerListing } from "@/components/ui/owner-listing";
import { SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";

export default function MyListing() {
  return (
    <SidebarInset>
        <SiteHeader title="My Listings"/>
      <OwnerListing />
    </SidebarInset>
  );
}
