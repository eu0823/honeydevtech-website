"use client"

import { useEffect, useState } from "react";

type propTypes = {
    className?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}

export default function BackToTop(props: propTypes) {

    let { className, left, right, top, bottom } = props;

    let leftClassName = left ? `left-[${left}]` : null;
    let rightClassName = right ? `right-[${right}]` : null;
    let topClassName = top ? `top-[${top}]` : null;
    let bottomClassName = bottom ? `bottom-[${bottom}]` : null;

    let positionClassName = "";
    if (leftClassName) positionClassName += leftClassName + " ";
    if (rightClassName) positionClassName += rightClassName + " ";
    if (topClassName) positionClassName += topClassName + " ";
    if (bottomClassName) positionClassName += bottomClassName + " ";

    const [display, setDisplay] = useState<boolean>(false);

    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        return () => {
            window.onscroll = null;
        }
    }, []);

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: "smooth",
        });
    }

    return <div
        onClick={topFunction}
        className={`fixed w-12 h-12 rounded-md ${display ? "flex" : "hidden"} justify-center items-center right-12 bottom-16 cursor-pointer bg-blue-600 border-3 border-blue-200 opacity-60 hover:opacity-70 ${className ? className : ""} z-[50]`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.61"
            height={30}
            viewBox="0 0 1600 1472"
        >
            <path
                fill="white"
                d="M1579 779q0 51-37 90l-75 75q-38 38-91 38q-54 0-90-38L992 651v704q0 52-37.5 84.5T864 1472H736q-53 0-90.5-32.5T608 1355V651L314 944q-36 38-90 38t-90-38l-75-75q-38-38-38-90q0-53 38-91L710 37q35-37 90-37q54 0 91 37l651 651q37 39 37 91"
            />
        </svg>

    </div>
}