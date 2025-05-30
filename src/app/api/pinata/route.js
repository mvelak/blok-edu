import axios from "axios";
import FormData from "form-data";
import { NextResponse } from "next/server";

export async function POST(req) {
    const uploadType = req.headers.get("upload-type");

    try {
        if (uploadType === "image") {
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
                        pinata_api_key: process.env.PINATA_KEY,
                        pinata_secret_api_key: process.env.PINATA_SECRET,
                    },
                }
            );
            console.log("Pinata response:", response.data);
            return NextResponse.json({ ipfsHash: response.data.IpfsHash });

        }
        else if (uploadType === "json") {
            const json = await req.json();

            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                json,
                {
                    maxBodyLength: Infinity,
                    headers: {
                        pinata_api_key: process.env.PINATA_KEY,
                        pinata_secret_api_key: process.env.PINATA_SECRET,
                    },
                }
            );
            console.log("Pinata response:", response.data);
            return NextResponse.json({ ipfsHash: response.data.IpfsHash });
        }

        else {
            return NextResponse.json({ error: "Unsupported upload type" }, { status: 500 });
        }


    } catch (error) {
        console.error("Full upload error:", error.response?.data || error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}