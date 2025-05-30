import React from "react";

function Footer({ todosLength, packedItem }) {
  const packedCount = packedItem();
  const percentage =
    todosLength === 0 ? 0 : Math.floor((packedCount / todosLength) * 100);

  return (
    <footer className="bg-[#67c1a3] p-4 flex justify-center items-center">
      <h1 className="font-medium text-white text-center text-base sm:text-lg leading-relaxed max-w-[90%]">
        💼 You have <strong>{todosLength}</strong> on your list, and you already packed{" "}
        <strong>{packedCount}</strong> ({percentage}%)
      </h1>
    </footer>
  );
}

export default Footer;
