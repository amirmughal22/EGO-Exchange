export type ChainConfig = {
  name: string;
  evmChainId: number;
  rpcUrl?: string;
  explorer?: string;
};

export type OrderRequest = {
  market: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'stop' | 'take-profit';
  price?: string;
  size: string;
  leverage?: number;
  reduceOnly?: boolean;
};

export class EgoClient {
  constructor(private readonly config: { apiUrl: string; chain: ChainConfig }) {}

  async connectWallet() {
    return { connected: true, chainId: this.config.chain.evmChainId };
  }

  async getMarkets() {
    return fetch(`${this.config.apiUrl}/markets`).then((r) => r.json());
  }

  async placeOrder(order: OrderRequest) {
    return fetch(`${this.config.apiUrl}/orders`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(order),
    }).then((r) => r.json());
  }

  async runAgent(input: { strategy: string; maxCost: string; allowedMarkets: string[] }) {
    return fetch(`${this.config.apiUrl}/ai/agents/run`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
    }).then((r) => r.json());
  }
}
