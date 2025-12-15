import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  Target,
  Lightbulb,
  Star,
  ShoppingCart,
  RefreshCw,
  Mail
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { testOffers } from '../data/questions';

export default function Results() {
  const navigate = useNavigate();
  const { userData, testResult, paymentComplete, resetTest } = useApp();

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    } else if (!paymentComplete || !testResult) {
      navigate('/payment');
    }
  }, [userData, paymentComplete, testResult, navigate]);

  if (!userData || !testResult) return null;

  const getScoreColor = (iq: number) => {
    if (iq >= 120) return 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
    if (iq >= 100) return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    if (iq >= 90) return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
  };

  const handleRetakeTest = () => {
    resetTest();
    navigate('/');
  };

  return (
    <div className="page-container" style={{ padding: '20px' }}>
      <div className="container">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
          style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Brain size={60} color="#667eea" style={{ marginBottom: '16px' }} />
          </motion.div>

          <h1 className="heading-lg">
            <span className="text-gradient">Your Results, {userData.name.split(' ')[0]}!</span>
          </h1>

          <p style={{ color: '#718096', marginBottom: '32px' }}>
            Here's your comprehensive Verbal Intelligence assessment
          </p>

          {/* Score Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="score-circle"
            style={{ background: getScoreColor(testResult.verbalIQ) }}
          >
            <span className="score-value">{testResult.verbalIQ}</span>
            <span className="score-label">Verbal IQ</span>
          </motion.div>

          {/* Interpretation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '32px'
            }}
          >
            <h3 style={{ color: '#667eea', marginBottom: '12px' }}>
              <Star size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Interpretation
            </h3>
            <p style={{ color: '#4a5568', fontSize: '1.05rem' }}>
              {testResult.interpretation}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>
                {testResult.totalScore}/{testResult.maxScore}
              </div>
              <div style={{ color: '#718096', fontSize: '0.9rem' }}>Raw Score</div>
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#48bb78' }}>
                {testResult.percentile}%
              </div>
              <div style={{ color: '#718096', fontSize: '0.9rem' }}>Percentile</div>
            </div>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>
              <TrendingUp size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Category Breakdown
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {testResult.categoryScores.map((cat, index) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <span style={{ minWidth: '120px', textAlign: 'left', fontWeight: '500' }}>
                    {cat.category}
                  </span>
                  <div style={{
                    flex: 1,
                    height: '12px',
                    background: '#e2e8f0',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(cat.score / cat.maxScore) * 100}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #667eea, #764ba2)',
                        borderRadius: '6px'
                      }}
                    />
                  </div>
                  <span style={{ minWidth: '50px', fontWeight: '600', color: '#667eea' }}>
                    {cat.score}/{cat.maxScore}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Strengths & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}
        >
          {/* Strengths */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ color: '#48bb78', marginBottom: '16px' }}>
              <Target size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Your Strengths
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {testResult.strengths.map((strength, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: index < testResult.strengths.length - 1 ? '1px solid #e2e8f0' : 'none'
                }}>
                  <Star size={16} color="#48bb78" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ color: '#667eea', marginBottom: '16px' }}>
              <Lightbulb size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Recommendations
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {testResult.recommendations.map((rec, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: index < testResult.recommendations.length - 1 ? '1px solid #e2e8f0' : 'none'
                }}>
                  <Lightbulb size={16} color="#667eea" style={{ marginTop: '2px', flexShrink: 0 }} />
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Email Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="card"
          style={{
            maxWidth: '800px',
            margin: '0 auto 40px',
            padding: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))'
          }}
        >
          <Mail size={24} color="#667eea" style={{ marginBottom: '8px' }} />
          <p style={{ margin: 0 }}>
            A detailed copy of these results has been sent to <strong>{userData.email}</strong>
          </p>
        </motion.div>

        {/* Special Offers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="heading-lg">
              <span className="text-gradient-rainbow">Special Offers Just For You!</span>
            </h2>
            <p style={{ color: '#718096', maxWidth: '600px', margin: '0 auto' }}>
              Explore more about your cognitive abilities with our exclusive tests.
              Use code <strong style={{ color: '#f5576c' }}>VERBAL70</strong> for 70% off!
            </p>
          </div>

          <div className="offers-grid">
            {testOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.05 }}
                className="offer-card"
              >
                <div className="discount-badge">{offer.discount}% OFF</div>
                <div className="offer-icon">{offer.icon}</div>
                <h4 style={{ marginBottom: '8px', color: '#2d3748' }}>{offer.title}</h4>
                <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '16px' }}>
                  {offer.description}
                </p>
                <div style={{ marginBottom: '16px' }}>
                  <span className="original-price">${offer.originalPrice.toFixed(2)}</span>
                  <span className="sale-price">${offer.salePrice.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Retake Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ textAlign: 'center', marginTop: '48px', marginBottom: '32px' }}
        >
          <button
            className="btn btn-secondary"
            onClick={handleRetakeTest}
          >
            <RefreshCw size={18} />
            Take Another Test
          </button>
        </motion.div>
      </div>
    </div>
  );
}
