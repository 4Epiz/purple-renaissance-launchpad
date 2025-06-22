
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Calendar, Map } from "lucide-react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.wisteriasmp.com";

  const copyServerIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%238B5CF6" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Season 3 Announcement Badge */}
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-lg px-6 py-2 animate-bounce">
            🎉 SEASON 3 IS NOW LIVE! 🎉
          </Badge>
        </div>

        {/* Main Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            WISTERIASMP
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            SEASON 3
          </div>
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light animate-fade-in">
          The Purple Renaissance Begins
        </p>
        <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join 1,000+ players in the most ambitious Minecraft survival experience ever created. 
          Fresh world, revolutionary features, endless possibilities.
        </p>

        {/* Server IP */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-md rounded-xl px-6 py-4 border border-purple-500/30">
            <span className="text-purple-200 mr-4">Server IP:</span>
            <code className="text-amber-400 text-xl font-mono mr-4">{serverIP}</code>
            <Button
              onClick={copyServerIP}
              variant="outline"
              size="sm"
              className="border-purple-500/30 text-purple-200 hover:bg-purple-500/20"
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 text-lg">
            <Play className="w-5 h-5 mr-2" />
            Join Season 3 Now
          </Button>
          <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-3 text-lg">
            <Play className="w-5 h-5 mr-2" />
            Watch Season 3 Trailer
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/30 text-purple-200 hover:bg-purple-500/20 px-8 py-3 text-lg">
            <Users className="w-5 h-5 mr-2" />
            Join Discord
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">847</div>
            <div className="text-sm text-purple-300">Online Now</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">1.20.4</div>
            <div className="text-sm text-purple-300">Latest Version</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">0 Days</div>
            <div className="text-sm text-purple-300">Since Launch</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">New</div>
            <div className="text-sm text-purple-300">Fresh World</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full">
          <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
