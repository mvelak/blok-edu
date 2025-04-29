"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styled from "styled-components";

const PrivacyPolicy = () => {

    return (
        <Container>
            <Navbar />
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> [Insert Date]</p>

            <p>This Privacy Policy describes how <strong>BlokEDU</strong> ("we", "our", or "us") collects, uses, and shares information when you use our platform, website, and associated services (collectively, the "Service").</p>

            <p>By using BlokEDU, you agree to the practices described in this policy.</p>

            <section>
                <h2>1. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Information:</strong> Includes names, email addresses, institution affiliations, and identity-verifying documents you may submit when creating or verifying your account.</li>
                    <li><strong>Transcript Data:</strong> Academic records and credentials uploaded by you or on your behalf to be stored and verified on the blockchain.</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device identifiers, and usage data collected automatically when you interact with the platform.</li>
                </ul>
            </section>

            <section>
                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>To provide and maintain the BlokEDU service;</li>
                    <li>To verify and store academic transcripts on a blockchain ledger;</li>
                    <li>To allow authorized third parties (such as educational institutions or verifiers) to access records, with your consent;</li>
                    <li>To communicate with you about updates, changes, or issues with your account;</li>
                    <li>To improve and secure the platform.</li>
                </ul>
            </section>

            <section>
                <h2>3. Data on the Blockchain</h2>
                <p>Once data is written to the blockchain, it becomes immutable and cannot be deleted or changed. Users must review and confirm the accuracy of their transcript data before submitting it to the blockchain.</p>
                <p>We cannot remove or redact blockchain-stored content after confirmation. Please consider carefully before submitting sensitive data.</p>
            </section>

            <section>
                <h2>4. Sharing of Information</h2>
                <p>We may share your information under the following circumstances:</p>
                <ul>
                    <li>With your consent, to third parties such as institutions or verifiers who request access to your academic records;</li>
                    <li>With service providers and partners that help operate the platform (under confidentiality agreements);</li>
                    <li>If required by law, regulation, legal process, or government request;</li>
                    <li>To protect the rights, security, or property of BlokEDU, users, or others.</li>
                </ul>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>We use reasonable administrative, technical, and physical safeguards to protect your data. However, no system is fully secure, and we cannot guarantee the security of blockchain-stored data or off-chain services such as account recovery.</p>
            </section>

            <section>
                <h2>6. Your Rights and Choices</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you;</li>
                    <li>Request corrections or updates to inaccurate data;</li>
                    <li>Request deletion of certain off-chain personal information (note: blockchain data cannot be deleted);</li>
                    <li>Withdraw consent where applicable.</li>
                </ul>
                <p>To exercise these rights, contact us at the address below.</p>
            </section>

            <section>
                <h2>7. Children’s Privacy</h2>
                <p>BlokEDU is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. If you believe a child has submitted data in violation of this policy, please contact us.</p>
            </section>

            <section>
                <h2>8. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. If changes are made, we will notify users via the platform or by email where appropriate. Continued use of the Service after such changes constitutes your acceptance of the revised policy.</p>
            </section>

            <section>
                <h2>9. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <ul>
                    <li><strong>Email:</strong> [Insert Contact Email]</li>
                    <li><strong>Website:</strong> [Insert Website URL]</li>
                </ul>
            </section>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: honeydew;
`;

export default PrivacyPolicy;