"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";

const Home = () => {
    return (
        <Container>
            <Navbar />
            <HeroContainer>
                <HeroHeader>Take Ownership of Your Academic Records</HeroHeader>
                <HeroBody>Upload and verify transcripts on-chain — secure, transparent, and under your control.</HeroBody>
            </HeroContainer>
            <BodyContainer>Body Content</BodyContainer>
            <BodyContainer>Body Content</BodyContainer>
            <FooterContainer>Footer Content</FooterContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    color: honeydew;
`;

const HeroContainer = styled.div`
    height: 75vh;
    background-image: url("/hero-image.jpg");
    background-size: 1000vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background: linear-gradient(to bottom, transparent, rgb(5, 5, 5, 1));
    }
`;

const HeroHeader = styled.div`
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const HeroBody = styled.div`
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;


const BodyContainer = styled.div`
    height: 75vh;
`;

const FooterContainer = styled.div`
    height: 15vh;
`;


export default Home;