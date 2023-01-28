import React from "react";

function TaskItem({ task, setTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="action">
        <input
          checked={task.status}
          type="checkbox"
          className="btn-action btn-action-done"
          onChange={(e) => setTaskStatus(task.id, e.target.checked)}
        />
        <button
          onClick={() => removeTask(task.id)}
          className="btn-action btn-action-delete"
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
