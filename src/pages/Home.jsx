import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TodoItem from "../components/TodoItem/TodoItem";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(1);
  const [sortOption, setSortOption] = useState("sort by input order");

  const sortList = [
    "sort by input order",
    "sort by description",
    "sort by packed status",
  ];

  const addTodos = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      quantity: number,
      packed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const packedItem = () => todos.filter((todo) => todo.packed).length;

  const packedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, packed: !todo.packed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const getSortedTodos = () => {
    const todosCopy = [...todos];
    if (sortOption === "sort by description") {
      return todosCopy.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortOption === "sort by packed status") {
      return todosCopy.sort((a, b) => a.packed - b.packed);
    }
    return todosCopy;
  };

  const sortedTodos = getSortedTodos();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header
        input={input}
        setInput={setInput}
        number={number}
        setNumber={setNumber}
        addTodos={addTodos}
      />

      {/* Main Content */}
      <div className="bg-[#4c3423] flex-grow flex flex-col justify-between items-center p-5 gap-6 overflow-y-auto">
        <TodoItem
          todos={sortedTodos}
          removeTodo={removeTodo}
          packedTodo={packedTodo}
        />

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-[700px]">
          <select
            className="bg-[#fde7aa] py-2 px-6 rounded-3xl cursor-pointer uppercase 
              text-sm max-sm:py-1 max-sm:px-4 max-sm:text-xs w-full sm:w-auto text-center"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            {sortList.map((element, index) => (
              <option
                className="bg-gray-800 text-white"
                value={element}
                key={index}
              >
                {element}
              </option>
            ))}
          </select>

          <button
            onClick={clearTodos}
            className="uppercase bg-[#fde7aa] py-2 px-6 rounded-3xl 
              active:bg-[#e0cc94] cursor-pointer text-sm 
              max-sm:py-1 max-sm:px-4 max-sm:text-xs w-full sm:w-auto"
          >
            Clear list
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer todosLength={todos.length} packedItem={packedItem} />
    </div>
  );
}

export default Home;
