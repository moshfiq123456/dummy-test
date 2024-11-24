// src/components/Footer.tsx
'use client'
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="pt-[111px] px-[111px] pb-[35.01px] max-h-[964px] bg-[#f3f3ff] bg-[url('/assets/images/background/bg-footer.png')] bg-cover bg-center ">
            <div className={`flex flex-col gap-[64px]`}>
                <div className="flex flex-col items-center gap-[45px] ">
                    <h1 className={`footer-gradient-text w-[700px] text-center`}>Still have more questions? Contact us
                        now.</h1>
                    <h2 className={`text-black text-[18px] w-[560px] text-center`}>Sark provides the best POS services
                        and there are many benefits if you join us. Download now and
                        increase your business.</h2>
                    <div>
                        <button
                            className="hero-banner-button text-white py-4 px-10 rounded-full flex items-center gap-2">
                            Contact Us
                        </button>
                    </div>

                </div>

                <div className="container  mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Logo and Address */}
                        {/*<div>*/}
                        {/*    <div className="mb-4">*/}

                        {/*    </div>*/}
                        {/*    <p>Floor #11, 16, 19 & 26 Ahmed Tower, 28,</p>*/}
                        {/*    <p>30 Kemal Ataturk Ave, Banani, Dhaka 1213</p>*/}
                        {/*    <p>627 – Ramchandrapur, Rajshahi-6100</p>*/}
                        {/*    <div className="flex items-center mt-4">*/}
                        {/*        <MdEmail className="mr-2"/>*/}
                        {/*        <span>About</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="flex items-center mt-2">*/}
                        {/*        <MdPhone className="mr-2"/>*/}
                        {/*        <span>+880 13 212 32419</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className={`flex flex-col gap-2 items-center`}>
                            <Image
                                src="/assets/images/companyLogo/logo.png" // Replace with your logo path
                                alt="Logo"
                                width={91.61}
                                height={938.34}
                            />
                            <div>
                                <Image
                                    src="/assets/images/companyLogo/textlogo.png" // Replace with your logo path
                                    alt="Logo"
                                    width={148.23}
                                    height={37.26}
                                />
                            </div>
                        </div>

                        <div className={`text-[#080A47]`}>
                            <h3 className="text-lg font-bold mb-4 ">Company</h3>
                            <nav className="flex flex-col space-y-2 ">
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/about" className="hover:underline">
                                    About
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/blog" className="hover:underline">
                                    Features
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/academy" className="hover:underline">
                                    Works
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/privacy-policy" className="hover:underline">
                                    Career
                                </Link>

                            </nav>
                        </div>
                        {/* Navigation Links */}
                        <div className={`text-[#080A47]`}>
                            <h3 className="text-lg font-bold mb-4">Help</h3>
                            <nav className="flex flex-col space-y-2">
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/about" className="hover:underline">
                                    Customer Support
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/blog" className="hover:underline">
                                    Delivery Details
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/academy" className="hover:underline">
                                    Terms & Conditions
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </Link>

                            </nav>
                        </div>

                        {/* Collaboration Models */}
                        <div className={`text-[#080A47]`}>
                            <h3 className="text-lg font-bold mb-4">Products</h3>
                            <nav className="flex flex-col space-y-2">
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/team-augmentation" className="hover:underline">
                                    QAClan
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/offshore-development" className="hover:underline">
                                    DataForge
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/mvp-service" className="hover:underline">
                                    NetArmor
                                </Link>

                            </nav>
                        </div>

                        {/* For Hiring */}
                        <div className={`text-[#080A47]`}>
                            <h3 className="text-lg font-bold mb-4">Links</h3>
                            <nav className="flex flex-col space-y-2">
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/hire-developers" className="hover:underline">
                                    Free eBooks
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/javascript-developers" className="hover:underline">
                                    Development Tutorial
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/python-developers" className="hover:underline">
                                    How to - Blog
                                </Link>
                                <Link onClick={(e) => {
                                    e.preventDefault(); // Prevent default navigation
                                }} href="/java-developers" className="hover:underline">
                                    Youtube Playlist
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Footer Bottom */}

                </div>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MyCompany. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                        }} href="https://facebook.com" target="_blank">
                            <FaFacebook size={20} className="text-gray-600 hover:text-blue-500"/>
                        </Link>
                        <Link onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                        }} href="https://twitter.com" target="_blank">
                            <FaTwitter size={20} className="text-gray-600 hover:text-blue-400"/>
                        </Link>
                        <Link onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                        }} href="https://instagram.com" target="_blank">
                            <FaInstagram size={20} className="text-gray-600 hover:text-pink-500"/>
                        </Link>
                        <Link onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                        }} href="https://linkedin.com" target="_blank">
                            <FaLinkedin size={20} className="text-gray-600 hover:text-blue-700"/>
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;