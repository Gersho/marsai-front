import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

function SecondaryButton({ to, children, hasIcon = true, className = '' }) {
  return (
    <Link
      to={to}
      className={`button flex items-center gap-2  text-primary bg-white ${className}`}
    >
      {children}
      {hasIcon && <FaArrowRightLong />}
    </Link>
  );
}
export default SecondaryButton;
