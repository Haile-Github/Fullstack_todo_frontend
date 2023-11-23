import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const ToDo = ({task,deleteTask}) => {
  return (
    <div className="todo">
        <div className="text">{task} </div>

        <div className="icons"> 
            <AiFillDelete className="icon" onClick={deleteTask}/> 
        </div>
    </div>
  )
}

export default ToDo