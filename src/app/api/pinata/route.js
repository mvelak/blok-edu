import axios from "axios";
import FormData from "form-data";
import { NextResponse } from "next/server";

// TODO: add header to incoming json to determine if we are uploading file or json to pinata

export async function POST(req) {
    try {
        const { fileName, fileBase64 } = await req.json();
        const buffer = Buffer.from(fileBase64.split(",")[1], "base64");

        const formData = new FormData();
        formData.append("file", buffer, { filename: fileName });

        console.log("FormData Headers:", formData.getHeaders());

        const response = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            formData,
            {
                maxBodyLength: Infinity,
                headers: {
                    ...formData.getHeaders(),
                    pinata_api_key: process.env.PINATA_KEY, // Ensure these are correct in .env.local
                    pinata_secret_api_key: process.env.PINATA_SECRET,
                },
            }
        );

        console.log("Pinata response:", response.data);

        return NextResponse.json({ ipfsHash: response.data.IpfsHash });
    } catch (error) {
        console.error("Full upload error:", error.response?.data || error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}

// TODO: merge this one with the above post func
export async function POST(req) {
    try {
        const jsonObject = JSON.parse
    }
    catch (error) {

    }
}
