import React from "react";
import styled from "styled-components";

const Explanation = () => {
    return (
        <>
            <StyledExplanation/>
        </>
    );
}

const StyledExplanation = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: blue;
`;

export default Explanation;