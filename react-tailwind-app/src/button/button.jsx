export default function Button() {
    function handelclikck(){
        console.log("Button clicked!");
}

  return (
    <button onClick={handelclikck} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
    </button>
  );
}
