function Story({ img, userName }) {
  return (
    <div className="">
      <img
        className="h-14 w-14 rounded-full object-contain 
      p-[1.5px] border-red-500 border-2 cursor-pointer
      hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{userName}</p>
    </div>
  );
}

export default Story;
