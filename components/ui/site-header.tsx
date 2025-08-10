
import { Separator } from "./separator";
import { SidebarTrigger } from "./sidebar";

export const SiteHeader = ({ title }: { title: string }) => {
  
  return (
    <header className="w-full flex justify-between items-center px-8 py-3 border-b">
      <div className="flex items-center w-full gap-4">
        <SidebarTrigger className="-ml-1"/>
        <Separator className="data-[orientation=vertical]:h-4" orientation="vertical" />

        <div className="text-base font-medium">{title}</div>
      </div>
      <div>
            Github
      </div>
    </header>
  );
};
