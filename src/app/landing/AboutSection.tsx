import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
    return (
        <section id="about-me">
            <div className="container mx-auto p-4 space-y-5">
                <SectionHeading text="About me" />

                <p className="text-center">
                    My journey into the world of programming began in 2020. Initially, my main focus revolved around web design and the creation of websites. However, my natural curiosity and a strong passion for creation steered me toward web applications. Since then, I`ve continuously expanded my knowledge and refined my skills.
                    <br /><br />
                    Presently, the primary technologies I work with on a daily basis include: <b>JavaScript, TypeScript, Node.js, React.js, Next.js, MongoDB, PostgreSQL, HTML5, CSS3. SASS</b>
                    <br /><br />
                    During my free time, apart from coding my own projects, I derive great joy from traveling and embracing new experiences. I have a profound interest in psychology and philosophy, and I take pleasure in reading books related to self development.
                    <br /><br />
                    <b>*A noteworthy fact about me:</b> Prior to my programming journey, I was deeply involved in the world of music composition.
                </p>

            </div>
        </section>
    );
};

export default AboutSection;