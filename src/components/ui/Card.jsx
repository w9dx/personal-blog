export default function Card({ children, className }) {
  return (
    <div className={`rounded-lg bg-secondary p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
