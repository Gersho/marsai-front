function SmallCard({ title, label, subtitle, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-6 bg-primary rounded-md px-2 py-8 md:flex-row md:gap-12 md:items-center lg:px-8 lg:py-12 lg:mx-0 ${className}`}
    >
      {subtitle && (
        <h4 className="uppercase text-dark text-3xl"> {subtitle} </h4>
      )}
      <div>
        <p className="text-accent uppercase text-sm pb-2">{label}</p>
        <h3 className="p-0 lowercase first-letter:uppercase">{title}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
