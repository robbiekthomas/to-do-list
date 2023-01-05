import { useState } from "react";
import "./App.css";

import TodoTask from "./TodoTask";

function App() {
  const [toDo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");

  const handleChange = (event) => {
    setCurrentToDo(event.target.value);
  };

  const handleClick = (event) => {
    setToDo((previousToDo) => [...previousToDo, currentToDo]);
    setCurrentToDo("");
  };

  return (
    <>
      <h1>To-Do List</h1>
      <input value={currentToDo} onChange={handleChange} />
      <button disabled={!currentToDo} onClick={handleClick}>
        Add
      </button>
      <h2>List</h2>
      <ul>
        {/* {toDo.map((ele, i) => {
          const handleRemove = () => {
            setToDo((previousToDo) => [
              ...previousToDo.slice(0, i),
              ...previousToDo.slice(i + 1),
            ]);
          };
          return (
            <>
              <li>
                {ele}
                <button
                  onClick={handleRemove}
                  style={{ marginLeft: "10px" }}
                >
                  X
                </button>
              </li>
            </>
          );
        })} */}
        {toDo.map((ele, i) => {
          const handleRemove = () => {
            setToDo((previousToDo) => [
              ...previousToDo.slice(0, i),
              ...previousToDo.slice(i + 1),
            ]);
          };
          const handleSave = (newValue) => {
            setToDo((previousToDo) => [
              ...previousToDo.slice(0, i),
              newValue,
              ...previousToDo.slice(i + 1),
            ]);
          };
          return (
            <TodoTask value={ele} onRemove={handleRemove} onSave={handleSave} />
          );
        })}
      </ul>
    </>
  );
}

export default App;
