"use client";

import { useEffect, useRef, useState } from "react";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Badge,
  VStack,
  Spinner,
  keyframes,
  IconButton,
  HStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute, FaTelegramPlane, FaTwitter, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MotionBox = motion(Box);
const GOLD_API_URL = "https://api.gold-api.com/price/XAU";
const SILVER_API_URL = "https://api.gold-api.com/price/XAG";
const PALLADIUM_API_URL = "https://api.gold-api.com/price/XPD";
const REFRESH_INTERVAL = 300; // seconds

const goldTiers = [
  { weight: 20, label: "20g Gold NFT", image: "/gold-20g.png" },
  { weight: 25, label: "25g Gold NFT", image: "/gold-25g.png" },
  { weight: 50, label: "50g Gold NFT", image: "/gold-50g.png" },
  { weight: 100, label: "100g Gold NFT", image: "/gold-100g.png" },
];

const pulse = keyframes`
  0% { box-shadow: 0 0 15px #ffd700; }
  50% { box-shadow: 0 0 30px #ffd700; }
  100% { box-shadow: 0 0 15px #ffd700; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
`;

export default function Home() {
  const [goldPricePerGram, setGoldPricePerGram] = useState<number | null>(null);
  const [silverPricePerGram, setSilverPricePerGram] = useState<number | null>(null);
  const [palladiumPricePerGram, setPalladiumPricePerGram] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(REFRESH_INTERVAL);

  const soundRef = useRef<HTMLAudioElement>(null);
  const bgAudioRef = useRef<HTMLAudioElement>(null);
  const clickSoundRef = useRef<HTMLAudioElement>(null);

  const cardBg = "rgba(0, 0, 0, 0.6)";
  const cardText = "purple.200";
  const hoverShadow = "0 0 40px #ffd700";

  const particlesInit = async (main: any): Promise<void> => {
    await loadFull(main);
  };

  const fetchPrices = async () => {
    try {
      const [goldRes, silverRes, palladiumRes] = await Promise.all([
        fetch(GOLD_API_URL),
        fetch(SILVER_API_URL),
        fetch(PALLADIUM_API_URL),
      ]);

      const goldData = await goldRes.json();
      const silverData = await silverRes.json();
      const palladiumData = await palladiumRes.json();

      if (goldData && goldData.price) {
        setGoldPricePerGram(Number(goldData.price) / 31.1035);
      } else {
        setGoldPricePerGram(null);
      }

      if (silverData && silverData.price) {
        setSilverPricePerGram(Number(silverData.price) / 31.1035);
      } else {
        setSilverPricePerGram(null);
      }

      if (palladiumData && palladiumData.price) {
        setPalladiumPricePerGram(Number(palladiumData.price) / 31.1035);
      } else {
        setPalladiumPricePerGram(null);
      }

      setLastUpdated(new Date().toLocaleString());

      if (soundRef.current && !isMuted) {
        soundRef.current.play().catch(() => console.warn("Autoplay blocked or error"));
      }
    } catch (err) {
      console.error("Failed to fetch prices", err);
      setGoldPricePerGram(null);
      setSilverPricePerGram(null);
      setPalladiumPricePerGram(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();

    const priceInterval = setInterval(() => {
      fetchPrices();
      setSecondsRemaining(REFRESH_INTERVAL);
    }, REFRESH_INTERVAL * 1000);

    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (bgAudioRef.current) {
      bgAudioRef.current.loop = true;
      bgAudioRef.current.volume = 0.2;
      if (!isMuted) {
        bgAudioRef.current.play().catch(() => {});
      }
    }

    return () => {
      clearInterval(priceInterval);
      clearInterval(countdownInterval);
    };
  }, [isMuted]);

  const handleMuteToggle = () => {
    setIsMuted((prev) => {
      const newMute = !prev;
      if (bgAudioRef.current) {
        if (newMute) {
          bgAudioRef.current.pause();
        } else {
          bgAudioRef.current.play().catch(() => {});
        }
      }
      return newMute;
    });
  };

  const handleClickSound = () => {
    if (clickSoundRef.current && !isMuted) {
      clickSoundRef.current.play().catch(() => {});
    }
  };

  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="black">
      <audio ref={soundRef} src="/sounds/coin-shime.mp3" preload="auto" />
      <audio ref={bgAudioRef} src="/sounds/ambient-loop.mp3" preload="auto" />
      <audio ref={clickSoundRef} src="/sounds/click.mp3" preload="auto" />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -2 },
          particles: {
            number: { value: 60 },
            color: { value: "#9f7aea" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.8 },
          },
        }}
      />

      <Container maxW="7xl" py="10" position="relative" zIndex="10">
        <Box textAlign="right" mb="4">
          <IconButton
            icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            aria-label="Toggle Sound"
            onClick={handleMuteToggle}
            size="lg"
            colorScheme="purple"
            variant="ghost"
            _hover={{ boxShadow: "0 0 20px #9f7aea" }}
            animation={`${pulse} 2s infinite`}
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb="12">
          {[ 
            { name: "Gold", price: goldPricePerGram, color: "yellow.300", shadow: "#ffd700" },
            { name: "Silver", price: silverPricePerGram, color: "gray.200", shadow: "#c0c0c0" },
            { name: "Palladium", price: palladiumPricePerGram, color: "gray.300", shadow: "#aaa" },
          ].map((metal) => (
            <Box key={metal.name} bg="rgba(255, 255, 255, 0.1)" p="4" borderRadius="xl" boxShadow="0 0 30px #9f7aea" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.2)">
              <Heading as="h2" size="md" color="purple.300" mb="1" textShadow="0 0 10px #9f7aea">{metal.name} Price (USD / gram)</Heading>
              {loading ? (
                <Spinner color="purple.200" />
              ) : metal.price ? (
                <>
                  <Text fontSize="2xl" fontWeight="bold" color={metal.color} textShadow={`0 0 15px ${metal.shadow}`}>${(metal.price * 1.2).toFixed(2)} / g</Text>
                  <Text fontSize="xs" color="gray.400" mt="1">Next update in: {secondsRemaining}s</Text>
                </>
              ) : (
                <Text fontSize="md" color="red.400">Unable to fetch.</Text>
              )}
              {lastUpdated && (
                <Text fontSize="xs" color="gray.400" mt="1">Last updated: {lastUpdated}</Text>
              )}
            </Box>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={[1, 2, 3, 4]} spacing="8" mb="12">
          {goldTiers.map((tier, index) => {
            const priceWithTopup = goldPricePerGram ? goldPricePerGram * tier.weight * 1.2 : null;
            return (
              <MotionBox
                key={tier.weight}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                borderWidth="2px"
                borderRadius="2xl"
                overflow="hidden"
                bg={cardBg}
                borderColor="#ffd700"
                animation={`${pulse} 2s infinite`}
                boxShadow="0 10px 40px rgba(0, 0, 0, 0.8)"
                _hover={{ boxShadow: hoverShadow, transform: "scale(1.05)" }}
              >
                <Image src={tier.image} alt={tier.label} h="220px" w="100%" objectFit="cover" borderTopRadius="2xl" />
                <Box p="4">
                  <VStack spacing="2">
                    <Text fontSize="lg" fontWeight="bold" color="yellow.300" textAlign="center" textShadow="0 0 10px #ffd700">{tier.label}</Text>
                    {priceWithTopup ? (
                      <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center" textShadow="0 0 10px #ffd700">${priceWithTopup.toFixed(2)}</Text>
                    ) : (
                      <Text fontSize="md" color="gray.300" textAlign="center">Loading...</Text>
                    )}
                    <Button colorScheme="gray" variant="solid" size="sm" isDisabled>
                      Mint
                    </Button>
                    <Text fontSize="xs" color="gray.400">Coming soon</Text>
                  </VStack>
                </Box>
              </MotionBox>
            );
          })}
        </SimpleGrid>

        <Heading as="h1" size="2xl" textAlign="center" mb="8" fontWeight="extrabold" color="purple.300" textShadow="0 0 20px #9f7aea" animation={`${glitch} 1s infinite`}>Gold-Themed NFT Collections</Heading>

        {NFT_CONTRACTS && NFT_CONTRACTS.length > 0 ? (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="8">
            {NFT_CONTRACTS.map((item, index) => (
              <Link key={item.address} href={`/collection/${item.chain.id.toString()}/${item.address}`} _hover={{ textDecoration: "none" }}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  borderWidth="1px"
                  borderRadius="2xl"
                  overflow="hidden"
                  bg={cardBg}
                  boxShadow="0 10px 40px rgba(0, 0, 0, 0.7)"
                  cursor="pointer"
                  onClick={handleClickSound}
                  onMouseEnter={handleClickSound}
                  _hover={{ boxShadow: hoverShadow, transform: "scale(1.05)" }}
                >
                  <Image src={item.thumbnailUrl} alt={item.title} h="220px" w="100%" objectFit="cover" borderTopRadius="2xl" />
                  <Box p="4">
                    <VStack spacing="1">
                      <Text fontSize="lg" fontWeight="bold" color={cardText} textAlign="center">{item.title}</Text>
                      <Badge colorScheme="purple" fontSize="0.8em" px="2" py="1" borderRadius="md">Chain: {item.chain.name}</Badge>
                    </VStack>
                  </Box>
                </MotionBox>
              </Link>
            ))}
          </SimpleGrid>
        ) : (
          <Text color="gray.400" textAlign="center">No collections available.</Text>
        )}
      </Container>

      <Box bg="rgba(0,0,0,0.8)" py="6" textAlign="center">
  <HStack spacing="6" justify="center" mb="2">
    <a href="https://t.me/MBDFinancials" target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane size={24} color="#9f7aea" />
    </a>
    <a href="https://x.com/MBDFinancials" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={24} color="#9f7aea" />
    </a>
    <a href="mailto:info@mbdfinancials.com">
      <FaEnvelope size={24} color="#9f7aea" />
    </a>
  </HStack>

  {/* NEW: Add policy links above the copyright */}
  <HStack spacing="4" justify="center" mb="1">
    <a href="/terms" style={{ color: "#9f7aea", textDecoration: "underline" }}>Terms & Conditions</a>
    <a href="/privacy" style={{ color: "#9f7aea", textDecoration: "underline" }}>Privacy Policy</a>
    <a href="/refund" style={{ color: "#9f7aea", textDecoration: "underline" }}>Refund Policy</a>
  </HStack>
<Text fontSize="xs" color="gray.400" mt="8" textAlign="center">
  Disclaimer: These NFTs are digital collectibles with optional third-party utility features. They do not represent ownership of physical gold or any financial instrument. Redemption and benefits are subject to KYC and external approval.
</Text>
  <Text fontSize="sm" color="gray.400">
    © {new Date().getFullYear()} MBD Financials. All rights reserved.
  </Text>
</Box>
    </Box>
  );
}