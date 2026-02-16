function FormSectionTitle({ text, className = '' }) {
  className = 'self-center text-3xl pb-5 pt-2' + ' ' + className;
  return <h2 className={className}>{text}</h2>;
}

export default FormSectionTitle;
