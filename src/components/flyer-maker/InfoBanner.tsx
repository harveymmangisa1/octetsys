'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Info, X } from "lucide-react";
import { useState } from "react";

export function InfoBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-sm mb-8">
            <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-blue-900 text-lg">
                            16 Days of Activism Flyer Generator
                        </h3>
                        <p className="text-sm text-blue-800/90 mt-1">
                            Create a personalized flyer to show your support for the campaign against Gender-Based Violence. 
                            Follow the steps to upload a photo, choose a powerful quote, select a theme, and download your flyer to share on social media.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
