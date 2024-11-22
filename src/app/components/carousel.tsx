import { useState, useEffect } from 'react';
import Image from "next/image";

const Carousel = () => {
    const slides = [
        {
            image: '/assets/images/companyLogo/qaclan.png',
            logo:'/assets/images/product/QaClan.png',
            title:'What is QaClan solving?',
            text: 'QAClan is a powerful automated testing platform that empowers teams to create and maintain robust test cases without writing a single line of code. Its intuitive visual interface and robust features make it easy to automate complex testing scenarios.',
            buttonText: 'Learn More 1',
        },
        {
            image: '/assets/images/companyLogo/qaclan.png',
            logo:'/assets/images/product/DataForge.png',
            title:'What is QaClan solving?',
            text: 'QAClan is a powerful automated testing platform that empowers teams to create and maintain robust test cases without writing a single line of code. Its intuitive visual interface and robust features make it easy to automate complex testing scenarios.',
            buttonText: 'Learn More 2',
        },
        {
            image: '/assets/images/companyLogo/qaclan.png',
            logo:'/assets/images/product/NetArmor.png',
            title:'What is QaClan solving?',
            text: 'QAClan is a powerful automated testing platform that empowers teams to create and maintain robust test cases without writing a single line of code. Its intuitive visual interface and robust features make it easy to automate complex testing scenarios.',
            buttonText: 'Learn More 3',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);

    const goToNext = () => {
        if (isAnimating) return; // Block click if animation is running
        setIsAnimating(true);
        setOutgoingIndex(currentIndex);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop to first slide after last
        }, 500); // Animation duration
    };

    const goToPrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setOutgoingIndex(currentIndex);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length); // Loop to last slide after first
        }, 500);
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false); // Animation finished, allow next action
        setOutgoingIndex(null);
    };

    // Automatic Slide Transition
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) goToNext(); // Ensure transition only when animation is not running
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [isAnimating]); // Track animation state to avoid interrupting

    return (
        <div className="carousel-container">
            <button onClick={goToPrev} className="rounded-full flex items-center bg-[#fff] carousel-button prev-button">
                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6.5H1" stroke="#11AEF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 1L1 7L7 13" stroke="#11AEF4" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="carousel-content-wrapper">
                <div className="carousel-slide">
                    {/* Image Section */}
                    <div className="image-section">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.image}
                                alt={`carousel-item-${index}`}
                                className={`image ${
                                    index === outgoingIndex
                                        ? 'zoom-out'
                                        : index === currentIndex
                                            ? 'zoom-in'
                                            : 'hidden'
                                }`}
                                onAnimationEnd={handleAnimationEnd}
                            />
                        ))}
                    </div>

                    {/* Text Section */}
                    <div className="text-section">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`py-[46px] pr-[80px] pl-[46px] text-wrapper ${
                                    index === outgoingIndex
                                        ? 'fade-out'
                                        : index === currentIndex
                                            ? 'fade-in'
                                            : 'hidden'
                                }`}
                            >
                                <Image
                                    height={41.24}
                                    width={180}
                                    key={index}
                                    src={slide.logo}
                                    alt={`carousel-item-${index}`}
                                    className={` ${
                                        index === outgoingIndex
                                            ? 'zoom-out'
                                            : index === currentIndex
                                                ? 'zoom-in'
                                                : 'hidden'
                                    }`}

                                    onAnimationEnd={handleAnimationEnd}
                                />
                                <div className={`flex flex-col gap-[10px] mt-[40px]`}>
                                    <p className={`text-[24px] font-bold`}>{slide.title}</p>
                                    <p className={`text-[18px]`}>{slide.text}</p>
                                </div>

                                <button className="mt-[19px] rounded-full hero-banner-button slide-button">Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button onClick={goToNext} className="rounded-full flex items-center bg-[#11AEF4] carousel-button  next-button">
                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 1L20 7L14 13" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>

            <style jsx>{`
                .carousel-container {
                    background-color: white;
                    position: relative;
                    width: 1110px;
                    height: 390px;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: visible;
                }

                .carousel-content-wrapper {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    position: relative;
                    height: 100%;
                }

                .carousel-slide {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                }

                /* Image Section */
                .image-section {
                    width: 36.36%;
                    position: relative;
                    height: 100%;
                }

                .image-section img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                /* Text Section */
                .text-section {
                    width: 63.64%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                }

                .text-wrapper {
                    position: absolute;
                    width: 100%;
                    top: 0;
                }

                .text-wrapper  {
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                .slide-button {
                    padding: 10px 20px;

                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    z-index: 2;
                }

                .slide-button:hover {
                    
                }

                /* Carousel Buttons */
                .carousel-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    color: white;
                    font-size: 24px;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                    z-index: 10;
                    width: 50px;
                    height: 50px;
                }

                .prev-button {
                    left: -25px;
                }

                .next-button {
                    right: -25px;
                }

                .carousel-button:hover {

                }

                /* Animations */
                .zoom-in {
                    animation: zoomIn 0.5s ease-in-out forwards;
                }

                .zoom-out {
                    animation: zoomOut 0.5s ease-in-out forwards;
                }

                .hidden {
                    visibility: hidden;
                    position: absolute;
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

                .fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }

                .fade-out {
                    animation: fadeOut 0.5s ease-in forwards;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeOut {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Carousel;
