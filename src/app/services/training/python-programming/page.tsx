'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, PlayCircle, CheckCircle2, Download, BookOpen, Award, Terminal, Lightbulb, Target, Zap, Lock, ChevronRight, ChevronLeft, RefreshCw, Clock } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
    topics: string[];
    exercises: number;
}

interface BadgeData {
    name: string;
    course: string;
    date: string;
    certificateId: string;
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Getting Started with Python',
        description: 'Learn Python basics, setup your environment, and write your first program.',
        duration: '45 minutes',
        completed: false,
        locked: false,
        topics: ['What is Python?', 'Installing Python', 'Your first program', 'Python syntax basics'],
        exercises: 5
    },
    {
        id: 2,
        title: 'Variables and Data Types',
        description: 'Understand variables, data types, and how to work with different kinds of data.',
        duration: '60 minutes',
        completed: false,
        locked: false,
        topics: ['Variables', 'Strings', 'Numbers', 'Type conversion', 'Comments'],
        exercises: 8
    },
    {
        id: 3,
        title: 'Control Flow and Logic',
        description: 'Master conditional statements, loops, and logical operations in Python.',
        duration: '75 minutes',
        completed: false,
        locked: false,
        topics: ['If statements', 'Comparison operators', 'Logical operators', 'While loops', 'For loops'],
        exercises: 10
    },
    {
        id: 4,
        title: 'Functions and Modules',
        description: 'Learn to create reusable functions and work with Python modules.',
        duration: '90 minutes',
        completed: false,
        locked: false,
        topics: ['Defining functions', 'Parameters and arguments', 'Return values', 'Import modules', 'Built-in functions'],
        exercises: 12
    },
    {
        id: 5,
        title: 'Working with Data Structures',
        description: 'Explore lists, dictionaries, tuples, and sets to organize your data.',
        duration: '120 minutes',
        completed: false,
        locked: false,
        topics: ['Lists', 'Dictionaries', 'Tuples', 'Sets', 'List comprehensions'],
        exercises: 15
    }
];

const codeExamples = {
    1: `# Your first Python program!
print("Hello, World!")
print("Welcome to Python programming!")

# Let's try some math
result = 2 + 3
print(f"2 + 3 = {result}")`,
    
    2: `# Working with variables and data types

# Strings
name = "Alex"
message = "Hello, " + name
print(message)

# Numbers
age = 25
height = 5.8
print(f"Age: {age}, Height: {height}")

# Type conversion
text_number = "42"
number = int(text_number)
print(f"Double of {text_number} is {number * 2}")`,
    
    3: `# Control flow examples

# If statements
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
print(f"Your grade is: {grade}")

# For loop
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# While loop
count = 1
while count <= 5:
    print(f"Count: {count}")
    count += 1`,
    
    4: `# Functions and modules

# Define a function
def greet(name, language="Python"):
    return f"Hello {name}! Welcome to {language}!"

# Use the function
print(greet("Sarah"))
print(greet("Mike", "JavaScript"))

# Function with return value
def calculate_area(length, width):
    area = length * width
    return area

room_area = calculate_area(10, 12)
print(f"Room area: {room_area} sq ft")`,
    
    5: `# Data structures

# Lists
shopping_list = ["milk", "bread", "eggs"]
shopping_list.append("cheese")
print(f"Shopping list: {shopping_list}")

# Dictionaries
student = {
    "name": "Emma",
    "age": 20,
    "grade": "A"
}
print(f"Student: {student['name']} - Grade: {student['grade']}")

# List comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
print(f"Squares: {squares}")`
};

export default function PythonProgrammingModule() { // Clock import fixed
    const [currentChapter, setCurrentChapter] = useState(1);
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [showCodeEditor, setShowCodeEditor] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [codeOutput, setCodeOutput] = useState('');
    const [showBadgeModal, setShowBadgeModal] = useState(false);
    const [userName, setUserName] = useState('');
    const [badgeGenerated, setBadgeGenerated] = useState(false);
    const [showScheduleCTA, setShowScheduleCTA] = useState(false);

    const selectedChapter = chapters.find(ch => ch.id === currentChapter);

    const handleChapterComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const handleRunCode = () => {
        // Simulate code execution
        try {
            // Simple simulation - in real app, this would execute Python code
            setCodeOutput("Code executed successfully!\n" + 
                         "Hello, World!\n" + 
                         "Welcome to Python programming!\n" + 
                         "2 + 3 = 5");
        } catch (error) {
            setCodeOutput("Error: " + error);
        }
    };

    const handleResetCode = () => {
        setUserCode(codeExamples[currentChapter as keyof typeof codeExamples] || '');
        setCodeOutput('');
    };

    const progress = (completedChapters.length / chapters.length) * 100;

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            {/* Breadcrumb */}
            <div className="border-b border-border bg-secondary/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/services/training" className="hover:text-primary transition-colors">Interactive Training</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground font-medium">Python Programming</span>
                </div>
            </div>

            {/* Module Header */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                            <Code className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Introduction to Python Programming</h1>
                            <p className="text-blue-100">Master Python fundamentals with interactive lessons</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{completedChapters.length} of {chapters.length} chapters completed</span>
                        </div>
                        <div className="w-full bg-blue-800/30 rounded-full h-3">
                            <div 
                                className="bg-white rounded-full h-3 transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Chapter Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Chapters</h3>
                            <div className="space-y-2">
                                {chapters.map((chapter) => (
                                    <button
                                        key={chapter.id}
                                        onClick={() => !chapter.locked && setCurrentChapter(chapter.id)}
                                        disabled={chapter.locked}
                                        className={`w-full text-left p-3 rounded-xl transition-all ${
                                            currentChapter === chapter.id
                                                ? 'bg-primary text-primary-foreground'
                                                : chapter.locked
                                                ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                                                : completedChapters.includes(chapter.id)
                                                ? 'bg-green-50 border border-green-200 text-green-800 hover:bg-green-100'
                                                : 'bg-secondary/50 hover:bg-secondary text-foreground'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                {chapter.locked ? (
                                                    <Lock className="w-4 h-4" />
                                                ) : completedChapters.includes(chapter.id) ? (
                                                    <CheckCircle2 className="w-4 h-4" />
                                                ) : (
                                                    <BookOpen className="w-4 h-4" />
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm">Chapter {chapter.id}</div>
                                                <div className="text-xs opacity-80 truncate">{chapter.title}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {completedChapters.length === chapters.length && !badgeGenerated && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <div className="flex items-center gap-2 text-green-800 mb-2">
                                        <Award className="w-5 h-5" />
                                        <span className="font-semibold">Module Complete!</span>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">
                                        You&apos;ve earned your Python Fundamentals badge
                                    </p>
                                    <button 
                                        onClick={() => setShowBadgeModal(true)}
                                        className="w-full bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Award className="w-4 h-4" />
                                        Generate Your Badge
                                    </button>
                                </div>
                            )}

                            {badgeGenerated && (
                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <div className="flex items-center gap-2 text-blue-800 mb-2">
                                        <Award className="w-5 h-5" />
                                        <span className="font-semibold">Badge Generated!</span>
                                    </div>
                                    <p className="text-sm text-blue-700 mb-3">
                                        Your certificate is ready for download
                                    </p>
                                    <button 
                                        onClick={() => setShowScheduleCTA(true)}
                                        className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Target className="w-4 h-4" />
                                        Schedule Advanced Training
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {selectedChapter && (
                            <div className="space-y-8">
                                {/* Chapter Header */}
                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                                Chapter {selectedChapter.id}: {selectedChapter.title}
                                            </h2>
                                            <p className="text-muted-foreground mb-4">{selectedChapter.description}</p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {selectedChapter.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Target className="w-4 h-4" />
                                                    {selectedChapter.exercises} exercises
                                                </div>
                                            </div>
                                        </div>
                                        {completedChapters.includes(selectedChapter.id) && (
                                            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" />
                                                Completed
                                            </div>
                                        )}
                                    </div>

                                    {/* Topics */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-foreground mb-4">What you'll learn</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedChapter.topics.map((topic, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                                                    <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
                                                    <span className="text-sm">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Code Editor */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground">Interactive Code Editor</h3>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setShowCodeEditor(!showCodeEditor)}
                                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                                                >
                                                    <Terminal className="w-4 h-4" />
                                                    {showCodeEditor ? 'Hide' : 'Show'} Editor
                                                </button>
                                            </div>
                                        </div>

                                        {showCodeEditor && (
                                            <div className="bg-gray-900 rounded-xl overflow-hidden">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <span className="text-gray-400 text-sm ml-4">python.py</span>
                                        </div>
                                        
                                        <div className="p-4">
                                            <textarea
                                                value={userCode || codeExamples[currentChapter as keyof typeof codeExamples]}
                                                onChange={(e) => setUserCode(e.target.value)}
                                                className="w-full h-48 bg-gray-800 text-green-400 font-mono text-sm p-4 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none resize-none"
                                                placeholder="Write your Python code here..."
                                            />
                                            
                                            <div className="flex gap-3 mt-4">
                                                <button
                                                    onClick={handleRunCode}
                                                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                                                >
                                                    <PlayCircle className="w-4 h-4" />
                                                    Run Code
                                                </button>
                                                <button
                                                    onClick={handleResetCode}
                                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors flex items-center gap-2"
                                                >
                                                    <RefreshCw className="w-4 h-4" />
                                                    Reset
                                                </button>
                                            </div>
                                            
                                            {codeOutput && (
                                                <div className="mt-4 p-4 bg-black rounded-lg border border-gray-700">
                                                    <div className="text-gray-400 text-xs mb-2">Output:</div>
                                                    <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{codeOutput}</pre>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                        )}
                                    </div>
                                </div>

                                {/* Chapter Actions */}
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={handleChapterComplete}
                                            disabled={completedChapters.includes(currentChapter)}
                                            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            {completedChapters.includes(currentChapter) ? 'Chapter Completed' : 'Mark as Complete'}
                                        </button>
                                        
                                        {currentChapter < chapters.length && (
                                            <button
                                                onClick={() => setCurrentChapter(currentChapter + 1)}
                                                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Next Chapter
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        )}
                                        
                                        {currentChapter > 1 && (
                                            <button
                                                onClick={() => setCurrentChapter(currentChapter - 1)}
                                                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                                Previous
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Study Further */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                                    <div className="text-center">
                                        <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-foreground mb-2">Ready to dive deeper?</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Complete this module and unlock advanced Python courses, real-world projects, and certification opportunities.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Apply to Study Further
                                            </button>
                                            <Link 
                                                href="/services/training"
                                                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Browse More Modules
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Badge Generation Modal */}
            {showBadgeModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">🎉 Congratulations!</h3>
                            <p className="text-gray-600">You&apos;ve completed the Python Fundamentals course!</p>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Enter your full name for the certificate:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowBadgeModal(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    if (userName.trim()) {
                                        generateBadge(userName);
                                        setShowBadgeModal(false);
                                        setBadgeGenerated(true);
                                    }
                                }}
                                disabled={!userName.trim()}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Generate Badge
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Schedule Training CTA Modal */}
            {showScheduleCTA && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full">
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Level Up?</h3>
                            <p className="text-gray-600">Continue your learning journey with advanced Python courses and personalized training!</p>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">🚀 Advanced Python Topics</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Object-Oriented Programming</li>
                                    <li>• Web Development with Django/Flask</li>
                                    <li>• Data Science & Machine Learning</li>
                                    <li>• API Development</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">📚 Personalized Learning</h4>
                                <ul className="text-sm text-green-700 space-y-1">
                                    <li>• One-on-one mentoring</li>
                                    <li>• Real-world projects</li>
                                    <li>• Flexible scheduling</li>
                                    <li>• Industry certification prep</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowScheduleCTA(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Maybe Later
                            </button>
                            <Link
                                href="/book-consultation"
                                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-semibold"
                            >
                                Schedule Training
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    function generateBadge(name: string) {
        // Create badge data
        const badgeData = {
            name: name,
            course: "Python Fundamentals",
            date: new Date().toLocaleDateString(),
            certificateId: `PY-${Date.now().toString(36).toUpperCase()}`
        };

        // Store badge in localStorage for persistence
        const badges = JSON.parse(localStorage.getItem('userBadges') || '[]');
        badges.push(badgeData);
        localStorage.setItem('userBadges', JSON.stringify(badges));

        // Trigger download
        downloadBadge(badgeData);
    }

    function downloadBadge(badgeData: BadgeData) {
        // Create a simple text-based certificate
        const certificate = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                    CERTIFICATE OF COMPLETION                 ║
║                                                              ║
║      This certifies that                                     ║
║                                                              ║
║              ${badgeData.name.padEnd(50)} ║
║                                                              ║
║      has successfully completed the                          ║
║                                                              ║
║              Python Fundamentals Course                       ║
║                                                              ║
║      Completed on: ${badgeData.date.padEnd(30)} ║
║      Certificate ID: ${badgeData.certificateId.padEnd(25)} ║
║                                                              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
        `.trim();

        // Create and download file
        const blob = new Blob([certificate], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Python-Fundamentals-Certificate-${badgeData.name.replace(/\s+/g, '-')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}