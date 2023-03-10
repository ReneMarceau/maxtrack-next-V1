import CreateMusic from "./createMusic";
import TokenPricing from "./tokenPricing";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <main className="bg-gray-100">
      <CreateMusic />
      <TokenPricing />
    </main>
  )
};

export default Home;