import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CodeEditor } from '@/components/ui/code-editor';

export const metadata: Metadata = {
    title: 'Chapter 2: Variables and Data Types | Interactive Training',
    description: 'Learn about variables, data types, and how to work with different kinds of data in Python.',
    openGraph: {
        title: 'Chapter 2: Variables and Data Types | Interactive Training',
        description: 'Learn about variables, data types, and how to work with different kinds of data in Python.',
        type: 'website',
    },
};

export default function Chapter2Page() {
    const currentProgress = 50; // 2 of 4 chapters completed

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
                    <span className="text-foreground font-medium">Chapter 2</span>
                </div>
            </div>

            {/* Chapter Header */}
            <section className="bg-gradient-to-br from-green-50/50 via-background to-emerald-50/50 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/services/training/python-programming" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Module
                            </Link>
                        </Button>
                        <Badge variant="secondary">Chapter 2 of 5</Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Variables and Data Types
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Learn how to store and work with different types of data in Python.
                                Variables are like containers that hold information for your programs.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="w-4 h-4" />
                                    <span>6 Interactive Exercises</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Target className="w-4 h-4" />
                                    <span>45 minutes</span>
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
                                            <span className="font-medium">50%</span>
                                        </div>
                                        <Progress value={currentProgress} className="h-2" />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Complete this chapter to unlock Chapter 3: Control Flow and Logic
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

                    {/* Introduction to Variables */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                What are Variables?
                            </CardTitle>
                            <CardDescription className="text-lg">
                                Variables are containers for storing data values in your program.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">💡 Key Concept: Variable Assignment</h4>
                                <p className="text-yellow-700 text-sm">
                                    In Python, you create a variable by giving it a name and assigning a value using the equals sign (<code className="bg-yellow-100 px-1 rounded">=</code>).
                                    Think of it as labeling a box with its contents.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try creating variables:</h4>
                                <CodeEditor
                                    initialCode={"# Creating variables in Python\nname = \"Alice\"\nage = 25\ncity = \"New York\"\n\n# Let's see what we stored\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"City:\", city)\n\n# Try changing the values above!"}
                                    expectedOutput="Name: Alice\nAge: 25\nCity: New York"
                                    hint="Variable names go on the left, values on the right of the equals sign. Use quotes for text."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Data Types */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-blue-500" />
                                Python Data Types
                            </CardTitle>
                            <CardDescription className="text-lg">
                                Python has several built-in data types for different kinds of information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <h5 className="font-semibold text-blue-800 mb-2">📝 Text (String)</h5>
                                    <p className="text-blue-700 text-sm">
                                        Text data enclosed in quotes: <code className="bg-blue-100 px-1 rounded">"Hello"</code> or <code className="bg-blue-100 px-1 rounded">'World'</code>
                                    </p>
                                </div>
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <h5 className="font-semibold text-green-800 mb-2">🔢 Numbers (Integer)</h5>
                                    <p className="text-green-700 text-sm">
                                        Whole numbers: <code className="bg-green-100 px-1 rounded">42</code>, <code className="bg-green-100 px-1 rounded">-10</code>, <code className="bg-green-100 px-1 rounded">0</code>
                                    </p>
                                </div>
                                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                    <h5 className="font-semibold text-purple-800 mb-2">🔢 Numbers (Float)</h5>
                                    <p className="text-purple-700 text-sm">
                                        Decimal numbers: <code className="bg-purple-100 px-1 rounded">3.14</code>, <code className="bg-purple-100 px-1 rounded">-0.5</code>, <code className="bg-purple-100 px-1 rounded">2.0</code>
                                    </p>
                                </div>
                                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                    <h5 className="font-semibold text-orange-800 mb-2">✅ Boolean</h5>
                                    <p className="text-orange-700 text-sm">
                                        True or False values: <code className="bg-orange-100 px-1 rounded">True</code>, <code className="bg-orange-100 px-1 rounded">False</code>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice with different data types:</h4>
                                <CodeEditor
                                    initialCode={"# Different data types in Python\n\n# String (text)\nstudent_name = \"John Doe\"\nmessage = 'Hello, Python!'\n\n# Integer (whole numbers)\nstudent_age = 20\ngrade = 95\n\n# Float (decimal numbers)\nheight = 5.8\ngpa = 3.7\n\n# Boolean\nis_student = True\nhas_graduated = False\n\n# Print all variables\nprint(\"Student Info:\")\nprint(\"Name:\", student_name)\nprint(\"Age:\", student_age)\nprint(\"Height:\", height)\nprint(\"Is student:\", is_student)"}
                                    expectedOutput="Student Info:\nName: John Doe\nAge: 20\nHeight: 5.8\nIs student: True"
                                    hint="Strings use quotes, integers are whole numbers, floats have decimals, and booleans are True/False."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Working with Strings */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-green-600" />
                                        Exercise: Working with Strings
                                    </CardTitle>
                                    <CardDescription>
                                        Learn to manipulate and combine text in Python
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">10 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">💡 String Operations</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li><strong>Concatenation:</strong> Join strings with <code className="bg-green-100 px-1 rounded">+</code></li>
                                    <li><strong>Length:</strong> Get string length with <code className="bg-green-100 px-1 rounded">len()</code></li>
                                    <li><strong>Case conversion:</strong> <code className="bg-green-100 px-1 rounded">.upper()</code>, <code className="bg-green-100 px-1 rounded">.lower()</code></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try string operations:</h4>
                                <CodeEditor
                                    initialCode='# Working with strings\n\nfirst_name = "Alice"\nlast_name = "Smith"\n\n# Concatenation (joining strings)\nfull_name = first_name + " " + last_name\nprint("Full name:", full_name)\n\n# String length\nname_length = len(full_name)\nprint("Name length:", name_length, "characters")\n\n# Case conversion\nprint("Uppercase:", full_name.upper())\nprint("Lowercase:", full_name.lower())\n\n# Try with your own name!'
                                    expectedOutput="Full name: Alice Smith\nName length: 11 characters\nUppercase: ALICE SMITH\nLowercase: alice smith"
                                    hint="Use + to join strings, len() to get length, and .upper()/.lower() to change case."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Working with Numbers */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-purple-600" />
                                        Exercise: Working with Numbers
                                    </CardTitle>
                                    <CardDescription>
                                        Perform mathematical operations and type conversions
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">12 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">💡 Number Operations</h4>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li><strong>Basic math:</strong> <code className="bg-purple-100 px-1 rounded">+</code> <code className="bg-purple-100 px-1 rounded">-</code> <code className="bg-purple-100 px-1 rounded">*</code> <code className="bg-purple-100 px-1 rounded">/</code></li>
                                    <li><strong>Type conversion:</strong> <code className="bg-purple-100 px-1 rounded">int()</code> to integer, <code className="bg-purple-100 px-1 rounded">float()</code> to decimal</li>
                                    <li><strong>Modulo:</strong> <code className="bg-purple-100 px-1 rounded">%</code> gives remainder of division</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice with numbers:</h4>
                                <CodeEditor
                                    initialCode='# Working with numbers\n\n# Integer operations\napples = 10\noranges = 15\ntotal_fruit = apples + oranges\nprint("Total fruit:", total_fruit)\n\n# Float operations\nprice_per_apple = 0.50\ntotal_cost = apples * price_per_apple\nprint("Total cost: $", total_cost)\n\n# Type conversion\nage_text = "25"\nage_number = int(age_text)\nage_next_year = age_number + 1\nprint("Current age:", age_number)\nprint("Next year:", age_next_year)\n\n# Modulo (remainder)\neven_number = 10\nodd_number = 7\nprint("10 % 3 =", 10 % 3)  # remainder of 10 divided by 3\nprint("7 % 2 =", 7 % 2)    # remainder of 7 divided by 2'
                                    expectedOutput="Total fruit: 25\nTotal cost: $ 5.0\nCurrent age: 25\nNext year: 26\n10 % 3 = 1\n7 % 2 = 1"
                                    hint="Use int() to convert text to numbers, float() for decimals, and % for remainders."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Type Conversion Challenge */}
                    <Card className="p-8 border-2 border-orange-200">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Target className="w-5 h-5 text-orange-600" />
                                        Challenge: Type Conversion Practice
                                    </CardTitle>
                                    <CardDescription>
                                        Convert between different data types to solve problems
                                    </CardDescription>
                                </div>
                                <Badge className="bg-orange-100 text-orange-800">15 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-2">🎯 Your Task</h4>
                                <p className="text-orange-700 text-sm">
                                    You have user input as text. Convert it to numbers, perform calculations,
                                    and display results. Practice converting between strings, integers, and floats.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Complete the type conversion exercise:</h4>
                                <CodeEditor
                                    initialCode='# Type conversion challenge\n\n# User input (normally as text)\nuser_age_text = "25"\nuser_height_text = "5.8"\nuser_weight_text = "150"\n\n# Convert text to numbers\nuser_age = int(user_age_text)      # Convert to integer\nuser_height = float(user_height_text)  # Convert to float\nuser_weight = int(user_weight_text)    # Convert to integer\n\n# Perform calculations\nbmi = user_weight / (user_height ** 2)\nage_in_5_years = user_age + 5\n\n# Convert results back to strings for display\nage_message = "In 5 years, you will be " + str(age_in_5_years) + " years old"\nbmi_message = "Your BMI is: " + str(round(bmi, 1))\n\nprint("User Profile:")\nprint("Current age:", user_age)\nprint("Height:", user_height, "feet")\nprint("Weight:", user_weight, "pounds")\nprint(age_message)\nprint(bmi_message)\n\n# Try with your own numbers!'
                                    expectedOutput="User Profile:\nCurrent age: 25\nHeight: 5.8 feet\nWeight: 150 pounds\nIn 5 years, you will be 30 years old\nYour BMI is: 4.5"
                                    hint="Use int() for whole numbers, float() for decimals, and str() to convert back to text for display."
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
                                    Excellent! You've mastered variables and data types.
                                    You're ready to learn about controlling program flow!
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="outline" asChild className="gap-2">
                                    <Link href="/services/training/python-programming/chapter-1">
                                        <ArrowLeft className="w-4 h-4" />
                                        Previous Chapter
                                    </Link>
                                </Button>

                                <Button asChild className="gap-2 flex-1">
                                    <Link href="/services/training/python-programming/chapter-3">
                                        Next Chapter: Control Flow and Logic
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