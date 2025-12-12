import { useState } from "react";
import { Camera, Image, Mic, MapPin, Send, Droplets, Leaf, Heart, CircleDot, ChevronRight, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import BottomNav from "@/components/BottomNav";

const issueTypes = [
  { id: "water", label: "Water Shortage", icon: Droplets, color: "text-primary" },
  { id: "crop", label: "Crop Damage", icon: Leaf, color: "text-accent" },
  { id: "livestock", label: "Livestock Issues", icon: Heart, color: "text-warning" },
  { id: "wells", label: "Dry Wells", icon: CircleDot, color: "text-severe" },
];

const recentReports = [
  { id: 1, user: "Farmer Ahmed", type: "Water Shortage", location: "North District", time: "2 hours ago", severity: "high" },
  { id: 2, user: "Community Leader", type: "Crop Damage", location: "Central Valley", time: "5 hours ago", severity: "moderate" },
  { id: 3, user: "Local Volunteer", type: "Dry Wells", location: "East Region", time: "1 day ago", severity: "severe" },
];

const ReportIssue = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe": return "bg-severe/10 border-severe/30 text-severe";
      case "high": return "bg-warning/10 border-warning/30 text-warning";
      case "moderate": return "bg-moderate/10 border-moderate/30 text-moderate-foreground";
      default: return "bg-muted border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 pt-12">
        <h1 className="text-2xl font-bold text-white">Report an Issue</h1>
        <p className="text-white/80 text-sm mt-1">Help your community by reporting local problems</p>
      </div>

      <div className="p-4 space-y-6 animate-fade-in">
        {/* Issue Type Selection */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">What's the issue?</h2>
          <div className="grid grid-cols-2 gap-3">
            {issueTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedType === type.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <CardContent className="p-4 flex flex-col items-center gap-2">
                  <div className={`p-3 rounded-full bg-muted ${type.color}`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{type.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Describe the problem</h2>
          <Textarea
            placeholder="Tell us more about the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px] bg-card"
          />
        </section>

        {/* Upload Options */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Add media</h2>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-14 gap-2">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-sm">Take Photo</span>
            </Button>
            <Button variant="outline" className="flex-1 h-14 gap-2">
              <Image className="w-5 h-5 text-accent" />
              <span className="text-sm">Choose Photo</span>
            </Button>
            <Button variant="outline" className="flex-1 h-14 gap-2">
              <Mic className="w-5 h-5 text-warning" />
              <span className="text-sm">Voice Note</span>
            </Button>
          </div>
        </section>

        {/* Location Card */}
        <Card className="bg-accent/10 border-accent/30">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-full">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Location detected</p>
              <p className="text-xs text-muted-foreground">North District, Sector 7</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90">
          <Send className="w-5 h-5 mr-2" />
          Submit Report
        </Button>

        {/* Community Feed */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Community Reports</h2>
          <div className="space-y-3">
            {recentReports.map((report) => (
              <Card key={report.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-full">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm text-foreground">{report.user}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getSeverityColor(report.severity)}`}>
                          {report.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{report.location}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{report.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default ReportIssue;
