'use client'

import { Timeline } from "flowbite-react";

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
</svg>
    ;

export default function WaysBuilding() {

    return <div className="w-full p-20 flex flex-col items-center gap-20 relative">
        <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[40%]">
            <h1 className="text-center text-3xl md:text-4xl">Way of building</h1>
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-5">Great Software</h1>
        </div>
        <div className="w-full px-10 sm:px-20 md:px-40 lg:px-40 flex flex-col justify-center gap-10">
            <Timeline horizontal>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Assemble the right team</Timeline.Title>
                        <Timeline.Body>
                            {"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Sprint planning</Timeline.Title>
                        <Timeline.Body>
                            {"Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Tech architecture</Timeline.Title>
                        <Timeline.Body>
                            {"We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Standups & weekly demos</Timeline.Title>
                        <Timeline.Body>
                            {"Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Code reviews</Timeline.Title>
                        <Timeline.Body>
                            {"Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={CalenderIcon} />
                    <Timeline.Content>
                        <Timeline.Title>Iterative delivery</Timeline.Title>
                        <Timeline.Body>
                            {"We divide the implementation process into several checkpoints rather than a single deadline."}
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    </div>
}