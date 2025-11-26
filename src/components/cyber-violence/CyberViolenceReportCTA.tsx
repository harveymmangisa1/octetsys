import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CyberViolenceReportCTA() {
  return (
    <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 dark:from-red-950/20 dark:to-pink-950/20 dark:border-red-800">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <Shield className="h-6 w-6 text-red-600" />
        </div>
        <CardTitle className="text-2xl text-red-800 dark:text-red-200">
          Experiencing Cyber Violence?
        </CardTitle>
        <CardDescription className="text-red-600 dark:text-red-300">
          You're not alone. Share your experience anonymously and help us create a safer digital space.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Anonymous</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">Safe</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Confidential</div>
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MessageSquare className="h-4 w-4" />
            <span>Your voice matters. Every report helps us understand and combat online abuse.</span>
          </div>
        </div>

        <Link href="/report-cyber-violence">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
            <Shield className="h-4 w-4 mr-2" />
            Report Anonymously
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          No personal information required. Completely confidential reporting system.
        </p>
      </CardContent>
    </Card>
  );
}