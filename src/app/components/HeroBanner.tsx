import React from "react";

export function HeroBanner() {
    return (
        // <BackgroundBeamsWithCollision>
        //     <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        //         What&apos;s cooler than Beams?{" "}
        //         <TypewriterEffectSmoothDemo/>
        //         <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        //             <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
        //                 <span className="">Exploding beams.</span>
        //             </div>
        //             <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        //                 <span className="">Exploding beams.</span>
        //             </div>
        //         </div>
        //     </h2>
        // </BackgroundBeamsWithCollision>
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/videos/hero-video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="max-w-[596px] relative z-10 text-center">
                <h1 className=" text-white text-4xl md:text-6xl font-bold mb-4">
                    We build solutions that you need
                </h1>
                <p className="text-white text-[1.125rem] font-bold  mb-6 mt-[37px]">
                    We build solutions that you need We develop solutions that enhance the impact of data across each of your needs.
                </p>
                <button
                    className="hero-banner-button py-4 px-10 rounded-full transition duration-300 mt-[68px]">
                    Get Started
                </button>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
    );
}
