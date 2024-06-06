import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";
import Task from "./Task";
import DropDownMenu from "./DropDownMenu";

const ReadTasks = () => {
  const { tasks } = useContext(TaskContext);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [categories, setCategories] = useState([]);

  const [selectedSortOption, setSelectedSortOption] = useState("Sort");
  const [sortOptions, setSortOptions] = useState(["ascending", "descending"]);

  useEffect(() => {
    const cat = [...new Set(tasks.map((task) => task.category.toLowerCase()))];
    setCategories(cat);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortOptionObj = {
    ascending: (a, b)=>a.name.localeCompare(b.name),
    descending: (a, b)=>b.name.localeCompare(a.name)
  }
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>ReadTasks</h4>

      <DropDownMenu
        selectedOption={selectedCategory}
        setSelectedOption={setSelectedCategory}
        options={categories}
        defaultValue="Category"
      />

<DropDownMenu
        selectedOption={selectedSortOption}
        setSelectedOption={setSelectedSortOption}
        options={sortOptions}
        defaultValue="Sort"
      />


      <div className="tasks-list">
        {(selectedCategory==="Category"?tasks:tasks.filter(task=>task.category===selectedCategory)).sort(sortOptionObj[selectedSortOption]).map((task) => {
          return <Task className="box" key={task.id} task={task} />;
        })}
      </div>
      <Link to={`/createtask`}>
        <button>Create Task</button>
      </Link>
    </div>
  );
};

export default ReadTasks;
