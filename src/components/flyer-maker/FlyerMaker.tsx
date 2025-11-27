'use client';
import { useFlyerState } from "@/lib/hooks/useFlyerState";
import { ProgressSteps } from "./ProgressSteps";
import { UploadSection } from "./UploadSection";
import { QuoteSelector } from "./QuoteSelector";
import { ThemeSelector } from "./ThemeSelector";
import { FlyerPreview } from "./FlyerPreview";
import { DownloadSection } from "./DownloadSection";
import { InfoBanner } from "./InfoBanner";

const steps = [
    { component: <UploadSection />, name: "Upload" },
    { component: <QuoteSelector />, name: "Quote" },
    { component: <ThemeSelector />, name: "Theme" },
    { component: <DownloadSection />, name: "Download" },
];

export function FlyerMaker() {
    const { step } = useFlyerState();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <InfoBanner />
                        
                        {/* Header */}
                        <div className="text-center mb-10 mt-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                                Social Media Flyer Creator
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Create professional, platform-optimized flyers in minutes
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                            {/* Preview - Left side */}
                            <div className="lg:col-span-5">
                                <div className="sticky top-8 transition-all duration-300 ease-in-out hover:scale-105">
                                    <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl shadow-lg">
                                        <FlyerPreview />
                                    </div>
                                </div>
                            </div>

                            {/* Steps - Right side */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl shadow-lg">
                                    <ProgressSteps />
                                </div>
                                
                                <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl shadow-lg">
                                    {steps[step - 1].component}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}