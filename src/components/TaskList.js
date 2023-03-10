import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncompletedTasks,
  setTaskStatus,
  removeTask,
  setShowIncompletedTasks,
}) {
  return (
    <>
      <ul className="tasks-list">
        {tasks
          .filter((task) =>
            showIncompletedTasks ? task.status === false : true
          )
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncompletedTasks}
          onChange={(e) => setShowIncompletedTasks(e.target.checked)}
        />
      </div>
    </>
  );
}

export default TaskList;
