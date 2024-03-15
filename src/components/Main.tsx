'use client'

import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {

    return <div className="w-full py-16 relative p-5 sm:p-6 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex flex-col justify-center order-2 sm:order-1 text-center sm:text-left pl-0 sm:px-5 md:px-10 lg:px-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">Great <b className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Product</b> is</h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold">built by great <b className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">teams</b></h1>

                <p className="text-xl md:text-2xl mt-10 max-w-[600px]">
                    We help build and manage a team of world-class developers to bring your vision to life
                </p>
                <div className="mt-5 flex justify-center sm:justify-start sm:text-left w-full">
                    <Link href="/portfolio">
                        <Button color="blue">{"Let's get started!"}</Button>
                    </Link>
                </div>
            </div>
            <div className="order-1 sm:order-2 flex justify-center">
                {/* @ts-ignore */}
                <Image src="/images/main.png" className="w-full sm:w-[400px] md:w-[500px] h-auto" width={500} height={445} alt="main" />
            </div>
        </div>
        <div className="rounded-full w-[72px] h-[72px] absolute bottom-[-36px] right-[40%] z-0 bg-gradient-to-r from-blue-500 to-green-500"></div>
    </div>
}