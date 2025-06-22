
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Play, Users, Calendar, Map, Book, Youtube } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { LegacySection } from "@/components/LegacySection";
import { LaunchEvents } from "@/components/LaunchEvents";
import { CommunitySection } from "@/components/CommunitySection";
import { GettingStarted } from "@/components/GettingStarted";

const Index = () => {
  const [onlinePlayers] = useState(847);
  const maxPlayers = 1000;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                WISTERIASMP
              </div>
              <Badge className="bg-amber-500 text-slate-900 font-bold">SEASON 3</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-purple-200 hover:text-amber-400 transition-colors">What's New</a>
              <a href="#events" className="text-purple-200 hover:text-amber-400 transition-colors">Events</a>
              <a href="#legacy" className="text-purple-200 hover:text-amber-400 transition-colors">Legacy</a>
              <a href="#guide" className="text-purple-200 hover:text-amber-400 transition-colors">Get Started</a>
              <Button className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700">
                Join Season 3
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-green-400 font-medium">
                {onlinePlayers}/{maxPlayers} Online
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Season 3 Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-amber-400 bg-clip-text text-transparent">
              The Purple Renaissance Begins
            </h2>
            <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              After 18 months of incredible adventures in Season 2, WisteriaSMP Season 3 emerges as our most ambitious chapter yet. 
              A completely fresh world with enhanced custom biomes, revolutionary gameplay mechanics, and the largest community in our history. 
              The Purple Renaissance has begun - will you be part of the legend?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 border-purple-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-400">1,000+</CardTitle>
                <CardDescription className="text-purple-200">Target Players Month 1</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 border-purple-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-400">100,000+</CardTitle>
                <CardDescription className="text-purple-200">Blocks New World Size</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 border-purple-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-400">200+</CardTitle>
                <CardDescription className="text-purple-200">Season 3 Exclusive Items</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 border-purple-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-400">12-18</CardTitle>
                <CardDescription className="text-purple-200">Months of Adventures</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Legacy Section */}
      <LegacySection />

      {/* Launch Events */}
      <LaunchEvents />

      {/* Community Section */}
      <CommunitySection />

      {/* Getting Started */}
      <GettingStarted />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                WisteriaSMP Season 3
              </h3>
              <p className="text-purple-200 text-sm">
                The Purple Renaissance - where legends are born and adventures never end.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-300">Quick Links</h4>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Server Rules</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Season 3 Guide</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Bug Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-300">Season 3 Info</h4>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><a href="#" className="hover:text-amber-400 transition-colors">What's New</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Launch Events</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Achievements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-300">Connect</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-200">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-200">
                  Discord
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-purple-500/20" />
          <div className="text-center text-sm text-purple-400">
            © 2024 WisteriaSMP Season 3. The Purple Renaissance continues...
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
