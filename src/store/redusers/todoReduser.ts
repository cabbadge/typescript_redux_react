import {TodoAction, TodoState} from "../../types/todo";


export const todoReduser=(state:TodoState, action:TodoAction): TodoState=>{
    switch (action.type) {

        default:return state
    }
}