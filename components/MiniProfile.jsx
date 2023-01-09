function MiniProfile() {
  return (
    <div
      className="flex items-center justify-between
    mt-14 ml-10"
    >
      <img
        className="cursor-pointer w-16 h-16 rounded-full border-2 p-[2px] border-red-500"
        src="https://github.com/taleshrocha.png"
        alt=""
      />

      <div className="flex-1 mx-4 cursor-default">
        <h2 className="font-bold">taleshrocha</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        className="text-blue-400 text-sm
      font-semibold"
      >
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
