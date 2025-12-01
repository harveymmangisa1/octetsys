'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle2, Download, BookOpen, Award, Clock, ChevronRight, ChevronLeft, PlayCircle, Bot, Users, Zap, MessageSquare, Calendar, FileText, Sparkles } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
    topics: string[];
    demos: number;
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Introduction to AI Assistants',
        description: 'Explore AI-powered assistants and how they can boost your productivity.',
        duration: '60 minutes',
        completed: false,
        locked: false,
        topics: ['What are AI assistants?', 'ChatGPT and alternatives', 'Prompt engineering basics', 'AI ethics', 'Best practices'],
        demos: 5
    },
    {
        id: 2,
        title: 'Team Collaboration Platforms',
        description: 'Master modern collaboration tools for effective teamwork.',
        duration: '75 minutes',
        completed: false,
        locked: false,
        topics: ['Microsoft Teams', 'Slack', 'Project management tools', 'Video conferencing', 'Document collaboration'],
        demos: 6
    },
    {
        id: 3,
        title: 'AI-Powered Productivity',
        description: 'Leverage AI to automate tasks and enhance your workflow.',
        duration: '90 minutes',
        completed: false,
        locked: false,
        topics: ['AI writing assistants', 'Automated scheduling', 'Email automation', 'Smart calendars', 'Task management AI'],
        demos: 8
    },
    {
        id: 4,
        title: 'Future-Ready Skills',
        description: 'Prepare for the future of work with emerging technologies.',
        duration: '75 minutes',
        completed: false,
        locked: false,
        topics: ['AI integration strategies', 'Digital transformation', 'Remote work tools', 'Continuous learning', 'Adaptability skills'],
        demos: 6
    }
];

const interactiveDemos = {
    1: [
        { title: "AI Chat Interface", description: "Practice conversing with AI assistants" },
        { title: "Prompt Writing Workshop", description: "Craft effective prompts for better AI responses" },
        { title: "AI Ethics Scenarios", description: "Navigate ethical dilemmas in AI usage" },
        { title: "Tool Comparison", description: "Compare different AI assistant capabilities" },
        { title: "Integration Practice", description: "Learn to integrate AI into daily workflows" }
    ],
    2: [
        { title: "Virtual Team Meeting", description: "Participate in a simulated team collaboration" },
        { title: "Project Setup", description: "Create and manage a team project" },
        { title: "Communication Channels", description: "Organize team communication effectively" },
        { title: "File Collaboration", description: "Practice real-time document editing" },
        { title: "Task Assignment", description: "Distribute and track team tasks" },
        { title: "Meeting Scheduling", description: "Coordinate team schedules efficiently" }
    ],
    3: [
        { title: "AI Writing Assistant", description: "Use AI to improve your writing" },
        { title: "Smart Calendar Setup", description: "Configure AI-powered scheduling" },
        { title: "Email Automation", description: "Set up automated email responses" },
        { title: "Task Prioritization", description: "Let AI help organize your priorities" },
        { title: "Document Summarization", description: "Use AI to summarize long documents" },
        { title: "Meeting Transcription", description: "Practice AI-powered meeting notes" },
        { title: "Workflow Automation", description: "Create automated productivity workflows" },
        { title: "AI Research Assistant", description: "Use AI for information gathering" }
    ],
    4: [
        { title: "Digital Skills Assessment", description: "Evaluate your future-ready skills" },
        { title: "AI Strategy Planning", description: "Develop a personal AI integration plan" },
        { title: "Remote Work Setup", description: "Optimize your remote work environment" },
        { title: "Learning Path Creation", description: "Design your continuous learning journey" },
        { title: "Technology Adaptation", description: "Practice adapting to new technologies" },
        { title: "Future Scenario Planning", description: "Prepare for future workplace changes" }
    ]
};

export default function AICollaborationToolsModule() {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [currentDemo, setCurrentDemo] = useState(0);
    const [showDemo, setShowDemo] = useState(false);
    const [demoCompleted, setDemoCompleted] = useState(false);

    const selectedChapter = chapters.find(ch => ch.id === currentChapter);
    const chapterDemos = interactiveDemos[currentChapter as keyof typeof interactiveDemos] || [];

    const handleChapterComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const handleDemoComplete = () => {
        setDemoCompleted(true);
        setTimeout(() => {
            if (currentDemo < chapterDemos.length - 1) {
                setCurrentDemo(currentDemo + 1);
                setDemoCompleted(false);
            } else {
                setShowDemo(false);
                setCurrentDemo(0);
                setDemoCompleted(false);
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
                    <span className="text-foreground font-medium">AI and Collaboration Tools</span>
                </div>
            </div>

            {/* Module Header */}
            <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                            <Brain className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">AI and Collaboration Tools</h1>
                            <p className="text-pink-100">Master cutting-edge productivity and teamwork technologies</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{completedChapters.length} of {chapters.length} chapters completed</span>
                        </div>
                        <div className="w-full bg-pink-800/30 rounded-full h-3">
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
                                    const icons = [Bot, Users, Zap, Sparkles];
                                    const ChapterIcon = icons[chapter.id - 1];
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
                                        You've earned your AI Tools Proficient badge
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
                                                    {selectedChapter.demos} demos
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
                                                    <Brain className="w-4 h-4 text-pink-600 flex-shrink-0" />
                                                    <span className="text-sm">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Demos */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground">Interactive Demos</h3>
                                            <button
                                                onClick={() => setShowDemo(!showDemo)}
                                                className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2"
                                            >
                                                <PlayCircle className="w-4 h-4" />
                                                {showDemo ? 'Hide' : 'Start'} Demos
                                            </button>
                                        </div>

                                        {showDemo && currentDemo < chapterDemos.length && (
                                            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <PlayCircle className="w-5 h-5 text-pink-600" />
                                                        <span className="text-sm font-semibold text-pink-800">
                                                            Demo {currentDemo + 1} of {chapterDemos.length}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                                        {chapterDemos[currentDemo].title}
                                                    </h4>
                                                    <p className="text-muted-foreground mb-4">
                                                        {chapterDemos[currentDemo].description}
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-lg p-6 border border-pink-200">
                                                    <div className="bg-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
                                                        <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                                        <h5 className="text-lg font-semibold text-gray-600 mb-2">
                                                            Interactive Demo Environment
                                                        </h5>
                                                        <p className="text-gray-500 mb-6">
                                                            This would be an interactive demonstration of the tool or concept
                                                        </p>
                                                        
                                                        {/* Simulated Interface */}
                                                        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6 text-left">
                                                            <div className="flex items-center gap-2 mb-3">
                                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                                <span className="text-sm text-gray-500 ml-2">Demo Interface</span>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                                                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                                                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-3 justify-center">
                                                            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                <MessageSquare className="w-4 h-4 mr-2" />
                                                                Interact
                                                            </button>
                                                            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                <Calendar className="w-4 h-4 mr-2" />
                                                                Schedule
                                                            </button>
                                                            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                <FileText className="w-4 h-4 mr-2" />
                                                                Create
                                                            </button>
                                                        </div>
                                                        
                                                        <button
                                                            onClick={handleDemoComplete}
                                                            className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
                                                        >
                                                            Complete Demo
                                                        </button>
                                                    </div>
                                                </div>

                                                {demoCompleted && (
                                                    <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
                                                        <div className="flex items-center gap-2 text-green-800">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                            <span className="font-semibold">Demo Complete!</span>
                                                        </div>
                                                        <p className="text-green-700 text-sm mt-1">
                                                            Excellent! Moving to the next demo...
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {showDemo && currentDemo >= chapterDemos.length && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                                    All Demos Complete!
                                                </h4>
                                                <p className="text-green-700 mb-4">
                                                    You've successfully completed all demos for this chapter.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrentDemo(0);
                                                        setShowDemo(false);
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
                                            className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                                <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-2xl p-8">
                                    <div className="text-center">
                                        <Brain className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-foreground mb-2">Become Future-Ready</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Complete this module and unlock advanced AI certifications, digital transformation strategies, and cutting-edge technology courses.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Apply to Study Further
                                            </button>
                                            <Link 
                                                href="/services/training"
                                                className="px-6 py-3 bg-white text-pink-600 border border-pink-200 rounded-xl font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
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