import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className={`flex flex-row justify-between py-[166px] px-[153px] gap-[50px]`}>
            <div className={`flex flex-col gap-6 max-w-[658px]`}>
                <h1 className={`hero-banner-gradient-text`}>About Us</h1>
                <h2 className={`text-2xl font-bold `}>ProTech Innovation Ltd. aims to juxtapose efficiency, innovation,
                    and sustainable value addition.</h2>
                <div className={`flex flex-col gap-6`}>
                    <p className={`text-xl `}> ProTech Innovation Ltd. aims to juxtapose efficiency, innovation, and
                        sustainable value addition while offering cutting-edge solutions in system integration, cyber
                        security, automation, and service support (BPO). With a committed team of experts possessing
                        passion for excellence, we enable business to thrive in this digitally versatile era which has
                        its ramifications in directions we may not even imagine. Therefore, the need for more is always
                        on the table. </p>
                    <p className={`text-xl `}> At ProTech Innovation Ltd., it is our trait to thrive for that MORE, so
                        that we can empower businesses with technology solutions enabling effective infrastructure and
                        optimal output. Lets embark on a journey of innovation together and make our venture secure,
                        resilient, and apt for futuristic needs</p>
                </div>
                <div>
                    <button className={`text-[16px] py-[10.5px] px-[20px] hero-banner-button text-white rounded-full`}>Learn More</button>
                </div>

            </div>

            <Image
                src={`/assets/images/about.png`} // Path to your image in the public folder
                alt="Laptop with code and phone"
                width={440}
                height={661}
                className="clipped-image"
            />


        </div>
    );
};

export default AboutUs;