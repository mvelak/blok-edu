"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";

const Profile = () => {
    return (
        <>
            <Navbar />
            <ProfileBackgroundContainer></ProfileBackgroundContainer>
            <p>User Name</p>
        </>
    );
}

const ProfileBackgroundContainer = styled.div`
    background: purple;
    height: 20vh;
`;

export default Profile;