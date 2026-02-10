import UnderLine from './Underline';

function TitleSection({
  children,
  hasUnderline = false,
  underlineColor = 'bg-accent',
  className = '',
}) {
  return (
    <div className={`mb-6 lg:mb-8 px-4 md:max-w-lg lg:px-0 ${className}`}>
      <h2 className="uppercase">{children}</h2>
      {hasUnderline && <UnderLine className={underlineColor} />}
    </div>
  );
}

export default TitleSection;
