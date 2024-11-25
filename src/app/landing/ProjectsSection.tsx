import Project from "@/components/Project";
import TabSections from "@/components/TabSections";
import { commercialProjects, privateProjects } from "../data";
import SectionHeading from "@/components/SectionHeading";

const ProjectsSection = () => {
    return (
        <section id="projects">
            <div className="container mx-auto p-4 space-y-5">
                <SectionHeading text="Projects" />
                <TabSections tabs={[
                    {
                        tabName: "Commercial",
                        tabElem:
                            <div className="space-y-4">
                                {
                                    commercialProjects.map((project, index) => (
                                        <Project key={`c${index}`} project={project} flip={index % 2 !== 0} />
                                    ))
                                }
                            </div>
                    },
                    {
                        tabName: "Private",
                        tabElem:
                            <div className="space-y-10">
                                {
                                    privateProjects.map((project, index) => (
                                        <Project key={`p${index}`} project={project} flip={index % 2 !== 0} />
                                    ))
                                }
                            </div>
                    }
                ]} />
            </div>
        </section>
    );
};

export default ProjectsSection;