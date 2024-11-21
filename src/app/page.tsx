import HeroSection from "./landing/HeroSection";
import ExpirienceSection from "./landing/ExpirienceSection";
import TechstackSection from "./landing/TechstackSection";
import companies from "@/app/companies.json";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ExpirienceSection companies={companies} />
            <TechstackSection />
        </main>
    );
}
