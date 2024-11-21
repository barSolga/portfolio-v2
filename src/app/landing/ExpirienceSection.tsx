"use client";

import Label from "@/components/Label";
import { iconSize } from "@/Constants";
import { useState } from "react";
import { BiPlus, BiLocationPlus } from "react-icons/bi";

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
        <h2 className="text-2xl text-center">Expirience</h2>
        <div className="flex flex-col items-center">
          {
            companies ? companies.map(company => (
              <div key={company.id} className="w-full space-y-4">
                <div onClick={() => setOpen(!isOpen)} className="w-full flex bg-red-200 p-4 justify-between items-center rounded-xl">
                  <p>{company.name}</p>

                  <div className="flex gap-4">
                    <span>{company.startDate} - {company.endDate ? company.endDate : "Present"}</span>
                    <BiPlus size={iconSize} />
                  </div>
                </div>

                <div className={`flex flex-col gap-4 transition-all bg-red-200 rounded-xl ${isOpen ? "p-4" : "h-0"} overflow-hidden`}>
                  <div className="flex"><BiLocationPlus size={iconSize} /> {company.location}</div>
                  <p>{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {
                      company.skills.map((skill, index) => (
                        <Label key={index} name={skill} />
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