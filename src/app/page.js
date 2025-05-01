"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SpinningText from "@/components/spinningtext";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroContainer>
                <HeroHeader>Take Ownership of Your Academic Records</HeroHeader>
                <HeroBody>Access transcripts on-chain — secure, transparent, and under your control.</HeroBody>
            </HeroContainer>
            <BodyContainer flexdirection="column" margintop="15vh">
                <BodyHeader>How it works.</BodyHeader>
                <BodyContent>Your school uploads your transcript</BodyContent>
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
            <Footer />
        </>
    );
}

const HeroContainer = styled.div`
    height: 75vh;
    background-image: url("/hero-image.jpg");
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

const HeroHeader = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const HeroBody = styled.p`
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const BodyContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: ${(props) => props.flexdirection || "row"};
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.margintop || "0"};

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const BodySubcontainer = styled.div`
    flex: 1;
    line-height: 1.6;

    @media (max-width: 768px) {
        width: 100%;
    }
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

export default Home;