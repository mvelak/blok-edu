"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";
import ethers from "ethers";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";

import { Button } from "@/components/button";

const Profile = () => {
    const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID });
    const account = useActiveAccount();

    const [selectedFile, setSelectedFile] = useState(null);
    const [ipfsUrl, setIpfsUrl] = useState(null);

    useEffect(() => {
        const getSigner = async () => {
            if (!account) return;

            const signer = await ethers6Adapter.signer.toEthers({
                client: client, chain: "", account: account,
            });

            const address = await signer.getAddress();
            console.log("Ethers signer address:", address);
        };

        getSigner();
    }, [account]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) setSelectedFile(file);
    };

    const handleUpload = async () => {
        console.log(selectedFile);
        if (!selectedFile) return;

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
                setIpfsUrl(`https://ipfs.io/ipfs/${ipfsHash}`);
                // contract = new ethers.Contract("https://bronze-occasional-ferret-561.mypinata.cloud/ipfs/{cid}", abi, signer);
            } catch (err) {
                console.error("Upload failed in onloadend:", err);
            }
        };

        reader.readAsDataURL(selectedFile);
    };

    return (
        <Container>
            <UploadBox onClick={() => document.getElementById("file-upload")?.click()}>
                Click to select a transcript
                <FileInput
                    id="file-upload"
                    type="file"
                    accept=".pdf,.txt,.jpg,.png"
                    onChange={handleFileChange}
                />
            </UploadBox>

            {selectedFile && (
                <>
                    <Info>Selected File: {selectedFile.name}</Info>
                    <Button onClick={handleUpload}>Upload to IPFS</Button>
                </>
            )}

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

const UploadBox = styled.div`
    border: 2px dashed honeydew;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
`;

const FileInput = styled.input`
    display: none;
`;

const Info = styled.p`
    font-size: 0.9rem;
`;

const UploadedURL = styled.a`
  text-decoration: underline;
  display: block;
  margin-top: 1rem;
`;

export default Profile;
