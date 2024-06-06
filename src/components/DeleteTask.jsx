import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";

const Msg = styled.p`
  color: blue;
  font-size: 22px;
`;

const DeleteTask = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [subtasks, setSubtasks] = useState([{ name: "", completed: false }]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currTask, setCurrTask] = useState({});
  const [percentCompleted, setPercentCompleted] = useState(0);

  useEffect(() => {
    const curr = tasks.find((task) => task.id === id);
    setTaskName(curr.name);
    setSubtasks(curr.subtasks);
    setPercentCompleted(curr.percentCompleted);
    setCurrTask(curr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  const handleDelete = () => {
    const newTasks = tasks.filter(task=>task.id !==id)
    setTasks(newTasks);
    localStorage.setItem("crud-27-tasks", JSON.stringify(newTasks));
    setIsUpdating(true);
    setTimeout(() => {
      navigate("/readtasks");
      setIsUpdating(false);
    }, 2000);
  };

  const handleClick = (index) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index].completed = !newSubtasks[index].completed;
    setSubtasks(newSubtasks);
  };

  return (
    <div>
      <Link to={`/readtasks`}>Back</Link>
      <h4>DeleteTask: {currTask.name}</h4>
<button onClick={handleDelete}>DeleteTask: {currTask.name}</button>
      {tasks?.map((task) => {
        return (
          <div key={task.id} className="box">
            <h4>{task.name}</h4>
            {task.subtasks.map((subtask, index) => {
              return (
                <p
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{
                    textDecoration: subtask.completed ? "line-through" : "none",
                  }}
                >
                  {subtask.name}
                </p>
              );
            })}
          </div>
        );
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default DeleteTask;
