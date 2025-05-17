import type { Chain } from "thirdweb";
import { ethereum, holesky } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x1E9ba23F95951addB0C1e2a6f397439cCbDAa204",
    chain: holesky,

  },
  {
    address: "0xE73155b4F344460c5477A93c648dC433F8BD186e",
    chain: ethereum,

  },
];
