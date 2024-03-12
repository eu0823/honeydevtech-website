import Main from "@/components/Main";
import Services from "@/components/Services";
import WhyLoveUs from "@/components/WhyLoveUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Main />
      <Services />
      <WhyLoveUs />
    </main>
  );
}
