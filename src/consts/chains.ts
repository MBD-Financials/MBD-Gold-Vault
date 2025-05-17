import { defineChain } from "thirdweb";

/**
 * All chains should be exported from this file
 */
export { avalancheFuji, sepolia, polygonAmoy, ethereum,  } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`
 */
export const holesky = defineChain(17000);
