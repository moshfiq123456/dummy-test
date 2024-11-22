"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div >
            <div className={"flex flex-col justify-center items-center"}>
                <div className=" text-4xl font-medium leading-tight max-w-[500px]">
                    We Serve All Tech Stacks
                </div>
                <div className={"text-xs leading-tight max-w-[500px]"}>
                    We understand that today companies must develop custom software products to keep pace with the
                    competitive market
                </div>
            </div>

            <div
                className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            </div>
        </div>

    );
}

const testimonials = [
    {
        title: "TYPESCRIPT",
        src:'/assets/images/slider/programminglanguage/ts.png'
    },
    {
        title: "Java",
        src:'/assets/images/slider/programminglanguage/java.png'
    },
    {
        title: "Python",
        src:'/assets/images/slider/programminglanguage/python.png'
    },
    {
        title: "php",
        src:'/assets/images/slider/programminglanguage/php.png'
    },
    {
        title: "javascript",
        src:'/assets/images/slider/programminglanguage/javascript.png'
    },

    {

        title: "GO",
        src:'/assets/images/slider/programminglanguage/golang.png'
    },
];
