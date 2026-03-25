# Perps Engine Specification

## Engine responsibilities

- accept canonical signed orders
- assign sequence numbers
- match according to price-time priority
- emit deterministic receipts
- settle fills to onchain ledgers
- update funding and open interest metrics

## Price model

- index price from multi-source oracle
- mark price from fair basis model and impact-adjusted mid
- liquidation and ADL decisions use guarded oracle snapshots

## Critical parameters

- initial margin ratio
- maintenance margin ratio
- liquidation fee
- insurance fee
- max market leverage
- max notional per account
- max open interest per side
