// making the todolist using the react 
import React from 'react';
import "./index.css"
import { useState } from 'react';

// defining the function component of the app 
function App() {
  console.log("this is app component");

  // we have to define the new state in this case 
  const [task, setTask] = useState("");


  // defining the states for storing the value of current todolist 
  const [todolist, setTodolist] = useState([]);

  // defining the handler for the onchange event listener 
  function handleChangeEvent(event) {
    console.log("right now at the handling the onchange event listener ");

    setTask(event.target.value);

    // say everything went fine
    return;
  }

  // defining the handler for the onclick event for the button is as follows 
  function handleOnClickEvent() {
    // we have to add the value of this task to the list of the todolist yet 
    setTodolist([...todolist, task]);

    // say everything went fine 
    return;
  }

  // say everything went fine 
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDoList</h1>
          <div className="inputsection">
            {/* adding the onchange field in this for accessing the data  */}

            <input type="text" value={task} placeholder='Add New Item' onChange={handleChangeEvent} />
            <button onClick={handleOnClickEvent}> + </button>

          </div>

          {/* now we have to add the component for the todolist list  */}
          <ul className='todolist'>
            {/* we have to add the all the list here in the frontend part  */}
            {/* using the map function for this purpose  */}
            {todolist.map((itemval) => {
              return <li>{itemval} </li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

// exporting this to other index.js file 
export default App;