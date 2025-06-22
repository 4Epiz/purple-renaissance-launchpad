
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const LaunchEvents = () => {
  const launchEvents = [
    {
      title: "Grand Opening Festival",
      duration: "First 2 Weeks",
      status: "ACTIVE",
      description: "Epic celebration of Season 3 launch",
      activities: [
        "Daily login rewards with Season 3 exclusive items",
        "Massive treasure hunts across the new world", 
        "Building competitions for prime real estate",
        "PvP tournaments with legendary prizes"
      ]
    },
    {
      title: "Purple Moon Festival",
      duration: "Monthly",
      status: "UPCOMING",
      description: "Magical celebrations under special skies",
      activities: [
        "Magical sky events with enhanced spell casting",
        "Rare resource spawns during purple moon phases",
        "Community gatherings at the Great Wisteria Tree",
        "Special achievements only available during festivals"
      ]
    },
    {
      title: "Kingdom Founding Ceremonies", 
      duration: "Weekly",
      status: "ONGOING",
      description: "Witness the birth of new nations",
      activities: [
        "Official recognition of new kingdoms",
        "Diplomatic ceremonies and alliance signings",
        "Territory claiming events with special rewards",
        "Political roleplay events and elections"
      ]
    }
  ];

  const competitions = [
    {
      title: "First to Level 100",
      prize: "Legendary Title + Exclusive Items",
      status: "ACTIVE",
      description: "Race to maximum level with substantial rewards"
    },
    {
      title: "Most Innovative Build",
      prize: "Season 3 Hall of Fame",
      status: "MONTHLY",
      description: "Showcase creativity with Season 3 themes"
    },
    {
      title: "Community Choice Awards",
      prize: "Player Recognition",
      status: "ONGOING",
      description: "Voted by all players for various categories"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-slate-900/40 to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-amber-500 text-slate-900 mb-4">SEASON 3 EVENTS</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
            Launch Events & Activities
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Join epic celebrations, competitions, and community events as we launch into Season 3 together.
          </p>
        </div>

        {/* Launch Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🎉 Active Launch Events</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {launchEvents.map((event, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30 hover:border-amber-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${
                      event.status === 'ACTIVE' ? 'bg-green-500' : 
                      event.status === 'UPCOMING' ? 'bg-amber-500' : 'bg-purple-500'
                    } text-slate-900`}>
                      {event.status}
                    </Badge>
                    <span className="text-sm text-purple-300">{event.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-amber-400">{event.title}</CardTitle>
                  <CardDescription className="text-purple-200">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="text-sm text-purple-200 flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🏆 Season 3 Competitions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {competitions.map((comp, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 border-amber-500/40">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-amber-500 text-slate-900">{comp.status}</Badge>
                  </div>
                  <CardTitle className="text-lg text-amber-400">{comp.title}</CardTitle>
                  <CardDescription className="text-purple-200">{comp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-sm text-purple-300 mb-1">Prize:</div>
                    <div className="font-semibold text-amber-400">{comp.prize}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Calendar */}
        <Card className="bg-gradient-to-br from-purple-900/60 to-slate-800/60 border-purple-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-amber-400 flex items-center justify-center">
              <Calendar className="w-6 h-6 mr-2" />
              Season 3 Event Calendar
            </CardTitle>
            <CardDescription className="text-purple-200">
              Stay updated with all upcoming Season 3 events and activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-300">Weekly Events</h4>
                <div className="space-y-2 text-sm text-purple-200">
                  <p>• Monday: Kingdom Council Meetings</p>
                  <p>• Wednesday: Magic Training Sessions</p>
                  <p>• Friday: Community Build Days</p>
                  <p>• Sunday: PvP Tournament Qualifiers</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-purple-300">Special Events</h4>
                <div className="space-y-2 text-sm text-purple-200">
                  <p>• 1st of each month: Purple Moon Festival</p>
                  <p>• Mid-month: Innovation Expo</p>
                  <p>• Seasonal: Solstice World Events</p>
                  <p>• Random: Developer Q&A Sessions</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700">
                View Full Calendar
              </Button>
              <Button variant="outline" className="border-purple-500/30 text-purple-200 hover:bg-purple-500/20">
                Set Event Reminders
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
