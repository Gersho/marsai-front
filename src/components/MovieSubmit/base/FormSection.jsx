function FormSection({ children, className = "" }) {

    className = "flex flex-col rounded-md p-3 pb-6 sm:p-5 items-center gap-3 w-12/14 sm:w-11/14" + " " + className;
    return (

        <div className={className}>
            {children}
        </div>
    );
}

export default FormSection;