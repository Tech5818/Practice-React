import React from "react";
import styled from "styled-components";
import BannerImg from "../image/banner.png";

const Banner = () => {
    return (
        <>
            <StyledBannerImg src={BannerImg} className="banner">

            </StyledBannerImg>
        </>
    );
}

const StyledBannerImg = styled.img`
    width: 100%;
`;

export default Banner;