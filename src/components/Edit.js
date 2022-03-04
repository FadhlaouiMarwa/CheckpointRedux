import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/Actions';
function Edit({task}) {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [newEdit, setNewEdit] = useState(task.description);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEdit=()=>{
        dispatch(editTask(newEdit,task.id))
        handleClose()
    }
  return (
  <div>
      <button  variant="primary" onClick={handleShow} style={{padding: '10px 100px', borderRadius: '8px', fontSize:'16px', width:'33%',textAlign:"center"}}>
        EDIT
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TASK EDIT </Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type="text" onChange={(e)=>setNewEdit(e.target.value)} placeholder='Add New Description'  value={task.description}/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleEdit()}>
            Save Editing
          </Button>
        </Modal.Footer>
      </Modal>
  </div>);
}

export default Edit;
