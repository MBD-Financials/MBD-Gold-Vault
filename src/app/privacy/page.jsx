"use client";

import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export default function PrivacyPolicyPage() {
  return (
    <Box maxW="6xl" mx="auto" py={10} px={6} color="gray.100">
      <Heading mb={6} size="xl" textAlign="center" color="purple.300">
        Privacy Policy
      </Heading>

      <VStack spacing={6} align="start">
        <Text><strong>Effective Date:</strong> 05-09-2025</Text>

        <Text><strong>1. Introduction:</strong> MBD Financials ("we", "us", "our") is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you interact with our NFT platform and its optional gold redemption utilities.</Text>

        <Text><strong>2. Information We Collect:</strong></Text>
        <Text>- <strong>Wallet Data:</strong> Public blockchain address and transaction metadata.</Text>
        <Text>- <strong>Personal Information:</strong> Name, email, and optionally KYC documentation (only if you initiate a redemption request).</Text>
        <Text>- <strong>Technical Data:</strong> Browser type, IP address, device data, geolocation (if enabled), referral URLs.</Text>
        <Text>- <strong>Usage Data:</strong> Site interactions, session activity, error reports.</Text>

        <Text><strong>3. How We Use Your Information:</strong></Text>
        <Text>- To process NFT minting and delivery.</Text>
        <Text>- To facilitate optional utilities like gold redemption via third-party custodians (e.g., Indigo Precious Metals).</Text>
        <Text>- To meet compliance obligations (e.g., Know Your Customer/Anti-Money Laundering).</Text>
        <Text>- To enhance platform security, fraud prevention, and user support.</Text>
        <Text>- To improve platform performance, analytics, and feature development.</Text>

        <Text><strong>4. Sharing Your Information:</strong></Text>
        <Text>- With KYC/AML providers for redemption-based verification.</Text>
        <Text>- With payment processors (e.g., Paper.xyz, Stripe) for transaction processing.</Text>
        <Text>- With legal authorities when legally required (e.g., court orders, investigations).</Text>
        <Text>- With infrastructure and analytics partners under strict confidentiality terms.</Text>

        <Text><strong>5. Data Storage & Protection:</strong> We implement industry-standard security practices including encryption, access control, and routine monitoring. Personal data is retained only as long as legally or operationally necessary. KYC data is handled by regulated third parties; we do not store raw identity documents.</Text>

        <Text><strong>6. Your Rights:</strong> Depending on your jurisdiction, you may have the right to:</Text>
        <Text>- Access the personal data we hold about you.</Text>
        <Text>- Request correction or deletion of your data.</Text>
        <Text>- Object to or restrict certain forms of processing.</Text>
        <Text>- Withdraw consent at any time (where applicable).</Text>
        <Text>- File a complaint with your local data protection authority.</Text>

        <Text><strong>6.1 GDPR & UK GDPR (EEA/UK):</strong> If you are located in the European Economic Area or the United Kingdom, your data rights are protected under the General Data Protection Regulation. You have enhanced rights including data portability and the right to lodge complaints with your national data authority.</Text>

        <Text><strong>6.2 CCPA (California, USA):</strong> California residents have the right to know what personal data we collect, request its deletion, and opt-out of certain data sharing. We do not sell your data. We will not discriminate against you for exercising your rights.</Text>

        <Text><strong>6.3 PIPEDA (Canada):</strong> Canadian users are protected under the Personal Information Protection and Electronic Documents Act. You may request details on how your personal data is used and request corrections or withdrawal of consent.</Text>

        <Text><strong>6.4 LGPD (Brazil):</strong> Brazilian residents have rights under the Lei Geral de Proteção de Dados Pessoais. This includes access, rectification, deletion, portability, and opposition to data processing. Consent may be withdrawn at any time.</Text>

        <Text><strong>7. Cookies & Tracking:</strong> Our website uses cookies and other tracking technologies to enhance your browsing experience and analyze traffic. You may disable cookies via your browser settings, although certain features may be limited.</Text>

        <Text><strong>8. Third-Party Services & Links:</strong> Our platform may link to third-party services. We are not responsible for the privacy policies or content of external websites. Users should review the privacy policies of those services before submitting personal information.</Text>

        <Text><strong>9. Children's Privacy:</strong> Our services are not directed toward individuals under the age of 18. We do not knowingly collect or store personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately.</Text>

        <Text><strong>10. Changes to This Policy:</strong> We may update this Privacy Policy periodically. When we do, we will revise the “Effective Date” at the top of this page and, where appropriate, notify users via email or platform alerts.</Text>

        <Text><strong>11. Contact Us:</strong> To exercise your rights, ask questions, or request deletion of your personal data, please contact us at:{" "}
          <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link>
        </Text>
      </VStack>
    </Box>
  );
}
