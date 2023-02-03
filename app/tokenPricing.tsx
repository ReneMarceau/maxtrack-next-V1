import TokenWidget from "components/TokenWidget/TokenWidget";

const   TokenPricing: React.FunctionComponent = (): JSX.Element => {
    return (
        <section className="flex flex-col items-center py-8 bg-gray-100">
            <h2 className="text-2xl font-bold">Token</h2>
            <p className="my-5">Buy tokens to use maxtrack technology</p>
            <ul className="flex flex-row">
                <li><TokenWidget tokenNumber={30}/></li>
                <li><TokenWidget tokenNumber={80}/></li>
                <li><TokenWidget tokenNumber={200}/></li>
            </ul>
        </section>
    )
};

export default TokenPricing;