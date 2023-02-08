const   SubmitButton: React.FunctionComponent = (): JSX.Element => {
    return (
        <input
            id="submit__file"
            className="px-3 py-1 bg-black text-white rounded cursor-pointer"
            type="submit"
            value="Submit"
        />
    )
};

export default SubmitButton;