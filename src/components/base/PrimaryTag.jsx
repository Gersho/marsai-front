function PrimaryTag({ children, className = '' }) {
  return (
    <div
      className={`uppercase rounded-full py-1 px-4 lg:px-6 bg-accent text-white ${className}`}
    >
      {children}
    </div>
  );
}
export default PrimaryTag;
