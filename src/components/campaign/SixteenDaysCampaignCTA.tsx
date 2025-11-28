import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, FileText, Shield, ArrowRight, Calendar, Flame, Sparkles } from "lucide-react";
import Link from "next/link";

export function SixteenDaysCampaignCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 rounded-3xl shadow-2xl">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Flame className="h-10 w-10 text-yellow-300 animate-bounce" />
            <Badge className="bg-yellow-400 text-black hover:bg-yellow-300 text-base font-bold px-5 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 inline mr-2" />
              URGENT: 16 DAYS CAMPAIGN
            </Badge>
            <Flame className="h-10 w-10 text-yellow-300 animate-bounce delay-150" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join Us to Bring Awareness to
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200">
              Digital Violence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-orange-50 max-w-4xl mx-auto leading-relaxed font-light">
            For the next 16 days, we're taking a stand against cyber violence.
            Create awareness flyers and share your story to help protect our digital communities.
          </p>
        </div>

        {/* Campaign Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-yellow-300 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-bold text-white mb-2">16 Days</div>
            <div className="text-base text-orange-100 font-medium">Of Activism</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Users className="h-12 w-12 mx-auto mb-4 text-yellow-300 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-bold text-white mb-2">Together</div>
            <div className="text-base text-orange-100 font-medium">We Can Stop It</div>
          </div>

          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-300 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-bold text-white mb-2">Act Now</div>
            <div className="text-base text-orange-100 font-medium">Save Lives</div>
          </div>
        </div>

        {/* Dual Action CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Flyer Maker CTA */}
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-yellow-400/20 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-16 w-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Create Awareness Flyers</h3>
              <p className="text-base text-orange-100 mb-6 flex-grow leading-relaxed">
                Design powerful flyers to spread awareness about digital violence in your community. Make your voice heard.
              </p>
              <Link href="/flyer-maker" className="w-full">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                  Create Flyer Now
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Anonymous Report CTA */}
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center h-full">
              <div className="bg-yellow-400/20 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-16 w-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Share Your Story</h3>
              <p className="text-base text-orange-100 mb-6 flex-grow leading-relaxed">
                Report cyber violence anonymously. Your voice can help others and create change. You are not alone.
              </p>
              <Link href="/report-cyber-violence" className="w-full">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                  Report Anonymously
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-300 animate-pulse" />
            <span className="font-bold text-yellow-300 text-xl tracking-wide">TIME SENSITIVE</span>
            <AlertTriangle className="h-6 w-6 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-center text-lg text-orange-50 leading-relaxed max-w-3xl mx-auto">
            Digital violence affects millions worldwide. This 16-day campaign is our chance to make a real difference.
            Every flyer created and every story shared brings us closer to a safer digital world for everyone.
          </p>
        </div>

        {/* Campaign Hashtag */}
        <div className="text-center">
          <Badge className="bg-white/20 hover:bg-white/30 text-white text-xl px-8 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl transition-all">
            #16DaysAgainstDigitalViolence
          </Badge>
        </div>
      </div>
    </section>
  );
}