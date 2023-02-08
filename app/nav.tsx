import Image from 'next/image';
import Link from 'next/link';
import NavButton from 'components/NavButton';

interface   navProps {
    isLoggedin: boolean,
}

const   Nav: React.FunctionComponent<navProps> = ({ isLoggedin }): JSX.Element => {
    let firstButton: JSX.Element = <NavButton content="login"/>
    let secondButton: JSX.Element = <NavButton content="sign up"/>
    let tokenNumber: number = null!;
    let userName: string = null!;

    if (isLoggedin) {
        tokenNumber = 31;
        userName = "EthanGrosNez"

        firstButton = <NavButton
            tokenNumber={tokenNumber}
            content={
                <Image
                    className="w-5 h-auto ml-1"
                    src="/images/png/token-white.png"
                    alt="Token icon"
                    width={20}
                    height={20}
                    />
                }
            />

        secondButton = <NavButton
                content={userName}
        />;
    }
    return (
        <nav className='fixed top-0 flex justify-between items-center w-full h-16 bg-white shadow-sm overflow-hidden z-10'>
            <Link href="/" className="m-auto pl-48">
                <Image
                    className="w-auto h-10"
                    src="/images/png/maxtrack-logo.png"
                    alt='Maxtrack logo'
                    width={100}
                    height={100}
                />
            </Link>
            <div className='flex mr-4'>
                {firstButton}
                {secondButton}
            </div>
        </nav>
    )
};

export default Nav;