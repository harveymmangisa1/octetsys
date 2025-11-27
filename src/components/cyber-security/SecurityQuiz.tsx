'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from 'lucide-react';

interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string;
}

const quizQuestions: QuizQuestion[] = [
    {
        question: "What is the most secure way to store passwords?",
        options: [
            "Write them in a notebook",
            "Save them in a browser",
            "Use a password manager",
            "Use the same password for everything"
        ],
        correctAnswer: 2,
        explanation: "Password managers encrypt your passwords and generate strong, unique passwords for each account.",
        category: "Passwords"
    },
    {
        question: "Which of these is a sign of a phishing email?",
        options: [
            "Personalized greeting with your name",
            "Urgent requests for personal information",
            "Official company logo",
            "Professional email signature"
        ],
        correctAnswer: 1,
        explanation: "Phishing emails often create urgency to pressure you into acting without thinking. Legitimate companies rarely ask for sensitive information via email.",
        category: "Phishing"
    },
    {
        question: "What does HTTPS in a website URL indicate?",
        options: [
            "The website is government-approved",
            "The connection is encrypted",
            "The website is virus-free",
            "The website is popular"
        ],
        correctAnswer: 1,
        explanation: "HTTPS means the connection between your browser and the website is encrypted, protecting data in transit.",
        category: "Web Security"
    },
    {
        question: "How often should you update your passwords?",
        options: [
            "Never, if they're strong",
            "Every year",
            "Every 3-6 months, or immediately if compromised",
            "Every day"
        ],
        correctAnswer: 2,
        explanation: "Regular password changes (every 3-6 months) and immediate changes after suspected breaches help maintain security.",
        category: "Passwords"
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "Using two passwords",
            "Logging in twice",
            "An extra security layer requiring a second verification method",
            "Having two user accounts"
        ],
        correctAnswer: 2,
        explanation: "2FA adds an extra layer of security by requiring something you know (password) and something you have (phone, token, etc.).",
        category: "Authentication"
    },
    {
        question: "What should you do if you receive a suspicious email from your bank?",
        options: [
            "Click the link to verify",
            "Reply with your account details",
            "Contact your bank directly using official channels",
            "Forward it to friends"
        ],
        correctAnswer: 2,
        explanation: "Always verify suspicious communications by contacting the organization directly through official channels, not using contact info from the suspicious message.",
        category: "Phishing"
    },
    {
        question: "What is malware?",
        options: [
            "A type of computer hardware",
            "Malicious software designed to harm or exploit devices",
            "A programming language",
            "An email service"
        ],
        correctAnswer: 1,
        explanation: "Malware is malicious software including viruses, trojans, ransomware, and spyware designed to damage or gain unauthorized access to systems.",
        category: "Threats"
    },
    {
        question: "Which is the strongest password?",
        options: [
            "Password123",
            "MyName2024",
            "Tr0ub4dor&3",
            "correct-horse-battery-staple-2024!"
        ],
        correctAnswer: 3,
        explanation: "Longer passwords with multiple words, numbers, and symbols are stronger. Passphrases are both secure and memorable.",
        category: "Passwords"
    },
    {
        question: "What is ransomware?",
        options: [
            "Software that speeds up your computer",
            "Malware that encrypts your files and demands payment",
            "A type of antivirus",
            "A password manager"
        ],
        correctAnswer: 1,
        explanation: "Ransomware encrypts your files and demands payment (ransom) for the decryption key. Regular backups are the best defense.",
        category: "Threats"
    },
    {
        question: "Is public Wi-Fi safe for online banking?",
        options: [
            "Yes, always safe",
            "No, it's risky without a VPN",
            "Only on weekends",
            "Only in coffee shops"
        ],
        correctAnswer: 1,
        explanation: "Public Wi-Fi can be intercepted. Use a VPN for sensitive activities or wait until you're on a secure network.",
        category: "Network Security"
    }
];

export function SecurityQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false));
    const [quizComplete, setQuizComplete] = useState(false);

    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    const handleAnswer = (answerIndex: number) => {
        if (showExplanation) return;

        setSelectedAnswer(answerIndex);
        setShowExplanation(true);

        if (answerIndex === question.correctAnswer && !answeredQuestions[currentQuestion]) {
            setScore(score + 1);
        }

        const newAnswered = [...answeredQuestions];
        newAnswered[currentQuestion] = true;
        setAnsweredQuestions(newAnswered);
    };

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
        setQuizComplete(false);
    };

    const getScoreMessage = () => {
        const percentage = (score / quizQuestions.length) * 100;
        if (percentage >= 90) return { message: "Excellent! You're a cyber security expert!", color: "text-green-600" };
        if (percentage >= 70) return { message: "Great job! You have strong security awareness.", color: "text-blue-600" };
        if (percentage >= 50) return { message: "Good effort! Keep learning about cyber security.", color: "text-yellow-600" };
        return { message: "Keep practicing! Cyber security is important to learn.", color: "text-orange-600" };
    };

    if (quizComplete) {
        const scoreMessage = getScoreMessage();
        return (
            <Card className="w-full">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-100">
                            <Trophy className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                            <CardTitle className="text-xl">Quiz Complete!</CardTitle>
                            <CardDescription>Here's how you did</CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{score}</div>
                                <div className="text-xs">out of {quizQuestions.length}</div>
                            </div>
                        </div>

                        <div>
                            <p className={`text-xl font-semibold ${scoreMessage.color}`}>
                                {scoreMessage.message}
                            </p>
                            <p className="text-muted-foreground mt-2">
                                You scored {Math.round((score / quizQuestions.length) * 100)}%
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Your Performance:</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                                <div className="text-2xl font-bold text-green-600">{score}</div>
                                <div className="text-xs text-green-700">Correct</div>
                            </div>
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                                <div className="text-2xl font-bold text-red-600">{quizQuestions.length - score}</div>
                                <div className="text-xs text-red-700">Incorrect</div>
                            </div>
                        </div>
                    </div>

                    <Button onClick={resetQuiz} className="w-full" variant="outline">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Take Quiz Again
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                        <Brain className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="text-xl">Cyber Security Quiz</CardTitle>
                        <CardDescription>
                            Test your knowledge - Question {currentQuestion + 1} of {quizQuestions.length}
                        </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                        Score: {score}/{quizQuestions.length}
                    </Badge>
                </div>
                <Progress value={progress} className="h-2 mt-4" />
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-1">{question.category}</Badge>
                    </div>

                    <h3 className="text-lg font-semibold leading-relaxed">
                        {question.question}
                    </h3>

                    <div className="space-y-3">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrect = index === question.correctAnswer;
                            const showResult = showExplanation;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    disabled={showExplanation}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${showResult
                                            ? isCorrect
                                                ? 'border-green-500 bg-green-50'
                                                : isSelected
                                                    ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-200 bg-gray-50'
                                            : isSelected
                                                ? 'border-indigo-500 bg-indigo-50'
                                                : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex-1">{option}</span>
                                        {showResult && isCorrect && (
                                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        )}
                                        {showResult && isSelected && !isCorrect && (
                                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg animate-in fade-in-50">
                            <p className="text-sm font-semibold text-blue-900 mb-2">Explanation:</p>
                            <p className="text-sm text-blue-800">{question.explanation}</p>
                        </div>
                    )}
                </div>

                {showExplanation && (
                    <Button onClick={handleNext} className="w-full">
                        {currentQuestion < quizQuestions.length - 1 ? (
                            <>
                                Next Question
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </>
                        ) : (
                            <>
                                See Results
                                <Trophy className="h-4 w-4 ml-2" />
                            </>
                        )}
                    </Button>
                )}

                {!showExplanation && (
                    <p className="text-sm text-center text-muted-foreground">
                        Select an answer to continue
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
