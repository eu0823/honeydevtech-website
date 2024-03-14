'use client'

import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return <div className="w-full bg-white shadow-xl flex justify-center fixed z-30 top-0">
        <div className="container mx-auto flex py-[10px] justify-between items-start md:items-center">
            <Link href="/">
                <div className="flex items-center gap-2">
                    <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                    <h3 className="text-2xl font-bold">HoneyDevTech</h3>
                </div>
            </Link>
            <div className={`${!openMenu ? "hidden " : "flex "} z-[1] md:flex absolute md:relative justify-between items-center flex-col md:flex-row bg-white md:gap-10 text-md text-gray-700 w-full md:w-auto left-0`}>
                <Link
                    href="/aboutus"
                    className={`w-full md:w-auto text-center ${ pathname === "/aboutus" ? "text-blue-600 font-bold" : "" } hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    About us
                </Link>
                <Link
                    href="/services"
                    className={`w-full md:w-auto text-center ${ pathname === "/services" ? "text-blue-600 font-bold" : "" } hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Services
                </Link>
                <Link
                    href="/portfolio"
                    className={`w-full md:w-auto text-center ${ pathname === "/portfolio" ? "text-blue-600 font-bold" : "" } hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Portfolio
                </Link>
                <Link
                    href="/blog"
                    className={`w-full md:w-auto text-center ${ pathname === "/blog" ? "text-blue-600 font-bold" : "" } hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Blog
                </Link>
            </div>
            <div className="flex gap-2">
                <Button className="hidden md:flex" color="blue">
                    Contact Us
                </Button>
                <Button color={openMenu ? "red" : "blue"} className="flex md:hidden z-[2]" onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? (
                            <Icon icon="vaadin:close" width={32} height={32} />
                        ) : (
                            <Icon icon="ph:list-fill" width={32} height={32} />
                        )
                    }
                </Button>
            </div>
        </div>
    </div>
}