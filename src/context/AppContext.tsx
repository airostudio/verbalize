import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { UserData, TestResult } from '../types';
import { testQuestions } from '../data/questions';

interface AppContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  currentQuestion: number;
  setCurrentQuestion: (q: number) => void;
  testComplete: boolean;
  setTestComplete: (complete: boolean) => void;
  paymentComplete: boolean;
  setPaymentComplete: (complete: boolean) => void;
  testResult: TestResult | null;
  calculateResults: () => TestResult;
  resetTest: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testComplete, setTestComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const setAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateResults = (): TestResult => {
    let totalScore = 0;
    const maxScore = testQuestions.reduce((acc, q) => acc + q.points, 0);

    const categoryScores: Record<string, { score: number; maxScore: number }> = {
      vocabulary: { score: 0, maxScore: 0 },
      comprehension: { score: 0, maxScore: 0 },
      similarities: { score: 0, maxScore: 0 },
      information: { score: 0, maxScore: 0 },
      arithmetic: { score: 0, maxScore: 0 }
    };

    testQuestions.forEach(question => {
      categoryScores[question.category].maxScore += question.points;
      if (answers[question.id] === question.correctAnswer) {
        totalScore += question.points;
        categoryScores[question.category].score += question.points;
      }
    });

    const percentile = Math.round((totalScore / maxScore) * 100);

    // WAIS-style IQ calculation (scaled)
    // Standard IQ has mean of 100 and SD of 15
    const rawPercentage = totalScore / maxScore;
    const verbalIQ = Math.round(70 + (rawPercentage * 60)); // Range: 70-130

    const categoryScoresArray = Object.entries(categoryScores).map(([category, scores]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      score: scores.score,
      maxScore: scores.maxScore
    }));

    // Determine interpretation
    let interpretation: string;
    if (verbalIQ >= 130) {
      interpretation = 'Superior - Your verbal intelligence is exceptionally high, placing you among the top performers.';
    } else if (verbalIQ >= 120) {
      interpretation = 'High Average - Your verbal abilities are notably above average, indicating strong language skills.';
    } else if (verbalIQ >= 110) {
      interpretation = 'Above Average - You demonstrate solid verbal reasoning and comprehension abilities.';
    } else if (verbalIQ >= 90) {
      interpretation = 'Average - Your verbal intelligence falls within the normal range, indicating healthy language processing.';
    } else if (verbalIQ >= 80) {
      interpretation = 'Low Average - Your verbal skills are slightly below average but within functional range.';
    } else {
      interpretation = 'Below Average - Consider focusing on vocabulary building and reading comprehension exercises.';
    }

    // Determine strengths
    const strengths: string[] = [];
    const sortedCategories = categoryScoresArray.sort((a, b) =>
      (b.score / b.maxScore) - (a.score / a.maxScore)
    );

    if (sortedCategories[0].score / sortedCategories[0].maxScore >= 0.67) {
      strengths.push(`Strong ${sortedCategories[0].category} skills`);
    }
    if (sortedCategories[1].score / sortedCategories[1].maxScore >= 0.67) {
      strengths.push(`Good ${sortedCategories[1].category} abilities`);
    }
    if (percentile >= 70) {
      strengths.push('Excellent overall verbal reasoning');
    }
    if (strengths.length === 0) {
      strengths.push('Consistent performance across categories');
    }

    // Recommendations
    const recommendations: string[] = [];
    const weakCategories = categoryScoresArray.filter(c => c.score / c.maxScore < 0.5);
    weakCategories.forEach(c => {
      recommendations.push(`Focus on improving ${c.category.toLowerCase()} through targeted practice`);
    });
    recommendations.push('Regular reading can enhance overall verbal intelligence');
    recommendations.push('Word games and puzzles help build vocabulary');

    const result: TestResult = {
      totalScore,
      maxScore,
      percentile,
      verbalIQ,
      categoryScores: categoryScoresArray,
      interpretation,
      strengths,
      recommendations
    };

    setTestResult(result);
    return result;
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setTestComplete(false);
    setPaymentComplete(false);
    setTestResult(null);
  };

  return (
    <AppContext.Provider value={{
      userData,
      setUserData,
      answers,
      setAnswer,
      currentQuestion,
      setCurrentQuestion,
      testComplete,
      setTestComplete,
      paymentComplete,
      setPaymentComplete,
      testResult,
      calculateResults,
      resetTest
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
