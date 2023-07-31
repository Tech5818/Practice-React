import React from "react";
import styled from "styled-components";
import logo from "../image/logo.svg";
import GNB from "./GNB";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledHeaderLeft>
                    <img src={logo} className="Logo"/>
                    <GNB/>
                </StyledHeaderLeft>
                <StyledHeaderRight>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 512 512"id="search">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    <StyledLoginButton className="login">로그인</StyledLoginButton>
                </StyledHeaderRight>
            </StyledHeader>
        </>
    );
}


const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #333;
    padding: 0 60px;
    position: fixed;
    background-color: #fff;
    width: 100%;
    z-index: 100;
`;
const StyledHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
const StyledHeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
const StyledLoginButton = styled.div`
    width: 130px;
    height: 50px;
    color: #000;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    transition: box-shadow 0.5s;
    border-radius: 20px;
    border: 1px solid #ddd;
    background-color: #dbdbff;
`;


export default Header;