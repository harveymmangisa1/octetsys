import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CodeEditor } from '@/components/ui/code-editor';

export const metadata: Metadata = {
    title: 'Chapter 4: Functions and Modules | Interactive Training',
    description: 'Learn to create reusable functions and work with Python modules to write organized, efficient code.',
    openGraph: {
        title: 'Chapter 4: Functions and Modules | Interactive Training',
        description: 'Learn to create reusable functions and work with Python modules to write organized, efficient code.',
        type: 'website',
    },
};

export default function Chapter4Page() {
    const currentProgress = 90; // 4 of 4 chapters completed

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
                    <span className="text-foreground font-medium">Chapter 4</span>
                </div>
            </div>

            {/* Chapter Header */}
            <section className="bg-gradient-to-br from-indigo-50/50 via-background to-blue-50/50 border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/services/training/python-programming" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Module
                            </Link>
                        </Button>
                        <Badge variant="secondary">Chapter 4 of 5</Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Functions and Modules
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Learn to write reusable code with functions and organize your programs with modules. 
                                Functions help you avoid repeating code and make programs more organized.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="w-4 h-4" />
                                    <span>10 Interactive Exercises</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Target className="w-4 h-4" />
                                    <span>75 minutes</span>
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
                                            <span className="font-medium">90%</span>
                                        </div>
                                        <Progress value={currentProgress} className="h-2" />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Complete this chapter to unlock Chapter 5: Data Structures
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
                    
                    {/* Introduction to Functions */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <CardTitle className="flex items-center gap-2 text-2xl">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                What are Functions?
                            </CardTitle>
                            <CardDescription className="text-lg">
                                Functions are reusable blocks of code that perform specific tasks.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">💡 Key Concept: Function Definition</h4>
                                <p className="text-yellow-700 text-sm">
                                    Functions are defined with <code className="bg-yellow-100 px-1 rounded">def</code> keyword, 
                                    followed by function name and parentheses. They can take inputs (parameters) 
                                    and return outputs (return values).
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Try creating your first function:</h4>
                                <CodeEditor
                                    initialCode='# Your first function\ndef greet():\n    print("Hello, World!")\n    print("Welcome to functions!")\n\n# Call the function\ngreet()\ngreet()  # Call it again!\n\n# Functions are reusable!\ndef say_goodbye():\n    print("Goodbye! See you next time.")\n\nsay_goodbye()'
                                    expectedOutput="Hello, World!\nWelcome to functions!\nHello, World!\nWelcome to functions!\nGoodbye! See you next time."
                                    hint="Define functions with def name():. Call them by writing name(). Code inside runs each time you call it."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Functions with Parameters */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-green-600" />
                                        Exercise: Functions with Parameters
                                    </CardTitle>
                                    <CardDescription>
                                        Make functions more flexible by adding parameters
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">12 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">💡 Function Parameters</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                    <li><strong>Parameters:</strong> Variables listed in function definition</li>
                                    <li><strong>Arguments:</strong> Values passed to function when calling</li>
                                    <li><strong>Multiple parameters:</strong> Separate with commas</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice with parameters:</h4>
                                <CodeEditor
                                    initialCode='# Functions with parameters\n\ndef greet_person(name):\n    print("Hello, " + name + "!")\n    print("Nice to meet you, " + name + ".")\n\n# Call with different arguments\ngreet_person("Alice")\ngreet_person("Bob")\ngreet_person("Charlie")\n\n# Function with multiple parameters\ndef introduce(name, age, city):\n    print("Name:", name)\n    print("Age:", age)\n    print("City:", city)\n    print()\n\nintroduce("David", 25, "New York")\nintroduce("Emma", 30, "Los Angeles")\n\n# Try with your own information!'
                                    expectedOutput="Hello, Alice!\nNice to meet you, Alice.\nHello, Bob!\nNice to meet you, Bob.\nHello, Charlie!\nNice to meet you, Charlie.\nName: David\nAge: 25\nCity: New York\n\nName: Emma\nAge: 30\nCity: Los Angeles"
                                    hint="Parameters make functions flexible. Pass different values each time you call the function."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Return Values */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-blue-600" />
                                        Exercise: Return Values
                                    </CardTitle>
                                    <CardDescription>
                                        Make functions send back values using return
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">15 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">💡 Return Values</h4>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li><strong>return:</strong> Sends a value back from function</li>
                                    <li><strong>Store result:</strong> Assign returned value to variable</li>
                                    <li><strong>Multiple returns:</strong> Function can have multiple return statements</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice return values:</h4>
                                <CodeEditor
                                    initialCode='# Functions with return values\n\ndef add_numbers(a, b):\n    result = a + b\n    return result\n\ndef multiply_numbers(x, y):\n    return x * y\n\ndef calculate_area(length, width):\n    area = length * width\n    return area\n\n# Use the returned values\nsum_result = add_numbers(5, 3)\nprint("5 + 3 =", sum_result)\n\nproduct_result = multiply_numbers(4, 7)\nprint("4 * 7 =", product_result)\n\nroom_area = calculate_area(10, 12)\nprint("Room area:", room_area, "square feet")\n\n# You can also use return values directly\nprint("Add 10 + 20 =", add_numbers(10, 20))\nprint("Multiply 6 * 8 =", multiply_numbers(6, 8))'
                                    expectedOutput="5 + 3 = 8\n4 * 7 = 28\nRoom area: 120 square feet\nAdd 10 + 20 = 30\nMultiply 6 * 8 = 48"
                                    hint="Use return to send values back. Store returned values in variables or use them directly."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Default Parameters */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-purple-600" />
                                        Exercise: Default Parameters
                                    </CardTitle>
                                    <CardDescription>
                                        Give parameters default values for more flexibility
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">10 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">💡 Default Parameters</h4>
                                <ul className="text-purple-700 text-sm space-y-1">
                                    <li><strong>Default value:</strong> Used if no argument provided</li>
                                    <li><strong>Syntax:</strong> parameter=value in function definition</li>
                                    <li><strong>Flexibility:</strong> Call with or without the parameter</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice default parameters:</h4>
                                <CodeEditor
                                    initialCode='# Functions with default parameters\n\ndef greet(name, greeting="Hello"):\n    return greeting + ", " + name + "!"\n\ndef calculate_discount(price, discount_rate=0.1):\n    discount_amount = price * discount_rate\n    final_price = price - discount_amount\n    return final_price\n\ndef power(base, exponent=2):\n    return base ** exponent\n\n# Call with and without default parameters\nprint(greet("Alice"))                    # Uses default greeting\nprint(greet("Bob", "Hi"))                # Overrides default\nprint(greet("Charlie", "Good morning"))   # Overrides default\nprint()\n\n# Discount calculations\nprint("Original price: $100")\nprint("With default discount (10%): $", calculate_discount(100))\nprint("With custom discount (25%): $", calculate_discount(100, 0.25))\nprint()\n\n# Power calculations\nprint("3 squared (default):", power(3))\nprint("3 cubed:", power(3, 3))\nprint("2 to the 5th power:", power(2, 5))'
                                    expectedOutput="Hello, Alice!\nHi, Bob!\nGood morning, Charlie!\n\nOriginal price: $100\nWith default discount (10%): $ 90.0\nWith custom discount (25%): $ 75.0\n\n3 squared (default): 9\n3 cubed: 27\n2 to the 5th power: 32"
                                    hint="Default parameters make functions optional. Provide value in call to override default."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Built-in Functions */}
                    <Card className="p-8">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <PlayCircle className="w-5 h-5 text-orange-600" />
                                        Exercise: Built-in Functions
                                    </CardTitle>
                                    <CardDescription>
                                        Explore Python\'s powerful built-in functions
                                    </CardDescription>
                                </div>
                                <Badge variant="secondary">12 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                <h4 className="font-semibold text-orange-800 mb-2">💡 Common Built-in Functions</h4>
                                <div className="grid grid-cols-2 gap-2 text-orange-700 text-sm">
                                    <div><code className="bg-orange-100 px-1 rounded">print()</code> Display output</div>
                                    <div><code className="bg-orange-100 px-1 rounded">len()</code> Get length</div>
                                    <div><code className="bg-orange-100 px-1 rounded">str()</code> Convert to string</div>
                                    <div><code className="bg-orange-100 px-1 rounded">int()</code> Convert to integer</div>
                                    <div><code className="bg-orange-100 px-1 rounded">float()</code> Convert to float</div>
                                    <div><code className="bg-orange-100 px-1 rounded">abs()</code> Absolute value</div>
                                    <div><code className="bg-orange-100 px-1 rounded">max()</code> Maximum value</div>
                                    <div><code className="bg-orange-100 px-1 rounded">min()</code> Minimum value</div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Practice built-in functions:</h4>
                                <CodeEditor
                                    initialCode='# Using built-in functions\n\n# String functions\nmessage = "Hello, Python Programming!"\nprint("Original message:", message)\nprint("Length:", len(message))\nprint("Uppercase:", message.upper())\nprint("Lowercase:", message.lower())\nprint()\n\n# Number functions\nnumbers = [5, 2, 8, 1, 9, 3]\nprint("Numbers:", numbers)\nprint("Maximum:", max(numbers))\nprint("Minimum:", min(numbers))\nprint("Length of list:", len(numbers))\nprint()\n\n# Type conversion functions\ntext_number = "42"\ndecimal_number = 3.7\nnegative_number = -15\n\nprint("Text \'" + text_number + "\' as integer:", int(text_number))\nprint("Decimal", decimal_number, "as integer:", int(decimal_number))\nprint("Integer 10 as float:", float(10))\nprint("Absolute value of", negative_number, ":", abs(negative_number))\nprint()\n\n# Combining functions\ndef analyze_text(text):\n    return {\n        "length": len(text),\n        "words": len(text.split()),\n        "uppercase": text.upper(),\n        "lowercase": text.lower()\n    }\n\nsample_text = "Python is amazing!"\nanalysis = analyze_text(sample_text)\nprint("Text analysis for:", sample_text)\nprint("Character count:", analysis["length"])\nprint("Word count:", analysis["words"])'
                                    expectedOutput="Original message: Hello, Python Programming!\nLength: 22\nUppercase: HELLO, PYTHON PROGRAMMING!\nLowercase: hello, python programming!\n\nNumbers: [5, 2, 8, 1, 9, 3]\nMaximum: 9\nMinimum: 1\nLength of list: 6\n\nText '42' as integer: 42\nDecimal 3.7 as integer: 3\nInteger 10 as float: 10.0\nAbsolute value of -15 : 15\n\nText analysis for: Python is amazing!\nCharacter count: 19\nWord count: 3"
                                    hint="Built-in functions save time. Combine them to create powerful solutions!"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Function Challenge */}
                    <Card className="p-8 border-2 border-red-200">
                        <CardHeader className="pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Target className="w-5 h-5 text-red-600" />
                                        Challenge: Build a Calculator
                                    </CardTitle>
                                    <CardDescription>
                                        Create a calculator using functions with different operations
                                    </CardDescription>
                                </div>
                                <Badge className="bg-red-100 text-red-800">25 min</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-2">🎯 Your Task</h4>
                                <p className="text-red-700 text-sm">
                                    Create a complete calculator with functions for basic operations, 
                                    error handling, and a main function that orchestrates everything.
                                    Practice everything you've learned about functions!
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">Build your calculator:</h4>
                                <CodeEditor
                                    initialCode='# Calculator with functions\n\ndef add(a, b):\n    """Add two numbers and return result"""\n    return a + b\n\ndef subtract(a, b):\n    """Subtract b from a and return result"""\n    return a - b\n\ndef multiply(a, b):\n    """Multiply two numbers and return result"""\n    return a * b\n\ndef divide(a, b):\n    """Divide a by b and return result (with error handling)"""\n    if b == 0:\n        return "Error: Cannot divide by zero!"\n    return a / b\n\ndef power(base, exponent):\n    """Calculate base to the power of exponent"""\n    return base ** exponent\n\ndef calculator_menu():\n    """Display calculator menu and get user choice"""\n    print("\\n" + "="*40)\n    print("PYTHON CALCULATOR")\n    print("="*40)\n    print("1. Addition (+)")\n    print("2. Subtraction (-)")\n    print("3. Multiplication (*)")\n    print("4. Division (/)")\n    print("5. Power (^)")\n    print("6. Exit")\n    print("="*40)\n\ndef get_numbers():\n    """Get two numbers from user (simulated here)"""\n    # In real program, you\'d use input()\n    num1 = 10  # Simulated user input\n    num2 = 5   # Simulated user input\n    print("First number:", num1)\n    print("Second number:", num2)\n    return num1, num2\n\ndef run_calculation(choice, num1, num2):\n    """Run the selected calculation and return result"""\n    if choice == 1:\n        result = add(num1, num2)\n        operation = "+"\n    elif choice == 2:\n        result = subtract(num1, num2)\n        operation = "-"\n    elif choice == 3:\n        result = multiply(num1, num2)\n        operation = "*"\n    elif choice == 4:\n        result = divide(num1, num2)\n        operation = "/"\n    elif choice == 5:\n        result = power(num1, num2)\n        operation = "^"\n    else:\n        return "Invalid choice!"\n    \n    return f"{num1} {operation} {num2} = {result}"\n\n# Main calculator function\ndef main():\n    """Main calculator program"""\n    calculator_menu()\n    \n    # Simulate different operations\n    test_operations = [\n        (1, "Addition"),\n        (2, "Subtraction"), \n        (3, "Multiplication"),\n        (4, "Division"),\n        (5, "Power")\n    ]\n    \n    for choice, operation_name in test_operations:\n        print(f"\\n--- {operation_name} ---")\n        num1, num2 = get_numbers()\n        result = run_calculation(choice, num1, num2)\n        print("Result:", result)\n    \n    print("\\n" + "="*40)\n    print("Calculator demonstration complete!")\n    print("You\'ve mastered functions in Python!")\n    print("="*40)\n\n# Run the calculator\nmain()'
                                    expectedOutput="========================================\nPYTHON CALCULATOR\n========================================\n1. Addition (+)\n2. Subtraction (-)\n3. Multiplication (*)\n4. Division (/)\n5. Power (^)\n6. Exit\n========================================\n\n--- Addition ---\nFirst number: 10\nSecond number: 5\nResult: 10 + 5 = 15\n\n--- Subtraction ---\nFirst number: 10\nSecond number: 5\nResult: 10 - 5 = 5\n\n--- Multiplication ---\nFirst number: 10\nSecond number: 5\nResult: 10 * 5 = 50\n\n--- Division ---\nFirst number: 10\nSecond number: 5\nResult: 10 / 5 = 2.0\n\n--- Power ---\nFirst number: 10\nSecond number: 5\nResult: 10 ^ 5 = 100000\n\n========================================\nCalculator demonstration complete!\nYou've mastered functions in Python!\n========================================"
                                    hint="Create separate functions for each operation, then use a main function to coordinate everything. This is modular programming!"
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
                                    Amazing! You've mastered functions and modular programming. 
                                    You're ready for the final chapter on data structures!
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="outline" asChild className="gap-2">
                                    <Link href="/services/training/python-programming/chapter-3">
                                        <ArrowLeft className="w-4 h-4" />
                                        Previous Chapter
                                    </Link>
                                </Button>
                                
                                <Button asChild className="gap-2 flex-1">
                                    <Link href="/services/training/python-programming/chapter-5">
                                        Next Chapter: Data Structures
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