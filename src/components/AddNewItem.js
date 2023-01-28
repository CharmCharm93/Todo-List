import React from "react";

function AddNewItem({ handleSubmit, newTask, handleInputNewTask }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="new-item">Add new item</label>
      <input
        type="text"
        id="new-item"
        value={newTask}
        onChange={handleInputNewTask}
      />
      <button className="add-item" type="submit">
        Add item
      </button>
    </form>
  );
}

export default AddNewItem;
