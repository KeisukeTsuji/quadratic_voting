import { useState } from "react";
import { db } from "@/config/db";

const App = () => {
  const [choices, setItems] = useState([]);
  const [tmpChoice, setTmpItem] = useState("");

  const addItem = () => {
    setItems([tmpChoice, ...choices]);
    setTmpItem("");
  };

  const saveTargets = async () => {
    const docId = db.collection("target").doc().id;
    await db.collection("target").doc(docId).set({
      targetId: "title1",
      createdAt: new Date(),
    });
    await db
      .collection("target")
      .doc(docId)
      .collection("item")
      .add({ name: "テスト太郎", numberOfVote: "100" });
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
        <button onClick={addItem}>
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
      <div
        onClick={saveTargets}
        className="text-purple-500 hover:bg-purple-200 cursor-pointer"
      >
        save
      </div>
      <style>{`
        
      `}</style>
    </div>
  );
};

export default App;
