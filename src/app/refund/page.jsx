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

        <Text>All sales of gold-backed NFTs made through the MBD Financials platform are final.</Text>

        <Text><strong>1. No Refunds:</strong> Due to the nature of blockchain transactions and the linkage to real-world assets, we do not offer refunds after purchase unless legally required.</Text>

        <Text><strong>2. Exceptions:</strong> We may, at our sole discretion, consider a refund in the following cases:</Text>
        <Text>- The minting process fails and no NFT is delivered.</Text>
        <Text>- A duplicate transaction is confirmed on our end.</Text>
        <Text>- There is a critical technical error on our platform that prevents delivery.</Text>

        <Text><strong>3. Redemption-Related Refunds:</strong> Once redemption of the NFT for physical gold has been initiated, no refund is possible. Redemption involves costs (KYC, handling, shipping) that are irreversible.</Text>

        <Text><strong>4. Disputes:</strong> If you believe an error occurred during your transaction, please contact us within 7 days at <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link>. Provide full details including wallet address and transaction hash.</Text>

        <Text><strong>5. Chargebacks:</strong> Initiating a chargeback after receiving the NFT or without contacting us may result in account suspension and forfeiture of future access.</Text>

        <Text><strong>6. Policy Changes:</strong> We reserve the right to modify this Refund Policy at any time. Changes will be posted on our website and take effect immediately.</Text>

        <Text><strong>Contact:</strong> For refund-related inquiries, contact: <Link href="mailto:info@mbdfinancials.com" color="purple.200">info@mbdfinancials.com</Link></Text>
      </VStack>
    </Box>
  );
}