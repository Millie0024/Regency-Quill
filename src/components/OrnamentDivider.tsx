const OrnamentDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="h-px w-16 bg-gold/40" />
      <span className="text-gold/70 text-2xl font-elegant select-none">❧</span>
      <div className="h-px w-16 bg-gold/40" />
    </div>
  );
};

export default OrnamentDivider;
