
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const LegacySection = () => {
  const season2Stats = [
    { label: "Total Players", value: "8,500+", description: "Amazing builders and adventurers" },
    { label: "Epic Builds", value: "2,000+", description: "Legendary creations preserved" },
    { label: "Months Active", value: "18", description: "Of continuous adventures" },
    { label: "Community Events", value: "150+", description: "Memorable moments shared" }
  ];

  const veteranRewards = [
    "Exclusive Season 2 Veteran titles and cosmetics",
    "Early access perks and special spawn privileges", 
    "Season 2 memorial items and collectibles",
    "Veteran-only areas and exclusive content",
    "Legacy achievement badges and recognition",
    "Special Discord roles and community standing"
  ];

  return (
    <section id="legacy" className="py-20 px-4 bg-gradient-to-b from-purple-950/20 to-slate-900/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-600 text-white mb-4">SEASON 2 LEGACY</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            Honoring Our Season 2 Heroes
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Season 2 was an incredible 18-month journey that shaped WisteriaSMP into the legendary server it is today. 
            We celebrate every player who contributed to that amazing chapter while looking forward to Season 3's adventures.
          </p>
        </div>

        {/* Season 2 Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {season2Stats.map((stat, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-purple-500/30 text-center">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hall of Fame */}
          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                🏆 Season 2 Hall of Fame
              </CardTitle>
              <CardDescription className="text-purple-200">
                Celebrating the legends who made Season 2 unforgettable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-300 mb-2">🏰 Master Builders</h4>
                <p className="text-sm text-purple-200">Creators of the Grand Citadel, Floating Gardens, and the legendary Season 2 spawn city</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-300 mb-2">⚔️ PvP Champions</h4>
                <p className="text-sm text-purple-200">Winners of the Great War of Season 2 and tournament champions</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-300 mb-2">🌟 Community Leaders</h4>
                <p className="text-sm text-purple-200">Players who organized events, helped newcomers, and built our amazing community</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700">
                View Full Hall of Fame
              </Button>
            </CardContent>
          </Card>

          {/* Veteran Rewards */}
          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                🎁 Season 2 Veteran Rewards
                <Badge className="ml-2 bg-amber-500 text-slate-900">EXCLUSIVE</Badge>
              </CardTitle>
              <CardDescription className="text-purple-200">
                Special recognition for our Season 2 veterans joining Season 3
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {veteranRewards.map((reward, idx) => (
                  <li key={idx} className="text-purple-200 text-sm flex items-start">
                    <span className="text-amber-400 mr-2">✨</span>
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-amber-400 font-medium text-sm">
                  🔑 Season 2 veterans will be automatically recognized when they join Season 3 with their original username!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transition Message */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-900/40 to-amber-900/40 border-purple-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">From Season 2 to Season 3</h3>
              <p className="text-purple-200 mb-6 leading-relaxed">
                While we start fresh in Season 3 with a new world and exciting features, the friendships, 
                memories, and community spirit from Season 2 carry forward. Your legacy lives on, and your 
                experience makes Season 3 even better for everyone.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-amber-400 font-semibold">✓ Player Ranks</div>
                  <div className="text-purple-300">Carry forward</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-400 font-semibold">✓ Friend Lists</div>
                  <div className="text-purple-300">Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-400 font-semibold">✓ Experience</div>
                  <div className="text-purple-300">Invaluable</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
