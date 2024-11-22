declare module "react-slick" {
    import { Component } from "react";

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        pauseOnHover?: boolean;
        responsive?: Array<{
            breakpoint: number;
            settings: Partial<Settings>;
        }>;
        cssEase?: string;
        lazyLoad?: "ondemand" | "progressive";
        rtl?: boolean;
        centerMode?: boolean;
        centerPadding?: string;
        initialSlide?: number;
        swipeToSlide?: boolean;
        focusOnSelect?: boolean;
        variableWidth?: boolean;
        useCSS?: boolean;
        useTransform?: boolean;
        edgeFriction?: number;
        draggable?: boolean;
        [key: string]: any;
    }

    export default class Slider extends Component<Settings> {
        slickNext: () => void;
        slickPrev: () => void;
        slickGoTo: (index: number, dontAnimate?: boolean) => void;
        slickPause: () => void;
        slickPlay: () => void;
    }
}
