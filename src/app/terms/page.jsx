"use client";
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export default function TermsPage() {
  return (
    <Box maxW="6xl" mx="auto" py={10} px={6} color="gray.100">
      <Heading mb={6} size="xl" textAlign="center" color="purple.300">
        Terms & Conditions
      </Heading>

      <VStack spacing={6} align="start">
        <Text><strong>Effective Date:</strong> 05-09-2025</Text>

        <Text><strong>1. Introduction & Acceptance:</strong> By purchasing a gold-backed NFT issued by MBD Financials ("we," "us," or "our"), you ("you," "your," or "purchaser") acknowledge that you have read, understood, and agreed to these Terms and Conditions. These terms constitute a binding agreement between you and MBD Financials.</Text>

        <Text><strong>2. Product Description:</strong> Each NFT represents a digitally verifiable claim to a specific weight of physical gold (1 gram, 5 grams, or 10 grams), securely stored in an Allocated Metal Account managed by Indigo Precious Metals at Le Freeport, Singapore. These NFTs are minted on the blockchain and are tied to the physical gold until redeemed.</Text>

        <Text><strong>3. Payment Terms:</strong> All purchases must be made in Ethereum (ETH) through the official MBD minting platform. Pricing will be dynamic and determined by the current spot price of gold plus any applicable minting and service fees. Once an NFT is minted and issued, the transaction is final and non-refundable.</Text>

        <Text><strong>4. Storage Terms:</strong> Each gold-backed NFT includes three (3) years of secure, insured storage of the corresponding physical gold, held at Le Freeport, Singapore. After this initial period, holders may be subject to storage fees. You will receive prior notice of any applicable storage fees.</Text>

        <Text><strong>5. Redemption Terms:</strong> Redemption of physical gold is permitted after twelve (12) months from the NFT's minting date. Redemption is only available through our official platform and is subject to successful Know Your Customer (KYC) verification. Applicable fees, including but not limited to transportation, handling, and insurance, must be paid by the NFT holder at the time of redemption. MBD reserves the right to reject redemption requests if the holder fails KYC verification or if other regulatory or compliance issues arise.</Text>

        <Text><strong>6. KYC & Compliance:</strong> To redeem your NFT for physical gold, you must complete KYC verification. Required documentation may include but is not limited to, a government-issued ID, proof of address, and other legally required information. Your personal data will be processed and stored in accordance with applicable data protection laws.</Text>

        <Text><strong>7. Risk Disclosure:</strong> Ownership of gold-backed NFTs carries inherent risks, including market volatility, regulatory changes, blockchain-specific risks (such as smart contract vulnerabilities), and potential loss of digital assets. We do not guarantee liquidity or resale value. By participating, you acknowledge these risks.</Text>

        <Text><strong>8. Transfer & Secondary Market:</strong> Gold-backed NFTs may be transferred or resold via secondary markets. However, physical gold redemption rights only apply to the verified owner who completes KYC. Secondary holders must agree to these Terms and Conditions to redeem the NFT for gold.</Text>

        <Text><strong>9. Limitation of Liability:</strong> MBD Financials and its partners are not liable for any indirect, incidental, special, or consequential damages arising from your purchase, storage, transfer, or redemption of gold-backed NFTs. We disclaim all liability for delays or disruptions caused by blockchain networks, smart contract failures, or force majeure events.</Text>

        <Text><strong>10. Governing Law & Dispute Resolution:</strong> These Terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising from or relating to these Terms shall be resolved through binding arbitration or courts located in Singapore.</Text>

        <Text><strong>11. Amendments:</strong> MBD Financials reserves the right to update or modify these Terms at any time. Continued use or holding of the NFT after such changes constitutes acceptance of the new Terms.</Text>

        <Text>
          <strong>Contact:</strong> For inquiries, support, or KYC guidance, please contact our official support team at{" "}
          <Link href="mailto:info@mbdfinancials.com" color="purple.200" isExternal>
            info@mbdfinancials.com
          </Link>.
        </Text>
      </VStack>
    </Box>
  );
}