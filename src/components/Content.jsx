import React from "react";
import styled from 'styled-components';
import List from "./List";
import {useTodoStateContext} from '../TodoListContext';

const ListBlock = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
`;

function Content(){
    const state = useTodoStateContext();
    return (
        <ListBlock>
            {state.map(todo=>(
                <List key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </ListBlock>
    );
}

export default Content;