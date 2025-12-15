# Verbal Intelligence Tester

A beautiful, interactive Verbal Intelligence assessment application based on the Wechsler Adult Intelligence Scale (WAIS). Users can take a comprehensive verbal IQ test and receive detailed results after a one-time payment of $1.99.

## Features

- **User Registration**: Collects name, email, and phone number
- **WAIS-Based Assessment**: 15 questions covering:
  - Vocabulary
  - Comprehension
  - Similarities
  - General Information
  - Arithmetic Reasoning
- **Beautiful UI**: Colorful gradients, animations, and responsive design
- **Stripe Integration**: Secure payment processing for $1.99
- **Email Results**: Detailed results sent to user's email
- **Exclusive Offers**: 20 additional tests available at 70% discount

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Custom CSS with animations and gradients
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payments**: Stripe
- **Backend**: Express.js + Node.js
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account (for payments)
- SMTP credentials (for emails)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd verbalize
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your `.env` file with:
   - Stripe API keys
   - SMTP credentials

### Development

Run frontend only:
```bash
npm run dev
```

Run backend only:
```bash
npm run server
```

Run both concurrently:
```bash
npm run dev:all
```

### Production Build

```bash
npm run build
```

## Project Structure

```
verbalize/
├── src/
│   ├── components/
│   │   ├── Landing.tsx      # Home page with test intro
│   │   ├── Registration.tsx # User registration form
│   │   ├── Test.tsx         # Interactive test questions
│   │   ├── Payment.tsx      # Stripe payment form
│   │   ├── Results.tsx      # Test results & offers
│   │   └── Layout.tsx       # Animated background layout
│   ├── context/
│   │   └── AppContext.tsx   # Global state management
│   ├── data/
│   │   └── questions.ts     # WAIS test questions & offers
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── server/
│   └── index.js             # Express API server
├── .env.example             # Environment template
└── package.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/create-payment-intent` | Create Stripe payment intent |
| POST | `/api/confirm-payment` | Confirm payment & send results |
| POST | `/api/webhook` | Stripe webhook handler |
| GET | `/api/health` | Server health check |

## Test Categories

1. **Vocabulary**: Word definitions and meanings
2. **Comprehension**: Understanding proverbs and social situations
3. **Similarities**: Abstract categorization skills
4. **Information**: General knowledge
5. **Arithmetic**: Mathematical reasoning

## Scoring

- Raw score converted to Verbal IQ (70-130 range)
- Percentile ranking
- Category breakdown
- Personalized strengths and recommendations

## Available Test Offers (20 Tests)

1. Emotional Intelligence Test
2. Logical Reasoning Assessment
3. Memory & Recall Test
4. Spatial Intelligence Quiz
5. Creative Thinking Assessment
6. Mathematical Aptitude Test
7. Personality Type Analysis
8. Critical Thinking Challenge
9. Processing Speed Test
10. Working Memory Assessment
11. Pattern Recognition Test
12. Attention & Focus Assessment
13. Abstract Reasoning Quiz
14. Social Intelligence Test
15. Decision Making Skills Test
16. Problem Solving Assessment
17. Fluid Intelligence Test
18. Cognitive Flexibility Quiz
19. Learning Style Assessment
20. Multiple Intelligences Test

## License

MIT
