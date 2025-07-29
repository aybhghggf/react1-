import { useState } from "react";


export default function App() {
  const array = [
    "Ayoube", "Zakaria", "Alaoui", "Amine", "Ibrahim", "Ahmed"
  ];

  const [Value,setValue] = useState();
  const [students,setStudents]= useState([
      ...array
  ])



  function displayStudents() {
    return (
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    );
  }
  function submtiForm(e){
    e.preventDefault();
    setStudents([...students,Value]);
    setValue("");
  }

  return (
    <>
          {displayStudents()}
      <form onSubmit={submtiForm}>
        <input type="text" placeholder="Ajoutez un nom"  value={Value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button className="btn btn-primary" >Ajouter</button>
      </form>

    </>
  );
}
