"use client";

import styled from "styled-components";
import BlokABI from "@/contracts/abi/BlokscriptABI";
import Input from "@/components/input";
import { useState } from "react";
import { ethers } from "ethers";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { Button } from "@/components/button";
import { BLOKSCRIPT_NFT_CONTRACT_ADDRESS, BACKGROUND_COLOR } from "@/CENTRAL_VALUES";

const Profile = () => {
    const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID });
    const account = useActiveAccount();

    const [selectedFile, setSelectedFile] = useState(null);
    const [ipfsUrl, setIpfsUrl] = useState(null);

    const [name, setName] = useState('');
    const [gpa, setGpa] = useState('');
    const [standing, setStanding] = useState('');
    const [semester, setSemester] = useState('');
    const [year, setYear] = useState('');
    const [school, setSchool] = useState('');

    const allFieldsFilled = name && gpa && standing && semester && year && school && selectedFile;

    const handleFileChange = (e) => {
        console.log(ipfsUrl);
        const file = e.target.files?.[0];
        if (file) setSelectedFile(file);
        console.log("Fields:", { name, gpa, standing, semester, year, school, selectedFile });
        console.log("allFieldsFilled:", allFieldsFilled);
    };

    const handleFileUpload = async () => {
        if (!account || !allFieldsFilled ) return;

        // Convert from thirdweb account to ethers.js signer
        const signer = await ethers6Adapter.signer.toEthers({
            client: client, chain: 97, account: account,
        });

        const contract = new ethers.Contract(BLOKSCRIPT_NFT_CONTRACT_ADDRESS, BlokABI, signer);

        const reader = new FileReader();


        reader.onloadend = async () => {
            try {
                const fileBase64 = reader.result;

                // Upload the transcript image to IPFS
                const imageResponse = await fetch("/api/pinata", {
                    method: "POST",
                    headers: {"upload-type": "image"},
                    body: JSON.stringify({
                        fileName: selectedFile.name,
                        fileBase64: fileBase64,
                    }),
                });

                const { ipfsHash: imageIpfsHash } = await imageResponse.json();
                console.log(imageIpfsHash);
                const imageUrl = `https://bronze-occasional-ferret-561.mypinata.cloud/ipfs/${imageIpfsHash}`;

                // Upload the metadata json to IPFS
                const metadata = {
                    image: imageUrl,
                    name: name,
                    description: "Blokscript by BlokEDU allows you to upload your transcript to a dAPP",
                    id: 0,
                    gpa: gpa,
                    standing: standing,
                    semester: semester,
                    year: year,
                    school: school
                };

                const jsonResponse = await fetch("/api/pinata", {
                    method: "POST",
                    headers: {"upload-type": "json"},
                    body: JSON.stringify(metadata),
                })

                const { ipfsHash: jsonIpfsHash } = await jsonResponse.json();
                console.log(jsonIpfsHash);
                setIpfsUrl(`https://bronze-occasional-ferret-561.mypinata.cloud/ipfs/${jsonIpfsHash}`);

                await contract.safeMint(account.address, `https://bronze-occasional-ferret-561.mypinata.cloud/ipfs/${jsonIpfsHash}`);

            } catch (err) {
                console.error("Upload failed in onloadend:", err);
            }


        };

        reader.readAsDataURL(selectedFile);
    };

    return (
        <Container>
            {account ?
                <>
                    <UploadContainer onClick={() => document.getElementById("file-upload")?.click()}>
                        {selectedFile ? `Selected File: ${selectedFile.name}` : "Click to select a transcript"}
                        <FileInput
                            id="file-upload"
                            type="file"
                            accept=".pdf,.txt,.jpg,.png"
                            onChange={handleFileChange}
                        />
                    </UploadContainer>
                    <Input 
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <Input 
                        id="gpa"
                        value={gpa}
                        onChange={e => setGpa(e.target.value)}
                        placeholder="Enter your GPA"
                    />
                    <Input 
                        id="standing"
                        value={standing}
                        onChange={e => setStanding(e.target.value)}
                        placeholder="Enter your standing"
                    />
                    <Input 
                        id="semester"
                        value={semester}
                        onChange={e => setSemester(e.target.value)}
                        placeholder="Enter the semester"
                    />
                    <Input 
                        id="year"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        placeholder="Enter the year"
                    />
                    <Input 
                        id="school"
                        value={school}
                        onChange={e => setSchool(e.target.value)}
                        placeholder="Enter your school"
                    />
                </>
                :
                <>
                    <UploadContainer>Please Sign In</UploadContainer>
                </>
            }

            {allFieldsFilled && (
                <Button onClick={handleFileUpload}>
                    Mint NFT
                </Button>
            )}

            {ipfsUrl && (
                <UploadedURL href={ipfsUrl} target="_blank" rel="noopener noreferrer">
                    View on IPFS
                </UploadedURL>
            )}
        </Container>
    );
};

const Container = styled.div`
    padding: 2rem;
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(45, 45, 45, 1);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const UploadContainer = styled.div`
    border: 2px dashed honeydew;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    margin: 1rem;
    width: 100%;
    background: rgba(30, 30, 30, 0.95);
    transition: border 0.2s, background 0.2s;
    max-width: 400px;

    &:hover {
        border-color: honeydew;
        background: rgba(40, 40, 40, 1);
    }
`;

const FileInput = styled.input`
    display: none;
`;

const UploadedURL = styled.a`
    text-decoration: underline;
    display: block;
    margin-top: 1rem;
    text-align: center;
    font-weight: 500;
    transition: color 0.2s;
    width: 100%;
    max-width: 200px;
    align-self: center;

    &:hover {
        color: honeydew;
    }
`;

export default Profile;
