import Main from "@/components/Main";
import OurApproach from "@/components/OurApproach";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import WaysBuilding from "@/components/WaysBuilding";
import WhyLoveUs from "@/components/WhyLoveUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-[74px]">
      <Main />
      <Services />
      <WhyLoveUs />
      <RecentProjects />
      <WaysBuilding />
      <OurApproach />
    </main>
  );
}
