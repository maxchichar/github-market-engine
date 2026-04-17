export function generateCandles(score) {
  let base = 100;
  const candles = [];

  for (let i = 0; i < 20; i++) {
    const open = base;

    const volatility = score * 2;
    const close = base + (Math.random() * volatility - volatility / 2);

    const high = Math.max(open, close) + Math.random() * 3;
    const low = Math.min(open, close) - Math.random() * 3;

    base = close;

    candles.push({
      time: Math.floor(Date.now() / 1000) - (20 - i) * 86400,
      open,
      high,
      low,
      close
    });
  }

  return candles;
}