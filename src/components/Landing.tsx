import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Clock, Award, Shield, ArrowRight } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card"
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="brain-icon"
            style={{ marginBottom: '24px' }}
          >
            <Brain size={120} color="#667eea" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="heading-xl"
          >
            <span className="text-gradient">Verbal Intelligence</span>
            <br />
            Assessment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ fontSize: '1.2rem', color: '#718096', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}
          >
            Discover your verbal IQ with our scientifically designed assessment based on the
            <strong style={{ color: '#667eea' }}> Wechsler Adult Intelligence Scale</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div className="icon-container icon-primary" style={{ width: '50px', height: '50px', margin: 0 }}>
                <Clock size={24} color="white" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong>15 Questions</strong>
                <p style={{ fontSize: '0.9rem', color: '#718096', margin: 0 }}>Quick & Comprehensive</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div className="icon-container icon-secondary" style={{ width: '50px', height: '50px', margin: 0 }}>
                <Award size={24} color="white" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong>Instant Results</strong>
                <p style={{ fontSize: '0.9rem', color: '#718096', margin: 0 }}>Detailed Analysis</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <div className="icon-container icon-success" style={{ width: '50px', height: '50px', margin: 0 }}>
                <Shield size={24} color="white" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong>Secure Payment</strong>
                <p style={{ fontSize: '0.9rem', color: '#718096', margin: 0 }}>Only $1.99</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '32px'
            }}
          >
            <h3 style={{ marginBottom: '16px', color: '#667eea' }}>
              <Sparkles size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              What You'll Discover
            </h3>
            <ul className="feature-list" style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
              <li>Your Verbal IQ Score</li>
              <li>Vocabulary & Comprehension Strengths</li>
              <li>Detailed Category Breakdown</li>
              <li>Personalized Recommendations</li>
              <li>Comparison with Population Norms</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <button
              className="btn btn-primary btn-large pulse"
              onClick={() => navigate('/register')}
              style={{ minWidth: '280px' }}
            >
              Start Your Assessment
              <ArrowRight size={20} />
            </button>
            <p style={{ fontSize: '0.9rem', color: '#718096' }}>
              One-time fee of <strong style={{ color: '#667eea' }}>$1.99</strong> • Results emailed to you
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
