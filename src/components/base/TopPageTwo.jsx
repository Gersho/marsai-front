function TopPageTwo({ children, className = '' }) {
  className =
    'min-h-17 flex flex-col items-center justify-center bg-primary bg-cover' +
    ' ' +
    className;
  return <div className={className}>{children}</div>;
}
export default TopPageTwo;
