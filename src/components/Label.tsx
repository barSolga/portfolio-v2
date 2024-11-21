interface Props {
    name: string;
}
const Label = ({ name }: Props) => {
    return (
        <div className="px-4 py-2 rounded-xl bg-slate-100">
            {name}
        </div>
    );
};

export default Label;