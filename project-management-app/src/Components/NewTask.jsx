import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [eneterdTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleOnClick = () => {
    if (eneterdTask.trim() === "") {
      return;
    }
    setEnteredTask("");
    onAdd(eneterdTask);
  };
  return (
    <div className="flex item-center gap-4">
      <input
        onChange={handleChange}
        value={eneterdTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleOnClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
