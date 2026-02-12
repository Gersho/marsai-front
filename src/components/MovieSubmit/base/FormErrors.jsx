import { ErrorMessage } from "@hookform/error-message";



function FormErrors({
    className = "",
    form,
    name
}) {
    className = "text-red-500 " + className;
    return (
        <ErrorMessage
            errors={form.formState.errors}
            name={name}
            render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                    <p className={className} key={type}>{message}</p>
                ))
            }
        />
    );


}

export default FormErrors;