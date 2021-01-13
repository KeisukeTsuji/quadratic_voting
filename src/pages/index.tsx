import { useState } from "react";

const App = () => {
  const [choices, setTodos] = useState([]);
  const [tmpChoice, setTmpTodo] = useState("");

  const addTodo = () => {
    setTodos([tmpChoice, ...choices]);
    setTmpTodo("");
  };

  return (
    <>
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
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};

export default App;