import { useState } from "react";
import Image from "next/image";

const Carousel2 = () => {
    const initialSlides = [
        { image: "/assets/images/client/wade.png", name: "Wade Warren", designation: "UI Designer, Adobe", comment: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”" },
        { image: "/assets/images/client/theresa.png", name: "Theresa Webb", designation: "UI Designer, Adobe", comment: "“Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco." },
        { image: "/assets/images/client/floyd.png", name: "Floyd Miles", designation: "UI Designer, Adobe", comment: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”" },
        { image: "/assets/images/client/wade.png", name: "Wade Warren", designation: "UI Designer, Adobe", comment: "“Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco." },
        { image: "/assets/images/client/floyd.png", name: "Theresa Webb", designation: "UI Designer, Adobe", comment: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”" },
    ];

    const [visibleSlides, setVisibleSlides] = useState(initialSlides.slice(0, 3)); // Show the first 3 slides initially
    const [index, setIndex] = useState(0); // Track the current index
    const [lastIndex, setLastIndex] = useState(2); // Track the last visible index
    const [animating, setAnimating] = useState(false);

    const nextSlide = () => {
        if (animating) return;
        setAnimating(true);
        const nextIndex = (index + 1) % initialSlides.length;
        const nextLastIndex = (lastIndex + 1) % initialSlides.length;

        const updatedSlides = [
            ...visibleSlides.slice(1),
            initialSlides[nextLastIndex],
        ];

        setTimeout(() => {
            setVisibleSlides(updatedSlides);
            setIndex(nextIndex);
            setLastIndex(nextLastIndex);
            setAnimating(false);
        }, 500);
    };

    const prevSlide = () => {
        if (animating) return;
        setAnimating(true);

        const prevIndex = (index - 1 + initialSlides.length) % initialSlides.length;
        const prevLastIndex = (lastIndex - 1 + initialSlides.length) % initialSlides.length;

        const updatedSlides = [
            initialSlides[prevIndex],
            ...visibleSlides.slice(0, -1),
        ];

        setTimeout(() => {
            setVisibleSlides(updatedSlides);
            setIndex(prevIndex);
            setLastIndex(prevLastIndex);
            setAnimating(false);
        }, 500);
    };

    return (
        <div className="carousel-container">
            {/* Buttons Section */}
            <div className="carousel-buttons-section">
                <button onClick={prevSlide} className="carousel-button">
                    Prev
                </button>
                <button onClick={nextSlide} className="carousel-button">
                    Next
                </button>
            </div>

            {/* Carousel Content */}
            <div className="flex flex-row gap-6 carousel-content">
                {visibleSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col justify-between p-[27px] h-[377px] w-[416px] bg-white carousel-slide text-[#1D263A]"
                    >
                        <h1 className={`text-[21px] ${animating ? "text-fade" : ""}`}>
                            {slide.comment}
                        </h1>
                        <div className={`gradient-background-color-carousel-card flex flex-row gap-[20px] py-[15px] px-[20px] rounded-3xl items-center`}>
                            <Image
                                className={`rounded-full ${animating ? "image-zoom-in-out" : ""}`}
                                src={slide.image}
                                alt={slide.name}
                                width={70}
                                height={70}
                            />
                            <div className={`flex flex-col gap-[2px]`}>
                                <h3 className="text-[21px] font-semibold">{slide.name}</h3>
                                <p className="text-[17px] text-[#5c6375]">{slide.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .carousel-container {
                    position: relative;
                    
                    border-radius: 8px;
                }

                .carousel-buttons-section {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    background-color: #f9f9f9;
                    border-bottom: 1px solid #ddd;
                }

                .carousel-button {
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }

                .carousel-button:hover {
                    background-color: rgba(0, 0, 0, 0.7);
                }

                .carousel-content {
                    display: flex;
                    position: relative;
                }

                .carousel-slide {
                    flex: 0 0 33.33%;
                }

                /* Zoom In and Zoom Out Animation */
                .image-zoom-in-out {
                    animation: zoomIn 0.5s ease-in-out, zoomOut 0.5s ease-in-out 0.5s;
                }

                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes zoomOut {
                    from {
                        opacity: 1;
                        transform: scale(1);
                    }
                    to {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                }

                .text-fade {
                    animation: textFade 0.5s ease-in-out;
                }

                @keyframes textFade {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Carousel2;
