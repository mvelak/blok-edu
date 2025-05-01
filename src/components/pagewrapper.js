"use client"
import styled from "styled-components";

const PageWrapper = ({ children }) => {
    return (
        <Container>{children}</Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(45, 45, 45, 1);
    color: honeydew;
`;

export default PageWrapper;