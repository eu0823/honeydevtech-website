import Image from "next/image";

export default function AboutUs() {

    return (
        <div className="w-full py-[100px] flex flex-col items-center gap-16 relative">
            <div className="max-w-screen-xl">
                <div className="flex flex-col gap-10  items-center justify-center py-4 md:py-8 px-5 flex-wrap">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Who we are
                    </h1>
                    <p className="text-lg max-w-[800px] text-center">
                        {"We are a team of passionate developers who love building great software. We are passionate about building great software for our clients. Working perfectly with our clients."}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-5 lg:px-32">
                    <div className="flex flex-col gap-5">
                        <Image src="/images/aboutus/1.jpg" width={1000} height={700} alt="main" className="w-full" />
                        <h1 className="text-3xl font-semibold">Our Mission</h1>
                        <p className="text-md font-medium">
                            {"Fast-paced, high quality, and customer-focused - that's who we are at HoneyDevTech. Your vision, our expertise - together, we create digital excellence. Whether you're a startup looking for guidance, or a seasoned business in need of technology expertise, we're here to help you navigate the digital landscape. "}
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Image src="/images/aboutus/2.jpg" width={1000} height={700} alt="main" className="w-full" />
                        <h1 className="text-3xl font-semibold">Our Story</h1>
                        <p className="text-md font-medium">
                            {"We don't just offer services, we build relationships. As your technology partner, we aim to provide solutions that bring your ideas to life, solutions that grow with your business. Our approach is collaborative and transparent, keeping you in the loop at every stage of the development process."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}