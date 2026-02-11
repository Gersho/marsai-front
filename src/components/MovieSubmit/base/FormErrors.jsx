import { ErrorMessage } from "@hookform/error-message";



function FormErrors({
    form,
    name
}) {
    return (
        <ErrorMessage
            errors={form.formState.errors}
            name={name}
            render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                    <p className="text-red-500" key={type}>{message}</p>
                ))
            }
        />
    );


}

export default FormErrors;