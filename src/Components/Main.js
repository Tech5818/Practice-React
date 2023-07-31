import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <>
            <StyledMain/>
        </>
    );
}

const StyledMain = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: red;
`;

export default Main;