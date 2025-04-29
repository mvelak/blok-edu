"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";
import { useActiveAccount } from "thirdweb/react"

const Profile = () => {
    const activeAccount = useActiveAccount();

    return (
        <>
            <Navbar />
            <ProfileBackgroundContainer></ProfileBackgroundContainer>
            <ProfileImageContainer>{activeAccount?.address || "No Active User"}</ProfileImageContainer>
            <ProfileNav>
                <ProfileNavItem>Home</ProfileNavItem>
                <ProfileNavItem>Settings</ProfileNavItem>
            </ProfileNav>
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
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const ProfileNavItem = styled.div`
    
`;

export default Profile;