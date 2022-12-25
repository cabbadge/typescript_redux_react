export interface TodoState {
    todos: []
    loading:boolean
    error:null | string
    page:number
    limit:number
}

export enum todoActionType{
    FETCH_TODOS='FETCH_TODOS',
    FETCH_TODOS_SUCCESS='FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR='FETCH_TODOS_ERROR',
    SET_TODOS_PAGE='SET_TODOS_PAGE'
}

interface FetchTodoAction {
    type:todoActionType.FETCH_TODOS
}
interface FetchTodoSuccessAction{
    type:todoActionType.FETCH_TODOS_SUCCESS
    payload:any
}
interface FetchTodoErrorAction {
    type:todoActionType.FETCH_TODOS_ERROR
    payload:string
}
interface SetTodoPage {
    type:todoActionType.SET_TODOS_PAGE
    payload:number
}
export type TodoAction=FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage