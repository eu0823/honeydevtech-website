"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OurApproach() {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
       setMounted(true);
     }, []);
   
     if (!mounted) {
       return null;
     }

    return <div className="w-full px-2 md:px-10 lg:px-15 py-20 flex flex-col items-center gap-20 relative bg-gray-100">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Our design and</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">development approach</h1>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 md:px-10 lg:px-16 py-7">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#29272E] to-[#27272E]">
                        <Image src="/images/rocket.png" alt="rocket" width={35} height={35} className="min-w-[35px] h-auto" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">UX Driven Engineering</h1>
                    <p className="text-md md:text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#68DBF2] to-[#509CF5]">
                        <Image src="/images/code.png" alt="code" width={35} height={35} className="min-w-[35px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Developing Shared Understanding</h1>
                    <p className="text-md md:text-lg">{"At our company, we prioritize developing shared understanding among team members. Communication is key, and we ensure that everyone is on the same page regarding project goals and requirements."}</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#FF92AE] to-[#FF3D9A]">
                        <Image src="/images/heart.png" alt="heart" width={35} height={35} className="min-w-[35px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Proven Experience and Expertise</h1>
                    <p className="text-md md:text-lg">{"When it comes to experience and expertise, our team stands out. With a proven track record of successful projects and a wealth of knowledge in the field, we are confident in our ability to deliver top-notch results."}</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#67E9F1] to-[#24E795]">
                        <Image src="/images/shield.png" alt="shield" width={35} height={35} className="min-w-[35px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Security & Intellectual Property (IP)</h1>
                    <p className="text-md md:text-lg">{"Security and intellectual property protection are paramount to us. We implement rigorous measures to safeguard sensitive information and ensure that intellectual property rights are respected and upheld."}</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F]">
                        <Image src="/images/success.png" alt="success" width={35} height={35} className="min-w-[35px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Code Reviews</h1>
                    <p className="text-md md:text-lg">{"In our development process, code reviews play a crucial role. We believe in the power of collaboration and scrutiny to produce high-quality, efficient code that meets industry standards."}</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#F76680] to-[#57007B]">
                        <Image src="/images/padlock.png" alt="padlock" width={35} height={35} className="min-w-[35px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">Quality Assurance & Testing</h1>
                    <p className="text-md md:text-lg">{"Quality assurance and testing are integral parts of our workflow. We take pride in our rigorous testing procedures to guarantee that our products meet the highest standards of quality and reliability."}</p>
                </div>
            </div>
        </div>
    </div>
}