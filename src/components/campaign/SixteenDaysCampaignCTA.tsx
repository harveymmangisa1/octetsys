import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, FileText, Shield, ArrowRight, Calendar, Flame } from "lucide-react";
import Link from "next/link";

export function SixteenDaysCampaignCTA() {
  return (
    <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white border-0 shadow-2xl">
      <CardHeader className="text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Flame className="h-8 w-8 text-yellow-300 animate-pulse" />
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 text-sm font-bold px-3 py-1">
              URGENT: 16 DAYS CAMPAIGN
            </Badge>
            <Flame className="h-8 w-8 text-yellow-300 animate-pulse" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
            Join Us to Bring Awareness to Digital Violence
          </CardTitle>
          <CardDescription className="text-lg text-orange-100 max-w-3xl mx-auto">
            For the next 16 days, we're taking a stand against cyber violence. 
            Create awareness flyers and share your story to help protect our digital communities.
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-8">
        {/* Campaign Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">16 Days</div>
            <div className="text-sm text-orange-100">Of Activism</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">Together</div>
            <div className="text-sm text-orange-100">We Can Stop It</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold">Act Now</div>
            <div className="text-sm text-orange-100">Save Lives</div>
          </div>
        </div>

        {/* Dual Action CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flyer Maker CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-3">Create Awareness Flyers</h3>
            <p className="text-sm text-orange-100 mb-4">
              Design powerful flyers to spread awareness about digital violence in your community.
            </p>
            <Link href="/flyer-maker">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold">
                Create Flyer Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Anonymous Report CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl font-bold mb-3">Share Your Story</h3>
            <p className="text-sm text-orange-100 mb-4">
              Report cyber violence anonymously. Your voice can help others and create change.
            </p>
            <Link href="/report-cyber-violence">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold">
                Report Anonymously
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
            <span className="font-bold text-yellow-300">TIME SENSITIVE</span>
            <AlertTriangle className="h-5 w-5 text-yellow-300" />
          </div>
          <p className="text-sm text-orange-100">
            Digital violence affects millions worldwide. This 16-day campaign is our chance to make a real difference. 
            Every flyer created and every story shared brings us closer to a safer digital world for everyone.
          </p>
        </div>

        {/* Campaign Hashtag */}
        <div className="text-center">
          <Badge className="bg-white/20 hover:bg-white/30 text-white text-lg px-6 py-2">
            #16DaysAgainstDigitalViolence
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}