function FormTextArea({

    label,
    currentCount,
    maxCount,
    name,
    placeholder,
    title,
    className = "",
    required = false
}) {

    let id = "form-" + name;
    className = "flex flex-col w-full gap-2 sm:pb-0 pb-3" + " " + className;

    return (
        <div className={className}>
            <div className="flex justify-between">
                <label htmlFor={id}>
                    {label}
                </label>
                <p>{currentCount}/{maxCount}</p>
            </div>
            <textarea
                className="border border-gray rounded-sm p-3 h-36 sm:h-44"
                id={id}
                type="textarea"
                name={name}
                placeholder={placeholder}
                title={title}
                required={required}
            ></textarea>
        </div>

    );
}

export default FormTextArea;