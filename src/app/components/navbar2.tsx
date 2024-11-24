'use client'
import React, {useState} from 'react';
import {Menu, MenuItem} from "@/app/components/navbarComponents";

const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={"fixed inset-x-0  justify-end  z-50 "}>
            <Menu setActive={setActive}>
                {/*<MenuItem setActive={setActive} active={active} item="Services">*/}
                {/*    <div className={"flex flex-col gap-10 p-10"}>*/}
                {/*        <div className={"flex flex-row gap-10"}>*/}
                {/*            <ProductItem*/}
                {/*                title="Product 2"*/}
                {/*                description="Description for product 2"*/}
                {/*                href="/product-2"*/}
                {/*                src="/assets/images/nav/MVP-Services.png"*/}
                {/*            />*/}
                {/*            <ProductItem*/}
                {/*                title="Product 2"*/}
                {/*                description="Description for product 2"*/}
                {/*                href="/product-2"*/}
                {/*                src="/assets/images/nav/Project-Development.png"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={"flex flex-row gap-10"}>*/}
                {/*            <ProductItem*/}
                {/*                title="Product 2"*/}
                {/*                description="Description for product 2"*/}
                {/*                href="/product-2"*/}
                {/*                src="/assets/images/nav/Offshore-Development.png"*/}
                {/*            />*/}
                {/*            <ProductItem*/}
                {/*                title="Product 2"*/}
                {/*                description="Description for product 2"*/}
                {/*                href="/product-2"*/}
                {/*                src="/assets/images/nav/Team-Augmentation.png"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</MenuItem>*/}
                <MenuItem setActive={setActive} active={active} item="Services" href={"/Services"}></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Career" href={"/career"}>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Blog" href={"/blog"}>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact" href={"/contact"}>
                </MenuItem>
                {/*<MenuItem setActive={setActive} active={active} item="Contact">*/}
                {/*    <HoveredLink*/}
                {/*        href="/about">Learn More About Us</HoveredLink>*/}
                {/*</MenuItem>*/}
            </Menu>

        </div>
    );
};

export default Navbar;