"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

const Search = () => {
    return (
        <>
            <Navbar />
            <ProfileBackgroundContainer></ProfileBackgroundContainer>
            <p>Search results</p>
            <Footer />
        </>
    );
}

const ProfileBackgroundContainer = styled.div`
    background: green;
    height: 20vh;
`;

export default Search;