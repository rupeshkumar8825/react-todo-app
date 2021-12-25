// making the todolist using the react 
import React from 'react';
import "./index.css"

// defining the function component of the app 
function App() {
  console.log("this is app component");

  // say everything went fine 
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDoList</h1>
          <input type="text" placeholder='Add New Item' />
          <button> + </button>

          {/* now we have to add the component for the todolist list  */}
          <ul>
            <li>Buy the vegetables from the market</li>
          </ul>
        </div>
      </div>
    </>
  )
}

// exporting this to other index.js file 
export default App;