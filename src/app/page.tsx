"use client";

import React, {useEffect} from "react";
import {HeroBanner} from "@/app/components/HeroBanner";
import {MarqueeDemo} from "@/app/components/marqueeDemo";
import {CardHoverEffectDemo} from "@/app/components/CardHoverEffectDemo";
import AboutUs from "@/app/components/aboutUs";
import Image from "next/image";
import {NumberTickerDemo} from "@/app/components/NumberTickerDemo";
import Carousel from "@/app/components/carousel";
import Carousel3 from "@/app/components/carousel3";

const stats = [
    {
        value: "50",
        description: "Project done by our awesome inhouse development team",
        type:"+",
        decimal:false,
        color:"#09B4F8"
    },
    {
        value: "96",
        description: "Satisfaction rate comes from our awesome customers.",
        type:"%",
        decimal:false,
        color:"#5077D1"
    },
    {
        value: "4.9",
        description: "Average customer ratings we have got from Amazon users.",
        type: "/5",
        decimal:true,
        color:'#943CAB'
    },
];

const products=[{
    img: "/assets/images/product/QaClan.png",
    title:"Automate QA Tests",
    description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.",
},{
    img: "/assets/images/product/DataForge.png",
    title:"Secure Your Data",
    description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.",
},{
    img: "/assets/images/product/NetArmor.png",
    title:"Safeguard Your Net",
    description:"With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.",
}
]

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
      <div className={" w-full bg-[#f2f4ff]"}>
          <HeroBanner/>
          <div className={`flex flex-col items-center py-[86px] gap-[84px] bg-[#f2f4ff]`}>
              <div className={`flex flex-col items-center`}>
                  <h1 className={`hero-banner-gradient-text`}>Product we have created</h1>
                  <h3 className={`text-center text-[18px] text-[#40474D] max-w-[523px] mt-[18px] `}>Create custom
                      landing pages with Omega that converts more visitors than any website.</h3>
              </div>

              <Carousel/>
          </div>

          <div className={`flex flex-row gap-[64px] justify-center mt-1 mb-[27px] bg-[#f2f4ff]`}>
              {products.map((product, index) => (
                  <div key={index} className="flex flex-col items-center justify-center bg-[#f2f4ff]">
                      <Image src={product.img} height={32} width={202} alt={'qa clan'}/>
                      <div className={`text-[24px] font-bold flex flex-row `}> {product.title}</div>
                      <p className="text-center text-[#696871] text-[16px] leading-[37px] max-w-[314px]">{product.description}</p>
                  </div>
              ))}
          </div>
          <div
              className={`flex flex-col items-center bg-[url('/assets/images/background/bg1.png')] bg-cover bg-center pt-[162px] px-[152px] pb-[99px] gap-[93px]`}>
              <CardHoverEffectDemo/>
              <div>
                  <div
                      className={`gradient-background-color flex flex-row  items-center px-[112px] py-[51px] rounded-3xl `}>
                      <Image className={`mr-[34.07px]`} src="/assets/images/companyLogo/logoWhite.png" height={99}
                             width={91} alt="Logo"/>
                      <div className={`flex flex-col gap-3`}>
                          <h2 className={`text-white text-2xl font-bold`}>Got a Project or Idea that needs
                              Itaration?</h2>
                          <h3 className={`text-white max-w-[413px] mr-[180px]`}>Contact with our representative today to
                              get a free consultation
                              and project quote for absolutely free. </h3>
                      </div>
                      <div>
                          <button
                              className={`text-[16px] px-[18.5px] py-[10px] rounded-full bg-[#05b8fb] text-white`}>Get a
                              Quote
                          </button>
                      </div>
                  </div>

              </div>

              <div className="flex flex-row gap-[66px]">
                  {stats.map((stat, index) => (
                      <div key={index} className="flex flex-col items-center">
                          <div className={`text-[60px] font-bold flex flex-row `} style={{color: stat.color}}>
                              <NumberTickerDemo value={Number(stat.value)} decimals={stat.decimal}
                                                color={stat.color}/> {stat.type}</div>
                          <p className="text-center text-[#696871] text-[21px] leading-[37px] max-w-[314px]">{stat.description}</p>
                      </div>
                  ))}
              </div>

          </div>
          <div className={`flex flex-col justify-center py-[143px] bg-[#daebfd]`}>
              <Carousel3/>
          </div>
          <div
              className={"p-20 flex flex-col gap-10 bg-[url('/assets/images/background/bg2-tech-stack.png')] bg-cover bg-center "}>
              <div className={"flex flex-col justify-center items-center gap-10"}>
                  <div className="hero-banner-gradient-text ">
                      We Serve All Tech Stacks
                  </div>
                  <div className={"text-xl font-normal max-w-[523px] text-center"}>
                      Create custom landing pages with Omega that converts more visitors than any website.
                  </div>
              </div>
              <div className={"flex flex-row "}>
                  <MarqueeDemo/>
              </div>
          </div>
          <AboutUs/>
      </div>
  );
}
