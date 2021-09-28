import React from "react";
import styled from 'styled-components';

const HeaderBlock = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;
    padding-top: 50px;

    h2{
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 15px;
    }
`;

const HeaderDate = styled.div`
    width:100%;
    padding: 5px 15px;
    text-align: center;
    background: #62b7a1;
    box-sizing: border-box;

    p{
        color: #fff;
        font-size: 1.1rem;
        padding-top: 5px;
        padding-bottom: 5px;
        letter-spacing: -.5px;
        font-weight: 500;
    }
`;

function Header(){
    const Today = new Date();
    const dateString = Today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = Today.toLocaleDateString('ko-KR',{
        weekday: 'long'
    })
    return (
        <HeaderBlock>
            <h2>Todo List</h2>
            <HeaderDate>
                <p>오늘은 {dateString} {dayName} 입니다.</p>
            </HeaderDate>            
        </HeaderBlock>
    );
}

export default Header;