"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
    imageSrc: string;
    alt: string;
    title: string;
    kind: string;
    description: string;
    bgColor: string;
    borderColor: string;
};

const projects: Project[] = [
    {
        "imageSrc": "/images/services/web_service.jpg",
        "alt": "case study 1",
        "kind": "web",
        "title": "Website Development",
        "description": "Born from a vision to revolutionize the way transactions are conducted, TrustChain Technologies emerges as a pioneering force in the world of blockchain development. With unwavering dedication to excellence and a commitment to putting clients first, TrustChain Technologies strives to deliver unparalleled solutions in the realm of digital transactions. Its rapid ascent can be attributed to a rock-solid foundation built upon years of expertise and innovation. The management team boasts a collective experience of over two decades, encompassing a diverse range of industries and a deep understanding of the potential of blockchain technology.",
        "bgColor": "#F1F2FF",
        "borderColor": "#E7DAED"
    },
    {
        "imageSrc": "/images/services/blockchain_service.jpg",
        "alt": "case study 2",
        "kind": "blockchain",
        "title": "Blockchain Development",
        "description": "Forged from a desire to reshape the future of finance and beyond, Quantum Ledger Solutions emerges as a trailblazer in the realm of blockchain development. With an unwavering commitment to pushing the boundaries of what is possible, Quantum Ledger Solutions aims to deliver cutting-edge solutions that revolutionize industries and empower individuals. Its meteoric rise is rooted in a bedrock of expertise and innovation, with a management team boasting decades of combined experience in blockchain technology. This wealth of knowledge and passion fuels Quantum Ledger Solutions' relentless pursuit of excellence and its drive to create a better, more decentralized world.",
        "bgColor": "#F0FFF7",
        "borderColor": "#E7DAED"
    },
    {
        "imageSrc": "/images/services/game_service.jpg",
        "alt": "case study 3",
        "kind": "game",
        "title": "Unity & UE Game Development",
        "description": "Born from a passion for immersive gaming experiences, Unreal Engine Studios is a force to be reckoned with in game development. With a commitment to pushing the boundaries of visual fidelity and gameplay innovation, they create unforgettable virtual worlds. Backed by years of technical expertise and a talented team, Unreal Engine Studios is redefining interactive entertainment.",
        "bgColor": "#FFF4F4",
        "borderColor": "#E7DAED"
    }
];

const ProjectCard = ({ project }: { project: Project; }) => {
    return <div
        className={`grid grid-cols-1 lg:grid-cols-2 border rounded-tl-[15px] rounded-bl-[15px] rounded-br-[30px] rounded-tr-[30px]`}
        style={{ backgroundColor: project.bgColor, borderColor: project.borderColor }}
    >
        <div className="flex items-center">
            <Image src={project.imageSrc} alt={project.alt} width={1000} height={700} className="w-full" />
        </div>
        <div className="py-5 px-10 gap-10 md:gap-0 md:px-5 lg:px-8 xl:px-10 flex justify-around flex-col">
            <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl">{project.title}</h1>
            <p className="text-md leading-relaxed line-clamp-5 md:line-clamp-4 lg:line-clamp-5">
                {project.description}
            </p>
            <div className="text-right cursor-pointer font-semibold">
                <Link href={"/portfolio?tab=" + project.kind}>
                    <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text">
                        Read more &gt;
                    </span>
                </Link>
            </div>
        </div>
    </div>
}

export default function RecentProjects() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <div className="w-full px-2 md:px-5 lg:px-15 xl:px-20 py-5 md:py-10 lg:py-15 xl:py-20 flex flex-col items-center gap-20 relative bg-gray-100">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Our recent</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">Case studies</h1>
        </div>
        <div className="w-full px-2 sm:px-20 md:px-30 xl:px-40 flex flex-col justify-center gap-10">
            {
                projects.map((item: Project, index: number) => (
                    <ProjectCard project={item} key={index} />
                ))
            }
            <div className="mt-3 lg:mt-5 xl:mt-8 text-right cursor-pointer font-semibold">
                <Link href="/portfolio?tab=all">
                    <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text text-xl">
                        {"Read more >"}
                    </span>
                </Link>
            </div>
        </div>
    </div>
}