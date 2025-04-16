import "./globals.css";

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
        <body>{children}</body>
        </html>
    );
}

export default RootLayout;