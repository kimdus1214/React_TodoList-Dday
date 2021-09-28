import React,{useState} from "react";
import styled from 'styled-components';
import Result from "./Result";
import { darken } from "polished";

const DdayForm = styled.form`
    width: 100%;
    background:#f8f8f8;
    padding: 15px 45px;
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
`;
const DdayLabel = styled.label`
    height: 50px;
    line-height: 50px;
`;
const DdayInputYear = styled.input`
    width: 70%;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    ouline: none;
    height: 40px;
    font-size: 1rem;
    box-sizing: border-box;
    color: #282929;

    &::placeholder{
        color: #ddd;
    }
`;

const DdayInput = styled.input`
    width: 70%;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    ouline: none;
    height: 40px;
    font-size: 1rem;
    box-sizing: border-box;
    color: #282929;

    &::placeholder{
        color: #ddd;
    }
`;

const DdayBtn = styled.button`
    display: block;
    width: 30%;
    height: 40px;
    margin: 5px;
    border: 1px solid #c4c4c4;
    cursor: pointer;

    &:hover{
        background: ${darken(0.05, '#EFEFEF')};
    }
    &:active{
        background: ${darken(0.1, '#EFEFEF')};
    }
`;
const DdayExplain = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    text-align: center;

    p{
        font-size: 1rem;
        color: #282929;
    }
    .pMargin{
        margin-bottom: 8px;
    }
`;

function Dday(){
    const [inputs, setInputs] = useState({
            useryear: '',
            usermonth: '',
            userday: ''
    });
    const { useryear, usermonth, userday } = inputs;
    const onChange = (e) => {
        const {value, name} = e.target
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const [Ddate, setDate] = useState(0);
    const onDdaySubmit = e =>{
        e.preventDefault(); 
        if(usermonth>12 || userday>31){
            alert('날짜를 정확히 입력해주세요');
            return;
        }
        if(!useryear || !usermonth || !userday){
            alert('날짜를 정확히 입력해주세요');
            setDate(0);
        }else{
            let today = new Date(),
            dday = new Date(useryear,usermonth-1,userday),
            gap = dday.getTime()-today.getTime(),
            result = Math.ceil(gap / (1000 * 60 * 60 * 24));
            setDate(result);
        }
    }

    return (
        <>
            <DdayForm onSubmit={onDdaySubmit}>
                <DdayLabel>
                    <DdayInputYear name="useryear" value={useryear} onChange={onChange} placeholder="2021" />년
                </DdayLabel>
                <DdayLabel>
                    <DdayInput name="usermonth" value={usermonth} onChange={onChange} placeholder="00" />월
                </DdayLabel>
                <DdayLabel>
                    <DdayInput name="userday" value={userday} onChange={onChange} placeholder="00" />일
                </DdayLabel>
                <DdayBtn>입력</DdayBtn>
            </DdayForm>
            <DdayExplain>
                <p className="pMargin">*입력한 날짜의 D-day를 계산합니다.</p>
                <p>*D-day는 오늘 기준으로 계산됩니다.</p>
            </DdayExplain>
            <Result Ddate={Ddate}></Result>
        </>
    );
}

export default Dday;