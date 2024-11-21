import Link from "next/link";
import { BiChevronUp } from "react-icons/bi";

const BackToTop = () => {
    return (
        <Link href="#" className="bg-white fixed right-10 bottom-10 p-2 rounded-full scroll-smooth"><BiChevronUp size={32} /></Link>
    );
};

export default BackToTop;