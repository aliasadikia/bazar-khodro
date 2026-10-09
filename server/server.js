const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const MERCHANT = process.env.ZIBAL_MERCHANT; // در Render تنظیم می‌کنیم
const CALLBACK_URL = process.env.CALLBACK_URL; // آدرس بازگشت به سایت

// مرحله ۱: درخواست پرداخت
app.post('/api/request', async (req, res) => {
  try {
    const { amount, description, mobile } = req.body;
    const r = await fetch('https://gateway.zibal.ir/v1/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merchant: MERCHANT,
        amount: amount, // به تومان
        description: description || 'پرداخت',
        callbackUrl: CALLBACK_URL,
        mobile: mobile || undefined
      })
    });
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'request failed' });
  }
});

// مرحله ۲: تأیید پرداخت
app.post('/api/verify', async (req, res) => {
  try {
    const { trackId } = req.body;
    const r = await fetch('https://gateway.zibal.ir/v1/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ merchant: MERCHANT, trackId })
    });
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'verify failed' });
  }
});

app.listen(process.env.PORT || 3000, () => console.log('Server is running'));

