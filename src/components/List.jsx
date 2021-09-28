import React from "react";
import styled ,{css}from 'styled-components';
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatchContext } from "../TodoListContext";

const TodoList = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 8px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
`;

const TodoCheck = styled.div`
    text-align: center;
    color: #ddd;
    font-size: 2rem;
    cursor: pointer;
    ${props=>
        props.done &&
        css`
            color: #62BFA8;
        `
    }
`;

const TodoTxt = styled.div`
    font-size: 1rem;
    color: #555;
    width: 78%;
    margin-left: 2%;
    ${props=>
        props.done &&
        css`
            text-decoration: line-through;
            color: #ddd;
        `
    }
`;

const TodoRemove = styled.div`
    text-align: center;
    color: #ddd;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        color: #C96464;
        transition: .5s;
    }
    &:active{
        color: #C55656;
    }
`;

function List({id, text, done}){
    const dispatch = useTodoDispatchContext();
    const onToggle = ()=> dispatch({type: 'TOGGLE', id});
    const onRemove = ()=> dispatch({type: 'REMOVE', id});
    return (
        <>
        <TodoList>
            <TodoCheck done={done} onClick={onToggle}><MdDone /></TodoCheck>
            <TodoTxt done={done}>{text}</TodoTxt>
            <TodoRemove onClick={onRemove}><MdDelete /></TodoRemove>
        </TodoList>
    </>
    );
}

export default List;