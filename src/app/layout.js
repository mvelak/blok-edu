import "./globals.css";
import ThirdWebProvider from "@/client/ThirdWebProvider";
import PageWrapper from "@/components/pagewrapper";

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
                <ThirdWebProvider><PageWrapper>
                    {children}
                </PageWrapper></ThirdWebProvider>
            </body>
        </html>
    );
}

export default RootLayout;