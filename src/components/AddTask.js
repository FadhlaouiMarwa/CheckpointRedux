import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import { addTaask } from '../redux/actions/Actions';


function AddTask() {
    const [newTask, setNewTask] = useState({id:Math.random(),description:"",isDone:false});
    const dispatch=useDispatch()
    const handleAdd=()=>{
      dispatch(addTaask(newTask));
     
    }
    console.log(newTask)
  return (
  <div >
     <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
           <FormControl style={{width:400, height:50}}
           onChange={e=>setNewTask({...newTask,description:e.target.value})}
           
           />
      <Button variant="primary" onClick={()=>handleAdd()} id="button-addon2">
            ADD TO MY TO DO LIST
      </Button>
  </div>
  </div>);
}

export default AddTask;
