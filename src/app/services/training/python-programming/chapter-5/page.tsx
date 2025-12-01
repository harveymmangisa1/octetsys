import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CodeEditor } from '@/components/ui/code-editor';

export const metadata: Metadata = {
    title: 'Chapter 5: Working with Data Structures | Interactive Training',
    description: 'Explore lists, dictionaries, tuples, and sets to organize your data efficiently in Python.',
    openGraph: {
        title: 'Chapter 5: Working with Data Structures | Interactive Training',
        description: 'Explore lists, dictionaries, tuples, and sets to organize your data efficiently in Python.',
        type: 'website',
    },
};

const exercises = [
    {
        id: 'lists-basics',
        title: 'Working with Lists',
        description: 'Learn to create, modify, and manipulate Python lists.',
        difficulty: 'Beginner',
        estimatedTime: '10 min'
    },
    {
        id: 'dictionaries',
        title: 'Dictionary Operations',
        description: 'Master key-value pairs and dictionary methods.',
        difficulty: 'Beginner',
        estimatedTime: '12 min'
    },
    {
        id: 'tuples-sets',
        title: 'Tuples and Sets',
        description: 'Understand immutable tuples and unique sets.',
        difficulty: 'Intermediate',
        estimatedTime: '15 min'
    },
    {
        id: 'comprehensions',
        title: 'List Comprehensions',
        description: 'Write concise and efficient list comprehensions.',
        difficulty: 'Intermediate',
        estimatedTime: '18 min'
    },
    {
        id: 'practice-challenge',
        title: 'Data Structure Challenge',
        description: 'Combine all data structures to solve a complex problem.',
        difficulty: 'Intermediate',
        estimatedTime: '20 min'
    }
];

export default function Chapter5Page() {
    const currentProgress = 100; // 5 of 5 chapters completed

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
                    <span className="text-foreground font-medium">Chapter 5</span>
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
                        <Badge variant="secondary">Chapter 5 of 5</Badge>
                        <Badge variant="default" className="bg-green-600">Final Chapter</Badge>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Working with Data Structures
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Explore Python&apos;s powerful data structures to organize, store, and manipulate data efficiently. 
                                Master lists, dictionaries, tuples, sets, and learn the elegant syntax of list comprehensions.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="w-4 h-4" />
                                    <span>5 Interactive Exercises</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Target className="w-4 h-4" />
                                    <span>75 minutes</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Certificate Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <Card className="h-fit">
                                <CardHeader>
                                    <CardTitle className="text-lg">Module Progress</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Overall Progress</span>
                                            <span className="font-medium">{currentProgress}%</span>
                                        </div>
                                        <Progress value={currentProgress} className="h-2" />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Complete this chapter to earn your Python Fundamentals certificate!
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Introduction */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    What You'll Learn
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                        <h4 className="font-semibold text-blue-800 mb-2">📋 Lists</h4>
                                        <p className="text-sm text-blue-700">Create, modify, and manipulate ordered collections of items</p>
                                    </div>
                                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-semibold text-green-800 mb-2">🔑 Dictionaries</h4>
                                        <p className="text-sm text-green-700">Work with key-value pairs for efficient data lookup</p>
                                    </div>
                                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                        <h4 className="font-semibold text-purple-800 mb-2">📦 Tuples</h4>
                                        <p className="text-sm text-purple-700">Use immutable sequences for fixed data collections</p>
                                    </div>
                                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                        <h4 className="font-semibold text-orange-800 mb-2">🎯 Sets</h4>
                                        <p className="text-sm text-orange-700">Handle unique items and perform set operations</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Lists Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>📋 Lists - Ordered Collections</CardTitle>
                                <CardDescription>
                                                                            Lists are Python&apos;s most versatile data structure. They can hold any type of data and are mutable.                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Creating and Accessing Lists</h4>
                                    <CodeEditor
                                        initialCode={`# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]

# Accessing elements
print(fruits[0])        # First element
print(fruits[-1])       # Last element
print(fruits[1:3])      # Slicing

# List length
print(len(fruits))`}
                                        expectedOutput="apple\norange\n['banana', 'orange']\n3"
                                        hint="Lists use zero-based indexing. Negative indices count from the end."
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Modifying Lists</h4>
                                    <CodeEditor
                                        initialCode={`# Modifying lists
shopping = ["milk", "bread", "eggs"]
print("Original:", shopping)

# Add items
shopping.append("cheese")
shopping.insert(1, "butter")
print("After adding:", shopping)

# Remove items
shopping.remove("bread")
popped = shopping.pop()
print("After removing:", shopping)
print("Popped item:", popped)

# Change items
shopping[0] = "almond milk"
print("After changing:", shopping)`}
                                        expectedOutput="Original: ['milk', 'bread', 'eggs']\nAfter adding: ['milk', 'butter', 'bread', 'eggs', 'cheese']\nAfter removing: ['milk', 'butter', 'eggs', 'cheese']\nPopped item: cheese\nAfter changing: ['almond milk', 'butter', 'eggs']"
                                        hint="Lists are mutable, meaning you can change them after creation."
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Dictionaries Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>🔑 Dictionaries - Key-Value Pairs</CardTitle>
                                <CardDescription>
                                    Dictionaries store data as key-value pairs, making it easy to look up values using their keys.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Creating and Using Dictionaries</h4>
                                    <CodeEditor
                                        initialCode={`# Creating dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Math", "Science", "English"]
}

# Accessing values
print(student["name"])
print(student.get("age"))
print(student.get("city", "Not specified"))

# Adding and updating
student["email"] = "alice@example.com"
student["age"] = 21
print("Updated:", student)`}
                                        expectedOutput="Alice\n20\nNot specified\nUpdated: {'name': 'Alice', 'age': 21, 'grade': 'A', 'courses': ['Math', 'Science', 'English'], 'email': 'alice@example.com'}"
                                        hint="Use keys to access values. The get() method provides safe access with default values."
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Dictionary Operations</h4>
                                    <CodeEditor
                                        initialCode={`# Dictionary methods
inventory = {
    "apples": 10,
    "bananas": 15,
    "oranges": 8
}

# Get all keys and values
print("Keys:", list(inventory.keys()))
print("Values:", list(inventory.values()))
print("Items:", list(inventory.items()))

# Check if key exists
print("Has apples:", "apples" in inventory)
print("Has grapes:", "grapes" in inventory)

# Remove items
removed = inventory.pop("oranges")
print("Removed:", removed)
print("Final:", inventory)`}
                                        expectedOutput="Keys: ['apples', 'bananas', 'oranges']\nValues: [10, 15, 8]\nItems: [('apples', 10), ('bananas', 15), ('oranges', 8)]\nHas apples: True\nHas grapes: False\nRemoved: 8\nFinal: {'apples': 10, 'bananas': 15}"
                                        hint="Dictionaries provide methods to access keys, values, and key-value pairs."
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tuples and Sets Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>📦 Tuples & 🎯 Sets</CardTitle>
                                <CardDescription>
                                    Tuples are immutable sequences, while sets store unique items and support mathematical operations.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Tuples - Immutable Sequences</h4>
                                    <CodeEditor
                                        initialCode={`# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (42,)  # Note the comma!

# Accessing elements
print(coordinates[0])
print(colors[1:3])

# Tuple operations
print(len(colors))
print("red" in colors)

# Tuples are immutable
try:
    coordinates[0] = 15
except TypeError as e:
    print("Error:", e)`}
                                        expectedOutput="10\n('green', 'blue')\n3\nTrue\nError: 'tuple' object does not support item assignment"
                                        hint="Tuples cannot be modified after creation. Use parentheses or just commas."
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Sets - Unique Collections</h4>
                                    <CodeEditor
                                        initialCode={`# Creating sets
numbers = {1, 2, 3, 4, 5}
letters = set("hello")
duplicates = [1, 2, 2, 3, 3, 3]
unique = set(duplicates)

print("Numbers:", numbers)
print("Letters:", letters)
print("Unique from duplicates:", unique)

# Set operations
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

print("Union:", set_a | set_b)
print("Intersection:", set_a & set_b)
print("Difference:", set_a - set_b)`}
                                        expectedOutput="Numbers: {1, 2, 3, 4, 5}\nLetters: {'h', 'e', 'l', 'o'}\nUnique from duplicates: {1, 2, 3}\nUnion: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference: {1, 2}"
                                        hint="Sets automatically remove duplicates and support mathematical operations."
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* List Comprehensions Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>⚡ List Comprehensions</CardTitle>
                                <CardDescription>
                                    Write concise and elegant code to create lists using list comprehensions.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Basic List Comprehensions</h4>
                                    <CodeEditor
                                        initialCode={`# Traditional way
squares = []
for i in range(1, 6):
    squares.append(i * i)
print("Traditional:", squares)

# List comprehension
squares_comp = [i * i for i in range(1, 6)]
print("Comprehension:", squares_comp)

# With condition
even_squares = [i * i for i in range(1, 11) if i % 2 == 0]
print("Even squares:", even_squares)`}
                                        expectedOutput="Traditional: [1, 4, 9, 16, 25]\nComprehension: [1, 4, 9, 16, 25]\nEven squares: [4, 16, 36, 64, 100]"
                                        hint="List comprehensions provide a concise way to create lists."
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-3">Advanced Comprehensions</h4>
                                    <CodeEditor
                                        initialCode={`# Nested comprehensions
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print("Multiplication table:")
for row in matrix:
    print(row)

# String operations
words = ["hello", "world", "python", "programming"]
lengths = [len(word) for word in words]
uppercase = [word.upper() for word in words if len(word) > 5]

print("Lengths:", lengths)
print("Long words uppercase:", uppercase)

# Conditional expression
grades = [85, 92, 78, 95, 88]
results = ["Pass" if grade >= 80 else "Fail" for grade in grades]
print("Results:", results)`}
                                        expectedOutput="Multiplication table:\n[1, 2, 3]\n[2, 4, 6]\n[3, 6, 9]\nLengths: [5, 5, 6, 11]\nLong words uppercase: ['PYTHON', 'PROGRAMMING']\nResults: ['Pass', 'Pass', 'Fail', 'Pass', 'Pass']"
                                        hint="You can use conditional expressions and nested comprehensions for complex operations."
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Practice Challenge */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="w-5 h-5 text-red-500" />
                                    Practice Challenge: Student Grade Manager
                                </CardTitle>
                                <CardDescription>
                                    Combine all data structures to create a student grade management system.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3">Challenge: Create a Grade Manager</h4>
                                    <CodeEditor
                                        initialCode={`# Student Grade Manager Challenge
# Create a system to manage student grades using multiple data structures

# 1. Create a dictionary to store student information
students = {
    "Alice": {"age": 20, "grades": [85, 92, 78]},
    "Bob": {"age": 19, "grades": [76, 88, 91]},
    "Charlie": {"age": 21, "grades": [95, 89, 93]}
}

# 2. Calculate average grade for each student
print("Student Averages:")
for name, info in students.items():
    grades = info["grades"]
    average = sum(grades) / len(grades)
    print(f"{name}: {average:.1f}")

# 3. Find students with average >= 85
honor_students = [name for name, info in students.items() 
                  if sum(info["grades"]) / len(info["grades"]) >= 85]
print("Honor Students:", honor_students)

# 4. Create a set of all unique grades
all_grades = set()
for info in students.values():
    all_grades.update(info["grades"])
print("All unique grades:", sorted(all_grades))`}
                                        expectedOutput="Student Averages:\nAlice: 85.0\nBob: 85.0\nCharlie: 92.3\nHonor Students: ['Alice', 'Bob', 'Charlie']\nAll unique grades: [76, 78, 85, 88, 89, 91, 92, 93, 95]"
                                        hint="This challenge combines dictionaries, lists, sets, and comprehensions!"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Chapter Navigation */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Chapter Navigation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link href="/services/training/python-programming/chapter-4" className="gap-2">
                                        <ArrowLeft className="w-4 h-4" />
                                        Previous: Functions & Modules
                                    </Link>
                                </Button>
                                <Button className="w-full" disabled>
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Complete Chapter
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Exercises List */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Exercises</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {exercises.map((exercise, index) => (
                                    <div key={exercise.id} className="p-3 border rounded-lg">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-medium text-sm">{index + 1}. {exercise.title}</h4>
                                            <Badge variant="outline" className="text-xs">
                                                {exercise.difficulty}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-2">{exercise.description}</p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Target className="w-3 h-3" />
                                            {exercise.estimatedTime}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Quick Tips */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    Quick Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 text-sm mb-1">📋 Lists</h4>
                                    <p className="text-xs text-blue-700">Use lists when you need ordered, mutable collections.</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <h4 className="font-semibold text-green-800 text-sm mb-1">🔑 Dictionaries</h4>
                                    <p className="text-xs text-green-700">Perfect for key-value lookups and structured data.</p>
                                </div>
                                <div className="p-3 bg-purple-50 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 text-sm mb-1">📦 Tuples</h4>
                                    <p className="text-xs text-purple-700">Use for data that shouldn't change, like coordinates.</p>
                                </div>
                                <div className="p-3 bg-orange-50 rounded-lg">
                                    <h4 className="font-semibold text-orange-800 text-sm mb-1">🎯 Sets</h4>
                                    <p className="text-xs text-orange-700">Great for removing duplicates and set operations.</p>
                                </div>
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 text-sm mb-1">⚡ Comprehensions</h4>
                                    <p className="text-xs text-yellow-700">Write cleaner, more Pythonic code with comprehensions.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Completion Message */}
                        <Card className="border-green-200 bg-green-50">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                                    <h3 className="font-semibold text-green-800 mb-2">🎉 Final Chapter!</h3>
                                    <p className="text-sm text-green-700 mb-3">
                                        Complete this chapter to earn your Python Fundamentals certificate!
                                    </p>
                                    <Badge className="bg-green-600 text-white">
                                        Certificate Available
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Chapter Footer */}
            <section className="bg-secondary/20 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-1">Ready to Complete Your Python Journey?</h3>
                            <p className="text-muted-foreground text-sm">
                                Finish this final chapter and earn your Python Fundamentals certificate
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" asChild>
                                <Link href="/services/training/python-programming/chapter-4" className="gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Previous Chapter
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/services/training/python-programming" className="gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Complete Module
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}