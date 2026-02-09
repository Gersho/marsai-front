import { useState } from "react";

function FormTextArea({

    label,
    maxCount,
    id,
    placeholder,
    title,
    register,
    name,
    className = "",
    required = false
}) {
    const [count, setCount] = useState(0);


    function countCharacters(event) {
        setCount(event?.target.value.length);
    }

    className = "flex flex-col w-full gap-2 sm:pb-0 pb-3" + " " + className;

    return (
        <div className={className}>
            <div className="flex justify-between">
                <label htmlFor={id}>
                    {label}
                </label>
                <p className={count > maxCount ? "text-red-600" : ""}>{count} / {maxCount}</p>
            </div>
            <textarea
                className="border border-gray rounded-sm p-3 h-36 sm:h-44"
                id={id}
                type="textarea"
                placeholder={placeholder}
                title={title}
                onChange={countCharacters}
                {...register(name)}
                required={required}
            ></textarea>
        </div>

    );
}

export default FormTextArea;