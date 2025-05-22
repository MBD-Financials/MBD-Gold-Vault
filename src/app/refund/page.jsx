"use client";

import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export default function RefundPolicyPage() {
  return (
    <Box maxW="6xl" mx="auto" py={10} px={6} color="gray.100">
      <Heading mb={6} size="xl" textAlign="center" color="purple.300">
        Refund & Returns Policy
      </Heading>

      <VStack spacing={6} align="start">
        <Text><strong>Effective Date:</strong> 05-09-2025</Text>

        <Text>All sales of NFTs made through the MBD Financials platform are final. These NFTs are digital collectibles that may offer optional utilities through third-party partnerships. Purchases are processed on-chain and cannot be reversed once completed.</Text>

        <Text><strong>1. No Refunds:</strong> Due to the irreversible nature of blockchain transactions and the unique nature of NFT minting, we do not offer refunds once an NFT is minted or transferred, except in rare cases outlined below.</Text>

        <Text><strong>2. Exceptions:</strong> Refunds may be considered at our sole discretion if:</Text>
        <Text>- A minting error occurs and the NFT is not successfully delivered.</Text>
        <Text>- A duplicate transaction is verified through our systems.</Text>
        <Text>- A critical technical fault on our end prevents the NFT from being assigned or displayed.</Text>

        <Text><strong>3. Redemption Requests:</strong> NFTs may include optional redemption features through third-party custodians (e.g., Indigo Precious Metals). Once a redemption request is submitted and approved, no refund will be possible. Redemption involves third-party compliance, identity verification, and logistical costs, which are not under our control.</Text>

        <Text><strong>4. Dispute Resolution:</strong> If you believe an error occurred during your transaction, please contact our support team within 7 days of purchase at{" "}
          <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link>. Include your wallet address and transaction hash in your message.
        </Text>

        <Text><strong>5. Chargeback Policy:</strong> Attempting a chargeback after receiving your NFT or without contacting us first may result in account restrictions and loss of access to future utilities or benefits associated with the NFT.</Text>

        <Text><strong>6. Policy Updates:</strong> We reserve the right to update or amend this Refund Policy at any time. Updates will take effect upon posting to our website and will apply to all future transactions.</Text>

        <Text><strong>Contact:</strong> For support or refund-related questions, reach us at{" "}
          <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link>.
        </Text>
      </VStack>
    </Box>
  );
}
