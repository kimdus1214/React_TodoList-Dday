import React,{useReducer, createContext, useContext, useRef } from "react";

const initialState = [
    {
        id: 1,
        text: 'TodoList 프로젝트 완성하기',
        done: true
    },
    {
        id: 2,
        text: '공부하기',
        done: false
    }  
]

function TodoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return [
                ...state,
                action.todo
            ]
        case 'TOGGLE':
            return state.map(todo=> todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case "REMOVE":
            return state.filter( todo => todo.id !== action.id );
        default : 
            return state;
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextId = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const NextId = useRef(3);
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextId.Provider value={NextId}>
                    {children}
                </TodoNextId.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoStateContext(){
    return useContext(TodoStateContext);
}
export function useTodoDispatchContext(){
    return useContext(TodoDispatchContext);
}

export function useTodoNextIdContext(){
    return useContext(TodoNextId);
}