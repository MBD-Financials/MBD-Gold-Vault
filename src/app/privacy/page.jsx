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

        <Text>MBD Financials ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our gold-backed NFT platform.</Text>

        <Text><strong>1. Information We Collect:</strong></Text>
        <Text>- Personal Identification Information: Name, email address, wallet address, government-issued ID, proof of address (for KYC).</Text>
        <Text>- Transactional Data: NFT purchases, payment confirmations, token holdings.</Text>
        <Text>- Technical Data: IP address, browser type, device information, referral URLs.</Text>

        <Text><strong>2. How We Use Your Information:</strong></Text>
        <Text>- To verify identity and meet KYC/AML compliance requirements.</Text>
        <Text>- To fulfill your NFT purchase and initiate redemption processing.</Text>
        <Text>- To send important updates, transaction alerts, and customer support communication.</Text>
        <Text>- To improve our services, prevent fraud, and ensure platform security.</Text>

        <Text><strong>3. How We Share Your Information:</strong></Text>
        <Text>- With our KYC/AML partners (e.g., identity verification providers) strictly for compliance.</Text>
        <Text>- With payment processors (e.g., Stripe, Paper.xyz) for transaction completion.</Text>
        <Text>- With legal authorities when required by law or court order.</Text>

        <Text><strong>4. Data Storage & Protection:</strong> We use encryption and secured storage to protect personal data. Only authorized personnel have access to sensitive user information. We retain data as long as required for legal, business, or security purposes.</Text>

        <Text><strong>5. Your Rights:</strong> Depending on your jurisdiction, you may have the right to:</Text>
        <Text>- Access the personal data we hold about you.</Text>
        <Text>- Request correction or deletion of your data.</Text>
        <Text>- Withdraw consent or object to data processing.</Text>
        <Text>- Lodge a complaint with a data protection authority.</Text>

        <Text><strong>6. Cookies & Tracking:</strong> We may use cookies or similar tracking technologies to enhance user experience and analyze site usage. You can manage cookie preferences in your browser settings.</Text>

        <Text><strong>7. Third-Party Links:</strong> Our site may contain links to third-party services. We are not responsible for the privacy practices of those sites.</Text>

        <Text><strong>8. Changes to This Policy:</strong> We reserve the right to update this Privacy Policy at any time. Material changes will be communicated via email or on our website.</Text>

        <Text><strong>9. Contact:</strong> For questions or data-related requests, contact us at: <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link></Text>
      </VStack>
    </Box>
  );
}