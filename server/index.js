const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const createTransporter = () => {
  // For production, use your actual email service credentials
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Create Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { email, name } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 199, // $1.99 in cents
      currency: 'usd',
      metadata: {
        email,
        name,
        product: 'Verbal Intelligence Test'
      },
      receipt_email: email,
      description: 'Verbal Intelligence Test Results'
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Confirm Payment and Send Results
app.post('/api/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId, userData, testResult } = req.body;

    // Verify payment status
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ error: 'Payment not completed' });
    }

    // Send results email
    await sendResultsEmail(userData, testResult);

    res.json({ success: true, message: 'Results sent successfully' });
  } catch (error) {
    console.error('Confirm Payment Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send Results Email
async function sendResultsEmail(userData, testResult) {
  const transporter = createTransporter();

  const categoryBreakdown = testResult.categoryScores
    .map(cat => `• ${cat.category}: ${cat.score}/${cat.maxScore}`)
    .join('\n');

  const strengths = testResult.strengths.map(s => `• ${s}`).join('\n');
  const recommendations = testResult.recommendations.map(r => `• ${r}`).join('\n');

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .score-box { background: white; padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .score { font-size: 48px; font-weight: bold; color: #667eea; }
        .category { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 10px 5px; }
        .offer-grid { display: grid; gap: 15px; margin: 20px 0; }
        .offer-card { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
        .discount { color: #f5576c; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🧠 Your Verbal Intelligence Results</h1>
          <p>Hello ${userData.name}!</p>
        </div>
        <div class="content">
          <div class="score-box">
            <p style="margin: 0; color: #666;">Your Verbal IQ Score</p>
            <div class="score">${testResult.verbalIQ}</div>
            <p style="margin: 0; color: #666;">Percentile: ${testResult.percentile}%</p>
          </div>

          <h2>📊 Interpretation</h2>
          <p>${testResult.interpretation}</p>

          <h2>📈 Category Breakdown</h2>
          <div class="category">
            ${testResult.categoryScores.map(cat => `
              <div style="margin: 10px 0;">
                <strong>${cat.category}</strong>: ${cat.score}/${cat.maxScore}
                <div style="background: #e2e8f0; height: 10px; border-radius: 5px; margin-top: 5px;">
                  <div style="background: linear-gradient(90deg, #667eea, #764ba2); height: 100%; width: ${(cat.score/cat.maxScore)*100}%; border-radius: 5px;"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <h2>⭐ Your Strengths</h2>
          <ul>
            ${testResult.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>

          <h2>💡 Recommendations</h2>
          <ul>
            ${testResult.recommendations.map(r => `<li>${r}</li>`).join('')}
          </ul>

          <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 30px 0;">

          <h2 style="text-align: center;">🎁 Exclusive Offers For You!</h2>
          <p style="text-align: center;">Use code <span class="discount">VERBAL70</span> for 70% off these tests:</p>

          <div class="offer-grid">
            <div class="offer-card">
              <strong>💖 Emotional Intelligence Test</strong>
              <p>Discover your EQ - <span class="discount">$1.49</span> <s>$4.99</s></p>
            </div>
            <div class="offer-card">
              <strong>🧩 Logical Reasoning Assessment</strong>
              <p>Test analytical skills - <span class="discount">$1.49</span> <s>$4.99</s></p>
            </div>
            <div class="offer-card">
              <strong>🧠 Memory & Recall Test</strong>
              <p>Evaluate memory - <span class="discount">$1.49</span> <s>$4.99</s></p>
            </div>
            <div class="offer-card">
              <strong>🌟 Multiple Intelligences Test</strong>
              <p>Complete assessment - <span class="discount">$2.99</span> <s>$9.99</s></p>
            </div>
          </div>

          <p style="text-align: center; margin-top: 30px;">
            <a href="#" class="cta-button">Explore All 20 Tests</a>
          </p>

          <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 30px 0;">

          <p style="text-align: center; color: #666; font-size: 12px;">
            Thank you for taking the Verbal Intelligence Test!<br>
            Questions? Reply to this email or contact support.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || '"Verbal IQ Tests" <noreply@verbaliq.com>',
    to: userData.email,
    subject: `🧠 Your Verbal Intelligence Results - IQ Score: ${testResult.verbalIQ}`,
    html: htmlContent,
    text: `
Verbal Intelligence Test Results
================================

Hello ${userData.name}!

Your Verbal IQ Score: ${testResult.verbalIQ}
Percentile: ${testResult.percentile}%
Raw Score: ${testResult.totalScore}/${testResult.maxScore}

INTERPRETATION
--------------
${testResult.interpretation}

CATEGORY BREAKDOWN
------------------
${categoryBreakdown}

YOUR STRENGTHS
--------------
${strengths}

RECOMMENDATIONS
---------------
${recommendations}

EXCLUSIVE OFFERS
----------------
Use code VERBAL70 for 70% off these tests:
• Emotional Intelligence Test - $1.49 (was $4.99)
• Logical Reasoning Assessment - $1.49 (was $4.99)
• Memory & Recall Test - $1.49 (was $4.99)
• Multiple Intelligences Test - $2.99 (was $9.99)

Thank you for taking the Verbal Intelligence Test!
    `
  };

  // In development, log the email instead of sending
  if (process.env.NODE_ENV === 'development' || !process.env.SMTP_USER) {
    console.log('📧 Email would be sent to:', userData.email);
    console.log('Subject:', mailOptions.subject);
    return;
  }

  await transporter.sendMail(mailOptions);
}

// Webhook for Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      break;
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.error('Payment failed:', failedPayment.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Verbal Intelligence Test API ready`);
});

module.exports = app;
