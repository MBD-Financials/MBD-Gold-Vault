import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, holesky, ethereum } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x16ad84f3321b3087c524A6F4477798B5eEC4EA89",
    chain: ethereum,
    title: "Gold-backed NFTs 1 Gram",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmZK9kdsHBW8BsSJBTntXgadK43uXgTkt9tq8xXoq9YWeF/0.png",
    type: "ERC1155",
  },
  {
    address: "0x16ad84f3321b3087c524A6F4477798B5eEC4EA89",
    chain: ethereum,
    title: "Gold-backed NFTs 5 Gram",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmZK9kdsHBW8BsSJBTntXgadK43uXgTkt9tq8xXoq9YWeF/0.png",
    type: "ERC1155",
  },
  {
    address: "0x16ad84f3321b3087c524A6F4477798B5eEC4EA89",
    chain: ethereum,
    title: "Gold-backed NFTs 10 Gram",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmZK9kdsHBW8BsSJBTntXgadK43uXgTkt9tq8xXoq9YWeF/0.png",
    type: "ERC1155",
  },
  {
    address: "0x16ad84f3321b3087c524A6F4477798B5eEC4EA89",
    chain: ethereum,
    title: "Gold-backed NFTs 15 Gram",
    thumbnailUrl:
      "https://ipfs.io/ipfs/QmZK9kdsHBW8BsSJBTntXgadK43uXgTkt9tq8xXoq9YWeF/0.png",
    type: "ERC1155",
  },
];
