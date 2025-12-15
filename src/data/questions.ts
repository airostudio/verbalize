import type { TestQuestion, TestOffer } from '../types';

export const testQuestions: TestQuestion[] = [
  // ============================================
  // VOCABULARY QUESTIONS (8 questions)
  // ============================================
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
  {
    id: 4,
    category: 'vocabulary',
    question: 'What does "PRAGMATIC" mean?',
    icon: '💼',
    backgroundGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    options: [
      { id: 'a', text: 'Dealing with things sensibly and realistically' },
      { id: 'b', text: 'Being overly dramatic' },
      { id: 'c', text: 'Speaking multiple languages' },
      { id: 'd', text: 'Being extremely cautious' }
    ],
    correctAnswer: 'a',
    points: 2
  },
  {
    id: 5,
    category: 'vocabulary',
    question: 'What is the meaning of "ELOQUENT"?',
    icon: '🎤',
    backgroundGradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    options: [
      { id: 'a', text: 'Unable to speak clearly' },
      { id: 'b', text: 'Fluent and persuasive in speaking or writing' },
      { id: 'c', text: 'Speaking very quietly' },
      { id: 'd', text: 'Being silent' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 6,
    category: 'vocabulary',
    question: 'What does "AMBIGUOUS" mean?',
    icon: '❓',
    backgroundGradient: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
    options: [
      { id: 'a', text: 'Very clear and precise' },
      { id: 'b', text: 'Extremely ambitious' },
      { id: 'c', text: 'Open to more than one interpretation' },
      { id: 'd', text: 'Walking slowly' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 7,
    category: 'vocabulary',
    question: 'What is the meaning of "METICULOUS"?',
    icon: '🔬',
    backgroundGradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)',
    options: [
      { id: 'a', text: 'Careless and sloppy' },
      { id: 'b', text: 'Showing great attention to detail' },
      { id: 'c', text: 'Being very tall' },
      { id: 'd', text: 'Acting mysteriously' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 8,
    category: 'vocabulary',
    question: 'What does "RESILIENT" mean?',
    icon: '💪',
    backgroundGradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    options: [
      { id: 'a', text: 'Easily broken or damaged' },
      { id: 'b', text: 'Able to recover quickly from difficulties' },
      { id: 'c', text: 'Very resistant to change' },
      { id: 'd', text: 'Living in a remote area' }
    ],
    correctAnswer: 'b',
    points: 2
  },

  // ============================================
  // COMPREHENSION QUESTIONS (8 questions)
  // ============================================
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
  {
    id: 12,
    category: 'comprehension',
    question: 'What does "A stitch in time saves nine" mean?',
    icon: '🧵',
    backgroundGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    options: [
      { id: 'a', text: 'Sewing is an important skill' },
      { id: 'b', text: 'Time travel is possible' },
      { id: 'c', text: 'Fixing problems early prevents bigger problems later' },
      { id: 'd', text: 'Nine stitches are better than one' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 13,
    category: 'comprehension',
    question: 'Why is freedom of speech considered important in a democracy?',
    icon: '📢',
    backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    options: [
      { id: 'a', text: 'So people can insult each other' },
      { id: 'b', text: 'It allows citizens to express opinions and hold leaders accountable' },
      { id: 'c', text: 'Because silence is unhealthy' },
      { id: 'd', text: 'It makes news programs more interesting' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 14,
    category: 'comprehension',
    question: 'What does "The early bird catches the worm" suggest?',
    icon: '🐦',
    backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    options: [
      { id: 'a', text: 'Birds should wake up early' },
      { id: 'b', text: 'Worms are most active in the morning' },
      { id: 'c', text: 'Those who act promptly have an advantage' },
      { id: 'd', text: 'Early morning is the best time to eat' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 15,
    category: 'comprehension',
    question: 'Why do most countries require children to attend school?',
    icon: '🏫',
    backgroundGradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
    options: [
      { id: 'a', text: 'To give parents free time' },
      { id: 'b', text: 'Education helps children develop skills for life and work' },
      { id: 'c', text: 'Buildings would be empty otherwise' },
      { id: 'd', text: 'Teachers need employment' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 16,
    category: 'comprehension',
    question: 'What does "Don\'t put all your eggs in one basket" advise?',
    icon: '🥚',
    backgroundGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    options: [
      { id: 'a', text: 'Eggs are fragile and need care' },
      { id: 'b', text: 'Diversify your investments or efforts to reduce risk' },
      { id: 'c', text: 'Always use multiple baskets for shopping' },
      { id: 'd', text: 'Chickens should have separate nests' }
    ],
    correctAnswer: 'b',
    points: 2
  },

  // ============================================
  // SIMILARITIES QUESTIONS (8 questions)
  // ============================================
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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
  {
    id: 20,
    category: 'similarities',
    question: 'How are a RIVER and a ROAD alike?',
    icon: '🛤️',
    backgroundGradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)',
    options: [
      { id: 'a', text: 'They are both made of water' },
      { id: 'b', text: 'They are both pathways for travel or transport' },
      { id: 'c', text: 'They are both man-made' },
      { id: 'd', text: 'They both require fuel to use' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 21,
    category: 'similarities',
    question: 'How are a NEWSPAPER and TELEVISION alike?',
    icon: '📺',
    backgroundGradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
    options: [
      { id: 'a', text: 'They both require electricity' },
      { id: 'b', text: 'They are both forms of mass media' },
      { id: 'c', text: 'They both use paper' },
      { id: 'd', text: 'They are both rectangular' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 22,
    category: 'similarities',
    question: 'How are PRAISE and PUNISHMENT alike?',
    icon: '⚡',
    backgroundGradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    options: [
      { id: 'a', text: 'They both feel good' },
      { id: 'b', text: 'They are both forms of feedback that influence behavior' },
      { id: 'c', text: 'They are both negative' },
      { id: 'd', text: 'They both involve physical contact' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 23,
    category: 'similarities',
    question: 'How are a TELESCOPE and a MICROSCOPE alike?',
    icon: '🔭',
    backgroundGradient: 'linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%)',
    options: [
      { id: 'a', text: 'They both make things appear larger' },
      { id: 'b', text: 'They both look at stars' },
      { id: 'c', text: 'They are both instruments that enhance vision to see things not visible to the naked eye' },
      { id: 'd', text: 'They are both used by doctors' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 24,
    category: 'similarities',
    question: 'How are LIBERTY and JUSTICE alike?',
    icon: '🗽',
    backgroundGradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)',
    options: [
      { id: 'a', text: 'They are both legal terms only' },
      { id: 'b', text: 'They are both fundamental democratic values' },
      { id: 'c', text: 'They both refer to freedom' },
      { id: 'd', text: 'They are opposites' }
    ],
    correctAnswer: 'b',
    points: 2
  },

  // ============================================
  // INFORMATION QUESTIONS (8 questions)
  // ============================================
  {
    id: 25,
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
    id: 26,
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
    id: 27,
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
  {
    id: 28,
    category: 'information',
    question: 'What is the largest organ in the human body?',
    icon: '🫀',
    backgroundGradient: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
    options: [
      { id: 'a', text: 'Heart' },
      { id: 'b', text: 'Liver' },
      { id: 'c', text: 'Brain' },
      { id: 'd', text: 'Skin' }
    ],
    correctAnswer: 'd',
    points: 2
  },
  {
    id: 29,
    category: 'information',
    question: 'Which planet is known as the Red Planet?',
    icon: '🪐',
    backgroundGradient: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
    options: [
      { id: 'a', text: 'Venus' },
      { id: 'b', text: 'Jupiter' },
      { id: 'c', text: 'Mars' },
      { id: 'd', text: 'Saturn' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 30,
    category: 'information',
    question: 'Who painted the Mona Lisa?',
    icon: '🖼️',
    backgroundGradient: 'linear-gradient(135deg, #c2e59c 0%, #64b3f4 100%)',
    options: [
      { id: 'a', text: 'Vincent van Gogh' },
      { id: 'b', text: 'Pablo Picasso' },
      { id: 'c', text: 'Leonardo da Vinci' },
      { id: 'd', text: 'Michelangelo' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 31,
    category: 'information',
    question: 'What year did World War II end?',
    icon: '📜',
    backgroundGradient: 'linear-gradient(135deg, #757f9a 0%, #d7dde8 100%)',
    options: [
      { id: 'a', text: '1942' },
      { id: 'b', text: '1945' },
      { id: 'c', text: '1948' },
      { id: 'd', text: '1950' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 32,
    category: 'information',
    question: 'What is the chemical symbol for gold?',
    icon: '🥇',
    backgroundGradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    options: [
      { id: 'a', text: 'Go' },
      { id: 'b', text: 'Gd' },
      { id: 'c', text: 'Au' },
      { id: 'd', text: 'Ag' }
    ],
    correctAnswer: 'c',
    points: 2
  },

  // ============================================
  // ARITHMETIC/REASONING QUESTIONS (8 questions)
  // ============================================
  {
    id: 33,
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
    id: 34,
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
    id: 35,
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
  },
  {
    id: 36,
    category: 'arithmetic',
    question: 'If a train travels 60 miles in 1 hour, how far will it travel in 2.5 hours?',
    icon: '🚂',
    backgroundGradient: 'linear-gradient(135deg, #0575e6 0%, #021b79 100%)',
    options: [
      { id: 'a', text: '120 miles' },
      { id: 'b', text: '140 miles' },
      { id: 'c', text: '150 miles' },
      { id: 'd', text: '180 miles' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 37,
    category: 'arithmetic',
    question: 'What is 15% of 200?',
    icon: '📊',
    backgroundGradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    options: [
      { id: 'a', text: '15' },
      { id: 'b', text: '25' },
      { id: 'c', text: '30' },
      { id: 'd', text: '35' }
    ],
    correctAnswer: 'c',
    points: 2
  },
  {
    id: 38,
    category: 'arithmetic',
    question: 'If 5 workers can build a wall in 10 days, how many days will 10 workers take?',
    icon: '🧱',
    backgroundGradient: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    options: [
      { id: 'a', text: '3 days' },
      { id: 'b', text: '5 days' },
      { id: 'c', text: '7 days' },
      { id: 'd', text: '20 days' }
    ],
    correctAnswer: 'b',
    points: 2
  },
  {
    id: 39,
    category: 'arithmetic',
    question: 'What comes next: 1, 1, 2, 3, 5, 8, __?',
    icon: '🌀',
    backgroundGradient: 'linear-gradient(135deg, #7f00ff 0%, #e100ff 100%)',
    options: [
      { id: 'a', text: '10' },
      { id: 'b', text: '11' },
      { id: 'c', text: '12' },
      { id: 'd', text: '13' }
    ],
    correctAnswer: 'd',
    points: 2
  },
  {
    id: 40,
    category: 'arithmetic',
    question: 'A book costs $24. After a 1/3 discount, what is the new price?',
    icon: '📕',
    backgroundGradient: 'linear-gradient(135deg, #f2709c 0%, #ff9472 100%)',
    options: [
      { id: 'a', text: '$8' },
      { id: 'b', text: '$12' },
      { id: 'c', text: '$16' },
      { id: 'd', text: '$18' }
    ],
    correctAnswer: 'c',
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
