const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());
app.use(express.json());

// استفاده از متغیر محیطی که در رندر ست کردید
const MERCHANT = process.env.ZIBAL_MERCHANT;
const PORT = process.env.PORT || 3000;

// مسیر درخواست پرداخت
app.post('/api/request', async (req, res) => {
    try {
        const { amount, description, mobile } = req.body;
        
        // استخراج عدد خالص از ورودی (حذف فاصله‌ها و حروف در صورت وجود)
        let parsedAmount = parseInt(String(amount || '').replace(/[^0-9]/g, ''), 10);

        // اگر مبلغ نامعتبر بود یا کمتر از ۱۰۰۰ تومان بود، پیش‌فرض ۵۰۰۰ تومان (۵۰,۰۰۰ ریال) در نظر بگیرد
        if (!parsedAmount || parsedAmount < 100) {
            parsedAmount = 5000; // ۵ هزار تومان
        }

        // زیبال مبلغ را به ریال می‌خواهد (تومان ضربدر ۱۰)
        const amountInRials = parsedAmount * 10;

        console.log("درخواست پرداخت جدید:", { parsedAmount, amountInRials, MERCHANT });

        const response = await fetch('https://gateway.zibal.ir/v1/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                merchant: MERCHANT,
                amount: amountInRials,
                callbackUrl: "https://mashin-online.ir/callback",
                description: description || "پرداخت ثبت آگهی در ماشین آنلاین",
                mobile: mobile || ""
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

// مسیر تایید پرداخت
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
