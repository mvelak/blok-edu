"use client";

import styled from "styled-components";
import Navbar from "@/components/navbar";

const Search = () => {
    return (
        <>
            <Navbar />
            <ProfileBackgroundContainer></ProfileBackgroundContainer>
            <p>Search results</p>
        </>
    );
}

const ProfileBackgroundContainer = styled.div`
    background: green;
    height: 20vh;
`;

export default Search;