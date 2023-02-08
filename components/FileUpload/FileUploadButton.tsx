'use client'

import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["WAV", "MP3"];

const   FileUploadButton: React.FunctionComponent = (): JSX.Element => {
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
    setFile(file);
  };

    return (
        <form className="flex items-center flex-col" action="/404-PageNotFound" method="POST">
            <FileUploader classes="my-3 border-none bg-black text-white" handleChange={handleChange} name="file" types={fileTypes} />
            <SubmitButton />
        </form>
    )
};

export default FileUploadButton;