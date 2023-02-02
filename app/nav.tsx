import Image from 'next/image';
import Link from 'next/link';
import NavButton from 'components/NavButton';

interface navProps {
    isLoggedin: boolean,
}

const   Nav: React.FunctionComponent<navProps> = ({ isLoggedin }): JSX.Element => {
    let firstButton: JSX.Element = <NavButton content="login"/>
    let secondButton: JSX.Element = <NavButton content="sign up"/>
    let tokenNumber: number = null!;
    let userName: string = null!;

    if (isLoggedin) {
        tokenNumber = 31;
        userName = "Natof"

        firstButton = <NavButton
            tokenNumber={tokenNumber}
            content={
                <Image
                    className="w-4 h-auto ml-2"
                    src="/images/svg/token.svg"
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
        <nav className='fixed top-0 flex justify-between items-center w-full h-16 bg-white overflow-hidden'>
            <Link href="/" className="m-auto pl-24">
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