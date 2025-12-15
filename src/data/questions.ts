import type { TestQuestion, TestOffer } from '../types';

export const testQuestions: TestQuestion[] = [
  // VOCABULARY QUESTIONS
  {
    id: 1,
    category: 'vocabulary',
    question: 'What does the word "BENEVOLENT" mean?',
    icon: '📚',
    backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    options: [
      { id: 'a', text: 'Hostile and aggressive' },
      { id: 'b', text: 'Kind and generous' },
      { id: 'c', text: 'Extremely wealthy' },
      { id: 'd', text: 'Very intelligent' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 2,
    category: 'vocabulary',
    question: 'What is the meaning of "UBIQUITOUS"?',
    icon: '🔤',
    backgroundGradient: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    options: [
      { id: 'a', text: 'Rare and unusual' },
      { id: 'b', text: 'Found everywhere' },
      { id: 'c', text: 'Hidden from view' },
      { id: 'd', text: 'Very expensive' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 3,
    category: 'vocabulary',
    question: 'What does "EPHEMERAL" mean?',
    icon: '✨',
    backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    options: [
      { id: 'a', text: 'Lasting a very short time' },
      { id: 'b', text: 'Extremely heavy' },
      { id: 'c', text: 'Made of ethereal material' },
      { id: 'd', text: 'Eternally lasting' }
    ],
    correctAnswer: 'a',
    points: 2
  },

  // COMPREHENSION QUESTIONS
  {
    id: 4,
    category: 'comprehension',
    question: 'Why is it important to have laws in society?',
    icon: '⚖️',
    backgroundGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    options: [
      { id: 'a', text: 'To punish people who are different' },
      { id: 'b', text: 'To maintain order and protect rights' },
      { id: 'c', text: 'To make lawyers wealthy' },
      { id: 'd', text: 'Laws are not important' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 5,
    category: 'comprehension',
    question: 'What does the saying "Don\'t judge a book by its cover" mean?',
    icon: '📖',
    backgroundGradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    options: [
      { id: 'a', text: 'Only read books with nice covers' },
      { id: 'b', text: 'Don\'t evaluate things based on appearance alone' },
      { id: 'c', text: 'Books are better than movies' },
      { id: 'd', text: 'Always read the summary first' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 6,
    category: 'comprehension',
    question: 'Why do people typically save money for retirement?',
    icon: '💰',
    backgroundGradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    options: [
      { id: 'a', text: 'Because banks require it' },
      { id: 'b', text: 'To ensure financial security when no longer working' },
      { id: 'c', text: 'Because money loses value over time' },
      { id: 'd', text: 'People don\'t actually save for retirement' }
    ],
    correctAnswer: 'b',
    points: 2
  },

  // SIMILARITIES QUESTIONS
  {
    id: 7,
    category: 'similarities',
    question: 'How are an APPLE and an ORANGE alike?',
    icon: '🍎',
    backgroundGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    options: [
      { id: 'a', text: 'They are both the same color' },
      { id: 'b', text: 'They are both fruits' },
      { id: 'c', text: 'They both grow underground' },
      { id: 'd', text: 'They are both vegetables' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 8,
    category: 'similarities',
    question: 'How are DEMOCRACY and MONARCHY alike?',
    icon: '🏛️',
    backgroundGradient: 'linear-gradient(135deg, #fee140 0%, #fa709a 100%)',
    options: [
      { id: 'a', text: 'They are both forms of government' },
      { id: 'b', text: 'They both involve voting' },
      { id: 'c', text: 'They are both ancient Greek words' },
      { id: 'd', text: 'They are exact opposites' }
    ],
    correctAnswer: 'a',
    points: 2
  },
  {
    id: 9,
    category: 'similarities',
    question: 'How are a POEM and a STATUE alike?',
    icon: '🎭',
    backgroundGradient: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
    options: [
      { id: 'a', text: 'They are both made of stone' },
      { id: 'b', text: 'They are both forms of artistic expression' },
      { id: 'c', text: 'They both use words' },
      { id: 'd', text: 'They are not alike at all' }
    ],
    correctAnswer: 'b',
    points: 2
  },

  // INFORMATION QUESTIONS
  {
    id: 10,
    category: 'information',
    question: 'What is the capital of France?',
    icon: '🗼',
    backgroundGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    options: [
      { id: 'a', text: 'London' },
      { id: 'b', text: 'Berlin' },
      { id: 'c', text: 'Paris' },
      { id: 'd', text: 'Madrid' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 11,
    category: 'information',
    question: 'Who wrote "Romeo and Juliet"?',
    icon: '🎭',
    backgroundGradient: 'linear-gradient(135deg, #fed6e3 0%, #a8edea 100%)',
    options: [
      { id: 'a', text: 'Charles Dickens' },
      { id: 'b', text: 'William Shakespeare' },
      { id: 'c', text: 'Jane Austen' },
      { id: 'd', text: 'Mark Twain' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 12,
    category: 'information',
    question: 'How many continents are there on Earth?',
    icon: '🌍',
    backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #89f7fe 100%)',
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' }
    ],
    correctAnswer: 'c',
    points: 2
  },

  // ARITHMETIC/REASONING QUESTIONS
  {
    id: 13,
    category: 'arithmetic',
    question: 'If you have 3 apples and buy 5 more, then give away 2, how many do you have?',
    icon: '🧮',
    backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '5' },
      { id: 'c', text: '6' },
      { id: 'd', text: '8' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 14,
    category: 'arithmetic',
    question: 'A store offers 25% off a $80 item. What is the sale price?',
    icon: '🏷️',
    backgroundGradient: 'linear-gradient(135deg, #4facfe 0%, #667eea 100%)',
    options: [
      { id: 'a', text: '$55' },
      { id: 'b', text: '$60' },
      { id: 'c', text: '$65' },
      { id: 'd', text: '$70' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 15,
    category: 'arithmetic',
    question: 'What number comes next in the sequence: 2, 4, 8, 16, __?',
    icon: '🔢',
    backgroundGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    options: [
      { id: 'a', text: '24' },
      { id: 'b', text: '32' },
      { id: 'c', text: '20' },
      { id: 'd', text: '18' }
    ],
    correctAnswer: 'b',
    points: 2
  }
];

export const testOffers: TestOffer[] = [
  {
    id: '1',
    title: 'Emotional Intelligence Test',
    description: 'Discover your EQ and emotional awareness capabilities',
    icon: '💖',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '2',
    title: 'Logical Reasoning Assessment',
    description: 'Test your analytical and logical thinking skills',
    icon: '🧩',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '3',
    title: 'Memory & Recall Test',
    description: 'Evaluate your short and long-term memory abilities',
    icon: '🧠',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '4',
    title: 'Spatial Intelligence Quiz',
    description: 'Measure your visual-spatial reasoning capabilities',
    icon: '📐',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '5',
    title: 'Creative Thinking Assessment',
    description: 'Explore your creative and innovative thinking style',
    icon: '🎨',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '6',
    title: 'Mathematical Aptitude Test',
    description: 'Comprehensive math skills evaluation',
    icon: '➕',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '7',
    title: 'Personality Type Analysis',
    description: 'Discover your unique personality traits and style',
    icon: '🎭',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '8',
    title: 'Critical Thinking Challenge',
    description: 'Test your ability to analyze and evaluate information',
    icon: '🔍',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '9',
    title: 'Processing Speed Test',
    description: 'Measure how quickly you process information',
    icon: '⚡',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '10',
    title: 'Working Memory Assessment',
    description: 'Evaluate your mental workspace capacity',
    icon: '💭',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '11',
    title: 'Pattern Recognition Test',
    description: 'Test your ability to identify patterns and sequences',
    icon: '🔄',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '12',
    title: 'Attention & Focus Assessment',
    description: 'Measure your concentration and attention span',
    icon: '🎯',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '13',
    title: 'Abstract Reasoning Quiz',
    description: 'Evaluate your ability to think abstractly',
    icon: '🌀',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '14',
    title: 'Social Intelligence Test',
    description: 'Discover your interpersonal intelligence level',
    icon: '👥',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '15',
    title: 'Decision Making Skills Test',
    description: 'Evaluate your decision-making capabilities',
    icon: '⚖️',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '16',
    title: 'Problem Solving Assessment',
    description: 'Test your approach to solving complex problems',
    icon: '💡',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '17',
    title: 'Fluid Intelligence Test',
    description: 'Measure your ability to think flexibly',
    icon: '🌊',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '18',
    title: 'Cognitive Flexibility Quiz',
    description: 'Test your mental adaptability and flexibility',
    icon: '🤸',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '19',
    title: 'Learning Style Assessment',
    description: 'Discover your optimal learning approach',
    icon: '📚',
    originalPrice: 4.99,
    salePrice: 1.49,
    discount: 70
  },
  {
    id: '20',
    title: 'Multiple Intelligences Test',
    description: 'Comprehensive assessment of all intelligence types',
    icon: '🌟',
    originalPrice: 9.99,
    salePrice: 2.99,
    discount: 70
  }
];
