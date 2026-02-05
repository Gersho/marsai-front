function BasicFormInput({
    label,
    id,
    type,
    name,
    placeholder,
    title,
    autoFocus = false,
    required = false,
}) {
    return (
        <div className="flex flex-col  sm:flex sm:flex-col sm:w-3/7">
            <label htmlFor="form-movie-duration">{label}</label>
            <input
                className="border border-gray rounded-sm pl-2 py-1 my-2"
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
