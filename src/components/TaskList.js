import React from "react";

function TaskList({
  tasks,
  showIncompletedTasks,
  setTaskStatus,
  removeTask,
  setShowIncompletedTasks,
}) {
  return (
    <div>
      <TaskList
        tasks={tasks}
        showIncompletedTasks={showIncompletedTasks}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
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
    </div>
  );
}

export default TaskList;
