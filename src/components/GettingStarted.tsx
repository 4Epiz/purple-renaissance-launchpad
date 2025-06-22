
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Book, Users, Map } from "lucide-react";

export const GettingStarted = () => {
  const newPlayerSteps = [
    {
      step: 1,
      title: "Connect to Season 3",
      description: "Join play.wisteriasmp.com with Minecraft 1.20.4",
      details: "Make sure you have the latest version for the best Season 3 experience"
    },
    {
      step: 2, 
      title: "Complete Tutorial",
      description: "Learn Season 3 basics and receive your starter kit",
      details: "Guided introduction to new magic system and kingdom mechanics"
    },
    {
      step: 3,
      title: "Choose Your Path",
      description: "Pick a starting profession and join a community",
      details: "15+ unique career paths with exclusive Season 3 rewards"
    },
    {
      step: 4,
      title: "Build Your Legacy",
      description: "Claim land, build your home, and start your Season 3 adventure",
      details: "Unlimited possibilities in our fresh, expansive world"
    }
  ];

  const veteranTips = [
    "Season 3 veterans receive exclusive welcome packages upon first login",
    "Your Season 2 rank and achievements carry forward with special recognition",
    "Early access to premium building locations for established players",
    "Mentor rewards for helping newcomers learn Season 3 systems"
  ];

  const survivalTips = [
    {
      category: "Season 3 Magic",
      icon: "✨",
      tips: [
        "Start with Elemental magic school for easier resource gathering",
        "Collect magical reagents from new Season 3 biomes",
        "Practice spell combinations for powerful effects"
      ]
    },
    {
      category: "Kingdom Politics",
      icon: "👑", 
      tips: [
        "Join an established kingdom or found your own with 5+ members",
        "Participate in diplomatic events for special rewards",
        "Build alliances early for protection and trade benefits"
      ]
    },
    {
      category: "Economy & Trading",
      icon: "💰",
      tips: [
        "Season 3 introduces new valuable resources and items",
        "Set up shop in kingdom trading districts for best visibility",
        "Participate in weekly market events for bonus profits"
      ]
    }
  ];

  return (
    <section id="guide" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-purple-950/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-green-500 text-slate-900 mb-4">GET STARTED</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            Your Season 3 Journey Begins
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Whether you're new to WisteriaSMP or a returning veteran, here's everything you need to know to thrive in Season 3.
          </p>
        </div>

        {/* New Player Guide */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-green-900/40 to-slate-800/40 border-green-500/30 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-400 flex items-center justify-center">
                <Users className="w-6 h-6 mr-2" />
                New to WisteriaSMP? Welcome!
              </CardTitle>
              <CardDescription className="text-purple-200">
                Your first 24 hours in Season 3 - a complete getting started guide
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newPlayerSteps.map((step, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30 hover:border-green-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-green-400">{step.title}</CardTitle>
                  <CardDescription className="text-purple-200 text-sm">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-purple-300 text-center">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Veteran Guide */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-amber-900/40 to-slate-800/40 border-amber-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                <Book className="w-6 h-6 mr-2" />
                Season 2 Veterans - What's New for You
              </CardTitle>
              <CardDescription className="text-purple-200">
                Transitioning from Season 2 to Season 3 - key changes and veteran benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-amber-400 mb-4">🎁 Veteran Benefits</h4>
                  <ul className="space-y-2">
                    {veteranTips.map((tip, idx) => (
                      <li key={idx} className="text-purple-200 text-sm flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-4">🔄 What's Changed</h4>
                  <div className="space-y-3 text-sm text-purple-200">
                    <p>• <strong className="text-amber-400">Magic System:</strong> Completely new spell casting mechanics</p>
                    <p>• <strong className="text-amber-400">Kingdoms:</strong> Political system replaces old factions</p>
                    <p>• <strong className="text-amber-400">Economy:</strong> New items and trading systems</p>
                    <p>• <strong className="text-amber-400">World:</strong> Fresh map with enhanced biomes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Survival Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">
            <Map className="w-6 h-6 inline mr-2" />
            Season 3 Survival Tips
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {survivalTips.map((category, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg text-amber-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="text-purple-200 text-sm flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Start Actions */}
        <Card className="bg-gradient-to-r from-purple-900/60 to-amber-900/30 border-purple-500/30 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Ready to Start Your Season 3 Adventure?</h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Join thousands of players already exploring the new world, mastering magic, and building kingdoms in Season 3.
            </p>
            <Separator className="my-6 bg-purple-500/20" />
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="font-bold text-amber-400">Server IP</div>
                <div className="text-purple-200 font-mono">play.wisteriasmp.com</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-amber-400">Version</div>
                <div className="text-purple-200">Minecraft 1.20.4</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-amber-400">Status</div>
                <div className="text-green-400">Season 3 Live!</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3">
                Join Season 3 Now
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-3">
                Download Season 3 Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
