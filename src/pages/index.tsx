import { useState } from "react";

const App = () => {
  const [choices, setTodos] = useState([]);
  const [tmpChoice, setTmpTodo] = useState("");

  const addTodo = () => {
    setTodos([tmpChoice, ...choices]);
    setTmpTodo("");
  };

  return (
    <div>
      <h1>quadoratic voting</h1>
      <ul>
        {choices.map((choice, index) => {
          return <li key={index}>{choice}</li>;
        })}
      </ul>
      <div className="form">
        <input
          type="text"
          name="todo"
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpChoice}
        />
        <button onClick={addTodo}>追加</button>
      </div>
    </div>
  );
};

export default App;