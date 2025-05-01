"use client";
import styled from "styled-components";
import Link from "next/link";

const DropdownMenu = ({ items = [] }) => {
    return (
        <Container>
            {items.map((item, index) => (
                <Item key={index} href={item.href}>{item.label}</Item>
            ))}
        </Container>
    );
};

const DropdownWrapper = styled.div`
    position: relative;
    &:hover * {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 15px;
    background: rgba(30, 30, 30, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    min-width: 160px;
    z-index: 100;
`;

export const Item = styled(Link)`
    display: block;
    padding: 0.6rem 1rem;
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    border-radius: 12px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export { DropdownMenu, DropdownWrapper };