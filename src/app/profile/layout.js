"use client";

import styled from "styled-components";
import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useActiveAccount } from "thirdweb/react";
import Link from "next/link";

// TODO: Add profile photos to backend, currently just a temporary fix
const ProfileLayout = ({ children }) => {
    const activeAccount = useActiveAccount();

    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const bgInputRef = useRef(null);
    const profileInputRef = useRef(null);

    const handleImageChange = (e, setter) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setter(url);
        }
    };

    return (
        <>
            <Navbar />
            <HeaderContainer>
                <BackgroundContainer $img={backgroundImage} onClick={() => bgInputRef.current?.click()}>
                    <HiddenInput
                        type="file"
                        accept="image/*"
                        ref={bgInputRef}
                        onChange={(e) => handleImageChange(e, setBackgroundImage)}
                    />
                </BackgroundContainer>
                <ProfilePhotoContainer $img={profileImage} onClick={() => profileInputRef.current?.click()}>
                    <HiddenInput
                        type="file"
                        accept="image/*"
                        ref={profileInputRef}
                        onChange={(e) => handleImageChange(e, setProfileImage)}
                    />
                </ProfilePhotoContainer>
            </HeaderContainer>

            <MainContainer>
                <ProfileNav>
                    <ProfileNavLink href="/profile">Home</ProfileNavLink>
                    <ProfileNavLink href="/profile/settings">Settings</ProfileNavLink>
                </ProfileNav>
                <Content>{children}</Content>
            </MainContainer>
            <Footer />
        </>
    );
};

// Styled Components

const HeaderContainer = styled.div`
    position: relative;
`;

const BackgroundContainer = styled.div`
    height: 20vh;
    width: 100%;
    background: ${({ $img }) => $img ? `url(${$img}) center/cover no-repeat` : "purple"};
    cursor: pointer;
`;

const ProfilePhotoContainer = styled.div`
    position: absolute;
    top: 20vh;
    left: 2rem;
    transform: translateY(-50%);
    width: clamp(60px, 15vw, 150px);
    height: clamp(60px, 15vw, 150px);
    border-radius: 50%;
    background: ${({ $img }) => $img ? `url(${$img}) center/cover no-repeat` : "pink"};  
    cursor: pointer;
    font-size: clamp(0.6rem, 1.2vw, 1rem);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const HiddenInput = styled.input`
    display: none;
`;

const MainContainer = styled.div`
    padding-top: clamp(60px, 6vw, 100px);
`;

const ProfileNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
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

const Content = styled.div`
  min-height: 100vh;
  padding: 1rem 2rem;
`;

export default ProfileLayout;
