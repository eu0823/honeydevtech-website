'use client'

import { Rating, RatingStar } from "flowbite-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

type Feedback = {
    avatar: string;
    rating: number;
    text: string;
    name: string;
    role: string;
}

const feedbacks = [
    {
        "avatar": "avatar_url_1",
        "rating": 5,
        "text": "Without any doubt I recommend HoneyDevTech as one of the best web and blockchain development agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
        "name": "John Webster",
        "role": "Marketing Manager"
    },
    {
        "avatar": "avatar_url_2",
        "rating": 5,
        "text": "I am extremely impressed with the blockchain development services provided by HoneyDevTech. They delivered a secure and efficient solution for our business, and their team was professional and knowledgeable throughout the entire process. Highly recommended!",
        "name": "Jane Smith",
        "role": "CEO"
    },
    {
        "avatar": "avatar_url_3",
        "rating": 5,
        "text": "HoneyDevTech exceeded my expectations with their custom bot development service. They created a bot that perfectly aligned with our requirements and it has greatly improved our customer engagement. Their communication and attention to detail were exceptional!",
        "name": "David Johnson",
        "role": "Customer Support Manager"
    },
    {
        "avatar": "avatar_url_4",
        "rating": 5,
        "text": "I had a fantastic experience with HoneyDevTech for my UE and Game development needs. Their team of experts understood my vision and brought it to life with stunning graphics and immersive gameplay. The final product exceeded my expectations, and I couldn't be happier!",
        "name": "Emily Wilson",
        "role": "Game Developer"
    },
    {
        "avatar": "avatar_url_5",
        "rating": 5,
        "text": "HoneyDevTech's expertise in custom bot development is unmatched. They developed a bot that streamlined our customer support process and significantly improved response times. Their team's technical knowledge and dedication to customer satisfaction are truly commendable. I'm thrilled with the results!",
        "name": "Michael Brown",
        "role": "Customer Support Manager"
    }
];

export default function WhyLoveUs() {

    const [current, setCurrent] = useState<number>(2);

    const handlePrev = () => {
        if (current === 0) return;
        setCurrent(current => current - 1);
    }

    const handleNext = () => {
        if (current === feedbacks.length - 1) return;
        setCurrent(current => current + 1);
    }

    return <div className="flex flex-col py-20 items-center gap-20 relative">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Why Customers Love</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">working with us</h1>
            <div className="relative px-16 mt-16 py-3">
                <p className="text-xl text-center text-gray-600 leading-loose">
                    {feedbacks[current].text}
                </p>
                <Image src="/images/left-quote.svg" alt="left-quote" width={40} height={40} className="absolute top-0 left-0" />
                <Image src="/images/right-quote.svg" alt="right-quote" width={40} height={40} className="absolute bottom-0 right-0" />
            </div>
        </div>
        <div className="w-[60%] flex justify-center gap-10 text-center">
            {
                feedbacks.map((feedback: Feedback, index: number) => (
                    <div className={`${index % 4 === 0 ? "hidden sm:flex" : "flex"} flex-col items-center ${ index !== current ? "mt-3 opacity-70" : "gap-2"}`} key={index}>
                        <Image src={"/images/avatar/" + (index + 1) + ".png"} className="rounded-full" alt="avatar" width={current === index ? 100 : 85} height={current === index ? 100 : 85} />
                        <Rating>
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                            <RatingStar />
                        </Rating>
                        <h1 className={`text-md ${ index === current ? "font-bold" : "font-semibold"}`}>{feedback.name}</h1>
                        {/* <h3 className="text-sm">{feedback.role}</h3> */}
                    </div>
                ))
            }
        </div>
        <div
            className="absolute right-5 md:right-20 border rounded-full top-[45%] border-purple-700 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            onClick={handleNext}
            aria-disabled={current === 4}
        >
            <Icon icon="maki:arrow" width={32} height={32} style={{ color: "#57007B" }} />
        </div>
        <div
            className="absolute left-5 md:left-20 border rounded-full top-[45%] border-purple-700 p-2 cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            onClick={handlePrev}
            aria-disabled={current === 0}
        >
            <Icon icon="mingcute:arrow-left-fill" width={32} height={32} style={{ color: "#57007B" }} />
        </div>
        <div className="rounded-full w-[72px] h-[72px] absolute top-[-36px] left-[20%] -z-10 bg-gradient-to-r from-blue-500 to-green-500"></div>
    </div>
}