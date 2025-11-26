import { Shield, AlertTriangle, Users, MessageSquare } from "lucide-react";

export function CyberViolenceHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Shield className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Report Cyber Violence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your voice matters. Share your experience anonymously and help us create a safer digital space for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <AlertTriangle className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Safe & Anonymous</h3>
              <p className="text-sm text-blue-100">
                Your identity is protected. No personal information required.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Support Community</h3>
              <p className="text-sm text-blue-100">
                Join others in raising awareness about cyber violence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MessageSquare className="h-8 w-8 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Be Heard</h3>
              <p className="text-sm text-blue-100">
                Your experience helps us understand and combat online abuse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}