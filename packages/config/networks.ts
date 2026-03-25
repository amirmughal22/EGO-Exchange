export const lithosphereMakalu = {
  name: 'Lithosphere Makalu',
  evmChainId: 700777,
  testnetChainId: 700777,
  explorer: 'https://makalu.litho.ai',
} as const;

export const supportedChains = [
  lithosphereMakalu,
  { name: 'Ethereum', evmChainId: 1, explorer: 'https://etherscan.io' },
  { name: 'BNB Chain', evmChainId: 56, explorer: 'https://bscscan.com' },
  { name: 'Arbitrum', evmChainId: 42161, explorer: 'https://arbiscan.io' },
  { name: 'Base', evmChainId: 8453, explorer: 'https://basescan.org' },
] as const;
