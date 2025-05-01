"use client";

import { ThirdwebProvider } from "thirdweb/react";

const ThirdWebProvider = ({ children }) => {
    const activeChain = "tBNB"

    return (
        <ThirdwebProvider
            activeChain={activeChain}
            clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
            {children}
        </ThirdwebProvider>
    );
}

export default ThirdWebProvider;