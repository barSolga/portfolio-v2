import Image from "next/image";
import me from "@/../public/me.png";
import { BiRightArrowAlt, BiDownload } from "react-icons/bi";
import { iconSize } from "@/Constants";

const HeroSection = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto h-full p-4 items-center space-y-6 md:flex-row gap-10">

        <div className="flex flex-col space-y-4 md:w-1/2">
          <span>Software Developer</span>
          <h1 className="text-3xl xl:text-5xl">Hello I`m <br /> Bartosz Sołga 👋  </h1>
          <p className="">
            I am a full-stack developer with 5 years of experience. <br />
            I enjoy building websites & web apps and creating new solutions.
          </p>

          <div className="flex gap-4">

            <button className=" text-sm xl:text-lg outline-none flex items-center gap-3 bg-slate-300 px-6 py-2 rounded-full">
              Download CV <BiDownload size={iconSize} />
            </button>

            <button className=" text-sm xl:text-lg outline-none flex items-center gap-3 bg-slate-300 px-6 py-2 rounded-full">
              Contact me here <BiRightArrowAlt size={iconSize} />
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 max-h-full">
          <div className="flex justify-center rounded-full overflow-hidden aspect-square">
            <Image src={me} alt="Bartosz Sołga" className="w-auto h-full origin-top" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;