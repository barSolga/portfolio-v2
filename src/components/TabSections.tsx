"use client";

import { ReactNode, useState } from 'react';

interface Props {
    tabs: {
        tabName: string,
        tabElem: ReactNode;
    }[];
}

const TabSections = ({ tabs }: Props) => {
    const
        [currentTab, setCurrentTab] = useState(0),
        isActive = (index: number) => {
            if (index === currentTab)
                return "border-b-4 border-primary.default ";

            return "";
        };


    return (
        <div className="w-full">
            <div className="w-full flex">
                {
                    tabs.map((tab, index) => (
                        <span key={index} className={`p-4 ${isActive(index)} cursor-pointer`} onClick={() => setCurrentTab(index)}>
                            {tab.tabName}
                        </span>
                    ))
                }
            </div>
            <div className="pt-4">
                {
                    tabs.map((tab, index) => (
                        <div key={index} className={`${index === currentTab ? "" : "hidden"}`}>
                            {tab.tabElem}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TabSections;