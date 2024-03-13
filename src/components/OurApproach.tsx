import Image from "next/image";

export default function OurApproach() {

    return <div className="w-full p-20 flex flex-col items-center gap-20 relative bg-gray-100">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Our design and</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">development approach</h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-16 py-7">
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#29272E] to-[#27272E]">
                        <Image src="/images/rocket.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">UX Driven Engineering</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#68DBF2] to-[#509CF5]">
                        <Image src="/images/code.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Developing Shared Understanding</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#FF92AE] to-[#FF3D9A]">
                        <Image src="/images/heart.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Proven Experience and Expertise</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#67E9F1] to-[#24E795]">
                        <Image src="/images/shield.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Security & Intellectual Property (IP)</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#FFEF5E] to-[#F7936F]">
                        <Image src="/images/success.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Code Reviews</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
            <div className="flex gap-8 border-2 border-gray-300 px-8 py-12 bg-white">
                <div>
                    <div className="rounded-[15px] shadow-lg p-5 w-[59] h-[56] bg-gradient-to-tr from-[#F76680] to-[#57007B]">
                        <Image src="/images/padlock.png" alt="rocket" width={35} height={35} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">Quality Assurance & Testing</h1>
                    <p className="text-lg">{"Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."}</p>
                </div>
            </div>
        </div>
    </div>
}