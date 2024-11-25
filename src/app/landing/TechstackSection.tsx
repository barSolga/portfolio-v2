import Label from "@/components/Label";
import { skills } from "../data";
import SectionHeading from "@/components/SectionHeading";

const TechstackSection = () => {
  return (
    <section id="techstack">
      <div className="container mx-auto p-4 space-y-5">
        <SectionHeading text="Techstack" />

        <div className="flex flex-col md:flex-row w-full gap-10">

          <div className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam repudiandae molestiae doloribus. Ullam molestiae similique quaerat velit blanditiis possimus, quasi, libero nihil non, adipisci quam deserunt minus maxime odit?
          </div>

          <div className="md:w-1/2 flex flex-wrap gap-6">
            {
              skills.map((skill, index) => <Label key={index} name={skill} />)
            }
          </div>

        </div>


      </div>
    </section>
  );
};

export default TechstackSection;