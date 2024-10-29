import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Aarav",
    username: "@aarav",
    body: "The consulting services provided were exceptional! They really understood my needs and helped me achieve my goals.",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Diya",
    username: "@diya",
    body: "I am truly impressed with the insights I received. Their expertise made a significant difference in my business strategy.",
    img: "https://avatar.vercel.sh/diya",
  },
  {
    name: "Ravi",
    username: "@ravi",
    body: "The team was incredibly knowledgeable and supportive. They guided me every step of the way!",
    img: "https://avatar.vercel.sh/ravi",
  },
  {
    name: "Meera",
    username: "@meera",
    body: "Outstanding service! They provided valuable recommendations that transformed my approach to business.",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Raj",
    username: "@raj",
    body: "I can't thank them enough for their help. Their strategies are practical and easy to implement.",
    img: "https://avatar.vercel.sh/raj",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "The consulting experience was top-notch! They delivered results beyond my expectations.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "Their tailored solutions helped streamline my operations significantly.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Aisha",
    username: "@aisha",
    body: "I was impressed with their attention to detail and commitment to my success.",
    img: "https://avatar.vercel.sh/aisha",
  },
  {
    name: "Karan",
    username: "@karan",
    body: "The insights I gained from their consultation have been invaluable to my growth.",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name: "Nisha",
    username: "@nisha",
    body: "Their expert guidance helped me navigate challenging market conditions effortlessly.",
    img: "https://avatar.vercel.sh/nisha",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "I highly recommend their services! They go above and beyond for their clients.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Pooja",
    username: "@pooja",
    body: "The consulting team was approachable and easy to work with. They made the process enjoyable!",
    img: "https://avatar.vercel.sh/pooja",
  },
  {
    name: "Siddharth",
    username: "@siddharth",
    body: "They provided a fresh perspective that significantly improved my business strategy.",
    img: "https://avatar.vercel.sh/siddharth",
  },
  {
    name: "Aditi",
    username: "@aditi",
    body: "Their holistic approach to consulting helped me see the bigger picture.",
    img: "https://avatar.vercel.sh/aditi",
  },
  {
    name: "Nitin",
    username: "@nitin",
    body: "The actionable insights I received were exactly what I needed to take my business to the next level.",
    img: "https://avatar.vercel.sh/nitin",
  },
  {
    name: "Isha",
    username: "@isha",
    body: "The professionalism and expertise displayed by the team were remarkable.",
    img: "https://avatar.vercel.sh/isha",
  },
  {
    name: "Anish",
    username: "@anish",
    body: "I appreciate their flexibility and willingness to adapt to my unique requirements.",
    img: "https://avatar.vercel.sh/anish",
  },
  {
    name: "Tanvi",
    username: "@tanvi",
    body: "The value I received from their consulting services was worth every penny.",
    img: "https://avatar.vercel.sh/tanvi",
  },
  {
    name: "Kavya",
    username: "@kavya",
    body: "They took the time to understand my business and provided tailored solutions.",
    img: "https://avatar.vercel.sh/kavya",
  },
  {
    name: "Ayaan",
    username: "@ayaan",
    body: "Their innovative approach helped me find solutions I hadn't considered before.",
    img: "https://avatar.vercel.sh/ayaan",
  },
  {
    name: "Ritika",
    username: "@ritika",
    body: "They truly care about their clients and are committed to delivering results.",
    img: "https://avatar.vercel.sh/ritika",
  },
  {
    name: "Harsh",
    username: "@harsh",
    body: "I had an excellent experience! They exceeded my expectations in every way.",
    img: "https://avatar.vercel.sh/harsh",
  },
  {
    name: "Tara",
    username: "@tara",
    body: "Their consulting services have made a real difference in my business operations.",
    img: "https://avatar.vercel.sh/tara",
  },
  {
    name: "Neeraj",
    username: "@neeraj",
    body: "Highly knowledgeable and professional team. I couldn't ask for better consulting services.",
    img: "https://avatar.vercel.sh/neeraj",
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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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

export function Silder() {
  return (
    <div className="relative w-full items-center justify-center flex flex-col mt-20">
    <h1 className='flex flex-col font-[Poppins] text-[8em] font-medium leading-[1em] mb-10'>People Review's</h1>
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
    </div>
  );
}
export default Silder;