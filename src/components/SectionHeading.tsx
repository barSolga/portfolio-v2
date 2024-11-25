interface Props {
    text: string;
}

const SectionHeading = ({ text }: Props) => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="heading-separator"></div>
            <h2 className="text-3xl text-center font-medium pb-10">{text}</h2>
        </div>
    );
};

export default SectionHeading;