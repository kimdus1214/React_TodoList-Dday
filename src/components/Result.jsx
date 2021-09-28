import React from "react";
import styled from 'styled-components';
import {useTodoStateContext} from '../TodoListContext';

const ResultBlock = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
    text-align: center;

    p{
        font-size: 1.12rem;
        font-weight: 500;
        color: #282929;
        letter-spacing: -.5;

        b{
            font-size: 1.5rem;
            font-weight: 600;
            color: #62bfa8;
            margin-top: 2px;
        }
        span{
            font-size: 1.3rem;
            font-weight: 600;
            color: #62bfa8;
        }
    }
    .pMargin{
        margin-bottom: 15px;
    }
`;

function Result({Ddate}){
    const Todos = useTodoStateContext();
    const TodoUnDone = Todos.filter(todo=> !todo.done);
    const TodoCnt = TodoUnDone.length;
    return (
        <ResultBlock>
            <p className="pMargin">남은 날짜 <b>{Ddate}일</b></p>
            <p>할 일이 <span>{TodoCnt}개</span> 남았습니다.</p>
        </ResultBlock>
    );
}

export default Result;