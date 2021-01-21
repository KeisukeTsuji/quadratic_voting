import { useState } from "react";
import { useRouter } from 'next/router';
import { db } from "@/config/db";

const App = () => {

  const router = useRouter();
  const questionId = router.query.question_id;

  const getTarget = async () => {
    try {
      if (typeof (questionId) === "string") {
        const postRef = db.collection('target').doc(questionId)
        const postDoc = await postRef.get()
        if (postDoc.exists) {
          console.log(postDoc.data())
        } else {
          console.log('No such document!')
        }
      }
    } catch (err) {
      console.error(`Error: ${JSON.stringify(err)}`)
    }
  }

  getTarget()

  return (
    <div>
      voting page
    </div>
  );
};

export default App;
