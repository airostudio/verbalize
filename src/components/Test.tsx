import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { testQuestions } from '../data/questions';

const categoryLabels: Record<string, string> = {
  vocabulary: 'Vocabulary',
  comprehension: 'Comprehension',
  similarities: 'Similarities',
  information: 'General Information',
  arithmetic: 'Arithmetic Reasoning'
};

const categoryBadgeClass: Record<string, string> = {
  vocabulary: 'badge-vocabulary',
  comprehension: 'badge-comprehension',
  similarities: 'badge-similarity',
  information: 'badge-information',
  arithmetic: 'badge-arithmetic'
};

export default function Test() {
  const navigate = useNavigate();
  const {
    userData,
    answers,
    setAnswer,
    currentQuestion,
    setCurrentQuestion,
    setTestComplete
  } = useApp();

  useEffect(() => {
    if (!userData) {
      navigate('/register');
    }
  }, [userData, navigate]);

  if (!userData) return null;

  const question = testQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
  const isAnswered = answers[question.id] !== undefined;

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestComplete(true);
      navigate('/payment');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];
  const optionClasses = ['option-a', 'option-b', 'option-c', 'option-d'];

  return (
    <div className="page-container">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Progress Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '24px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontWeight: '600', color: 'white' }}>
              Question {currentQuestion + 1} of {testQuestions.length}
            </span>
            <span style={{ fontWeight: '600', color: 'white' }}>
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="progress-container">
            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="card"
          >
            {/* Category Badge */}
            <div style={{ textAlign: 'center' }}>
              <span className={`category-badge ${categoryBadgeClass[question.category]}`}>
                {categoryLabels[question.category]}
              </span>
            </div>

            {/* Question Visual */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="question-image"
              style={{ background: question.backgroundGradient }}
            >
              <span style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
                {question.icon}
              </span>
            </motion.div>

            {/* Question Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ textAlign: 'center', marginBottom: '32px' }}
            >
              <h2 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#2d3748' }}>
                {question.question}
              </h2>
            </motion.div>

            {/* Options */}
            <div>
              {question.options.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`option-card ${answers[question.id] === option.id ? 'selected' : ''}`}
                  onClick={() => setAnswer(question.id, option.id)}
                >
                  <div className={`option-icon ${optionClasses[index]}`}>
                    {optionLetters[index]}
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>
                    {option.text}
                  </span>
                  {answers[question.id] === option.id && (
                    <CheckCircle
                      size={24}
                      color="#667eea"
                      style={{ marginLeft: 'auto' }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="test-nav"
            >
              <button
                className="btn btn-secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft size={18} />
                Previous
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                {testQuestions.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: answers[testQuestions[index].id]
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : index === currentQuestion
                          ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                          : '#e2e8f0',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      transform: index === currentQuestion ? 'scale(1.3)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>

              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                {currentQuestion === testQuestions.length - 1 ? 'Finish Test' : 'Next'}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Answer Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '24px',
            color: 'white',
            fontSize: '0.9rem'
          }}
        >
          {Object.keys(answers).length} of {testQuestions.length} questions answered
        </motion.div>
      </div>
    </div>
  );
}
