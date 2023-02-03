import Link from "next/link";

const   CreateButton: React.FunctionComponent = (): JSX.Element => {
    return (
        <Link
            className="bg-black text-white px-4 py-2 rounded-md"
            href="/404-PageNotFound">
                Create
        </Link>
    )
};

export default CreateButton;