"use client";

import styled from "styled-components";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import {DropdownMenu, DropdownWrapper} from "./dropdown";
import Button from "./button";

const Navbar = () => {
    const client = createThirdwebClient({
        clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    });

    return (
        <Container>
            <Logo href={"/"}>BlokEDU
                <img src={'/favicon.ico'} width={'20px'} alt="logo"></img>
            </Logo>
            <SearchInput type="text" placeholder="Search for transcripts"/>
            <NavRightSection>
                <ConnectWalletWrapper><ConnectButton client={client}/></ConnectWalletWrapper>
                <DropdownWrapper>
                    <Button>Profile</Button>
                    <DropdownMenu items={[
                        { label: "Home", href: "/profile" },
                        { label: "Settings", href: "/profile/settings" },
                    ]}/>
                </DropdownWrapper>
            </NavRightSection>
        </Container>
    );
}


const Container = styled.nav`
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

const NavRightSection = styled.div`
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

const ConnectWalletWrapper = styled.div`
    * {
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
        min-width: 140px;
        text-align: center;



        &:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: gray;
        }
    
        &:active {
          transform: scale(0.98);
        } 
    }
`;

export default Navbar;