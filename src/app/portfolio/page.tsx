'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
type Kind = "all" | "web" | "bot" | "blockchain" | "ue" | "other";
import { web_portfolio, blockchain_portfolio, PortfolioItem } from "./data";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Portfolio() {

    const [kind, setKind] = useState<Kind>("all");
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>(web_portfolio);

    useEffect(() => {
        switch (kind) {
            case "all":
                setPortfolio([...web_portfolio, ...blockchain_portfolio]);
                break;
            case "web":
                setPortfolio(web_portfolio);
                break;
            case "bot":
                setPortfolio([]);
                break;
            case "blockchain":
                setPortfolio(blockchain_portfolio);
                break;
            case "ue":
                setPortfolio([]);
                break;
            case "other":
                setPortfolio([]);
                break;
            default:
                setPortfolio([]);
                break;
        }
    }, [kind])

    return (
        <div className="w-full py-[74px] px-2 md:px-5 lg:px-10 xl:px-20">
            <>
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button
                        type="button"
                        onClick={() => setKind("all")}
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
                        onClick={() => setKind("web")}
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
                        onClick={() => setKind("blockchain")}
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
                        onClick={() => setKind("bot")}
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
                        onClick={() => setKind("ue")}
                        className={
                            kind === "ue" ?
                                "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                        }
                    >
                        UE & Gaming
                    </button>
                </div>
            </>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                {
                    portfolio.map((item, index) => {
                        return (
                            <div className="w-full h-auto rounded-lg overflow-hidden border" key={index}>
                                <Link href={"http://" + item.website} target="_blank">
                                    <Image className="hover:opacity-80 cursor-pointer" src={"/images/portfolio/" + item.imageLink} width={400} height={300} alt={item.imageLink} />
                                </Link>
                                <Link href={"http://" + item.website} target="_blank">
                                    <div className="flex justify-start items-center p-2 border-t gap-2">
                                        <Icon icon="gg:website" />
                                        <h1 className="text-xl font-bold">{item.website}</h1>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}