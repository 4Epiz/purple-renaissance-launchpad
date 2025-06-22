
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const FeaturesShowcase = () => {
  const newFeatures = [
    {
      category: "Brand New World",
      icon: "🌍",
      features: [
        "Completely fresh 1.20.4 world with custom world generation",
        "Enhanced Wisteria Biomes with magical properties",
        "Pre-built spawn city featuring Season 3 architecture",
        "Hidden Season 3 exclusive dungeons and treasures"
      ]
    },
    {
      category: "Revolutionary Features",
      icon: "⚡",
      features: [
        "Season 3 Magic System: Discover 75+ new spells and enchantments",
        "Kingdoms & Politics: Establish nations, form alliances, wage epic wars",
        "Custom Professions: Master 15+ unique career paths with exclusive rewards",
        "Dynamic Weather: Seasons affect gameplay, crops, and exploration"
      ]
    },
    {
      category: "Enhanced Community",
      icon: "👥",
      features: [
        "Mentor System: Season veterans guide newcomers through exclusive programs",
        "Guild System: Form powerful alliances with shared goals and rewards",
        "Player-Driven Events: Community members can host official server events",
        "Season 3 Council: Player representatives influence server decisions"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-amber-500 text-slate-900 mb-4">NEW IN SEASON 3</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            What's New in Season 3
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Revolutionary gameplay mechanics, enhanced community features, and a completely fresh world to explore together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {newFeatures.map((category, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 border-purple-500/30 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl text-amber-400">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="text-purple-200 text-sm leading-relaxed flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                🏰 Season 3 Magic System
                <Badge className="ml-2 bg-amber-500 text-slate-900">EXCLUSIVE</Badge>
              </CardTitle>
              <CardDescription className="text-purple-200">
                The most comprehensive magic system ever implemented in Minecraft survival.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-purple-200">
                <p>• <strong className="text-amber-400">75+ Unique Spells:</strong> From simple utilities to world-changing rituals</p>
                <p>• <strong className="text-amber-400">Magical Schools:</strong> Elemental, Divine, Arcane, and Shadow magic trees</p>
                <p>• <strong className="text-amber-400">Reagent System:</strong> Collect rare materials to fuel powerful magic</p>
                <p>• <strong className="text-amber-400">Magical Artifacts:</strong> Season 3 exclusive items with unique properties</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-amber-500/50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 flex items-center">
                👑 Kingdoms & Politics
                <Badge className="ml-2 bg-amber-500 text-slate-900">NEW</Badge>
              </CardTitle>
              <CardDescription className="text-purple-200">
                Build empires, forge alliances, and shape the political landscape of Season 3.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-purple-200">
                <p>• <strong className="text-amber-400">Nation Building:</strong> Establish kingdoms with unique government systems</p>
                <p>• <strong className="text-amber-400">Diplomatic Relations:</strong> Form alliances, trade agreements, and peace treaties</p>
                <p>• <strong className="text-amber-400">Epic Warfare:</strong> Large-scale battles with siege weapons and tactics</p>
                <p>• <strong className="text-amber-400">Political Events:</strong> Elections, coronations, and diplomatic summits</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
