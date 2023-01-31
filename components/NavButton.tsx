import Link from "next/link";

interface   navButtonProps {
    tokenNumber?: number,
    content: string | JSX.Element,
}

const   NavButton: React.FunctionComponent<navButtonProps> = ({ tokenNumber, content }): JSX.Element => {
    return (
        <Link
            href="/404-PageNotFound"
            className="flex items-center h-10 px-4 ml-3 bg-black text-white rounded">
                {tokenNumber}
                {content}
        </Link>
    )
};

export default NavButton;