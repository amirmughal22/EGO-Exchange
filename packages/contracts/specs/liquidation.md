# Liquidation Specification

## Goals

- restore solvency with minimum user harm
- prioritize partial liquidation
- preserve market integrity
- minimize bad debt

## Sequence

1. freeze new risk-increasing actions
2. quote partial liquidation tranches
3. transfer position slices to liquidators
4. realize penalties and fees
5. draw from insurance fund when needed
6. trigger ADL only if insurance is exhausted
