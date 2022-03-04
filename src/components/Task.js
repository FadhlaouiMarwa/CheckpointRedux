import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { DONE } from '../redux/actions/Actions';
import Edit from './Edit';
function Task({todo}) {
  const dispatch=useDispatch()
  return (
  <div>
    <Container>
  <Row>
    <Col style={{fontSize:'30px',color:"black"}}>{todo.description}</Col>
    <Col> 
      <div style={{display:"flex"}}>
      <button style={{padding: '10px 20px', borderRadius: '8px', fontSize:'16px', width:'33%'}} onClick={()=>dispatch(DONE(todo.id))}>{todo.isDone?"Undone":"Done"}</button>
      <Edit task={todo}/>
      </div> 
    </Col>
  </Row>
  </Container>
  </div>);
}

export default Task;
