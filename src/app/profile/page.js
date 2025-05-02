"use client";

import styled from "styled-components";
import BlokABI from "@/contracts/abi/BlokscriptABI";
import { useState } from "react";
import { ethers } from "ethers";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { Button } from "@/components/button";
import { BLOKSCRIPT_NFT_CONTRACT_ADDRESS } from "@/CENTRAL_VALUES";

const Profile = () => {
    const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID });
    const account = useActiveAccount();

    const [selectedFile, setSelectedFile] = useState(null);
    const [ipfsUrl, setIpfsUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!account || !selectedFile) return;

        // Convert from thirdweb account to ethers.js signer
        const signer = await ethers6Adapter.signer.toEthers({
            client: client, chain: 97, account: account,
        });

        const contract = new ethers.Contract(BLOKSCRIPT_NFT_CONTRACT_ADDRESS, BlokABI, signer);

        const reader = new FileReader();

        reader.onloadend = async () => {
            try {
                const fileBase64 = reader.result;

                const response = await fetch("/api/pinata", {
                    method: "POST",
                    headers: {},
                    body: JSON.stringify({
                        fileName: selectedFile.name,
                        fileBase64: fileBase64,
                    }),
                });

                const { ipfsHash } = await response.json();
                setIpfsUrl(`https://bronze-occasional-ferret-561.mypinata.cloud/ipfs/${ipfsHash}`);
                await contract.safeMint(account.address);

            } catch (err) {
                console.error("Upload failed in onloadend:", err);
            }
        };

        reader.readAsDataURL(selectedFile);



    };

    return (
        <Container>
            {account ? (
                <UploadContainer onClick={() => document.getElementById("file-upload")?.click()}>
                    {selectedFile ? `Selected File: ${selectedFile.name}` : "Click to select a transcript"}
                    <FileInput
                        id="file-upload"
                        type="file"
                        accept=".pdf,.txt,.jpg,.png"
                        onChange={handleFileChange}
                    />
                </UploadContainer>)
                :
                <UploadContainer>Please Sign In</UploadContainer>
            }

            {selectedFile && (<Button onClick={handleUpload}>Mint NFT</Button>)}

            {ipfsUrl && (
                <UploadedURL href={ipfsUrl} target="_blank" rel="noopener noreferrer">
                    View uploaded file on IPFS
                </UploadedURL>
            )}
        </Container>
    );
};

const Container = styled.div`
    padding: 2rem;
    max-width: 600px;
    margin: auto;
`;

const UploadContainer = styled.div`
    border: 2px dashed honeydew;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    margin: 1rem;
`;

const FileInput = styled.input`
    display: none;
`;

const UploadedURL = styled.a`
  text-decoration: underline;
  display: block;
  margin-top: 1rem;
`;

export default Profile;
