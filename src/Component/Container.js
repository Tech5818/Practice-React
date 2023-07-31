import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Portfolio from "./Portfolio";

const Container = () => {
    return (
        <>
            <StyledContainer>
                <Banner/>
                <Portfolio/>
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled.div`
    width: 100%;
`;



export default Container;
