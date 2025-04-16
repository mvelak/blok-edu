"use client";

import styled from "styled-components";

const Home = () => {

    return (
        <Container>
            <NavBar>
                <Logo href={"/"}>BlokEDU
                    <img src={'/favicon.ico'} width={'20px'}></img>
                </Logo>
                <SearchInput type="text" placeholder="Search for transcripts"/>
                <RightWrapper>
                    <ConnectButton>Connect Wallet</ConnectButton>
                    <ProfileButton>Profile</ProfileButton>
                </RightWrapper>
            </NavBar>
            <HeroContainer>
                <HeroHeader>Take Ownership of Your Academic Record</HeroHeader>
                <HeroBody>Upload and verify transcripts on-chain — secure, transparent, and under your control.</HeroBody>
            </HeroContainer>
            <BodyContainer>Body Content</BodyContainer>
            <BodyContainer>Body Content</BodyContainer>
            <FooterContainer>Footer Content</FooterContainer>
        </Container>
    );
}

const Container = styled.div`
    background: rgb(5, 5, 5, 0.8);
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif;
    color: honeydew;
`;

const NavBar = styled.nav`
    background: rgba(5, 5, 5, 0);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
    position: sticky;
    top: 0;
    z-index: 2;
    height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const Logo = styled.a`
    color: honeydew;
    text-decoration: none;
    font-size: 1.5rem; 
    font-weight: 500;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const SearchInput = styled.input`
    width: 500px;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 0.9rem;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: gray;
        background-color: rgba(255, 255, 255, 0.12);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
`;

const ConnectButton = styled.button`
    padding: 0.6rem 1rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: gray;
    }

    &:active {
        transform: scale(0.98);
    }
`;

const ProfileButton = styled.button`
    padding: 0.6rem 1rem;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: gray;
    }

    &:active {
        transform: scale(0.98);
    }
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

const HeroHeader = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const HeroBody = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;


const BodyContainer = styled.div`
    height: 75vh;
    
    
`;

const FooterContainer = styled.div`
    background: gray;
`;


export default Home;