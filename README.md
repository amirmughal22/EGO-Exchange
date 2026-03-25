# Ego Exchange

[![Docs](https://img.shields.io/badge/docs-Nextra-black)](#)
[![Frontend](https://img.shields.io/badge/frontend-Next.js-000000)](#)
[![SDK](https://img.shields.io/badge/sdk-TypeScript-3178C6)](#)
[![Network](https://img.shields.io/badge/network-Lithosphere%20Makalu-4caf50)](#)
[![EVM Chain ID](https://img.shields.io/badge/EVM%20Chain%20ID-700777-6f42c1)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#)

Ego Exchange is a permissionless, cross-chain decentralized exchange designed for the Lithosphere ecosystem. This monorepo includes a production-oriented docs site, a pro trading terminal, SDK scaffolding, smart contract specifications, AI agent architecture, tokenomics, and governance docs.

## Network Parameters

- **Network:** Lithosphere Makalu
- **EVM Chain ID:** `700777`
- **Makalu Testnet:** `700777`
- **Explorer (Testnet):** `https://makalu.litho.ai`

## What is included

- `apps/docs` — Nextra-powered documentation portal
- `apps/web` — Next.js pro trading terminal UI
- `packages/sdk` — TypeScript SDK scaffold for trading, markets, AI agents, and cross-chain routing
- `packages/contracts/specs` — smart contract specs for AMM, perps, margin, liquidation, staking, governance, and incentives
- `docs/whitepaper` — whitepaper and litepaper source docs

## Product Vision

Ego Exchange combines:

- spot markets
- perpetual futures
- cross-chain swaps
- isolated and portfolio margin
- AI copilots and autonomous agents
- meme markets and launchpad support
- alpha feeds and social signal products
- permissionless listings and liquidity creation

## Repo structure

```text
apps/
  docs/                Nextra docs portal
  web/                 Next.js trading terminal
packages/
  sdk/                 Trading + routing + AI SDK
  contracts/specs/     Protocol specifications
  config/              Shared chain + app config
docs/
  whitepaper/          Litepaper and whitepaper
```

## Quick start

```bash
pnpm install
pnpm docs:dev
pnpm web:dev
```

## Documentation map

- Architecture: `apps/docs/content/docs/architecture`
- Contracts: `apps/docs/content/docs/contracts`
- API: `apps/docs/content/docs/api`
- SDK: `apps/docs/content/docs/sdk`
- Security: `apps/docs/content/docs/security`
- Tokenomics: `apps/docs/content/docs/tokenomics`
- AI agents: `apps/docs/content/docs/ai`
- Whitepaper: `docs/whitepaper`

## Smart contract modules

- AMM Vaults and concentrated liquidity pools
- Cross-margin and isolated-margin accounts
- Perpetuals engine with oracle pricing and funding
- Matching engine / sequencer interface
- Liquidation engine and insurance fund
- Staking, fee rebates, veEGO governance, and emissions
- Launchpad and meme market primitives
- Cross-chain bridge adapter compatible design
- Lithic-oriented contract interface notes and LEP100 integration points

## Lithic integration notes

The protocol design assumes Lithic-native and Lithosphere-aware modules for:

- AI service request/response flows
- deterministic budget controls for agent execution
- bridge mint/burn adapter patterns
- privacy-preserving account linking for cross-chain identity and scoped proof flows

## Status

This repo is a production-grade foundation and specification scaffold. It includes implementation-ready docs, interface definitions, and frontend architecture. Exchange-critical components such as matching, liquidation, and custody require formal review, audits, simulation, and staged deployment before mainnet use.
