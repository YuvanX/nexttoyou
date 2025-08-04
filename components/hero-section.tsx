import { ArrowRight, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";


export const HeroSection = () => {
  return (
    <div>
      <div className="-z-10 absolute h-[200vw] max-h-[2000px] md:max-h-[1000px] lg:max-h-[1000px] left-0 right-0 top-0 lg:top-0 md:top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="flex flex-col items-center justify-center h-screen space-y-10">
        <div className="flex items-center gap-2 border px-4 py-1.5 rounded-full text-sm tracking-wider shadow inset-0 bg-white dark:bg-black relative">
          <SearchIcon size={18} />
          <div>find hostels and pgs with nexttoyou</div>
        </div>

        <div className="max-w-[900px] text-center space-y-10">
          <div className="text-7xl font-bold font-bricolage">
            Find your <span>perfect home</span> away from home.
          </div>
          <div className="text-3xl  font-thin leading-10 font-bricolage">
            Discover hostels and PGs near you. Connect with verified
            accommodations and find your ideal living space as a student.
          </div>
        </div>
        <div>
          <Button className="!px-6 !py-6 text-lg cursor-pointer">
            Get Started
            <ArrowRight />
          </Button>
        </div>

        
      </div>
    </div>
  );
};

