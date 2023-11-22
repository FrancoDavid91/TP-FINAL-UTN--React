import React from "react";

//Here we render the list of tasks
const TaskList = ({ task, renderTask }) => {
  return (
    <section>
      {task.map((task) => {
        return renderTask(task);
      })}
    </section>
  );
};

export default TaskList;
