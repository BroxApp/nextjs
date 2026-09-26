export default function Logo({ className = "w-6 h-6 text-amber-500" }: { className?: string }) {
  return (
    <div className="flex gap-1">
      <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="text-xl font-bold text-amber-500 tracking-wide">
      BroxApp
      </span>
    </div>
  );
}