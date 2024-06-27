const Fixedbg = () => {
  return (
    <>
      {/* fixed hero bg start */}
      <div className="h-screen absolute -z-20 w-full">
        <div className="fixed w-[650px] h-[650px] border-1 border-gray-400/50 rounded-full p-5 flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="-rotate-90 font-black text-7xl text-gray-400/15">
            PORTFOLIO
          </div>
        </div>
        {/* Central Vertical Borders with Gap */}
        <div className="fixed h-full w-full flex justify-center gap-96 -translate-y-[0%]">
          <div className="h-full border-l-[1px] border-gray-400/50  mx-2" />

          <div className="h-full border-l-[1px] border-gray-400/50  mx-2" />
        </div>
      </div>
      {/* fixed hero bg end */}
    </>
  );
};

export default Fixedbg;
