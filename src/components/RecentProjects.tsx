import Image from "next/image";

type Project = {
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    bgColor: string;
    borderColor: string;
};

const projects: Project[] = [
    {
        "imageSrc": "/images/case1.png",
        "alt": "case study 1",
        "title": "Website Design for SCFC Canada",
        "description": "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
        "bgColor": "#F1F2FF",
        "borderColor": "#E7DAED"
    },
    {
        "imageSrc": "/images/case2.png",
        "alt": "case study 2",
        "title": "Website Design for SCFC Canada",
        "description": "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
        "bgColor": "#F0FFF7",
        "borderColor": "#E7DAED"
    },
    {
        "imageSrc": "/images/case3.png",
        "alt": "case study 3",
        "title": "Website Design for SCFC Canada",
        "description": "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
        "bgColor": "#FFF4F4",
        "borderColor": "#E7DAED"
    }
];

const ProjectCard = ({ project }: { project: Project; }) => {
    return <div className={`grid grid-cols-1 lg:grid-cols-2 bg-[${project.bgColor}] border border-[${project.borderColor}] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[30px] rounded-tr-[30px]`}>
        <div className="flex items-center">
            <Image src={project.imageSrc} alt={project.alt} width={1000} height={700} className="w-full" />
        </div>
        <div className="py-5 px-10 gap-10 md:gap-0 md:px-5 lg:px-8 xl:px-10 flex justify-around flex-col">
            <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl">{project.title}</h1>
            <p className="text-sm leading-relaxed line-clamp-5 md:line-clamp-4 lg:line-clamp-5">
                {project.description}
            </p>
            <div className="text-right cursor-pointer font-semibold">
                <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text">
                    Read more &gt;
                </span>
            </div>
        </div>
    </div>
}

export default function RecentProjects() {

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
                <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text text-xl">
                    {"Read more >"}
                </span>
            </div>
        </div>
    </div>
}