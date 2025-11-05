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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <InfoBanner />
                
                {/* Header with modern gradient */}
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Social Media Flyer Creator
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Create stunning, platform-optimized flyers that stand out in any feed
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-8">
                    {/* Preview - Now on left for better visual hierarchy */}
                    <div className="xl:col-span-5">
                        <div className="sticky top-8">
                            <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20">
                                <FlyerPreview />
                            </div>
                        </div>
                    </div>

                    {/* Steps - On right */}
                    <div className="xl:col-span-7 space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                            <ProgressSteps />
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
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
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    Ready to Share! 🎉
                </h2>
                <p className="text-slate-600 text-lg">
                    Your social media flyer is optimized and ready for posting
                </p>
            </div>
            
            {/* Platform optimization tips */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 mb-6">
                <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    Platform Optimized
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
                    <div className="text-center">
                        <div className="font-semibold text-slate-800">Instagram</div>
                        <div>1:1 & 4:5 Ratio</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-800">Facebook</div>
                        <div>1.91:1 Ratio</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-800">Twitter</div>
                        <div>16:9 Ratio</div>
                    </div>
                    <div className="text-center">
                        <div className="font-semibold text-slate-800">Pinterest</div>
                        <div>2:3 Ratio</div>
                    </div>
                </div>
            </div>

            {/* Download options with modern buttons */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <DownloadButton format="png" variant="primary">
                        <span className="flex items-center gap-2">
                            📥 Download PNG
                        </span>
                    </DownloadButton>
                    <DownloadButton format="jpg" variant="secondary">
                        <span className="flex items-center gap-2">
                            🖼️ Download JPG
                        </span>
                    </DownloadButton>
                </div>
                
                {/* Social sharing suggestions */}
                <div className="text-center pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 mb-3">
                        Pro tip: Post during peak engagement hours for maximum reach
                    </p>
                    <div className="flex justify-center gap-2 text-xs">
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">#BestTimeToPost</span>
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">#SocialMediaTips</span>
                    </div>
                </div>
            </div>
        </div>
    );
}