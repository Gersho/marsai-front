function SmallCard({ title, label, subtitle, date, duration, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-6 bg-primary rounded-md px-2 py-8 md:flex-row md:gap-12 md:items-center lg:px-8 lg:py-12 lg:mx-0 ${className}`}
    >
      {subtitle && (
        <div className="text-center">
          <span className="text-xs uppercase text-primary bg-white px-2 py-1 rounded-xs block mb-2">
            {date}
          </span>
          <h4 className="uppercase text-dark text-3xl"> {subtitle} </h4>
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center justify-between pb-2">
          <p className="text-accent uppercase text-sm">{label}</p>
          <span className="text-xs uppercase underline text-dark">
            {duration}
          </span>
        </div>
        <h3 className="p-0 lg:text-xl lowercase first-letter:uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default SmallCard;
