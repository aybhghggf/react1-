import { useState } from "react";

export default function App() {
  const [valueofInput, setvalueofInput] = useState("");
  const [students, setStudents] = useState(["ayoube"]);

  function ochnageevent(e) {
    setvalueofInput(e.target.value);
  }

  function onsubmitform(e) {
    e.preventDefault();
    if (valueofInput.trim() === "") return;
    setStudents([...students, valueofInput]);
    setvalueofInput(""); 
  }

  function deleteOnArray(IndexToDelete) {
    const nouveauTable = students.filter((_, index) => index !== IndexToDelete);
    setStudents(nouveauTable);
  }

  return (
    <>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{" "}
            <button onClick={() => deleteOnArray(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <div className="Input">
        <form onSubmit={onsubmitform}>
          <input
            type="text"
            placeholder="Ajouter un étudiant"
            value={valueofInput}
            onChange={ochnageevent}
          />
          <button type="submit" className="btn btn-primary m-2">
            Ajoutez
          </button>
        </form>
      </div>
    </>
  );
}
