'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Download, BookOpen, Award, Clock, ChevronRight, ChevronLeft, PlayCircle, Table, PieChart, FileSpreadsheet, FileImage, Mail, Calendar } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
    topics: string[];
    exercises: number;
    tool: string;
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Microsoft Word Fundamentals',
        description: 'Master document creation, formatting, and professional writing in Word.',
        duration: '90 minutes',
        completed: false,
        locked: false,
        topics: ['Document basics', 'Text formatting', 'Styles and themes', 'Tables and graphics', 'Page layout'],
        exercises: 8,
        tool: 'Word'
    },
    {
        id: 2,
        title: 'Excel Data Analysis',
        description: 'Learn to organize, analyze, and visualize data with Excel spreadsheets.',
        duration: '120 minutes',
        completed: false,
        locked: false,
        topics: ['Worksheets and cells', 'Formulas and functions', 'Charts and graphs', 'Data sorting', 'Pivot tables'],
        exercises: 12,
        tool: 'Excel'
    },
    {
        id: 3,
        title: 'PowerPoint Presentations',
        description: 'Create engaging and professional presentations with PowerPoint.',
        duration: '75 minutes',
        completed: false,
        locked: false,
        topics: ['Slide design', 'Animations and transitions', 'Speaker notes', 'Templates', 'Presentation delivery'],
        exercises: 6,
        tool: 'PowerPoint'
    },
    {
        id: 4,
        title: 'Outlook Email Management',
        description: 'Streamline your communication and organize your inbox with Outlook.',
        duration: '60 minutes',
        completed: false,
        locked: false,
        topics: ['Email composition', 'Calendar management', 'Contacts', 'Rules and filters', 'Meeting scheduling'],
        exercises: 5,
        tool: 'Outlook'
    },
    {
        id: 5,
        title: 'Office Integration',
        description: 'Learn to work seamlessly across all Microsoft Office applications.',
        duration: '90 minutes',
        completed: false,
        locked: false,
        topics: ['Cross-application workflows', 'Data linking', 'Shared templates', 'Collaboration tools', 'Cloud integration'],
        exercises: 7,
        tool: 'Suite'
    },
    {
        id: 6,
        title: 'Advanced Office Features',
        description: 'Explore powerful features and automation in Microsoft Office.',
        duration: '105 minutes',
        completed: false,
        locked: false,
        topics: ['Macros and automation', 'Advanced formatting', 'Custom templates', 'Add-ins', 'Power Automate'],
        exercises: 10,
        tool: 'Advanced'
    }
];

const toolIcons = {
    'Word': FileText,
    'Excel': FileSpreadsheet,
    'PowerPoint': PieChart,
    'Outlook': Mail,
    'Suite': Calendar,
    'Advanced': PlayCircle
};

const interactiveExercises = {
    1: [
        { title: "Create a Professional Letter", description: "Format a business letter with proper margins, headers, and signature" },
        { title: "Design a Newsletter", description: "Create a multi-column newsletter with images and formatted text" },
        { title: "Build a Resume", description: "Format a professional resume with sections and proper styling" },
        { title: "Create Tables", description: "Insert and format tables with borders and shading" },
        { title: "Document Templates", description: "Work with pre-built templates and customize them" },
        { title: "Mail Merge", description: "Create personalized letters using mail merge" },
        { title: "Table of Contents", description: "Generate automatic table of contents" },
        { title: "Review Tools", description: "Use track changes and comments for collaboration" }
    ],
    2: [
        { title: "Create Budget Spreadsheet", description: "Build a personal budget with income and expenses" },
        { title: "Sales Data Analysis", description: "Analyze sales data with charts and pivot tables" },
        { title: "Inventory Tracking", description: "Create an inventory management system" },
        { title: "Financial Calculations", description: "Use financial functions for loans and investments" },
        { title: "Data Visualization", description: "Create various chart types from data" },
        { title: "Dashboard Creation", description: "Build an interactive dashboard with multiple charts" },
        { title: "Data Validation", description: "Set up data validation rules and error checking" },
        { title: "Conditional Formatting", description: "Apply rules to format cells based on values" },
        { title: "VLOOKUP Practice", description: "Master lookup functions for data retrieval" },
        { title: "Pivot Table Analysis", description: "Create and customize pivot tables for data analysis" },
        { title: "What-If Analysis", description: "Use goal seek and scenario manager" },
        { title: "Macro Recording", description: "Record simple macros to automate tasks" }
    ],
    3: [
        { title: "Company Overview", description: "Create a professional company presentation" },
        { title: "Product Launch", description: "Design a product launch presentation with animations" },
        { title: "Training Materials", description: "Create employee training presentation slides" },
        { title: "Data Storytelling", description: "Present data with compelling visuals" },
        { title: "Template Design", description: "Create custom presentation templates" },
        { title: "Slide Master", description: "Work with slide master for consistent formatting" }
    ],
    4: [
        { title: "Email Organization", description: "Set up folders and rules for email management" },
        { title: "Calendar Scheduling", description: "Manage appointments and meetings efficiently" },
        { title: "Contact Management", description: "Organize and categorize contacts" },
        { title: "Email Templates", description: "Create reusable email templates" },
        { title: "Meeting Coordination", description: "Schedule and manage team meetings" }
    ],
    5: [
        { title: "Excel to Word Report", description: "Import Excel data into Word reports" },
        { title: "PowerPoint Data Integration", description: "Link Excel charts to PowerPoint slides" },
        { title: "Outlook Calendar Integration", description: "Coordinate schedules across Office apps" },
        { title: "Shared Document Workflow", description: "Create collaborative workflows" },
        { title: "OneDrive Integration", description: "Work with cloud-stored Office files" },
        { title: "Teams Integration", description: "Use Office apps within Microsoft Teams" },
        { title: "Cross-Platform Access", description: "Access and edit files on multiple devices" }
    ],
    6: [
        { title: "VBA Macros", description: "Write custom macros with Visual Basic" },
        { title: "Power Automate", description: "Create automated workflows between Office apps" },
        { title: "Custom Add-ins", description: "Install and configure Office add-ins" },
        { title: "Advanced Formulas", description: "Master complex Excel formulas and arrays" },
        { title: "Template Libraries", description: "Build and share custom template libraries" },
        { title: "Document Properties", description: "Work with metadata and document properties" },
        { title: "Security Features", description: "Implement document security and protection" },
        { title: "Collaboration Tools", description: "Use co-authoring and sharing features" },
        { title: "Version Control", description: "Manage document versions and history" },
        { title: "Advanced Charts", description: "Create complex and interactive chart types" }
    ]
};

export default function MSOfficeToolsModule() {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [showExercise, setShowExercise] = useState(false);
    const [exerciseCompleted, setExerciseCompleted] = useState(false);

    const selectedChapter = chapters.find(ch => ch.id === currentChapter);
    const chapterExercises = interactiveExercises[currentChapter as keyof typeof interactiveExercises] || [];
    const ToolIcon = toolIcons[selectedChapter?.tool as keyof typeof toolIcons] || FileText;

    const handleChapterComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const handleExerciseComplete = () => {
        setExerciseCompleted(true);
        setTimeout(() => {
            if (currentExercise < chapterExercises.length - 1) {
                setCurrentExercise(currentExercise + 1);
                setExerciseCompleted(false);
            } else {
                setShowExercise(false);
                setCurrentExercise(0);
                setExerciseCompleted(false);
            }
        }, 2000);
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
                    <span className="text-foreground font-medium">MS Office Tools</span>
                </div>
            </div>

            {/* Module Header */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">MS Office Tools Mastery</h1>
                            <p className="text-orange-100">Become proficient in Microsoft Office suite</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{completedChapters.length} of {chapters.length} chapters completed</span>
                        </div>
                        <div className="w-full bg-orange-800/30 rounded-full h-3">
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
                                {chapters.map((chapter) => {
                                    const ChapterIcon = toolIcons[chapter.tool as keyof typeof toolIcons];
                                    return (
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
                                                        <ChapterIcon className="w-4 h-4" />
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium text-sm">Chapter {chapter.id}</div>
                                                    <div className="text-xs opacity-80 truncate">{chapter.title}</div>
                                                    <div className="text-xs opacity-60">{chapter.tool}</div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {completedChapters.length === chapters.length && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <div className="flex items-center gap-2 text-green-800 mb-2">
                                        <Award className="w-5 h-5" />
                                        <span className="font-semibold">Module Complete!</span>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">
                                        You've earned your Office Specialist badge
                                    </p>
                                    <button className="w-full bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download Badge
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
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                                <ToolIcon className="w-6 h-6 text-orange-600" />
                                            </div>
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
                                                        <PlayCircle className="w-4 h-4" />
                                                        {selectedChapter.exercises} exercises
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <FileText className="w-4 h-4" />
                                                        {selectedChapter.tool}
                                                    </div>
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
                                                    <FileText className="w-4 h-4 text-orange-600 flex-shrink-0" />
                                                    <span className="text-sm">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Exercises */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground">Hands-On Exercises</h3>
                                            <button
                                                onClick={() => setShowExercise(!showExercise)}
                                                className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2"
                                            >
                                                <PlayCircle className="w-4 h-4" />
                                                {showExercise ? 'Hide' : 'Start'} Exercises
                                            </button>
                                        </div>

                                        {showExercise && currentExercise < chapterExercises.length && (
                                            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <PlayCircle className="w-5 h-5 text-orange-600" />
                                                        <span className="text-sm font-semibold text-orange-800">
                                                            Exercise {currentExercise + 1} of {chapterExercises.length}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                                        {chapterExercises[currentExercise].title}
                                                    </h4>
                                                    <p className="text-muted-foreground mb-4">
                                                        {chapterExercises[currentExercise].description}
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-lg p-4 border border-orange-200">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                                            <ToolIcon className="w-4 h-4 text-orange-600" />
                                                        </div>
                                                        <span className="font-medium text-foreground">
                                                            {selectedChapter.tool} Interactive Environment
                                                        </span>
                                                    </div>
                                                    
                                                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300 text-center">
                                                        <ToolIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                                        <p className="text-gray-600 mb-4">
                                                            Interactive {selectedChapter.tool} environment would open here
                                                        </p>
                                                        <p className="text-sm text-gray-500 mb-4">
                                                            Follow the instructions to complete the exercise
                                                        </p>
                                                        <button
                                                            onClick={handleExerciseComplete}
                                                            className="px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                                                        >
                                                            Mark Exercise Complete
                                                        </button>
                                                    </div>
                                                </div>

                                                {exerciseCompleted && (
                                                    <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
                                                        <div className="flex items-center gap-2 text-green-800">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                            <span className="font-semibold">Exercise Complete!</span>
                                                        </div>
                                                        <p className="text-green-700 text-sm mt-1">
                                                            Great job! Moving to the next exercise...
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {showExercise && currentExercise >= chapterExercises.length && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                                    All Exercises Complete!
                                                </h4>
                                                <p className="text-green-700 mb-4">
                                                    You've successfully completed all exercises for this chapter.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrentExercise(0);
                                                        setShowExercise(false);
                                                    }}
                                                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                                >
                                                    Start New Chapter
                                                </button>
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
                                            className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8">
                                    <div className="text-center">
                                        <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-foreground mb-2">Master Office Productivity</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Complete this module and unlock advanced Office certifications, business process automation, and enterprise productivity training.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Apply to Study Further
                                            </button>
                                            <Link 
                                                href="/services/training"
                                                className="px-6 py-3 bg-white text-orange-600 border border-orange-200 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
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
        </div>
    );
}