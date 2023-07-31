import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const [active, setActive] = useState(0);

    return (
        <>
            <StyledHeader>
                <StyledLogo/>
                <StyledGNB>
                    <StyledMenuMain 
                        to="/"
                        onClick={() => setActive(0)}
                        isActive={active === 0}
                    >
                        메인
                    </StyledMenuMain>
                    <StyledMenuEx 
                        to="/Explanation"
                        onClick={() => setActive(1)}
                        isActive={active === 1}
                    >
                        설명
                    </StyledMenuEx>
                    <StyledMenuMore 
                        to="/More"
                        onClick={() => setActive(2)}
                        isActive={active === 2}
                    >
                        더보기
                    </StyledMenuMore>
                </StyledGNB>
            </StyledHeader>
        </>
    );
}

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 30px;
`;

const StyledLogo = styled.div`
    width: 200px;
    height: 100%;
    background: #ccc;
`;

const StyledGNB = styled.nav`
    height: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 22px;
    color: #ccc;
    border: none;
`;

const StyledMenuMain = styled(Link)`
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive }) => (isActive ? "black" : "rgb(170, 170, 170)")};
    border-bottom: ${({ isActive }) => (isActive ? "2px solid black" : "none")};
`;

const StyledMenuEx = styled(Link)`
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive }) => (isActive ? "black" : "rgb(170, 170, 170)")};
    border-bottom: ${({ isActive }) => (isActive ? "2px solid black" : "none")};
`;

const StyledMenuMore = styled(Link)`
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive }) => (isActive ? "black" : "rgb(170, 170, 170)")};
    border-bottom: ${({ isActive }) => (isActive ? "2px solid black" : "none")};
`;

export default Header;