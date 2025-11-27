'use client';
import { DownloadButton } from "./DownloadButton";
import { CheckCircle, Facebook, Instagram, Twitter } from "lucide-react";

export function DownloadSection() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                    Your Flyer is Ready!
                </h2>
                <p className="text-gray-600 mt-2">
                    Download your masterpiece and share it with the world.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Platform Optimized For
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Instagram className="w-6 h-6 text-pink-500" />
                            <div>
                                <div className="font-semibold">Instagram</div>
                                <div className="text-sm text-gray-500">4:5 Ratio</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Facebook className="w-6 h-6 text-blue-600" />
                            <div>
                                <div className="font-semibold">Facebook</div>
                                <div className="text-sm text-gray-500">1.91:1</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Twitter className="w-6 h-6 text-sky-500" />
                            <div>
                                <div className="font-semibold">Twitter</div>
                                <div className="text-sm text-gray-500">16:9</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Best Practices
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                            <span className="text-gray-700">
                                Post during peak hours for maximum engagement.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                            <span className="text-gray-700">
                                Use relevant hashtags to reach a wider audience.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                            <span className="text-gray-700">
                                Engage with your audience by responding to comments and messages.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <DownloadButton format="png" variant="primary" />
                    <DownloadButton format="jpg" variant="secondary" />
                </div>
            </div>
        </div>
    );
}