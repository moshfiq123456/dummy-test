"use client";
import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};


export const MenuItem = ({
                             setActive,
                             active,
                             item,
                             href,
                             children,
                             textColor,
                         }: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    href?: string;
    children?: React.ReactNode;
    textColor?: string;
}) => {
    return (
        href ? <Link onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
        }} onMouseEnter={() => setActive(item)} href={href} passHref>
            <div className={`cursor-pointer ${active === item && "text-purple-500"}  font-medium text-xl ${textColor} hover:opacity-[0.9] hover:text-purple-500 active:text-purple-500 dark:text-white`} >
                {item}
            </div>
        </Link> : <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p transition={{duration: 0.3}} className={`cursor-pointer ${active === item && "text-purple-500"} font-medium text-xl ${textColor} hover:opacity-[0.9] hover:text-purple-500 active:text-purple-500 dark:text-white`} >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div initial={{opacity: 0, scale: 0.85, y: 10}} animate={{opacity: 1, scale: 1, y: 0}} transition={transition} >
                    {active === item && ( <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div transition={transition} layoutId="active"  className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl" > <motion.div layout  className="w-max h-full p-4" >
                                {children} </motion.div> </motion.div> </div> )}
                </motion.div> )}
        </div>
    );
};


export const Menu = ({
                         setActive,
                         children,
                     }: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Detect scroll position

            // Detect and log the background color
            if (navRef.current) {
                const bgColor = getComputedStyle(navRef.current).backgroundColor;
                console.log("Current background color:", bgColor);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            onMouseLeave={() => setActive(null)} // resets the state
            className={`relative flex justify-between items-center gap-10 left-0 w-full px-[165px] py-6 z-50 transition-colors duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="flex flex-row gap-2 items-center">
                <Image
                    src="/assets/images/companyLogo/logo.png"
                    alt="Logo"
                    width={51.23}
                    height={54.99}
                />
                <div>
                    <Image
                        src="/assets/images/companyLogo/textlogo.png"
                        alt="Logo"
                        width={103.94}
                        height={24.13}
                    />
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child as React.ReactElement, {
                        textColor: isScrolled ? "navbar-gradient-text" : "text-white",
                    })
                )}
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <Link onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                }} href="https://facebook.com" target="_blank">
                    <FaFacebook size={20} className="text-gray-600 hover:text-blue-500" />
                </Link>
                <Link onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                }} href="https://twitter.com" target="_blank">
                    <FaTwitter size={20} className="text-gray-600 hover:text-blue-400" />
                </Link>
                <Link onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                }}href="https://linkedin.com" target="_blank">
                    <FaLinkedin size={20} className="text-gray-600 hover:text-blue-700" />
                </Link>
            </div>
        </nav>
    );
};




export const ProductItem = ({
                                title,
                                description,
                                href,
                                src,
                            }: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
        }} href={href} className="flex space-x-2">

            <Image
                src={src}
                width={50}
                height={30}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>

                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

// export const HoveredLink = ({children, ...rest}: any) => {
//     return (
//         <Link
//             {...rest}
//             className="text-neutral-700 dark:text-neutral-200 hover:text-black "
//         >
//             {children}
//         </Link>
//     );
// };
