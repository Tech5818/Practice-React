import React from "react";
import styled from "styled-components";

const GNB = () => {
    return (
        <>
            <StyledMenu className="menu">
                <ul>
                    <li id="select_page"><a href="#">홈페이지</a></li>
                    <li><a href="#">포트폴리오</a></li>
                    <li><a href="#">의뢰</a></li>
                    <li>
                        <a href="#">리뷰</a>
                        <svg width="20" height="12" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 16.9792C14.1436 16.9812 13.7902 16.9129 13.4603 16.7781C13.1303 16.6434 12.8302 16.4448 12.5771 16.1938L1.74376 5.36042C1.49124 5.1079 1.29093 4.80811 1.15427 4.47818C1.01761 4.14825 0.947266 3.79462 0.947266 3.4375C0.947266 3.08039 1.01761 2.72676 1.15427 2.39683C1.29093 2.06689 1.49124 1.76711 1.74376 1.51459C1.99628 1.26207 2.29607 1.06175 2.62601 0.925091C2.95594 0.788428 3.30956 0.71809 3.66668 0.71809C4.0238 0.71809 4.37742 0.788428 4.70736 0.925091C5.03729 1.06175 5.33708 1.26207 5.5896 1.51459L14.5 10.4792L23.4375 1.86667C23.6867 1.58964 23.9903 1.36699 24.3294 1.21265C24.6685 1.05831 25.0358 0.975607 25.4084 0.969705C25.7809 0.963803 26.1507 1.03483 26.4945 1.17835C26.8383 1.32186 27.1489 1.53478 27.4067 1.80379C27.6645 2.07279 27.864 2.39209 27.9927 2.74172C28.1215 3.09135 28.1767 3.46379 28.155 3.83574C28.1333 4.2077 28.035 4.57116 27.8664 4.90341C27.6978 5.23565 27.4624 5.52953 27.175 5.76667L16.3417 16.2208C15.8464 16.6984 15.1879 16.9695 14.5 16.9792Z"
                                fill="#231F20" />
                        </svg>
                        <ul>
                            <li><a href="#">기획</a></li>
                            <li><a href="#">웹앱개발</a></li>
                            <li><a href="#">게임개발</a></li>
                        </ul>
                    </li>
                </ul>
            </StyledMenu>
        </>
    );
}

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
`;

export default GNB;