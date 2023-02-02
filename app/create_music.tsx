import Image from "next/image";
import CreateButton from "components/CreateButton";

const   CreateMusic: React.FunctionComponent = (): JSX.Element => {
    return (
        <section className="flex justify-between bg-gray-100 w-full px-16 py-16">
            <div className=" content-center w-6/12 ml-14">
                <h1 className="text-3xl font-bold">The best of music</h1>
                <div className=" w-9/12 border-black mt-8 mb-8">
                    <p>Maxtrack is an AI-powered music platform designed for all levels of music producers. With Maxtrack, you can create professional-grade tracks with ease.</p>
                </div>
                <CreateButton />
            </div>
            <Image
                className="flex-1 rounded-2xl shadow-[14px_20px_20px_2px_rgba(0,0,0,0.7)]"
                src="/images/jpg/music-production.jpg"
                alt="Keyboard"
                width={500}
                height={500}/>
        </section>
    )
};

export default CreateMusic;