import UnderLine from './Underline';

function TitlePage({
  children,
  hasUnderline = false,
  underlineColor = 'bg-accent',
  className = '',
}) {
  return (
    <div
      className={`flex flex-col text-white items-center justify-center text-center ${className}`}
    >
      <h2 className="uppercase">{children}</h2>
      {hasUnderline && <UnderLine className={underlineColor} />}
    </div>
  );
}

export default TitlePage;
