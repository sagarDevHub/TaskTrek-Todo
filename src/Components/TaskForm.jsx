import { useState } from "react";
import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            value={taskData.task}
            className="task_input"
            type="text"
            placeholder="Enter your task"
            onChange={handleChange}
          />

          <div className="task_form_bottom_line">
            <div>
              <Tag
                selected={checkTag("HTML")}
                selectTag={selectTag}
                tagName="HTML"
              />
              <Tag
                selected={checkTag("CSS")}
                selectTag={selectTag}
                tagName="CSS"
              />
              <Tag
                selected={checkTag("JavaScript")}
                selectTag={selectTag}
                tagName="JavaScript"
              />
              <Tag
                selected={checkTag("React")}
                selectTag={selectTag}
                tagName="React"
              />
            </div>

            <div>
              <select
                name="status"
                value={taskData.status}
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
