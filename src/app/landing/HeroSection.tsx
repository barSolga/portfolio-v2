"use client";

import { BiRightArrowAlt, BiDownload } from "react-icons/bi";
import { iconSize } from "@/Constants";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
// import Image from "next/image";
// import me from "@/../public/me.png";

const textOptions = [
  "Software Developer",
  "Creative Manager",
  "UX/UI Designer",
  "Graphic Designer"
];

const HeroSection = () => {
  const [role, setRole] = useState("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setRole(textOptions[index]);

    setTimeout(() => {
      setRole(textOptions[index]);
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);

      if (index > textOptions.length - 1)
        setIndex(0);
    }, 1000);
  }, [role, index]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative container flex flex-col justify-center mx-auto h-full p-4 items-center space-y-6 md:flex-row gap-10">

        <div className="flex flex-col text-center items-center space-y-6">

          <span className="text-2xl animate-bounce">{role}</span>

          <div className="space-y-4">
            <h1 className="text-3xl xl:text-5xl font-semibold">Hello I`m Bartosz</h1>
            <p className="text-xl">
              I am a full-stack developer with {new Date().getFullYear() - 2019} years of experience. <br />
              I enjoy designing, building websites & web apps and creating new solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button icon={<BiDownload size={iconSize} />} text="Download CV" onClick={() => alert("Clicked")} />
            <Button icon={<BiRightArrowAlt size={iconSize} />} text="Contact me" onClick={() => alert("Clicked")} />
          </div>

        </div>


      </div>

      {/* <Image src={me} alt="Bartosz Sołga" className="absolute left-0 bottom-0 max-h-xl max-w-xl xl:max-h-max xl:max-w-max -z-50 opacity-50" /> */}
    </section>
  );
};

export default HeroSection;