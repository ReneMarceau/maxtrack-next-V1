import Link from "next/link";

const   FooterCopyrights: React.FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Link
                className="text-gray-600 hover:underline"
                href="/404-PageNotFound">
                © 2023 - 2024 Privacy - Terms
            </Link>
        </div>
    )
};

export default FooterCopyrights;