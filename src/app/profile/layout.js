"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useActiveAccount } from "thirdweb/react"
import Link from "next/link";

const ProfileLayout = ({ children }) => {
    const activeAccount = useActiveAccount();

    return (
        <>
            <Navbar />
            <ProfileBackgroundContainer />
            <ProfileImageContainer>{activeAccount?.address || "No Active User"}</ProfileImageContainer>
            <ProfileNav>
                <ProfileNavLink href="/profile">Home</ProfileNavLink>
                <ProfileNavLink href="/profile/settings">Settings</ProfileNavLink>
            </ProfileNav>
            <Idk>{children}</Idk>
            <Footer />
        </>
    );
}

const ProfileBackgroundContainer = styled.div`
    background: purple;
    height: 20vh;
`;

const ProfileImageContainer = styled.div`
    background: white;
    color: black;
    height: 60px;
    width: 60px;
    border-radius: 30px;
`;

const ProfileNav = styled.nav`
    height: 9vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    gap: 1.5rem;
`;

const ProfileNavLink = styled(Link)`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(200, 200, 200);
    transition: background 0.3s, color 0.3s;
    text-decoration: none;

    &:hover {
        color: honeydew;
    }
`;

const Idk = styled.div`
    height: 200vh;
`;

export default ProfileLayout;