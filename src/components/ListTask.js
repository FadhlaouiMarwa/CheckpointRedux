import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Button } from 'semantic-ui-react'

function ListTask() {
  const [list, setList] = useState("All");
   const task=useSelector((state)=>state.todoReducers.objet)
   console.log(task);
  return (
    <div>
    <div style={{margin:20,padding:20}}>
    
     <Button.Group>
    <Button style={{width:200, height:50,color:"blue"}}  onClick={()=>setList("All")}>
    Show All
    </Button>
    <Button style={{width:200, height:50,color:"blue"}} onClick={()=>setList("Done")}>
    Show Done
    </Button>
    <Button style={{width:200, height:50,color:"blue"}} onClick={()=>setList("Undone")}>
    Show Not Done
    </Button>
  </Button.Group>
  </div>
  {list=="All"?
 task.map
 ((el)=> <Task todo={el} key={el.id} /> ):
 list=="Done"?
task.filter
((el)=>el.isDone).map((el)=> <Task todo={el} key={el.id} /> ):
task.filter
((el)=>!el.isDone).map((el)=> <Task todo={el} key={el.id} /> )
 }
  </div>);
}

export default ListTask;
