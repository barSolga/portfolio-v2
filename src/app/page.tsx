import HeroSection from "./landing/HeroSection";
import ExpirienceSection from "./landing/ExpirienceSection";
import TechstackSection from "./landing/TechstackSection";
import companies from "@/app/companies.json";
import Footer from "@/components/Footer/Footer";
import ProjectsSection from "./landing/ProjectsSection";
import AboutSection from "./landing/AboutSection";
import ContactSection from "./landing/ContactSection";
import CursorElem from "@/components/CursorElem";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ExpirienceSection companies={companies} />
            <TechstackSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
