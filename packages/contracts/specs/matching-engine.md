# Matching Engine Specification

## Ordering rules

- price-time priority in normal mode
- deterministic sequence assignment from canonical gateway
- signed order receipts with hash commitments
- replay protection via nonces and account sequence windows

## Degraded mode

- batch auction fallback
- widened risk limits
- cancel-only switch for affected markets

## Outputs

- order accepted
- order rejected
- partial fill
- full fill
- cancel acknowledged
- liquidation fill receipt
