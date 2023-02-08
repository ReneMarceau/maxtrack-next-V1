import Link from "next/link";

interface   tokenWidgetButton {
    tokenPrice: number | string,
}

const   TokenWidgetButton: React.FunctionComponent<tokenWidgetButton> = ({ tokenPrice }): JSX.Element => {
    return (
        <Link
            href="/404-PageNotFound"
            className="px-14 py-1 bg-black text-white shadow-md rounded-md"
        >
            {tokenPrice} €
        </Link>
    )
};

export default TokenWidgetButton;