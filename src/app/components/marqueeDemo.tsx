import { cn } from "@/lib/utils";
import {Marquee} from "@/app/components/ui/marquee";
import Image from "next/image";


const reviews = [
    {
        height:84,
        width:274,
        img: "/assets/images/slider1.png",
    },
    {
        height:84,
        width:270,
        img: "/assets/images/slider2.png",
    },
    {
        height:84,
        width:282,
        img: "/assets/images/slider3.png",
    },

    {
        height:84,
        width:270,
        img: "/assets/images/slider4.png",
    },
    {
        height:84,
        width:69,
        img: "/assets/images/slider5.png",
    },
    {
        height:84,
        width:69,
        img: "/assets/images/slider6.png",
    },
    {
        height:84,
        width:294,
        img: "/assets/images/slider7.png",
    },
    {
        height:84,
        width:188,
        img: "/assets/images/slider8.png",
    },
    {
        height:84,
        width:282,
        img: "/assets/images/slider9.png",
    },
    {
        height:84,
        width:185,
        img: "/assets/images/slider10.png",
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                        img,
                        height,
                        width
                    }: {
    img: string;
    height:number;
    width:number;
}) => {
    return (
        <figure
            className={cn(
                "relative max-w-64  overflow-hidden  p-4",
                // light styles
                "",
                // dark styles
                "",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width={width} height={height} alt="" src={img} />

            </div>

        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent ">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review,index:number) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review,index:number) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
