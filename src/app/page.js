"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";
import SpinningText from "@/components/spinningtext";

const Home = () => {
    return (
        <Container>
            <Navbar />
            <HeroContainer>
                <HeroHeader>Take Ownership of Your Academic Records</HeroHeader>
                <HeroBody>Upload and verify transcripts on-chain — secure, transparent, and under your control.</HeroBody>
            </HeroContainer>
            <BodyContainer>
                <BodyHeader>How it works.</BodyHeader>
            </BodyContainer>
            <BodyContainer>
                <BodySubcontainer>
                    <BodyHeader>Why Decentralized Transcripts?</BodyHeader>
                    <BodyContent>Traditional transcript systems are slow, costly, and centralized. Our platform gives students full ownership of their academic records, accessible anytime—no waiting for school admin approvals or third-party services</BodyContent>
                </BodySubcontainer>
                <BodySubcontainer>
                    <SpinningText />
                </BodySubcontainer>
            </BodyContainer>
            <BodyContainer>
                <BodySubcontainer>
                    <BodyHeader>Trustworthy. Tamper-Proof. Transparent.</BodyHeader>
                    <BodyContent>Blockchain ensures every transcript uploaded is cryptographically verified and immutable. Schools can't lose them, hackers can't forge them, and employers can trust them</BodyContent>
                </BodySubcontainer>
                <BodySubcontainer>
                    <SpinningText />
                </BodySubcontainer>
            </BodyContainer>
            <BodyContainer>
                <BodySubcontainer>
                    <BodyHeader>Global Access, Local Control.</BodyHeader>
                    <BodyContent>Whether you're applying for jobs across the world or switching universities, your transcripts are always one click away—owned by you, accessible from anywhere</BodyContent>
                </BodySubcontainer>
                <BodySubcontainer>
                    <SpinningText />
                </BodySubcontainer>
            </BodyContainer>
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

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 300px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(45, 45, 45, 1) 100%);
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
    height: 45vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
`;

const BodySubcontainer = styled.div`
    flex: 1;
    line-height: 1.6;
`

const BodyHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const BodyContent = styled.p`
  font-size: 1rem;
  color: rgb(210, 210, 210);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterContainer = styled.div`
    height: 15vh;
`;


export default Home;