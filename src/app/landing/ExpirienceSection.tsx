"use client";

import Label from "@/components/Label";
import SectionHeading from "@/components/SectionHeading";
import { iconSize } from "@/Constants";
import { useState } from "react";
import { BiPlus, BiTargetLock, BiTimeFive } from "react-icons/bi";

interface Props {
  companies: {
    id: number;
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
  }[];
}

const ExpirienceSection = ({ companies }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="expirience">
      <div className="container mx-auto p-4 space-y-5">
        <SectionHeading text="Expirience" />
        <div className="flex flex-col items-center">
          {
            companies ? companies.map(company => (
              <div key={company.id} className="w-full space-y-4">
                <div onClick={() => setOpen(!isOpen)} className="w-full flex bg-primary-light p-4 justify-between items-center rounded-xl cursor-pointer">
                  <p>{company.name}</p>

                  <div className="flex gap-4">
                    <BiPlus size={iconSize} />
                  </div>
                </div>

                <div className={`flex flex-col gap-4 transition-all bg-red-200 rounded-xl ${isOpen ? "p-4" : "h-0"} overflow-hidden`}>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <BiTargetLock size={iconSize} />
                      <b>{company.location}</b>
                    </div>
                    <div className="flex gap-2">
                      <BiTimeFive size={iconSize} />
                      <span>
                        <b>{company.startDate} - {company.endDate ? company.endDate : "Present"}</b>
                      </span>
                    </div>
                  </div>
                  <p>{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <p>Acquired skills:</p>
                    {
                      company.skills.map((skill, index) => (
                        <Label key={index} name={skill} size={{ x: 4, y: 1 }} />
                      ))
                    }
                  </div>
                </div>
              </div>
            )) : "No Data"
          }
        </div>
      </div>
    </section>
  );
};

export default ExpirienceSection;