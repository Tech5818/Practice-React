import React from "react";
import styled from "styled-components";

const More = () => {
    return (
        <>
            <StyledMore/>
        </>
    );
}

const StyledMore = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: green;
`;

export default More;