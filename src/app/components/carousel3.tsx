import React, { useRef } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ArrowControls = ({ onPrev, onNext }: { onPrev?: () => void; onNext?: () => void }) => {
    return (
        <div className="flex flex-row gap-3">
            <button
                className=" bg-[#06B6FA] py-[20px] px-[24px] rounded-2xl "
                onClick={onPrev}
                aria-label="Previous Slide"
            >
                <AiOutlineLeft size={24}  color={`#FFFFFF`}  />
            </button>
            <button
                className=" bg-[#FFFFFF] py-[20px] px-[24px] rounded-2xl "
                onClick={onNext}
                aria-label="Next Slide"
            >
                <AiOutlineRight size={24} color={`#06B6FA`} />
            </button>
        </div>
    );
};

const CarouselWithControls = () => {
    const sliderRef = useRef<Slider | null>(null);

    // Use correct typing for ref

    const initialSlides = [
        {
            image: "/assets/images/client/wade.png",
            name: "Wade Warren",
            designation: "UI Designer, Adobe",
            comment: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
        },
        {
            image: "/assets/images/client/theresa.png",
            name: "Theresa Webb",
            designation: "UI Designer, Adobe",
            comment: "“Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco.",
        },
        {
            image: "/assets/images/client/floyd.png",
            name: "Floyd Miles",
            designation: "UI Designer, Adobe",
            comment: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”",
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        dots:false
    };

    return (
        <div className="flex flex-col gap-[60px] slider-container">
            <div className={`flex flex-row justify-between`}>
                <h1 className={`hero-banner-gradient-text max-w-[650px]`}>What They Says About Our Services</h1>
                <div>
                    <ArrowControls
                        onPrev={() => sliderRef?.current?.slickPrev()} // Safely call slickPrev
                        onNext={() => sliderRef?.current?.slickNext()} // Safely call slickNext
                    />
                </div>

            </div>

            <Slider {...settings} ref={sliderRef}>
                {initialSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="slide p-[27px] h-[377px] max-w-[416px] bg-white carousel-slide text-[#1D263A] rounded-3xl"
                    >
                        <h1 className="text-[21px]">{slide.comment}</h1>
                        <div
                            className="gradient-background-color-carousel-card flex flex-row gap-[20px] py-[15px] px-[20px] rounded-3xl items-center">
                            <Image
                                className="rounded-full"
                                src={slide.image}
                                alt={slide.name}
                                width={70}
                                height={70}
                            />
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="text-[21px] font-semibold">{slide.name}</h3>
                                <p className="text-[17px] text-[#5c6375]">{slide.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .slider-container {
                    position: relative;
                    width: 72%;
                    margin: auto;
                    border-radius: 10px;

                }


                .custom-arrow:hover {
                    background-color: rgba(0, 0, 0, 0.7);
                }

                .slide {
                    display: flex !important;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 416px !important;
                }

                .slide-image {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 50%;
                    margin: 0 auto 10px;
                }

                .slide-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .slide-description {
                    font-size: 14px;
                    color: #555;
                }

                .slick-slide > div {
                    margin: 0;
                }

                .slick-list {
                    padding-right: 10px;
                }
            `}</style>
        </div>
    );
};

export default CarouselWithControls;
