import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { CreditCard, Lock, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

// Use test publishable key - replace with your actual key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      fontFamily: '"Poppins", sans-serif',
      color: '#2d3748',
      '::placeholder': {
        color: '#a0aec0'
      }
    },
    invalid: {
      color: '#f5576c',
      iconColor: '#f5576c'
    }
  }
};

function CheckoutForm() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { userData, setPaymentComplete, calculateResults } = useApp();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    }
  }, [userData, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In production, you would call your backend to create a PaymentIntent
      // For demo purposes, we'll simulate a successful payment
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: userData?.name,
          email: userData?.email
        }
      });

      if (pmError) {
        throw new Error(pmError.message);
      }

      // In production: Send paymentMethod.id to your server to complete the payment
      // For demo, we simulate success after validating card details
      console.log('Payment method created:', paymentMethod.id);

      // Simulate API call to process payment
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Calculate results and mark payment as complete
      calculateResults();
      setPaymentComplete(true);

      // Navigate to results
      navigate('/results');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="error-message"
        >
          {error}
        </motion.div>
      )}

      <div className="form-group">
        <label className="form-label">
          <CreditCard size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Card Details
        </label>
        <div className="stripe-element">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          padding: '16px',
          background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
          borderRadius: '12px'
        }}
      >
        <Lock size={20} color="#4facfe" />
        <span style={{ fontSize: '0.9rem', color: '#4a5568' }}>
          Your payment is secured with 256-bit SSL encryption
        </span>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate('/test')}
          disabled={loading}
          style={{ flex: 1 }}
        >
          <ArrowLeft size={18} />
          Back to Test
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!stripe || loading}
          style={{ flex: 2 }}
        >
          {loading ? (
            <>
              <span className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2px' }} />
              Processing...
            </>
          ) : (
            <>
              Pay $1.99
              <Lock size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function Payment() {
  const navigate = useNavigate();
  const { userData, testComplete } = useApp();

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    } else if (!testComplete) {
      navigate('/test');
    }
  }, [userData, testComplete, navigate]);

  if (!userData || !testComplete) return null;

  return (
    <div className="page-container">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="payment-card"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{ textAlign: 'center', marginBottom: '24px' }}
          >
            <div className="completion-badge">
              <CheckCircle size={20} />
              Test Complete!
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="price-display"
          >
            <div className="price-tag">$1.99</div>
            <p className="price-subtitle">One-time payment for your results</p>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <h4 style={{ marginBottom: '12px', color: '#2d3748' }}>Your results include:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Your Verbal IQ Score',
                'Detailed Category Analysis',
                'Personalized Recommendations',
                'Exclusive Discount Offers'
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 0',
                    color: '#4a5568'
                  }}
                >
                  <CheckCircle size={16} color="#48bb78" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Email Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              borderRadius: '12px'
            }}
          >
            <Mail size={24} color="#667eea" />
            <div>
              <strong style={{ display: 'block', marginBottom: '4px' }}>
                Results sent to:
              </strong>
              <span style={{ color: '#667eea' }}>{userData.email}</span>
            </div>
          </motion.div>

          {/* Stripe Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
