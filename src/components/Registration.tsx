import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Registration() {
  const navigate = useNavigate();
  const { setUserData } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(formData);
      navigate('/test');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card"
          style={{ maxWidth: '500px', margin: '0 auto' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <div
              className="icon-container icon-primary"
              style={{ marginBottom: '16px' }}
            >
              <User size={40} color="white" />
            </div>
            <h1 className="heading-md" style={{ marginBottom: '8px' }}>
              <span className="text-gradient">Let's Get Started</span>
            </h1>
            <p style={{ color: '#718096' }}>
              Enter your details to begin the assessment
            </p>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="form-group"
            >
              <label className="form-label">
                <User size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {errors.name && (
                <p style={{ color: '#f5576c', fontSize: '0.9rem', marginTop: '8px' }}>
                  {errors.name}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="form-group"
            >
              <label className="form-label">
                <Mail size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email address"
                autoComplete="email"
              />
              {errors.email && (
                <p style={{ color: '#f5576c', fontSize: '0.9rem', marginTop: '8px' }}>
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="form-group"
            >
              <label className="form-label">
                <Phone size={16} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
              {errors.phone && (
                <p style={{ color: '#f5576c', fontSize: '0.9rem', marginTop: '8px' }}>
                  {errors.phone}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
                fontSize: '0.9rem',
                color: '#4a5568'
              }}
            >
              <strong>Your privacy matters!</strong>
              <p style={{ margin: '8px 0 0 0' }}>
                Your information is encrypted and secure. Results will be sent to your email.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="test-nav"
              style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/')}
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                Begin Test
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
