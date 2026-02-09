function BasicFormInput({
    label,
    type,
    placeholder,
    title,
    id,
    register,
    name,
    className = "",
    autoFocus = false,
    required = false,
}) {
    className = "flex flex-col sm:w-full gap-2 sm:pb-4 pb-3" + " " + className;

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input
                className="border border-gray rounded-sm pl-2 py-1"
                id={id}
                type={type}
                placeholder={placeholder}
                title={title}
                {...register(name)}
                autoFocus={autoFocus}
                required={required}
            ></input>
        </div>
    );
}

export default BasicFormInput;
