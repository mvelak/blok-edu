"use client";

import styled from "styled-components";

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    );
}

const StyledButton = styled.button`
    height: 50px;
    width: 90px;
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

    &:hover {
        background-color: rgba(255, 255, 255, 0.12);
        border-color: gray;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export default Button;