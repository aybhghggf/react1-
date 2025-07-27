import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

export default function App() {
  const [click, setClick] = useState(0);
  function handleClick() {
    setClick(click + 1);
  }
  function resetClick() {
    setClick(0);
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>


      <button onClick={resetClick}>Reset </button>

      <p>Vous avez cliker:{click} </p>

    </>
  )
}