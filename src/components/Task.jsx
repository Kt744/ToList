import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todolistSlice";

function Task() {

const [inputFields,setInputFields]=useState([{
        task:[],
        description:[],
        dates:[]
    }
])
  let dispatch = useDispatch();

  const handleAdd = () => {
    const values=[...inputFields]
    values.push({ task:[], description:[], dates:[]})
    dispatch(addTask(values));
  };

  const handleInputChange=(index,e)=>{
    const values=[...inputFields]
    if(e.target.name==='task') {
        values[index].task=e.target.value
    }
    else if(e.target.name==='description') {
        values[index].description=e.target.value
    }
    else if(e.target.name==='dates') {
        values[index].dates=e.target.value
    }
  }

  return (
    <div className="userInput">
      <h3> Daily Task</h3>
        <div>
          {
          inputFields.map((inputField,index)=>{
            return (
        <>
        <div>
          <label>Task: </label>
          <input
            type="text"
            name="task"
            // value={inputField.task}
            onChange={(e) => handleInputChange(index,e)}
          />
          </div>
          <div>
          <label>Task-Description: </label>
          <input
            type="text"
            name="description"
            // value={inputField.description}
            onChange={(e) => handleInputChange(index,e)}
          />
          </div>
          <div>
          <label>Date: </label>
          <input
            type="date"
            name="dates"
            // value={inputField.dates}
            onChange={(e) => handleInputChange(index,e)}
          />
          </div>
        </>  
            )
          })}    
        </div>
        <div>
          <button onClick={handleAdd}>Add</button>
          <input type="reset" value="clear" />
        </div>
    </div>
  );
}
export default Task;
