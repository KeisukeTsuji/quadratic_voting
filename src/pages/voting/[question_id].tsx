import { useState } from "react";
import { useRouter } from 'next/router';
import { db } from "@/config/db";

const App = () => {

  const router = useRouter();
  console.log(router.query.question_id);

  return (
    <div>
      voting page
    </div>
  );
};

export default App;
