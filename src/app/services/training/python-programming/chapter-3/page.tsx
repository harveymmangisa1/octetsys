import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CodeEditor } from '@/components/ui/code-editor';

export const metadata: Metadata = {
    title: 'Chapter 3: Control Flow and Logic | Interactive Training',
    description: 'Master conditional statements, loops, and logical operations in Python to control program execution.',
    openGraph: {
        title: 'Chapter 3: Control Flow and Logic | Interactive Training',
        description: 'Master conditional statements, loops, and logical operations in Python to control program execution.',
        type: 'website',
    },
};

export default function Chapter3Page() {
    const currentProgress = 75; // 3 of 4 chapters completed

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
                    <span className="text-foreground font-medium">Chapter 3</span>
                </div>
            </div>

            {/* Chapter Header */}
            <section className="bg-gradient-to-br from-purple-50/50 via-background to-pink-50/50 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/services/training/python-programming" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Module
                            </Link>
                        </Button>
                        <Badge variant="secondary">Chapter 3 of 5</Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Control Flow and Logic
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Learn to control your program's execution path with conditional statements and loops. 
                                Make decisions and repeat actions to create powerful programs.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="w-4 h-4" />
                                    <span>8 Interactive Exercises</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Target className="w-4 h-4" />
                                    <span>60 minutes</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Intermediate</span>
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
                                            <span className="font-medium">75%</span>
                                        </div>
                                        <Progress value={currentProgress} className="h-2" />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Complete this chapter to unlock Chapter 4: Functions and Modules
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
                    
                    {/* If Statements */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                If Statements
                            </CardTitle>
                            <CardDescription className="text-lg">
                                Make decisions in your code using conditional statements
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">💡 Key Concept: If Statements</h4>
                                <p className="text-yellow-700 text-sm">
                                    <code className="bg-yellow-100 px-1 rounded">if</code> statements let your program make decisions. 
                                    The code inside the <code className="bg-yellow-100 px-1 rounded">if</code> block runs only when the condition is True.
                                    Python uses indentation (spaces) to define code blocks.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try if statements:</h4>
                                <CodeEditor
                                    initialCode='# Basic if statement\nage = 18\n\nif age >= 18:\n    print("You are eligible to vote!")\n    print("Welcome to adulthood!")\n\n# Try changing age to different values\n# and see what happens!'
                                    expectedOutput="You are eligible to vote!\nWelcome to adulthood!"
                                    hint="The code inside the if block only runs when age >= 18 is True. Indentation (4 spaces) is important!"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* If-Else Statements */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-green-600" />
                                        Exercise: If-Else Statements
                                    </CardTitle>
                                    <CardDescription>
                                        Handle both true and false conditions with if-else
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">10 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">💡 If-Else Structure</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li><strong>if:</strong> Runs when condition is True</li>
                                    <li><strong>else:</strong> Runs when condition is False</li>
                                    <li><strong>elif:</strong> Checks additional conditions (else if)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice if-else:</h4>
                                <CodeEditor
                                    initialCode='# If-else example\nscore = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint("Your score:", score)\nprint("Your grade:", grade)\n\n# Try different scores to see different grades!'
                                    expectedOutput="Your score: 85\nYour grade: B"
                                    hint="elif checks additional conditions if previous ones were False. else catches everything else."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Comparison Operators */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-blue-600" />
                                        Exercise: Comparison Operators
                                    </CardTitle>
                                    <CardDescription>
                                        Compare values using different operators
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">12 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">💡 Comparison Operators</h4>
                                <div className="grid grid-cols-2 gap-2 text-blue-700 text-sm">
                                    <div><code className="bg-blue-100 px-1 rounded">==</code> Equal to</div>
                                    <div><code className="bg-blue-100 px-1 rounded">!=</code> Not equal to</div>
                                    <div><code className="bg-blue-100 px-1 rounded">></code> Greater than</div>
                                    <div><code className="bg-blue-100 px-1 rounded"><</code> Less than</div>
                                    <div><code className="bg-blue-100 px-1 rounded">>=</code> Greater or equal</div>
                                    <div><code className="bg-blue-100 px-1 rounded"><=</code> Less or equal</div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try comparison operators:</h4>
                                <CodeEditor
                                    initialCode='# Comparison operators practice\n\nx = 10\ny = 20\n\nprint("x =", x, ", y =", y)\nprint("x == y:", x == y)      # Equal\nprint("x != y:", x != y)      # Not equal\nprint("x > y:", x > y)        # Greater than\nprint("x < y:", x < y)        # Less than\nprint("x >= 10:", x >= 10)    # Greater or equal\nprint("y <= 15:", y <= 15)    # Less or equal\n\n# Try changing x and y values!'
                                    expectedOutput="x = 10 , y = 20\nx == y: False\nx != y: True\nx > y: False\nx < y: True\nx >= 10: True\ny <= 15: False"
                                    hint="Comparison operators return True or False. Use them in if statements to make decisions."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* For Loops */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-purple-600" />
                                        Exercise: For Loops
                                    </CardTitle>
                                    <CardDescription>
                                        Repeat actions multiple times with for loops
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">15 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">💡 For Loop Structure</h4>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li><strong>for item in sequence:</strong> Iterate through each item</li>
                                    <li><strong>range(n):</strong> Generate numbers from 0 to n-1</li>
                                    <li><strong>range(start, stop):</strong> Generate numbers from start to stop-1</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice for loops:</h4>
                                <CodeEditor
                                    initialCode='# For loop examples\n\n# Loop through a list\nfruits = ["apple", "banana", "orange"]\nprint("I like these fruits:")\nfor fruit in fruits:\n    print("-", fruit)\n\n# Loop with range\nprint("\\nCounting to 5:")\nfor i in range(5):\n    print("Count:", i)\n\n# Loop with range(start, stop)\nprint("\\nCounting from 3 to 7:")\nfor i in range(3, 8):\n    print("Number:", i)\n\n# Try creating your own loops!'
                                    expectedOutput="I like these fruits:\n- apple\n- banana\n- orange\n\nCounting to 5:\nCount: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\n\nCounting from 3 to 7:\nNumber: 3\nNumber: 4\nNumber: 5\nNumber: 6\nNumber: 7"
                                    hint="for loops repeat code for each item in a sequence. range() generates numbers for looping."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* While Loops */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-orange-600" />
                                        Exercise: While Loops
                                    </CardTitle>
                                    <CardDescription>
                                        Repeat actions while a condition is true
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">10 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-2">💡 While Loop Structure</h4>
                                <ul className="text-orange-700 text-sm space-y-1">
                                    <li><strong>while condition:</strong> Repeat while condition is True</li>
                                    <li><strong>Be careful:</strong> Make sure condition eventually becomes False!</li>
                                    <li><strong>break:</strong> Exit loop early</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice while loops:</h4>
                                <CodeEditor
                                    initialCode='# While loop example\n\ncount = 0\nprint("Counting up to 5:")\nwhile count <= 5:\n    print("Count:", count)\n    count = count + 1  # Important: update the variable!\n\nprint("Loop finished!")\n\n# Another example: user input simulation\npassword_attempts = 0\ncorrect_password = "python123"\n\nprint("\\nPassword check simulation:")\nwhile password_attempts < 3:\n    print("Attempt", password_attempts + 1, "- Checking password...")\n    # In real program, you\'d get user input here\n    password_attempts = password_attempts + 1\n    if password_attempts == 2:  # Simulate correct password on 2nd try\n        print("Password correct! Access granted.")\n        break\n\nif password_attempts >= 3:\n    print("Too many attempts. Access denied.")'
                                    expectedOutput="Counting up to 5:\nCount: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5\nLoop finished!\n\nPassword check simulation:\nAttempt 1 - Checking password...\nAttempt 2 - Checking password...\nPassword correct! Access granted."
                                    hint="While loops continue until condition becomes False. Always update variables in the loop!"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Logic Challenge */}
                    <Card className="p-8 border-2 border-red-200">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Target className="w-5 h-5 text-red-600" />
                                        Challenge: Number Guessing Game
                                    </CardTitle>
                                    <CardDescription>
                                        Combine if statements and loops to create an interactive game
                                    </CardDescription>
                                </div>
                                <Badge className="bg-red-100 text-red-800">20 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-2">🎯 Your Task</h4>
                                <p className="text-red-700 text-sm">
                                    Create a number guessing game where the computer tries to guess a number between 1-100.
                                    Use loops and conditional logic to make it smart!
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Build the guessing game:</h4>
                                <CodeEditor
                                    initialCode='# Number guessing game\n\nsecret_number = 42\nlow = 1\nhigh = 100\nattempts = 0\nmax_attempts = 7\n\nprint("Welcome to the Number Guessing Game!")\nprint("Think of a number between 1 and 100")\nprint("I\'ll try to guess it in", max_attempts, "attempts or less!")\nprint()\n\nwhile attempts < max_attempts:\n    attempts = attempts + 1\n    \n    # Computer makes a guess\n    guess = (low + high) // 2  # Binary search strategy\n    \n    print("Attempt", attempts, ": Is your number", guess, "?")\n    \n    # Simulate user response (in real game, you\'d ask user)\n    if guess == secret_number:\n        print("🎉 I got it! Your number is", guess)\n        print("It took me", attempts, "attempts!")\n        break\n    elif guess < secret_number:\n        print("Too low!")\n        low = guess + 1\n    else:\n        print("Too high!")\n        high = guess - 1\n    \n    print("Range is now:", low, "to", high)\n    print()\n\nif attempts >= max_attempts and guess != secret_number:\n    print("😔 I couldn\'t guess your number in", max_attempts, "attempts")\n    print("The number was", secret_number)\n\n# Try changing secret_number and play again!'
                                    expectedOutput="Welcome to the Number Guessing Game!\nThink of a number between 1 and 100\nI'll try to guess it in 7 attempts or less!\n\nAttempt 1 : Is your number 50 ?\nToo high!\nRange is now: 1 to 49\n\nAttempt 2 : Is your number 25 ?\nToo low!\nRange is now: 26 to 49\n\nAttempt 3 : Is your number 37 ?\nToo low!\nRange is now: 38 to 49\n\nAttempt 4 : Is your number 43 ?\nToo high!\nRange is now: 38 to 42\n\nAttempt 5 : Is your number 40 ?\nToo low!\nRange is now: 41 to 42\n\nAttempt 6 : Is your number 41 ?\nToo low!\nRange is now: 42 to 42\n\nAttempt 7 : Is your number 42 ?\n🎉 I got it! Your number is 42\nIt took me 7 attempts!"
                                    hint="Use binary search: guess middle of range, then adjust range based on feedback. This is very efficient!"
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
                                    Fantastic! You've mastered control flow and logic. 
                                    You can now make decisions and repeat actions in your programs!
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="outline" asChild className="gap-2">
                                    <Link href="/services/training/python-programming/chapter-2">
                                        <ArrowLeft className="w-4 h-4" />
                                        Previous Chapter
                                    </Link>
                                </Button>
                                
                                <Button asChild className="gap-2 flex-1">
                                    <Link href="/services/training/python-programming/chapter-4">
                                        Next Chapter: Functions and Modules
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