import FileUploadButton from "components/FileUpload/FileUploadButton";

const   FileUpload: React.FunctionComponent = (): JSX.Element => {
    return (
        <main className="flex justify-center px-56 py-24 bg-gray-100">
            <div className="bg-white min-w-full py-24 shadow">
                <FileUploadButton />
            </div>
        </main>
    )
};

export default FileUpload;