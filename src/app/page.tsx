import { HeroSection } from "./components/HeroSection/hero";
import { RegisterVisit } from "./components/ui/register-visit";

export default function Home() {
  return (
    <main className="flex w-full max-w-[1920px] mx-auto h-screen">
      <HeroSection />
      <RegisterVisit page={"/"} />
    </main>
  );
}
