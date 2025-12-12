import { Search, Droplets, Leaf, Sun, Download, Play, WifiOff, ChevronRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const categories = [
  { id: "drought", label: "Drought Tips", icon: Sun, color: "bg-warning/10 text-warning" },
  { id: "water", label: "Water Saving", icon: Droplets, color: "bg-primary/10 text-primary" },
  { id: "farming", label: "Farming Advice", icon: Leaf, color: "bg-accent/10 text-accent" },
];

const articles = [
  {
    id: 1,
    title: "5 Ways to Conserve Water During Drought",
    summary: "Learn essential techniques to reduce water usage while maintaining crop health.",
    category: "water",
    hasAudio: true,
    isOffline: true,
    readTime: "3 min",
  },
  {
    id: 2,
    title: "Drought-Resistant Crop Varieties",
    summary: "Discover crops that thrive with minimal water and high temperatures.",
    category: "farming",
    hasAudio: true,
    isOffline: false,
    readTime: "5 min",
  },
  {
    id: 3,
    title: "Early Warning Signs of Drought Stress",
    summary: "Identify plant stress before it's too late with these visual indicators.",
    category: "drought",
    hasAudio: false,
    isOffline: true,
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Rainwater Harvesting Basics",
    summary: "Simple methods to collect and store rainwater for dry periods.",
    category: "water",
    hasAudio: true,
    isOffline: false,
    readTime: "6 min",
  },
];

const tutorialSteps = [
  { step: 1, title: "Check soil moisture", icon: "💧" },
  { step: 2, title: "Assess plant health", icon: "🌱" },
  { step: 3, title: "Apply mulching", icon: "🍂" },
  { step: 4, title: "Water at optimal time", icon: "⏰" },
];

const KnowledgeBase = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "water": return "bg-primary/10 text-primary border-primary/30";
      case "farming": return "bg-accent/10 text-accent border-accent/30";
      case "drought": return "bg-warning/10 text-warning border-warning/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-secondary p-6 pt-12">
        <h1 className="text-2xl font-bold text-foreground">Knowledge Base</h1>
        <p className="text-foreground/70 text-sm mt-1">Learn farming tips that work offline</p>
      </div>

      <div className="p-4 space-y-6 animate-fade-in">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search articles, tips, guides..."
            className="pl-10 h-12 bg-card"
          />
        </div>

        {/* Categories */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Categories</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Card key={cat.id} className="flex-shrink-0 cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`p-2 rounded-full ${cat.color}`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm text-foreground whitespace-nowrap">{cat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step-by-Step Tutorial Card */}
        <Card className="bg-gradient-to-br from-accent/20 to-secondary/30 border-accent/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Daily Drought Check</h3>
              <Badge variant="outline" className="ml-auto bg-accent/20 text-accent border-accent/30">
                Tutorial
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {tutorialSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-card rounded-full flex items-center justify-center text-xl mb-1">
                    {step.icon}
                  </div>
                  <p className="text-xs text-muted-foreground">{step.title}</p>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Tutorial
            </Button>
          </CardContent>
        </Card>

        {/* Articles List */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Popular Articles</h2>
          <div className="space-y-3">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden cursor-pointer hover:bg-muted/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={`text-xs ${getCategoryColor(article.category)}`}>
                          {categories.find(c => c.id === article.category)?.label}
                        </Badge>
                        {article.isOffline && (
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 text-xs">
                            <WifiOff className="w-3 h-3 mr-1" />
                            Offline
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{article.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{article.summary}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                        {article.hasAudio && (
                          <Button variant="ghost" size="sm" className="h-7 px-2 text-primary">
                            <Play className="w-3 h-3 mr-1" />
                            <span className="text-xs">Listen</span>
                          </Button>
                        )}
                        {!article.isOffline && (
                          <Button variant="ghost" size="sm" className="h-7 px-2 text-accent">
                            <Download className="w-3 h-3 mr-1" />
                            <span className="text-xs">Save</span>
                          </Button>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Download All Button */}
        <Button variant="outline" className="w-full h-12 border-accent text-accent hover:bg-accent/10">
          <Download className="w-5 h-5 mr-2" />
          Download All for Offline
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default KnowledgeBase;
