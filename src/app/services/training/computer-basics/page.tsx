'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Monitor, CheckCircle2, Download, BookOpen, Award, Clock, ChevronRight, ChevronLeft, PlayCircle, Cpu, HardDrive, Wifi, Mouse, Keyboard, Settings, Lock } from 'lucide-react';

interface Chapter {
    id: number;
    title: string;
    description: string;
    duration: string;
    completed: boolean;
    locked: boolean;
    topics: string[];
    activities: number;
}

const chapters: Chapter[] = [
    {
        id: 1,
        title: 'Computer Hardware Basics',
        description: 'Understanding the physical components that make up a computer system.',
        duration: '60 minutes',
        completed: false,
        locked: false,
        topics: ['CPU and processing', 'Memory (RAM)', 'Storage devices', 'Input/output devices', 'Motherboard'],
        activities: 6
    },
    {
        id: 2,
        title: 'Software Fundamentals',
        description: 'Learn about different types of software and how they work with hardware.',
        duration: '75 minutes',
        completed: false,
        locked: false,
        topics: ['Operating systems', 'Application software', 'System software', 'Software installation', 'Updates and maintenance'],
        activities: 8
    },
    {
        id: 3,
        title: 'File Management',
        description: 'Master organizing, finding, and managing your digital files effectively.',
        duration: '45 minutes',
        completed: false,
        locked: false,
        topics: ['File systems', 'Folders and directories', 'File types', 'Search and organization', 'Backup strategies'],
        activities: 5
    },
    {
        id: 4,
        title: 'Internet and Connectivity',
        description: 'Understand how computers connect to networks and access the internet.',
        duration: '50 minutes',
        completed: false,
        locked: false,
        topics: ['Network basics', 'Internet connections', 'Web browsers', 'Online safety', 'Troubleshooting connections'],
        activities: 6
    },
    {
        id: 5,
        title: 'Basic Troubleshooting',
        description: 'Learn to solve common computer problems and perform basic maintenance.',
        duration: '90 minutes',
        completed: false,
        locked: false,
        topics: ['Common issues', 'Diagnostic tools', 'System maintenance', 'Virus protection', 'When to get help'],
        activities: 10
    }
];

const interactiveActivities = {
    1: [
        { title: "Identify Computer Components", description: "Drag and drop labels to identify parts of a computer" },
        { title: "Build a Virtual PC", description: "Select compatible components to build a working computer" },
        { title: "Memory vs Storage Quiz", description: "Test your understanding of RAM vs storage differences" },
        { title: "Input/Output Matching", description: "Match devices to their input/output categories" },
        { title: "Processor Speed Comparison", description: "Compare different CPU specifications" },
        { title: "Port Identification", description: "Identify different computer ports and their uses" }
    ],
    2: [
        { title: "OS Feature Comparison", description: "Compare features of different operating systems" },
        { title: "Software Installation Simulation", description: "Practice installing software safely" },
        { title: "Application Categories", description: "Categorize different types of software" },
        { title: "System Settings Explorer", description: "Navigate system settings and control panels" },
        { title: "Software Update Process", description: "Learn how and when to update software" },
        { title: "License Types", description: "Understand different software licensing models" },
        { title: "Compatibility Checking", description: "Check software compatibility with systems" },
        { title: "Uninstallation Practice", description: "Properly remove unwanted software" }
    ],
    3: [
        { title: "Folder Structure Design", description: "Create an organized folder structure" },
        { title: "File Type Recognition", description: "Identify files by their extensions" },
        { title: "Search Techniques", description: "Practice advanced file searching" },
        { title: "File Organization Game", description: "Sort and organize messy digital files" },
        { title: "Backup Planning", description: "Create a personal backup strategy" }
    ],
    4: [
        { title: "Network Topology", description: "Understand different network layouts" },
        { title: "Browser Features Tour", description: "Explore web browser capabilities" },
        { title: "Connection Types", description: "Compare different internet connection options" },
        { title: "Online Safety Checklist", description: "Review safety practices for internet use" },
        { title: "Troubleshooting Connections", description: "Diagnose common connection problems" },
        { title: "Speed Test Analysis", description: "Understand internet speed test results" }
    ],
    5: [
        { title: "Problem Diagnosis", description: "Follow systematic troubleshooting steps" },
        { title: "Task Manager Practice", description: "Use system monitoring tools" },
        { title: "Virus Scan Simulation", description: "Practice running security scans" },
        { title: "System Cleanup", description: "Perform system maintenance tasks" },
        { title: "Error Message Decoding", description: "Understand common error messages" },
        { title: "Startup Management", description: "Control which programs start automatically" },
        { title: "Driver Update Practice", description: "Learn about hardware driver updates" },
        { title: "Safe Mode Usage", description: "Understand when and how to use safe mode" },
        { title: "System Restore", description: "Learn about system recovery options" },
        { title: "Help Resources", description: "Find and use technical support resources" }
    ]
};

export default function ComputerBasicsModule() {
    const [currentChapter, setCurrentChapter] = useState(1);
    const [completedChapters, setCompletedChapters] = useState<number[]>([]);
    const [currentActivity, setCurrentActivity] = useState(0);
    const [showActivity, setShowActivity] = useState(false);
    const [activityCompleted, setActivityCompleted] = useState(false);

    const selectedChapter = chapters.find(ch => ch.id === currentChapter);
    const chapterActivities = interactiveActivities[currentChapter as keyof typeof interactiveActivities] || [];

    const handleChapterComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const handleActivityComplete = () => {
        setActivityCompleted(true);
        setTimeout(() => {
            if (currentActivity < chapterActivities.length - 1) {
                setCurrentActivity(currentActivity + 1);
                setActivityCompleted(false);
            } else {
                setShowActivity(false);
                setCurrentActivity(0);
                setActivityCompleted(false);
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
                    <span className="text-foreground font-medium">Computer Basics</span>
                </div>
            </div>

            {/* Module Header */}
            <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Computer Basics</h1>
                            <p className="text-purple-100">Build essential computer literacy skills</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="max-w-2xl">
                        <div className="flex items-center justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{completedChapters.length} of {chapters.length} chapters completed</span>
                        </div>
                        <div className="w-full bg-purple-800/30 rounded-full h-3">
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
                                    const icons = [Cpu, Settings, HardDrive, Wifi, Monitor];
                                    const ChapterIcon = icons[chapter.id - 1];
                                    return (
                                        <button
                                            key={chapter.id}
                                            onClick={() => !chapter.locked && setCurrentChapter(chapter.id)}
                                            disabled={chapter.locked}
                                            className={`w-full text-left p-3 rounded-xl transition-all ${currentChapter === chapter.id
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
                                        You've earned your Computer Essentials badge
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
                                                    {selectedChapter.activities} activities
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
                                                    <Monitor className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                                    <span className="text-sm">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Activities */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground">Interactive Activities</h3>
                                            <button
                                                onClick={() => setShowActivity(!showActivity)}
                                                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
                                            >
                                                <PlayCircle className="w-4 h-4" />
                                                {showActivity ? 'Hide' : 'Start'} Activities
                                            </button>
                                        </div>

                                        {showActivity && currentActivity < chapterActivities.length && (
                                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <PlayCircle className="w-5 h-5 text-purple-600" />
                                                        <span className="text-sm font-semibold text-purple-800">
                                                            Activity {currentActivity + 1} of {chapterActivities.length}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                                        {chapterActivities[currentActivity].title}
                                                    </h4>
                                                    <p className="text-muted-foreground mb-4">
                                                        {chapterActivities[currentActivity].description}
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-lg p-6 border border-purple-200">
                                                    <div className="bg-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-300 text-center">
                                                        <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                                        <h5 className="text-lg font-semibold text-gray-600 mb-2">
                                                            Interactive Learning Environment
                                                        </h5>
                                                        <p className="text-gray-500 mb-6">
                                                            This would be an interactive simulation or activity
                                                        </p>
                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-center gap-4">
                                                                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                    <Mouse className="w-4 h-4 mr-2" />
                                                                    Click
                                                                </button>
                                                                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                    <Keyboard className="w-4 h-4 mr-2" />
                                                                    Type
                                                                </button>
                                                                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                                                    <HardDrive className="w-4 h-4 mr-2" />
                                                                    Drag
                                                                </button>
                                                            </div>
                                                            <button
                                                                onClick={handleActivityComplete}
                                                                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                                            >
                                                                Complete Activity
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {activityCompleted && (
                                                    <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
                                                        <div className="flex items-center gap-2 text-green-800">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                            <span className="font-semibold">Activity Complete!</span>
                                                        </div>
                                                        <p className="text-green-700 text-sm mt-1">
                                                            Great job! Moving to the next activity...
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {showActivity && currentActivity >= chapterActivities.length && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                                    All Activities Complete!
                                                </h4>
                                                <p className="text-green-700 mb-4">
                                                    You've successfully completed all activities for this chapter.
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        setCurrentActivity(0);
                                                        setShowActivity(false);
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
                                            className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8">
                                    <div className="text-center">
                                        <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-foreground mb-2">Advance Your Tech Skills</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Complete this module and unlock programming courses, network administration, and IT certification pathways.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Apply to Study Further
                                            </button>
                                            <Link
                                                href="/services/training"
                                                className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
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