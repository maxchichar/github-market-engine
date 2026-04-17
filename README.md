# 📊 GitHub Market Engine (GSX Core)

A developer activity-to-financial-market simulation engine that transforms GitHub behavior signals into structured candlestick market data.

This project is the core data layer of the **GitHub Stock Exchange (GSX)** system.

---

## ⚡ Concept

Traditional markets price companies.

This system prices **developers**.

It converts GitHub activity signals into market behavior:

- Commits → buying pressure
- Pull Requests → momentum strength
- Inactivity → market decay
- Activity bursts → volatility spikes

---

## What This Engine Does

The engine transforms raw GitHub data into:

### 1. Activity Score
Weighted behavioral metric:
- PushEvents (commits)
- PullRequestEvents
- optional extensions (Issues, Reviews, Stars)

---

### 2. Market Simulation Layer

Activity score is converted into:

- Open
- High
- Low
- Close

(simulated OHLC candles)

This allows developer behavior to be visualized like a financial asset.

---

### 3. API Output

The system exposes structured market data:

```

GET /candles/:user

````

### Response:
```json
{
  "user": "example-user",
  "score": 42,
  "candles": [
    {
      "time": 1710000000,
      "open": 100,
      "high": 110,
      "low": 95,
      "close": 105
    }
  ]
}
````

---

## ⚙️ Architecture

```
GitHub Events API
        ↓
Activity Scoring Engine
        ↓
Market Volatility Model
        ↓
OHLC Candle Generator
        ↓
REST API Output
```

---

## Tech Stack

* Node.js (ESM)
* Express.js
* node-fetch
* CORS middleware

---

## 📡 API Endpoints

### Get Developer Market Data

```
GET /candles/:username
```

Returns:

* activity score
* simulated candlestick series

---

## 📈 Market Model

### Scoring Formula

```
score = (commits × 2) + (pull_requests × 5)
```

### Volatility Model

* Higher score → higher price volatility
* Lower score → stable/flat market
* Activity spikes → bullish candles
* inactivity → bearish drift

---

## 🧪 Example Usage

```bash
node server.js
```

Then:

```
http://localhost:3000/candles/maxchichar
```

---

## Vision

This engine is the foundation of a new category:

> **Behavioral Finance for Developers**

Future expansions:

* multi-user stock exchange
* ranking markets
* developer ETFs
* skill-based liquidity systems

---

## Disclaimer

This is a simulation system.

No real financial instruments are involved.

It is designed for:

* visualization
* experimentation
* reputation modeling

---

## Future Upgrades

Planned features:

* WebSocket live updates
* Redis market caching
* multi-developer comparison index
* AI-based volatility prediction
* ranking-based liquidity system

---

## Author

MAXCHICHAR — building the GitHub Stock Exchange system.

---

## Related Project

Frontend Terminal:

```
github-market-terminal
```

---

## ⚡ Status

MVP Stage → Active Development
