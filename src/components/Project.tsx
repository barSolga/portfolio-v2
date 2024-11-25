// import Image from "next/image";
import React from 'react';
import Label from "./Label";

interface Props {
    project: {
        name: string;
        description: string;
        imageUrl: string;
        techUsed: string[];
    };
    flip?: boolean;
}

const Project = ({ project, flip }: Props) => {
    return (
        <div className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center bg-slate-300  rounded-xl overflow-hidden`}>
            <div className="w-1/2 p-6 space-y-6">
                <h3 className="text-xl">{project.name}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-5">
                    {
                        project.techUsed.map((item, index) => (
                            <Label key={index} name={item} />
                        ))
                    }
                </div>
            </div>

            <div className={`w-1/2  h-fit w-96 h-96 overflow-hidden pt-10 ${flip ? "pl-10" : "pr-10"}`}>
                <img className="w-80" src={project.imageUrl} alt={project.name} />
            </div>
        </div>
    );
};

export default Project;