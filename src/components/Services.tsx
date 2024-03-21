import Image from "next/image";

const services = [
    {
        id: 1,
        logo: "web.png",
        title: "Web Design & Development",
        content: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
        id: 2,
        logo: "blockchain.png",
        title: "Blockchain Development",
        content: "Unlock your innovation with Blockchain. We're here to help you harness its full potential, offering secure, transparent, and efficient transactions in the digital transformation era."
    },
    {
        id: 3,
        logo: "game.png",
        title: "Unity & UE Game Development",
        content: "Unleash your creativity with Unreal Engine and Game Development. We're here to bring your game to life, offering immersive experiences and interactive storytelling in the digital entertainment era."
    },
];

interface I_Service {
    id: number;
    logo: string;
    title: string;
    content: string;
}

export default function Services() {

    return <div className="w-full py-32 relative bg-gray-100 flex justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold">Services we offer</h1>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
            {
                services.map((item: I_Service, index: number) => (
                    <div key={index} className="py-5 px-10 border-gradient rounded-lg">
                        <div className="border-gradient-full border-gradient w-[65px] h-[65px] mt-5 flex justify-center items-center">
                            <Image alt="logo" src={"/images/" + item.logo} width={40} height={40}></Image>
                        </div>
                        <h1 className="text-2xl font-bold my-4">{item.title}</h1>
                        <p className="my-2 mb-5">{item.content}</p>
                    </div>
                ))
            }
        </div>
    </div>
}