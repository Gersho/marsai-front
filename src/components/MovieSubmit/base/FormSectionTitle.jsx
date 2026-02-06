function FormSectionTitle({
    text,
    className = ""
}) {
    className = "self-center text-3xl" + " " + className;
    return (

        <h2 className={className}>{text}</h2>
    );


}

export default FormSectionTitle;