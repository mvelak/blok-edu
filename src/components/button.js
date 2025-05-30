"use client";

import styled from "styled-components";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";


export const Button = ({ children, onClick }) => {
    return (
        <ButtonWrapper>
            <button onClick={onClick} style={{ height: "50px"}}>{children}</button>
        </ButtonWrapper>
    );
}


export const WalletButton = () => {
    const client = createThirdwebClient({
        clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    });

    const wallets = [
        createWallet("io.metamask"),
        createWallet("io.zerion.wallet"),
        createWallet("me.rainbow"),
        createWallet("com.coinbase.wallet"),
    ];

    return (
        <ButtonWrapper $bgcolor="rgba(255, 255, 255, 0.2)" $bghcolor="rgba(255, 255, 255, 0.24)">
            <ConnectButton
                client={client}
                wallets={wallets}
                connectButton={{
                    label: "Connect Wallet",
                }}
            />
        </ButtonWrapper>
    );
}


const ButtonWrapper = styled.div`
    button {
        padding: 0.6rem 1rem;
        border-radius: 12px;
        background-color: ${({ $bgcolor }) => $bgcolor || "rgba(255, 255, 255, 0.08)"};
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: ${(props) => props.fontcolor || "white"};
        font-family: sans-serif;
        font-size: 0.9rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 110px;
        text-align: center;
        &:hover {
          background-color: ${({ $bghcolor }) => $bghcolor || "rgba(255, 255, 255, 0.12)"};
          border-color: gray;
        }
        &:active {
          transform: scale(0.98);
        } 
    }
`;