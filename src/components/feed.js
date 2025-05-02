"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import BlokABI from "@/contracts/abi/BlokscriptABI.json";
import { BLOKSCRIPT_NFT_CONTRACT_ADDRESS } from "@/CENTRAL_VALUES";

const TranscriptFeed = () => {
    const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID });
    const account = useActiveAccount();

    const [mints, setMints] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            if (!account) return;

            // Convert from thirdweb account to ethers.js signer
            const signer = await ethers6Adapter.signer.toEthers({
                client: client, chain: 97, account: account,
            });

            const contract = new ethers.Contract(BLOKSCRIPT_NFT_CONTRACT_ADDRESS, BlokABI, signer);

            const past = await contract.queryFilter("TranscriptMinted");
            const results = await Promise.all(
                past.map(async (event) => {
                    const tokenId = event.args.tokenId.toString();
                    const uri = await contract.tokenURI(tokenId);
                    return {
                        to: event.args.to,
                        tokenId,
                        uri,
                    };
                })
            );

            setMints(results.reverse());

            await contract.on("TranscriptMinted", async (to, tokenId) => {
                const uri = await contract.tokenURI(tokenId.toString());
                setMints((prev) => [
                    { to, tokenId: tokenId.toString(), uri },
                    ...prev,
                ]);
            });
        };

        loadEvents();
    }, [account]);

    return (
        <FeedContainer>
            <FeedHeader>📄 Recently Minted Transcripts</FeedHeader>
            {mints.length === 0 ? (
                <p style={{ color: "gray" }}>No transcripts found yet.</p>
            ) : (
                mints.map((mint, i) => (
                    <FeedCard key={i}>
                        <p><strong>Owner:</strong> {mint.to}</p>
                        <p><strong>Token ID:</strong> {mint.tokenId}</p>
                        <a href={mint.uri} target="_blank" rel="noopener noreferrer">
                            View Metadata
                        </a>
                        {mint.uri.endsWith(".pdf") && (
                            <PdfPreview src={mint.uri} />
                        )}
                    </FeedCard>
                ))
            )}
        </FeedContainer>
    );
};

export default TranscriptFeed;

const FeedContainer = styled.div`
  max-width: 900px;
  padding: 2rem;
  margin: 4rem auto;
`;

const FeedHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FeedCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 30, 30, 0.85);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const PdfPreview = styled.iframe`
  margin-top: 1rem;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  border: 1px solid #444;
`;
