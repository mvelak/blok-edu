"use client";

import { ThirdwebProvider } from "thirdweb/react";

const ThirdWebProvider = ({ children }) => {
    return (
        <ThirdwebProvider
            desiredChainId={97}
            clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
            {children}
        </ThirdwebProvider>
    );
}

export default ThirdWebProvider;