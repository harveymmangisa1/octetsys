
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <InfoBanner />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                <div className="lg:col-span-7 space-y-8">
                    <ProgressSteps />
                    
                    {step === 1 && <UploadSection />}
                    {step === 2 && <QuoteSelector />}
                    {step === 3 && <ThemeSelector />}
                    {step === 4 && <DownloadSection />}

                </div>
                <div className="lg:col-span-5">
                    <div className="sticky top-24">
                       <FlyerPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DownloadSection() {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
             <h2 className="text-2xl font-bold text-slate-800 mb-4">Review & Download</h2>
             <p className="text-slate-600 mb-6">Your flyer is ready! Review the preview and select a format to download.</p>
            <DownloadButton />
        </div>
    )
}
