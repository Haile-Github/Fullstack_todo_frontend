import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo,deleteTask } from "./utils/HandleApi";

function App() {

const [toDo, setToDo]=useState([]);
const [task,setTask]=useState("");

useEffect(()=>
{
  getAllToDo(setToDo)
}, []

)



  return (
    <div className="App">

      <div className="container">

        <h1>
          ToDo App
        </h1>
        <div className="top">
          <input type="text" placeholder="Add Tasks...." value={task} onChange={(e)=>setTask(e.target.value)}/>

          <div className="add" onClick={()=>addToDo(task,setTask,setToDo)}>Add</div>
        </div>
        <div className="list">

          {toDo.map ((item)=> <ToDo key={item._id} task={item.task} 
          deleteTask={()=>deleteTask(item._id,setToDo)} />)}
          

           

        </div>
        
      </div>

      
    </div>
  );
}

export default App;
