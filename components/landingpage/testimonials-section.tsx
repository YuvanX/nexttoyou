
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export const TestimonialSection = () => {
  return <div className="flex flex-col items-center justify-center my-20 max-w-7xl mx-auto ">

    <div className="my-10">
      <div className="text-5xl font-bricolage font-semibold">What people say about nexttoyou</div>
      <div className="my-2 text-muted-foreground text-center">Join thousands of happy students who found their perfect accommodation through our platform</div>
    </div>

    <MarqueeDemo />


  </div>
}

const reviews = [
  {
    name: "Rohit Sharma",
    username: "@rohit.s",
    body: "Finding a PG near my college was super easy. The filters helped a lot. Definitely a must-use app for students!",
    img: "https://avatar.vercel.sh/rohit",
  },
  {
    name: "Ayesha Khan",
    username: "@ayesha.k",
    body: "I found my roommate through NextToYou and we’ve become great friends. The whole process was smooth and safe.",
    img: "https://avatar.vercel.sh/ayesha",
  },
  {
    name: "Karthik M",
    username: "@karthik.m",
    body: "Booked a hostel within minutes! No broker hassle, no running around. Saved so much time and money.",
    img: "https://avatar.vercel.sh/karthik",
  },
  {
    name: "Sneha Patel",
    username: "@sneha.p",
    body: "I used NextToYou after moving to a new city for college. The community support and verified listings gave me peace of mind.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Arjun Reddy",
    username: "@arjun.r",
    body: "Loved the UI and experience! Easily found a PG with food and Wi-Fi in my budget. Highly recommended!",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Divya Mehta",
    username: "@divya.m",
    body: "Even the moving-in checklist was helpful! NextToYou takes care of every small detail. Game changer for students.",
    img: "https://avatar.vercel.sh/divya",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
