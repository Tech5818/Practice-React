import React from "react";
import styled from "styled-components";
import PortfolioProduct from "./PortfolioProduct";
import PortfolioWebApp from "./PortfolioWebApp";
import WepAppGameImg from "../image/web_app.svg";
import PortfolioGame from "./PortfolioGame";

const Portfolio = () => {
    return (
        <>
            <StyledPortfolio>
                <PortfolioProduct/>
                <StyledPortfolioWebAppGame>
                    <PortfolioWebApp/>
                    <PortfolioGame/>
                </StyledPortfolioWebAppGame>
            </StyledPortfolio>
        </>
    );
}

const StyledPortfolio = styled.div`
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledPortfolioWebAppGame = styled.div`
    width: 100%;
    background: url(${WepAppGameImg}) fixed no-repeat;
    color: white;
    text-shadow: 2px 2px 2px rgba(60, 56, 254, 0.4);
    opacity: 0.8;
`;

export default Portfolio;