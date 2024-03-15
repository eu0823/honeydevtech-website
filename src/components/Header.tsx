'use client'

import { Button, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    function bottomFunction() {
        window.scrollTo({
            top: 10000000,
            left: 100,
            behavior: "smooth",
        });
    }

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
                    className={`w-full md:w-auto text-center ${pathname === "/aboutus" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    About us
                </Link>
                <Link
                    href="/services"
                    className={`w-full md:w-auto text-center ${pathname === "/services" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Services
                </Link>
                <Link
                    href="/portfolio"
                    className={`w-full md:w-auto text-center ${pathname === "/portfolio" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Portfolio
                </Link>
                {/* <Link
                    href="/blog"
                    className={`w-full md:w-auto text-center ${pathname === "/blog" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold hover:bg-gray-200 md:hover:bg-inherit py-3 md:py-0`}
                >
                    Blog
                </Link> */}
            </div>
            <div className="flex gap-2">
                <Button className="hidden md:flex" color="blue" onClick={bottomFunction}>
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
        <div className="fixed bottom-12 left-[50vw] translate-x-[-50%] md:translate-x-0 md:left-20 flex gap-6">
            <Tooltip content="Discord">
                <Link href="https://discord.gg/d2MNjXEFa6" target="_blank">
                    <div className="rounded-full w-14 h-14 active:p-3 flex justify-center items-center bg-yellow-600 hover:opacity-80 border-3 border-yellow-500 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="rgb(255 255 255)"
                                d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026a13.83 13.83 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38"
                            />
                        </svg>
                    </div>
                </Link>
            </Tooltip>
            <Tooltip content="Telegram">
                <Link href="https://t.me/honeydevtech" target="_blank">
                    <div className="rounded-full w-14 h-14 active:p-4 flex justify-center items-center bg-yellow-600 hover:opacity-80 border-3 border-yellow-500 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="rgb(255 255 255)"
                                d="m446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2"
                            />
                        </svg>
                    </div>
                </Link>
            </Tooltip>
            <Tooltip content="WhatsApp">
                <Link href="https://discord.gg/d2MNjXEFa6" target="_blank">
                    <div className="rounded-full w-14 h-14 active:p-3 flex justify-center items-center bg-yellow-600 hover:opacity-80 border-3 border-yellow-500 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={35}
                            height={35}
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="white"
                                d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"
                            />
                        </svg>
                    </div>
                </Link>
            </Tooltip>
        </div>
    </div>
}