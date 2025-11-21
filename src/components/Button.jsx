import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  onClick,
  type = 'button',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="button-content"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
};

// Add this default export
export default Button;