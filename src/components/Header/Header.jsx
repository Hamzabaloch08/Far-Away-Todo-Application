import React from "react";

function Header({ input, setInput, number, setNumber, addTodos }) {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div>
      <div className="bg-[#f19720] p-6 flex justify-center items-center gap-6">
        <div className=" w-[80px] max-lg:w-[70px]">
          <img className="w-[100%]" src="./src/assets/island.png" alt="" />
        </div>
        <h1 className="font-bold text-5xl uppercase max-lg:text-4xl">
          far away
        </h1>
        <div className=" w-[80px] max-lg:w-[70px]">
          <img className="w-[100%]" src="./src/assets/briefcase.png" alt="" />
        </div>
      </div>
<div className="bg-[#df6b1b] flex flex-wrap justify-center items-center gap-4 p-6 sm:gap-3 max-sm:gap-2">
  <h1 className="font-medium text-white text-lg sm:text-base max-sm:text-sm text-center w-full sm:w-auto">
    What do you need for your 😍 trip?
  </h1>

  <select
    value={number}
    onChange={(e) => setNumber(parseInt(e.target.value))}
    name="selectedNumber"
    className="bg-[#fde7aa] py-2 px-6 rounded-3xl focus:outline-blue-500 sm:px-5 text-sm 
               max-sm:py-1 max-sm:px-3 max-sm:text-xs max-w-[180px] w-full sm:w-auto"
  >
    {numbers.map((element, index) => (
      <option value={element} key={index} className="bg-white">
        {element}
      </option>
    ))}
  </select>

  <input
    placeholder="Add Todo"
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => (e.key === "Enter" ? addTodos() : null)}
    className="bg-[#fde7aa] py-2 px-6 rounded-3xl focus:outline-blue-500 sm:px-5 text-sm 
               max-sm:py-1 max-sm:px-3 max-sm:text-xs max-w-[250px] w-full sm:w-auto"
  />

  <button
    onClick={addTodos}
    className="uppercase bg-[#4dd6a8] active:bg-[#67c1a3] py-2 px-6 rounded-3xl cursor-pointer 
               sm:px-5 text-sm w-full sm:w-auto max-sm:py-1 max-sm:px-3 max-sm:text-xs"
  >
    add
  </button>
</div>


    </div>
  );
}

export default Header;
