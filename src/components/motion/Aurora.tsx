const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/3 -left-1/4 w-[55%] h-[55%] rounded-full bg-indigo-600/30 blur-[110px] animate-aurora-drift" />
      <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-fuchsia-600/20 blur-[110px] animate-aurora-drift-slow" />
      <div className="absolute -bottom-1/3 left-1/4 w-[45%] h-[45%] rounded-full bg-violet-600/25 blur-[110px] animate-aurora-drift" />
      <div className="absolute inset-0 bg-grid-fade opacity-60" />
    </div>
  );
};

export default Aurora;
