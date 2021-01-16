import { useState } from "react";

const App = () => {
  const [choices, setItems] = useState([]);
  const [tmpChoice, setTmpItem] = useState("");

  const addTodo = () => {
    setItems([tmpChoice, ...choices]);
    setTmpItem("");
  };

  return (
    <div className="max-w-screen-sm m-auto h-screen bg-gray-50 p-4">
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={(e) => setTmpItem(e.target.value)}
          value={tmpChoice}
        />
        <button onClick={addTodo}>
          <span className="mdi mdi-plus"></span>
        </button>
      </div>
      <ul>
        {choices.map((choice, index) => {
          return (
            <li key={index}>
              {index}. {choice}
            </li>
          );
        })}
      </ul>
      <div className="text-purple-500 hover:bg-purple-200 cursor-pointer">
        save
      </div>
      <style>{`
        
      `}</style>
    </div>
  );
};

export default App;
