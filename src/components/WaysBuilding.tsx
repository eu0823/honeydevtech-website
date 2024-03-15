'use client'

import { useWindowSize } from "@react-hook/window-size";
import { Timeline } from "flowbite-react";
import { useEffect, useState } from "react";

const CalenderIcon = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
>
    <path
        fill="#b300ad"
        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
    />
</svg>;

type approachTypeItem = {
    time: string;
    title: string;
    body: string;
}

const approach: approachTypeItem[] = [
    {
        "time": "Development Step #1",
        "title": "Assemble the right team",
        "body": "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
    },
    {
        "time": "Development Step #2",
        "title": "Sprint planning",
        "body": "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
    },
    {
        "time": "Development Step #3",
        "title": "Tech architecture",
        "body": "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently."
    },
    {
        "time": "Development Step #4",
        "title": "Standups & weekly demos",
        "body": "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
    },
    {
        "time": "Development Step #5",
        "title": "Code reviews",
        "body": "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells."
    },
    {
        "time": "Development Step #6",
        "title": "Iterative delivery",
        "body": "We divide the implementation process into several checkpoints rather than a single deadline."
    }
];

export default function WaysBuilding() {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
       setMounted(true);
     }, []);
     const [width] = useWindowSize();
   
     if (!mounted) {
       return null;
     }


    return <div className="w-full px-2 md:px-5 lg:px-10 xl:px-20 py-20 flex flex-col items-center gap-20 relative">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Way of building</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">Great Software</h1>
        </div>
        <div className="w-full px-10 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center gap-10">
            <Timeline horizontal={width > 1000}>
                {
                    approach.map((item: approachTypeItem, index: number) => (
                        <Timeline.Item key={index}>
                            <Timeline.Point icon={CalenderIcon} />
                            <Timeline.Content>
                                <Timeline.Time>{item.time}</Timeline.Time>
                                <Timeline.Title>{item.title}</Timeline.Title>
                                <Timeline.Body>
                                    {item.body}
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    </div>
}