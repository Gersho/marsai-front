function BasicFormInput({
    label,
    type,
    name,
    placeholder,
    title,
    className = "",
    autoFocus = false,
    required = false,
}) {
    let id = "form-" + { name };
    className = "flex flex-col sm:w-full gap-2 " + " " + className;

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                className="border border-gray rounded-sm pl-2 py-1"
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                title={title}
                autoFocus={autoFocus}
                required={required}
            ></input>
        </div>
    );
}

export default BasicFormInput;
