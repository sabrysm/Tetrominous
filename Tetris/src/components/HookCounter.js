import React, { useEffect } from "react";
import { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    console.log("useEffect called")
    return () => {
      clearInterval(timer);
    };
  }, []);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };
  return <div class="bg-sky-500 text-white cursor-pointer rounded-md p-2 hover:bg-sky-700 hover:text-sky font-semibold">Count: {count}</div>;
}

export default HookCounter;
