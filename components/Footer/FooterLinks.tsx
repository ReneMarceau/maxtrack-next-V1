import Link from "next/link";

const   FooterLinks: React.FunctionComponent = (): JSX.Element => {
    /*
    const leftColArray: string[] = [
        "Product",
        "Features",
        "Ressources"
    ];
    const rightColArray: string[] = [
        "About",
        "Blog",
        "Support"
    ];
    const linkFunction = (link: string): JSX.Element => {
        return <li key={link}>{link}</li>
    }
    const leftColLinks: JSX.Element[] = leftColArray.map(linkFunction);
    const rightColLinks: JSX.Element[] = rightColArray.map(linkFunction);
    return (
        <div>
            <ul><Link href={`/${leftColLinks}`}>{leftColLinks}</Link></ul>
            <ul><Link href={`/${rightColLinks}`}>{rightColLinks}</Link></ul>
        </div>
    )
    */return (
        <div className="flex justify-between w-6/12 pl- py-4 text-xs text-gray-800 font-bold">
            <ul className="flex ">
                <Link href="/404-PageNotFound"><li className="duration-200 hover:scale-110">Product</li></Link>
                <Link href="/404-PageNotFound"><li className="ml-10 duration-200 hover:scale-110">Features</li></Link>
                <Link href="/404-PageNotFound"><li className="ml-10 duration-200 hover:scale-110">Ressources</li></Link>
            </ul>
            <ul className="flex">
                <Link href="/404-PageNotFound"><li className="ml-10 duration-200 hover:scale-110">About</li></Link>
                <Link href="/404-PageNotFound"><li className="ml-10 duration-200 hover:scale-110">Blog</li></Link>
                <Link href="/404-PageNotFound"><li className="ml-10 duration-200 hover:scale-110">Support</li></Link>
            </ul>
        </div>
    )
};

export default FooterLinks;