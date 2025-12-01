import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CodeEditor } from '@/components/ui/code-editor';

export const metadata: Metadata = {
    title: 'Chapter 1: Getting Started with Python | Interactive Training',
    description: 'Learn Python basics, setup your environment, and write your first program in this interactive chapter.',
    openGraph: {
        title: 'Chapter 1: Getting Started with Python | Interactive Training',
        description: 'Learn Python basics, setup your environment, and write your first program in this interactive chapter.',
        type: 'website',
    },
};

const exercises = [
    {
        id: 'hello-world',
        title: 'Your First Python Program',
        description: 'Learn to write and run your first Python program using the print() function.',
        difficulty: 'Beginner',
        estimatedTime: '5 min'
    },
    {
        id: 'python-basics',
        title: 'Understanding Python Syntax',
        description: 'Explore Python\'s clean syntax and learn about comments and basic structure.',
        difficulty: 'Beginner',
        estimatedTime: '8 min'
    },
    {
        id: 'simple-math',
        title: 'Python as a Calculator',
        description: 'Use Python to perform mathematical operations and calculations.',
        difficulty: 'Beginner',
        estimatedTime: '7 min'
    },
    {
        id: 'practice-challenge',
        title: 'Practice Challenge',
        description: 'Combine what you\'ve learned to solve a small programming challenge.',
        difficulty: 'Beginner',
        estimatedTime: '10 min'
    }
];

export default function Chapter1Page() {
    const currentProgress = 25; // 1 of 4 chapters completed

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            {/* Breadcrumb */}
            <div className="border-b border-border bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services/training" className="hover:text-primary transition-colors">Training</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services/training/python-programming" className="hover:text-primary transition-colors">Python Programming</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">Chapter 1</span>
                </div>
            </div>

            {/* Chapter Header */}
            <section className="bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/50 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/services/training/python-programming" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Module
                            </Link>
                        </Button>
                        <Badge variant="secondary">Chapter 1 of 5</Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Getting Started with Python
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Learn Python basics, understand what makes Python special, and write your first program.
                                No prior programming experience required!
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="w-4 h-4" />
                                    <span>4 Interactive Exercises</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Target className="w-4 h-4" />
                                    <span>30 minutes</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Beginner Friendly</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="p-6">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg">Module Progress</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Python Programming</span>
                                            <span className="font-medium">25%</span>
                                        </div>
                                        <Progress value={currentProgress} className="h-2" />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Complete this chapter to unlock Chapter 2: Variables and Data Types
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter Content */}
            <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Introduction */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                What is Python?
                            </CardTitle>
                            <CardDescription className="text-lg">
                                Python is a powerful, easy-to-learn programming language created by Guido van Rossum in 1991.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Why Python is Perfect for Beginners:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Simple & Readable:</strong> Python code looks like plain English, making it easy to read and understand</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>No Complex Setup:</strong> You can start coding right away in your browser</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Versatile:</strong> Used for web development, data science, AI, automation, and more</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Large Community:</strong> Millions of developers and tons of learning resources</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Interactive Exercise 1: Hello World */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-blue-600" />
                                        Exercise 1: Your First Python Program
                                    </CardTitle>
                                    <CardDescription>
                                        Let's write your first Python program using the print() function
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">5 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">💡 Key Concept: The print() Function</h4>
                                <p className="text-blue-700 text-sm">
                                    In Python, <code className="bg-blue-100 px-1 rounded">print()</code> is a built-in function that displays text or values on the screen.
                                    Anything you put inside the parentheses will be displayed.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try it yourself:</h4>
                                <p className="text-muted-foreground mb-4">
                                    Click "Run" to see the output. Try changing the message inside the quotes!
                                </p>
                                <CodeEditor
                                    initialCode='# Your first Python program!\nprint("Hello, World!")\nprint("Welcome to Python programming!")\n\n# Try changing the messages above\n# and run the code again!'
                                    expectedOutput="Hello, World!\nWelcome to Python programming!"
                                    hint="Python uses the print() function to display text. Anything inside quotes will be printed exactly as written."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Interactive Exercise 2: Python Syntax */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-green-600" />
                                        Exercise 2: Understanding Python Syntax
                                    </CardTitle>
                                    <CardDescription>
                                        Learn about Python's clean syntax and how to write comments
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">8 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">💡 Key Concepts</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li><strong>Comments:</strong> Lines starting with <code className="bg-green-100 px-1 rounded">#</code> are ignored by Python</li>
                                    <li><strong>Indentation:</strong> Python uses spaces/tabs to organize code (we'll learn more later)</li>
                                    <li><strong>No semicolons:</strong> Unlike many languages, Python doesn't require semicolons at line ends</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice with comments and syntax:</h4>
                                <CodeEditor
                                    initialCode={"# This is a comment - Python will ignore this line\n\n# Let's print multiple lines\nprint(\"Python is fun!\")\nprint(\"Syntax is clean and readable\")\n\n# You can write comments anywhere\n# to explain what your code does\nprint(\"Comments help others understand your code\")"}
                                    expectedOutput="Python is fun!\nSyntax is clean and readable\nComments help others understand your code"
                                    hint="Comments start with # and are ignored by Python. They're used to explain your code."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Interactive Exercise 3: Math Operations */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-purple-600" />
                                        Exercise 3: Python as a Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Use Python to perform mathematical operations
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">7 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">💡 Math Operations in Python</h4>
                                <div className="text-purple-700 text-sm space-y-1">
                                    <p>Python supports all basic math operations:</p>
                                    <ul className="ml-4 space-y-1">
                                        <li><code className="bg-purple-100 px-1 rounded">+</code> Addition</li>
                                        <li><code className="bg-purple-100 px-1 rounded">-</code> Subtraction</li>
                                        <li><code className="bg-purple-100 px-1 rounded">*</code> Multiplication</li>
                                        <li><code className="bg-purple-100 px-1 rounded">/</code> Division</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try these calculations:</h4>
                                <CodeEditor
                                    initialCode='# Python can do math!\nprint("Basic Math Operations:")\nprint(2 + 3)      # Addition\nprint(10 - 4)     # Subtraction\nprint(6 * 7)      # Multiplication\nprint(15 / 3)     # Division\n\n# Try your own calculations\nprint(20 + 30 * 2) # Order of operations'
                                    expectedOutput="Basic Math Operations:\n5\n6\n42\n5.0\n80"
                                    hint="Python follows standard mathematical order of operations (PEMDAS). Try different combinations!"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Practice Challenge */}
                    <Card className="p-8 border-2 border-orange-200">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Target className="w-5 h-5 text-orange-600" />
                                        Practice Challenge: Create Your Own Program
                                    </CardTitle>
                                    <CardDescription>
                                        Combine everything you've learned to create a personal introduction program
                                    </CardDescription>
                                </div>
                                <Badge className="bg-orange-100 text-orange-800">10 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-2">🎯 Your Task</h4>
                                <p className="text-orange-700 text-sm">
                                    Create a program that introduces yourself. Include:
                                    <br />• Your name
                                    <br />• A fun fact about you
                                    <br />• Your favorite number and double it
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Write your introduction program:</h4>
                                <CodeEditor
                                    initialCode='# Create your personal introduction program\n# Replace the example with your own information\n\nprint("Hi! My name is [Your Name]")\nprint("A fun fact about me is: [Your fun fact]")\nprint("My favorite number is [Your number]")\nprint("Double my favorite number is:", [Your number] * 2)\n\n# Delete these instructions and write your own!'
                                    hint="Use print() statements to share information about yourself. Remember to put text in quotes!"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Chapter Navigation */}
                    <Card className="p-8">
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">🎉 Chapter Complete!</h3>
                                <p className="text-muted-foreground mb-6">
                                    Great job! You've written your first Python programs and learned the basics.
                                    Ready to continue your journey?
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="outline" asChild className="gap-2">
                                    <Link href="/services/training/python-programming">
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Module
                                    </Link>
                                </Button>

                                <Button asChild className="gap-2 flex-1">
                                    <Link href="/services/training/python-programming/chapter-2">
                                        Next Chapter: Variables & Data Types
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}