import "./globals.css";
import ThirdWebProvider from "@/client/ThirdWebProvider";

export const metadata = {
    title: "BlokEDU",
    description: "Your dashboard description",
    icons: {
        icon: '/favicon.ico',
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <ThirdWebProvider>{children}</ThirdWebProvider>
            </body>
        </html>
    );
}

export default RootLayout;