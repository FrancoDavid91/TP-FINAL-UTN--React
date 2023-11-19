import React from 'react'

const TaskList = ({task, renderTask}) => {
  return (
    <section>
            {task.map((task) => {
                return renderTask(task)
            })}
    </section>
  )
}

export default TaskList

