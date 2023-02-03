import FooterLinks from "components/Footer/FooterLinks"
import FooterBar from "components/Footer/FooterBar"
import FooterCopyrights from "components/Footer/FooterCopyrights"

const   Footer: React.FunctionComponent = (): JSX.Element => {
    return (
        <footer className="flex flex-col items-center py-6 bg-white">
            <FooterLinks />
            <FooterBar />
            <FooterCopyrights />
        </footer>
    )
};

export default Footer;