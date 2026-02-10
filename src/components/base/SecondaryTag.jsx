function SecondaryTag({ children, className = '' }) {
  return (
    <div
      className={`uppercase rounded-full py-1 px-4 lg:px-6 bg-white text-primary ${className}`}
    >
      {children}
    </div>
  );
}
export default SecondaryTag;
