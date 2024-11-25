interface Props {
    name?: string;
    size?: {
        y: number;
        x: number;
    };
}
const Label = ({ name, size }: Props) => {

    if (!size)
        size = { x: 6, y: 2 };

    return (
        <div className={`px-${size.x} py-${size.y} rounded-xl bg-slate-100`}>
            {name}
        </div>
    );
};

export default Label;