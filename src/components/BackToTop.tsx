import Link from "next/link";
import { BiChevronUp } from "react-icons/bi";

const BackToTop = () => {
    return (
        <Link href="#" className="bg-slate-800 text-white fixed right-5 bottom-5 p-2 rounded-full scroll-smooth shadow-xl"><BiChevronUp size={32} /></Link>
    );
};

export default BackToTop;