import axios from 'axios'

const baseUrl="https://fullstack-todo-project-backend.onrender.com "     //http://localhost:5000/api/tasks

const getAllToDo=(setToDo)=>{
    axios.
    get(baseUrl)
    .then(({data})=>{console.log('data---',data);
    setToDo(data)

    
    })
}
const addToDo=(task,setTask, setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{task})
    .then((data)=>{console.log(data)
    setTask("")
    getAllToDo(setToDo)

})
    

}

const deleteTask=(_id, setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
    getAllToDo(setToDo)

})
.catch ((err)=>console.log(err))
    

}

export{getAllToDo,addToDo,deleteTask}