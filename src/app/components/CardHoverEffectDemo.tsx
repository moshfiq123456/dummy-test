import {HoverEffect} from "@/app/components/ui/hoverEffect";
import BigDataIcon from "../../../public/assets/svg/premium-section/bigDataIcon";
import BusinessAutomationIcon from "../../../public/assets/svg/premium-section/businessAutomation";
import DataManagementIcon from "../../../public/assets/svg/premium-section/dataManagementIcon";
import DataComplianceIcon from "../../../public/assets/svg/premium-section/dataComplianceIcon";
import DevopsIcon from "../../../public/assets/svg/premium-section/devopsIcon";
import EnterpriseModernizationIcon from "../../../public/assets/svg/premium-section/enterpriseModernization";
import RemoteServiceIcon from "../../../public/assets/svg/premium-section/remoteServiceIcon";
import SoftwareDeveiopmentIcon from "../../../public/assets/svg/premium-section/softwareDeveiopmentIcon";


export function CardHoverEffectDemo() {
    return (
        <div className={`flex flex-col items-center gap-[93px] `}>
            <div>
                <h1 className={`hero-banner-gradient-text `}>
                    Premium Custom IT Services
                </h1>
                <h2 className={`text-[#40474D] text-[18px] max-w-[523px] text-center`}>Create custom landing pages with
                    Omega that converts more visitors than any website. </h2>
            </div>
            <div className="max-w-[1296px] mx-auto px-8">
                <HoverEffect items={projects}/>
            </div>
        </div>

    );
}

export const projects = [
    {
        title: "Big Data",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://stripe.com",
        icon: <BigDataIcon/>
    },
    {
        title: "Business Automation",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://netflix.com",
        icon: <BusinessAutomationIcon/>
    },
    {
        title: "Data Management \n" +
            "& Analytics",
        description:
            "With lots of unique blocks you can easily create",
        link: "https://google.com",
        icon: <DataManagementIcon/>
    },
    {
        title: "Data Compliance",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://meta.com",
        icon: <DataComplianceIcon/>
    },
    {
        title: "Devops",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://amazon.com",
        icon: <DevopsIcon/>
    },
    {
        title: "Enterprise Modernization",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://microsoft.com",
        icon: <EnterpriseModernizationIcon/>
    },
    {
        title: "Remote Service Support",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://microsoft.com",
        icon: <RemoteServiceIcon/>
    },
    {
        title: "Software Development",
        description:
            "With lots of unique blocks you can easily create a page without coding with Appmax",
        link: "https://microsoft.com",
        icon: <SoftwareDeveiopmentIcon/>
    },

];
