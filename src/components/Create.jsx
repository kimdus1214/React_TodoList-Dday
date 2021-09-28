import React, {useState} from "react";
import styled,{css} from 'styled-components';
import { MdAdd } from "react-icons/md";
import {darken, lighten} from 'polished';
import { useTodoDispatchContext, useTodoNextIdContext } from "../TodoListContext";

const CreateBlock = styled.div`
    width: 100%;
    height: 150px;
    position: relative;
    bottom: 0;
    left: 0;
`;

const CreateWrap = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const CreateFrom = styled.form`
    height: 150px;
    width: 100%;
    text-align: center;
    border-radius: 0 0px 15px 15px;
    background: #dff0eb;
    padding-top: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

const CreateInput = styled.input`
    border: 1px solid #ddd;
    padding: 5px 15px;
    width: 65%;
    height: 48px;
    box-sizing: border-box;
`;
const InputBtn = styled.button`
    width: 15%;
    height: 48px;
    cursor: pointer;
    border: 0;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #f8f8f8;

    &:hover{
        background: ${darken(0.03, '#f8f8f8')};
    &:active{
        background: ${darken(0.05, '#f8f8f8')};
    }

`;
const CreateBtn = styled.button`
    background: #62bfa8;
    width: 100px;
    height: 100px;
    line-height: 100px;
    align-center: center;
    border-radius: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: -58px;
    color: #fff;
    font-size: 1.5rem;
    outline: none;
    border: 0;
    font-size: 2.5rem;
    padding-top: 5px;    

    &:hover{
        background: ${lighten(0.1, '#62bfa8')};
    &:active{
        background: ${darken(0.1, '#62bfa8')};
    }

    ${props=>
        props.open &&
        css`
            background: #bf6262;
            transform: rotate(45deg);
            &:hover{
                background: ${lighten(0.1,'#bf6262')}
            }
            &:active{
                background: ${darken(0.05,'#bf6262')}
            }
            
        `
    }
`;

function Create(){
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState('');
    const dispatch = useTodoDispatchContext();
    const NextId = useTodoNextIdContext();

    const onClick = () => setOpen(!open);
    const onChange= e => setTodo(e.target.value);
    const onCreate = e => {
        e.preventDefault();        
        if(!todo){
            alert('할 일을 입력해주세요');
        }else{
            dispatch({
                type: 'CREATE',
                todo: {
                    id: NextId.current,
                    text: todo,
                    done: false
                }
            });
            setTodo('');
            setOpen(false);
        }
        NextId.current++;
    }
    return (
        <CreateBlock>
            {open && (
                <CreateWrap>
                    <CreateFrom>
                        <CreateInput value={todo} onChange={onChange} placeholder="할 일을 입력해주세요" autoFocus/>
                        <InputBtn onClick={onCreate}>입력</InputBtn>
                    </CreateFrom>
                </CreateWrap>
            )}            
            <CreateBtn open={open} onClick={onClick}>
                <MdAdd />
            </CreateBtn>
        </CreateBlock>
    );
}

export default Create;