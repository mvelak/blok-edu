"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styled from "styled-components";

const TermsOfService = () => {
    return (
        <Container>
            <Navbar />
            <h1>BlokEDU Terms of Service</h1>
            <p><strong>Effective Date:</strong> [Insert Date]</p>

            <p>Welcome to <strong>BlokEDU</strong>, a platform that enables users to upload, verify, and access academic transcripts on the blockchain for secure and efficient credential management.</p>

            <p>Please read these Terms of Service ("Terms") carefully before using the BlokEDU platform, website, or any associated services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>

            <section>
                <h2>1. Eligibility</h2>
                <ul>
                    <li>Be at least 18 years old or the age of legal majority in your jurisdiction;</li>
                    <li>Have the legal capacity to enter into binding contracts;</li>
                    <li>Agree to these Terms and our Privacy Policy.</li>
                </ul>
            </section>

            <section>
                <h2>2. Description of Service</h2>
                <p>BlokEDU provides a blockchain-based system for users (including students, institutions, and verifiers) to:</p>
                <ul>
                    <li>Upload academic transcripts;</li>
                    <li>Verify the authenticity of transcripts;</li>
                    <li>Access stored academic records efficiently.</li>
                </ul>
                <p>Once uploaded and verified, transcript data is stored on a public or private blockchain and becomes immutable.</p>
            </section>

            <section>
                <h2>3. User Responsibilities</h2>
                <ul>
                    <li>Provide accurate, complete, and current information;</li>
                    <li>Only upload transcripts that you have the legal right to submit;</li>
                    <li>Not use the Service for illegal or unauthorized purposes;</li>
                    <li>Comply with all local, state, national, and international laws and regulations.</li>
                </ul>
                <p>BlokEDU is <strong>not responsible</strong> for verifying the legitimacy of transcripts submitted by users unless part of a verified institutional integration.</p>
            </section>

            <section>
                <h2>4. Data Usage and Privacy</h2>
                <ul>
                    <li>Uploaded data is stored using blockchain technology, which means it cannot be altered or deleted once confirmed.</li>
                    <li>By using BlokEDU, you consent to the use of your data for verification purposes and for making it available to third parties with your consent.</li>
                    <li>Sensitive data should be uploaded only when necessary, and users are encouraged to redact personal information not required for transcript validation.</li>
                </ul>
                <p>Refer to our <a href="[Insert Privacy Policy URL]">Privacy Policy</a> for more information.</p>
            </section>

            <section>
                <h2>5. Immutable Data Disclaimer</h2>
                <p>Due to the nature of blockchain technology:</p>
                <ul>
                    <li>Uploaded transcripts cannot be deleted or modified once written to the blockchain;</li>
                    <li>Users must ensure accuracy <strong>before</strong> confirming uploads;</li>
                    <li>BlokEDU is not liable for any consequences resulting from erroneous or unauthorized uploads.</li>
                </ul>
            </section>

            <section>
                <h2>6. Account Security</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials, private keys, and any other authentication methods. You agree to notify us immediately if you suspect any unauthorized use of your account.</p>
            </section>

            <section>
                <h2>7. Intellectual Property</h2>
                <p>All content, code, logos, and technology on the BlokEDU platform are the property of BlokEDU or its licensors and are protected under intellectual property laws. You may not copy, modify, or distribute any part of the Service without our express written permission.</p>
            </section>

            <section>
                <h2>8. Third-Party Services</h2>
                <p>BlokEDU may integrate with third-party services (e.g., educational institutions, wallet providers). We are not responsible for the practices, terms, or privacy policies of these third parties.</p>
            </section>

            <section>
                <h2>9. Disclaimers and Limitation of Liability</h2>
                <p>BlokEDU is provided "as is" and "as available" without warranties of any kind. We do not guarantee:</p>
                <ul>
                    <li>That the platform will be error-free or uninterrupted;</li>
                    <li>That uploaded data will be accepted or recognized by third-party institutions.</li>
                </ul>
                <p>To the fullest extent permitted by law, BlokEDU disclaims all liability for any indirect, incidental, or consequential damages resulting from the use or inability to use the Service.</p>
            </section>

            <section>
                <h2>10. Termination</h2>
                <p>We reserve the right to suspend or terminate your access to the Service at any time, for any reason, including breach of these Terms.</p>
            </section>

            <section>
                <h2>11. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
            </section>

            <section>
                <h2>12. Changes to the Terms</h2>
                <p>We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on our website. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.</p>
            </section>

            <section>
                <h2>13. Contact Us</h2>
                <p>If you have any questions about these Terms, you may contact us at:</p>
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

export default TermsOfService;