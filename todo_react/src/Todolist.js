// this is the component to render the each element of the list 
import React from 'react';
// import App from './App';
// defining the functional component 
function Todolist(props) {
    console.log("right now at the list component");



    // say everything went fine 
    return (
        <>
            <div className="eachitem">
                <li>{props.task}</li>
                {/* adding the button as well for deleting the todolist  */}
                <button onClick={() => {
                    props.onSelect(props.id);
                }}>Delete</button>
            </div>
        </>
    )
}


// exporting this to be used by other files 
export default Todolist;