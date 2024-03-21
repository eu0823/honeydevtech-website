'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio, PortfolioItem } from "./data";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";

type Kind = "all" | "web" | "bot" | "blockchain" | "game" | "";
const colors: string[] = ["info", "pink", "failure", "success", "warning", "indigo"];
const kinds = ["all", "web", "bot", "blockchain", "game"];

export default function Portfolio() {

    const params = useSearchParams();
    const router = useRouter();
    const tab: Kind = params.get("tab") as unknown as Kind;

    useEffect(() => {
        if (!tab || tab === "all") setKind("all");
        else setKind(tab);
    }, [tab]);

    const [kind, setKind] = useState<Kind>("");

    useEffect(() => {
        if (!kinds.includes(tab)) {
            router.push("?tab=all");
        }
    }, [tab, router])

    const handleChangeKind = (kind: Kind) => {
        // setKind(kind);
        router.push("?tab=" + kind);
    }

    return (
        <div className="w-full py-[74px] px-2 md:px-5 lg:px-10 xl:px-20">
            <>
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button
                        type="button"
                        onClick={() => handleChangeKind("all")}
                        className={
                            kind === "all" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        All categories
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChangeKind("web")}
                        className={
                            kind === "web" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        Web
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChangeKind("blockchain")}
                        className={
                            kind === "blockchain" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        Blockchain
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChangeKind("bot")}
                        className={
                            kind === "bot" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        Automation Bot
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChangeKind("game")}
                        className={
                            kind === "game" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        Unity & UE Gaming
                    </button>
                </div>
            </>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                {
                    portfolio.filter((item: PortfolioItem) => kind === "all" || item.type === kind).map((item: PortfolioItem, index: number) => {
                        return (
                            <div className="w-full h-auto rounded-lg overflow-hidden border flex flex-col justify-between pb-3 gap-4 hover:border-[black] bg-gray-100 shadow-lg" key={index}>
                                {
                                    item.fileType === "image" ? <Link href={(item.type !== "bot" && item.type !== "game") ? item.website : "#"} target={(item.type !== "bot" && item.type !== "game") ? "_blank" : "_self"}>
                                        <Image className="hover:opacity-80 cursor-pointer border-b" src={"/images/portfolio/" + item.imageLink} width={400} height={300} alt={item.imageLink} />
                                    </Link> : <video className="hover:opacity-80 cursor-pointer border-b" controls>
                                        <source src={"/images/portfolio/" + item.imageLink} type="video/mp4" />
                                    </video>
                                }
                                <div>
                                    {
                                        (item.type !== "bot" && item.type !== "game") ? <Link href={item.website} target="_blank">
                                            <div className="flex justify-start items-center px-4 py-2 gap-2">
                                                <Icon icon="gg:website" />
                                                <h1 className="text-xl font-bold">{item.website}</h1>
                                            </div>
                                        </Link> : <div className="flex justify-start items-center px-4 py-2 gap-2">
                                            <Icon icon="gg:website" />
                                            <h1 className="text-xl font-bold">{item.website}</h1>
                                        </div>
                                    }

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 px-2 mb-2">
                                            {
                                                item.keywords.map((keyword: string, idx: number) => (
                                                    <Badge color={colors[idx]} key={idx}>{keyword}</Badge>
                                                ))
                                            }
                                        </div>
                                        <Badge size="md" color="purple" className="uppercase">{item.type}</Badge>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div >
    );
}