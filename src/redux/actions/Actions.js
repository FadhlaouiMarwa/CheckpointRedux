import { ADD_TASK, DONE_TASK, EDIT_TASK } from "./ActionsType"

export const addTaask=(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask
    }
}
export const editTask=(newEdit,id)=>{
    return{
        type:EDIT_TASK,
        payload:{newEdit,id}
    }
}
export const DONE=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}