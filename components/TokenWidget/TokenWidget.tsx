import Image from "next/image";
import TokenWidgetButton from "./TokenWidgetButton";

interface   tokenWidgetProps {
    tokenNumber: number,
}

const   TokenWidget: React.FunctionComponent<tokenWidgetProps> = ({ tokenNumber }): JSX.Element => {
    return (
        <div className="flex flex-col items-center ml-6 px-12 py-6 shadow-[1px_3px_3px_0px_rgba(0,0,0,0.2)] duration-200 hover:scale-105 bg-white rounded">
            <Image
                className="w-12 h-auto mb-2"
                src="/images/svg/token-black.svg"
                alt="Token"
                width={100}
                height={100}
            />
            <p>Token</p>
            <p className="mb-2">{tokenNumber} tk</p>
            <TokenWidgetButton tokenPrice={
                tokenNumber == 30 ? 10 :
                tokenNumber == 80 ? 20 :
                tokenNumber == 200 ? 40 :
                "verify ternary /components/TokenWidget/TokenWidget.tsx"
            }/>
        </div>
    )
};

export default TokenWidget;