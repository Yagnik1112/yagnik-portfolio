
export default function MagneticButton({ children, className = "", onClick, ...props }) {
  return (
    <div
      className={`inline-block ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

