'use client';
import { useFlyerState } from "@/lib/hooks/useFlyerState";
import { ProgressSteps } from "./ProgressSteps";
import { UploadSection } from "./UploadSection";
import { QuoteSelector } from "./QuoteSelector";
import { ThemeSelector } from "./ThemeSelector";
import { FlyerPreview } from "./FlyerPreview";
import { DownloadButton } from "./DownloadButton";
import { InfoBanner } from "./InfoBanner";

export function FlyerMaker() {
    const { step } = useFlyerState();

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <InfoBanner />
                
                {/* Clean Minimal Header */}
                <div className="text-center mb-10 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                        Social Media Flyer Creator
                    </h1>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        Create professional, platform-optimized flyers in minutes
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-8">
                    {/* Preview - Left side */}
                    <div className="xl:col-span-5">
                        <div className="sticky top-8">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                                <FlyerPreview />
                            </div>
                        </div>
                    </div>

                    {/* Steps - Right side */}
                    <div className="xl:col-span-7 space-y-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                            <ProgressSteps />
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                            {step === 1 && <UploadSection />}
                            {step === 2 && <QuoteSelector />}
                            {step === 3 && <ThemeSelector />}
                            {step === 4 && <DownloadSection />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DownloadSection() {
    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Ready to Share
                </h2>
                <p className="text-slate-600">
                    Your flyer is optimized and ready for social media
                </p>
            </div>
            
            {/* Platform optimization info */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm">
                    Platform Optimized For
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                    <div className="text-center">
                        <div className="font-semibold text-slate-900 mb-1">Instagram</div>
                        <div className="text-xs">4:5 Ratio</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-900 mb-1">Facebook</div>
                        <div className="text-xs">1.91:1</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-900 mb-1">Twitter</div>
                        <div className="text-xs">16:9</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-900 mb-1">Pinterest</div>
                        <div className="text-xs">2:3</div>
                    </div>
                </div>
            </div>

            {/* Download buttons */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <DownloadButton format="png" variant="primary">
                        Download PNG
                    </DownloadButton>
                    <DownloadButton format="jpg" variant="secondary">
                        Download JPG
                    </DownloadButton>
                </div>
                
                {/* Posting tips */}
                <div className="text-center pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-2">
                        Post during peak hours for maximum engagement
                    </p>
                    <div className="flex justify-center gap-2 text-xs">
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">#BestPractices</span>
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">#SocialMedia</span>
                    </div>
                </div>
            </div>
        </div>
    );
}