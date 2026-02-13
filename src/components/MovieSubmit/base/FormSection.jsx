function FormSection({ children, className = '' }) {
  className = 'w-full flex flex-col items-center' + ' ' + className;
  return (
    <div className={className}>
      <div className="flex flex-col rounded-md p-3 pb-6 md:p-5 items-center w-12/14 md:w-11/14">
        {children}
      </div>
    </div>
  );
}

export default FormSection;
