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

        <Text><strong>1. Acceptance:</strong> By minting or purchasing a gold-access NFT offered through MBD Financials (“we”, “us”, “our”), you agree to these Terms and Conditions. These terms apply to all users of our platform and participants in NFT-based redemption or other utility features.</Text>

        <Text><strong>2. Product Scope:</strong> Each NFT is a blockchain-based digital collectible that may include access to optional utility features. These may be associated with a defined quantity of physical gold (e.g., 1g, 5g, 10g), stored and insured by Indigo Precious Metals at Le Freeport, Singapore. MBD Financials does not custody, sell, or guarantee delivery of physical gold.</Text>

        <Text><strong>3. Payment Terms:</strong> Minting is processed via Ethereum (ETH) smart contracts on supported blockchain networks. Pricing may reflect live gold market conditions, gas fees, and platform fees. All sales are final once transactions are confirmed on-chain.</Text>

        <Text><strong>4. Storage Structure:</strong> Physical gold allocations are managed by Indigo Precious Metals under their vault program. Storage is insured and valid for three (3) years. After that period, additional storage fees may apply. MBD Financials is not responsible for the storage, maintenance, or custody of the associated gold.</Text>

        <Text><strong>5. Redemption Policy:</strong> Redemption of any associated gold is optional and only available after twelve (12) months from the NFT minting date. It is contingent on successful KYC verification and approval by Indigo Precious Metals. Redemption may involve extra fees (e.g., shipping, compliance, handling) paid by the user. MBD does not guarantee redemption and does not fulfill physical delivery directly.</Text>

        <Text><strong>6. KYC & Compliance:</strong> If you choose to redeem your NFT utility, you must complete Know Your Customer (KYC) verification through third-party partners. This may include providing valid identification and proof of address. KYC data is not stored by MBD and is processed by regulated verification providers.</Text>

        <Text><strong>7. Risks & Disclaimers:</strong> NFTs issued on our platform are speculative and experimental in nature. We do not guarantee price appreciation, liquidity, utility redemption, or platform availability. Users accept the inherent risks of using blockchain-based technology, including network congestion, smart contract vulnerabilities, and regulatory uncertainty.</Text>

        <Text><strong>8. Transfer & Resale:</strong> NFTs may be transferred or resold via third-party marketplaces. Redemption rights are not guaranteed to secondary holders and require completion of KYC verification and acceptance of these Terms. MBD is not responsible for issues arising from secondary market activity.</Text>

        <Text><strong>9. Limitation of Liability:</strong> MBD Financials, its affiliates, and partners shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits, loss of data, platform downtime, failed redemptions, or technical errors, whether arising in contract, tort, or otherwise.</Text>

        <Text><strong>10. Governing Law & International Use:</strong> These Terms are governed by the laws of Singapore. Users accessing our services from outside Singapore are responsible for ensuring compliance with their local regulations. Disputes shall be resolved via arbitration or court proceedings in Singapore.</Text>

        <Text><strong>11. Amendments:</strong> We reserve the right to update these Terms at any time. Changes will be posted to our website. Continued use of our platform or NFT ownership following updates constitutes acceptance of the revised Terms.</Text>

        <Text><strong>12. No Financial or Investment Advice:</strong> The NFTs offered by MBD Financials are digital collectibles and are not securities, commodities, or investment contracts. Nothing on our platform constitutes investment, legal, or tax advice. Users are solely responsible for evaluating risks and making decisions accordingly.</Text>

        <Text><strong>13. Eligibility & Age Requirement:</strong> Our services are intended for individuals who are at least 18 years old. By using our platform, you confirm that you meet this requirement. We do not knowingly collect or process data from minors.</Text>

        <Text>
          <strong>14. Contact:</strong> For support, legal, or compliance inquiries, contact us at{" "}
          <Link href="mailto:info@mbdfinancials.com" color="purple.200" isExternal>
            info@mbdfinancials.com
          </Link>.
        </Text>
      </VStack>
    </Box>
  );
}
