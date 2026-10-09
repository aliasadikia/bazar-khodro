const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // اگر با خطا مواجه شدید، این کتابخانه را نصب کنید
const app = express();

app.use(cors());
app.use(express.json());

// استفاده از متغیر محیطی که در رندر ست کردید
const MERCHANT = process.env.ZIBAL_MERCHANT;
const PORT = process.env.PORT || 3000;

app.post('/request', async (req, res) => {
    try {
        const { amount, description, mobile } = req.body;
        
        // نکته مهم: زیبال مبلغ را به ریال می‌خواهد (مبلغ * 10)
        const amountInRials = amount * 10;

        console.log("درخواست پرداخت جدید:", { amountInRials, MERCHANT });

        const response = await fetch('https://gateway.zibal.ir/v1/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                merchant: MERCHANT,
                amount: amountInRials,
                callbackUrl: "https://mashin-online.ir/callback",
                description: description || "پرداخت آگهی",
                mobile: mobile
            })
        });

        const data = await response.json();
        console.log("پاسخ زیبال:", data);
        res.json(data);

    } catch (error) {
        console.error("خطای سیستمی درگاه:", error);
        res.status(500).json({ message: "خطای داخلی سرور: " + error.message });
    }
});

app.post('/api/verify', async (req, res) => {
    try {
        const { trackId } = req.body;
        const response = await fetch('https://gateway.zibal.ir/v1/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                merchant: MERCHANT,
                trackId: trackId
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("خطای تایید پرداخت:", error);
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
