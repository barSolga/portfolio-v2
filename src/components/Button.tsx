import { ReactNode } from "react";

interface Props {
    text: string;
    icon: ReactNode;
    switchIcon?: boolean;
    onClick: () => void;
}

const Button = ({ text, icon, switchIcon, onClick }: Props) => {
    return (
        <button onClick={onClick} className="text-sm xl:text-lg outline-none flex items-center gap-3 px-6 py-2 rounded-full bg-slate-600 text-white">
            {switchIcon ? icon : ""} {text} {!switchIcon ? icon : ""}
        </button>
    );
};

export default Button;