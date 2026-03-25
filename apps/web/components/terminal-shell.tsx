const orderbook = [
  ['1.0924', '142,331'], ['1.0922', '98,220'], ['1.0920', '66,104'], ['1.0918', '44,882'], ['1.0916', '20,020']
];
const bids = [
  ['1.0914', '130,850'], ['1.0912', '101,020'], ['1.0910', '88,510'], ['1.0908', '59,220'], ['1.0906', '32,199']
];

export function TerminalShell() {
  return (
    <div className="container">
      <div className="hero">
        <section className="panel card">
          <div className="row space">
            <div>
              <div className="row"><span className="badge">Lithosphere Makalu</span><span className="badge">Chain ID 700777</span></div>
              <h1 style={{ marginBottom: 8 }}>Ego Exchange Pro Terminal</h1>
              <p className="muted">Spot, perps, launchpad, meme markets, cross-chain routing, and AI-native execution in one terminal.</p>
            </div>
            <div className="row">
              <span className="badge">Permissionless</span>
              <span className="badge">Cross-chain</span>
              <span className="badge">AI Agents</span>
            </div>
          </div>
          <div className="tabs">
            <div className="tab active">Perps</div>
            <div className="tab">Spot</div>
            <div className="tab">Options</div>
            <div className="tab">Launches</div>
            <div className="tab">Meme</div>
            <div className="tab">Alpha</div>
            <div className="tab">Agents</div>
          </div>
        </section>
        <section className="panel card">
          <div className="kpi-grid">
            <div><div className="muted">24h Volume</div><div className="big">$428.2M</div></div>
            <div><div className="muted">OI</div><div className="big">$183.7M</div></div>
            <div><div className="muted">TVL</div><div className="big">$96.4M</div></div>
            <div><div className="muted">Funding</div><div className="big">0.012%</div></div>
          </div>
        </section>
      </div>

      <div className="terminal">
        <aside className="panel card">
          <div className="row space"><strong>Markets</strong><span className="muted">Cross-chain</span></div>
          {['BTC-PERP','ETH-PERP','SOL-PERP','LITHO-USD','MEME100','NEWLAUNCH'].map((m) => (
            <div key={m} className="orderbook-row"><span>{m}</span><span className="muted">Active</span></div>
          ))}
          <div style={{ marginTop: 16 }}>
            <strong>AI Watchlists</strong>
            <div className="orderbook-row"><span>Smart Money</span><span>12 wallets</span></div>
            <div className="orderbook-row"><span>Meme Momentum</span><span>34 tokens</span></div>
            <div className="orderbook-row"><span>New Launches</span><span>9 live</span></div>
          </div>
        </aside>

        <main className="grid">
          <section className="panel card">
            <div className="row space"><strong>ETH-PERP</strong><span className="muted">Mark 3,882.42 | Index 3,880.11</span></div>
            <div className="chart" />
            <div className="kpi-grid" style={{ marginTop: 12 }}>
              <div><div className="muted">24h Change</div><div>+4.12%</div></div>
              <div><div className="muted">Predicted Funding</div><div>+0.011%</div></div>
              <div><div className="muted">Basis</div><div>+0.06%</div></div>
              <div><div className="muted">Insurance</div><div>$18.4M</div></div>
            </div>
          </section>

          <section className="panel card">
            <div className="row space"><strong>Positions</strong><span className="muted">Subaccount A1</span></div>
            {[
              ['ETH-PERP','Long 5.2','+12,240'],
              ['BTC-PERP','Short 0.7','+4,118'],
              ['SOL-PERP','Long 220','-340'],
            ].map((row) => (
              <div className="position-row" key={row[0]}><span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span></div>
            ))}
          </section>
        </main>

        <aside className="grid">
          <section className="panel card">
            <div className="row space"><strong>Order Entry</strong><span className="badge">AI Copilot</span></div>
            <div className="tabs"><div className="tab active">Limit</div><div className="tab">Market</div><div className="tab">Stop</div></div>
            <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
              <select className="select"><option>Buy / Long</option><option>Sell / Short</option></select>
              <input className="input" defaultValue="3882.50" />
              <input className="input" defaultValue="2.50 ETH" />
              <select className="select"><option>Cross 10x</option><option>Isolated 5x</option><option>Portfolio Margin</option></select>
              <button className="button">Place Order</button>
            </div>
          </section>

          <section className="panel card">
            <div className="row space"><strong>Order Book</strong><span className="muted">0.1 tick</span></div>
            {orderbook.map((x) => <div className="orderbook-row" key={x[0]}><span>{x[0]}</span><span>{x[1]}</span></div>)}
            <div className="orderbook-row"><strong>1.0915</strong><strong>Spread 0.01%</strong></div>
            {bids.map((x) => <div className="orderbook-row" key={x[0]}><span>{x[0]}</span><span>{x[1]}</span></div>)}
          </section>

          <section className="panel card">
            <div className="row space"><strong>AI Alpha Feed</strong><span className="muted">Live</span></div>
            {[
              'ETH funding rising across majors; maker skew remains net short.',
              'New meme launch crossed velocity threshold; slippage risk elevated.',
              'Bridge inflows to Makalu rising; LITHO pairs showing stronger depth.',
            ].map((x) => <div className="position-row" key={x}><span>{x}</span></div>)}
          </section>
        </aside>
      </div>
    </div>
  );
}
