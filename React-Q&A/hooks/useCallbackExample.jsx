import React, { memo, useState,useCallback } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button,${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${children === "increment" ? "bg-green-400" : "bg-red-400"}`}
      onClick={onClick}>
      {children}
    </button>
  )
});

function useCallBackExample() {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   console.log("increment inside")
  //   setCount((prev) => prev + 1)
  // }
  // const decrement = () => {
  //   console.log("decrement inside")
  //   setCount((prev) => prev - 1)
  // }

  const increment = useCallback(() => {
    console.log("increment inside")
    setCount((prev) => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1)
  }, [])

  return <div>
    {count}
    <Button onClick={increment} children={'increment'} />
    <Button onClick={decrement} children={'decrement'} />
  </div>;



}

export default useCallBackExample;