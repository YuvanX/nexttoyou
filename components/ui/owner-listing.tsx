import { Input } from "./input";
import { PropertyCard } from "./property-card";
import { SidebarTrigger } from "./sidebar";

export const OwnerListing = () => {
  return (
    <div className="m-8">
      <div className="text-3xl font-semibold">
          Manage your accommodations
        </div>
      <Input type="search" placeholder="Search your properties..." className="my-5 w-1/2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5">
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        
      </div>
    </div>
  );
};
