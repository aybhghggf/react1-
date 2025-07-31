import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [Tasks, setTasks] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      setTasks([...Tasks, value]);
      setValue("");
    }
  }

  function deleteItem(IndexToDelete) {
    const NewTaskArray = Tasks.filter((_, index) => index !== IndexToDelete);
    setTasks(NewTaskArray);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h1 className="text-center mb-4">Todo List</h1>

          <form className="d-flex gap-2" onSubmit={submitForm}>
            <input
              type="text"
              className="form-control"
              placeholder="Add a task..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>

        <div className="mt-4">
          <ul className="list-group">
            {Tasks.map((task, index) => (
              <div key={index} className="d-flex align-items-center my-1">
                <li className="list-group-item flex-grow-1 mb-0">{task}</li>
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
