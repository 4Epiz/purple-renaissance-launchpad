
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export const CommunitySection = () => {
  const testimonials = [
    {
      quote: "I've been waiting 6 months for Season 3 - it's everything I hoped for and more!",
      author: "VeteranPlayer",
      role: "Season 2 Master Builder",
      highlight: "Season 3 exceeded all expectations"
    },
    {
      quote: "The new magic system completely changes how I play Minecraft. It's incredible!",
      author: "MagicMaster", 
      role: "Season 3 Spellcaster",
      highlight: "Revolutionary gameplay mechanics"
    },
    {
      quote: "Season 3's political system adds so much depth to the community experience.",
      author: "KingBuilder",
      role: "Kingdom Founder",
      highlight: "Enhanced community depth"
    }
  ];

  const communityStats = [
    { label: "Launch Day Logins", value: "1,247", description: "Record breaking first day" },
    { label: "Discord Members", value: "3,500+", description: "Active community hub" },
    { label: "Season 3 Builds", value: "450+", description: "Created in first week" },
    { label: "New Friendships", value: "∞", description: "Countless connections made" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-950/30 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-600 text-white mb-4">COMMUNITY</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            Join the Season 3 Community
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Be part of the most vibrant and welcoming Minecraft community. Season 3 brings players together like never before.
          </p>
        </div>

        {/* Community Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-purple-500/30 text-center hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-amber-400">{stat.value}</CardTitle>
                <CardDescription className="text-purple-300 font-medium">{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-200">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Player Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">💬 What Players Are Saying</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30 hover:border-amber-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl text-center mb-4">💜</div>
                  <CardDescription className="text-purple-200 italic text-center leading-relaxed">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="font-semibold text-amber-400">{testimonial.author}</div>
                  <div className="text-sm text-purple-300">{testimonial.role}</div>
                  <Badge className="mt-2 bg-purple-600 text-white text-xs">
                    {testimonial.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Discord Community Hub
              </CardTitle>
              <CardDescription className="text-purple-200">
                Join 3,500+ players in our active Discord server
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-purple-200 text-sm">
                <p>• <strong className="text-amber-400">Live Server Chat:</strong> Stay connected even when offline</p>
                <p>• <strong className="text-amber-400">Event Announcements:</strong> Never miss important Season 3 events</p>
                <p>• <strong className="text-amber-400">Trading Channels:</strong> Buy, sell, and trade with other players</p>
                <p>• <strong className="text-amber-400">Build Showcases:</strong> Share your amazing Season 3 creations</p>
                <p>• <strong className="text-amber-400">Voice Channels:</strong> Team up for adventures and building projects</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Discord Server
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">🎯 Season 3 Community Goals</CardTitle>
              <CardDescription className="text-purple-200">
                Achievements we're working toward together
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Reach 1,000 active players</span>
                  <Badge className="bg-green-500 text-slate-900">84%</Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-amber-500 h-2 rounded-full w-[84%]"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Build 100 kingdoms</span>
                  <Badge className="bg-amber-500 text-slate-900">23%</Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-amber-500 h-2 rounded-full w-[23%]"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-sm">Host 50 community events</span>
                  <Badge className="bg-purple-500 text-white">12%</Badge>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-amber-500 h-2 rounded-full w-[12%]"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join Call-to-Action */}
        <Card className="bg-gradient-to-r from-purple-900/80 to-amber-900/40 border-amber-500/50 text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-4 text-amber-400">Ready to Join Season 3?</h3>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              The Purple Renaissance is just beginning. Join thousands of players in the most ambitious 
              Minecraft survival experience ever created.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 text-lg">
                Start Playing Season 3
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-3 text-lg">
                Join Our Discord
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
