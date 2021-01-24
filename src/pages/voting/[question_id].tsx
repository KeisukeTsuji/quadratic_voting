import { useEffect, useState } from "react";
import { db } from "@/config/db";

const QuestionId = () => {
  const [question, setQuestion] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getTargetAndItem() {
      await getTarget();
      await getItems();
    }
    getTargetAndItem();
  }, []);

  const getQuestionId = () => {
    return "YHzLwu1WObmuUfRW9WVK";
  };

  const getTargetRef = async () => {
    const questionId = getQuestionId();
    if (typeof questionId === "string") {
      return await db.collection("target").doc(questionId);
    } else {
      console.log("questionId is not string");
    }
  };

  const getTarget = async () => {
    try {
      const targetRef = await getTargetRef();
      const targetDoc = await targetRef.get();
      if (targetDoc.exists) {
        setQuestion(targetDoc.data().question);
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getItems = async () => {
    try {
      if (getTargetRef()) {
        const allItems = (await getTargetRef()).collection("item");
        const itemsGot = await allItems.get();
        let tmpItems: Object[] = [];
        itemsGot.forEach((doc) => {
          if (doc.exists) {
            tmpItems.push(doc.data());
          }
        });
        setItems(tmpItems);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>{question}</p>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default QuestionId;
