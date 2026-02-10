import Underline from './Underline';

function Card({
  icon,
  title,
  subtitle,
  text,
  hasUnderline = false,
  underlineColor = 'bg-accent',
  className = '',
}) {
  return (
    <div
      className={`flex-1 bg-primary rounded-md px-8 py-8 lg:py-12 mx-4 lg:mx-0 ${className}`}
    >
      {icon && <div className="text-accent text-5xl pb-4">{icon}</div>}
      <h3 className="pr-6 uppercase">{title}</h3>
      {subtitle && (
        <h4 className="uppercase text-accent text-xs pb-4"> {subtitle} </h4>
      )}
      <p className="text-dark ">{text}</p>
      {hasUnderline && <Underline color={underlineColor} className="mt-4" />}
    </div>
  );
}

export default Card;
