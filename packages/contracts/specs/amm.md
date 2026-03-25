# AMM Specification

## Objective

Provide spot liquidity for majors, long-tail assets, stable pairs, and launch markets.

## Contract set

- PoolFactory
- PoolRegistry
- CLPool
- StablePool
- LaunchPool
- FeeController
- OracleGuard

## Invariants

- No swap execution when oracle divergence exceeds guardrail
- Fee growth is monotonic per position
- Protocol fee and LP fee are separately accounted
- Fee tier is immutable per pool class, mutable per governance-approved market profile only if declared upgradeable

## Listing policy

Permissionless pool creation is supported, but UI promotion and margin eligibility are separate governance-controlled states.
