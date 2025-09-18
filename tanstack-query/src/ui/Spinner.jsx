const Spinner = () => {
  return (
    <div className="absolute inset-0 bg-slate-200 opacity-75 flex justify-center items-center z-50">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
