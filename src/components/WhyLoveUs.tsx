'use client'

import { Rating, RatingStar } from "flowbite-react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function WhyLoveUs() {

    return <div className="p-20 flex flex-col items-center gap-20 relative">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Why Customers Love</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">working with us</h1>
            <div className="relative px-16 mt-16 py-3">
                <p className="text-xl text-center text-gray-600 leading-loose">
                    {"Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else."}
                </p>
                <Image src="/images/left-quote.svg" alt="left-quote" width={40} height={40} className="absolute top-0 left-0" />
                <Image src="/images/right-quote.svg" alt="right-quote" width={40} height={40} className="absolute bottom-0 right-0" />
            </div>
        </div>
        <div className="w-[50%] flex justify-center gap-10">
            <div className="hidden sm:flex flex-col items-center gap-2 mt-2 opacity-70">
                <Image src="https://i.pravatar.cc/85" className="rounded-full" alt="avatar" width={85} height={85} />
                <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                </Rating>
                <h1 className="text-md font-semibold">Romeena De Silva</h1>
                <h3 className="text-sm">Janet Cosmetics</h3>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2 opacity-70">
                <Image src="https://i.pravatar.cc/85" className="rounded-full" alt="avatar" width={85} height={85} />
                <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                </Rating>
                <h1 className="text-md font-semibold">Romeena De Silva</h1>
                <h3 className="text-sm">Janet Cosmetics</h3>
            </div>
            <div className="flex flex-col items-center gap-3">
                <Image src="https://i.pravatar.cc/100" className="rounded-full" alt="avatar" width={100} height={100} />
                <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                </Rating>
                <h1 className="text-md font-bold text-purple-900">Romeena De Silva</h1>
                <h3 className="text-sm">Janet Cosmetics</h3>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2 opacity-70">
                <Image src="https://i.pravatar.cc/85" className="rounded-full" alt="avatar" width={85} height={85} />
                <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                </Rating>
                <h1 className="text-md font-semibold">Romeena De Silva</h1>
                <h3 className="text-sm">Janet Cosmetics</h3>
            </div>
            <div className="hidden sm:flex flex-col items-center gap-2 mt-2 opacity-70">
                <Image src="https://i.pravatar.cc/85" className="rounded-full" alt="avatar" width={85} height={85} />
                <Rating>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                </Rating>
                <h1 className="text-md font-semibold">Romeena De Silva</h1>
                <h3 className="text-sm">Janet Cosmetics</h3>
            </div>
        </div>
        <div className="absolute right-20 border rounded-full top-[45%] border-purple-700 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200">
            {/* @ts-ignore */}
            <Icon icon="maki:arrow" width={32} height={32} style={{ color: "#57007B" }} />
        </div>
        <div className="absolute left-20 border rounded-full top-[45%] border-purple-700 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200">
            {/* @ts-ignore */}
            <Icon icon="mingcute:arrow-left-fill" width={32} height={32} style={{ color: "#57007B" }} />
        </div>
        <div className="rounded-full w-[72px] h-[72px] absolute top-[-36px] left-[20%] -z-10 bg-gradient-to-r from-blue-500 to-green-500"></div>
    </div>
}