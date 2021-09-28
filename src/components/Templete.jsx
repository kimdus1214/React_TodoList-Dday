import React from "react";
import styled from 'styled-components';

const TempleteBlock = styled.div`
    width: 500px;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    margin: 50px auto;
    position: relative;
`;

function Templete({children}){
    return (
        <TempleteBlock>{children}</TempleteBlock>
    );
}

export default Templete;