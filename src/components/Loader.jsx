const Loader = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-loader">
      <img src="/img/sequence-01.gif" alt="Site loading animation" className="w-64 max-w-[80vw]" />
    </div>
  );
};

export default Loader;
