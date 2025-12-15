export interface UserData {
  name: string;
  email: string;
  phone: string;
}

export interface TestQuestion {
  id: number;
  category: 'vocabulary' | 'comprehension' | 'similarities' | 'information' | 'arithmetic';
  question: string;
  icon: string;
  backgroundGradient: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  points: number;
}

export interface TestResult {
  totalScore: number;
  maxScore: number;
  percentile: number;
  verbalIQ: number;
  categoryScores: {
    category: string;
    score: number;
    maxScore: number;
  }[];
  interpretation: string;
  strengths: string[];
  recommendations: string[];
}

export interface TestOffer {
  id: string;
  title: string;
  description: string;
  icon: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
}

export interface PaymentIntent {
  clientSecret: string;
  paymentIntentId: string;
}
