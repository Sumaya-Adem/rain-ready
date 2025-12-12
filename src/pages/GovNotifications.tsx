import { Shield, AlertTriangle, Info, Calendar, MapPin, Phone, ChevronRight, Clock, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";

const notifications = [
  {
    id: 1,
    title: "Drought Emergency Declared",
    description: "State government has declared drought emergency in 5 districts. Relief measures announced.",
    severity: "severe",
    date: "Dec 12, 2024",
    source: "State Disaster Management",
  },
  {
    id: 2,
    title: "Water Tanker Distribution Schedule",
    description: "Free water distribution will begin from tomorrow. Check schedule below.",
    severity: "moderate",
    date: "Dec 11, 2024",
    source: "Municipal Corporation",
  },
  {
    id: 3,
    title: "Crop Insurance Claims Open",
    description: "Farmers can now file crop insurance claims online. Deadline: Dec 31, 2024.",
    severity: "info",
    date: "Dec 10, 2024",
    source: "Agriculture Department",
  },
  {
    id: 4,
    title: "Rainfall Forecast Advisory",
    description: "Met department predicts light rainfall in next 7 days. Prepare accordingly.",
    severity: "info",
    date: "Dec 9, 2024",
    source: "Meteorological Department",
  },
];

const waterSchedule = [
  { area: "North Zone A", time: "6:00 AM - 8:00 AM", day: "Mon, Wed, Fri" },
  { area: "North Zone B", time: "8:00 AM - 10:00 AM", day: "Mon, Wed, Fri" },
  { area: "South Zone A", time: "6:00 AM - 8:00 AM", day: "Tue, Thu, Sat" },
  { area: "South Zone B", time: "8:00 AM - 10:00 AM", day: "Tue, Thu, Sat" },
];

const emergencyContacts = [
  { name: "Drought Helpline", number: "1800-XXX-XXXX" },
  { name: "Water Emergency", number: "1800-XXX-YYYY" },
];

const GovNotifications = () => {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "severe":
        return {
          bg: "bg-severe/10",
          border: "border-severe/30",
          badge: "bg-severe text-white",
          icon: "text-severe",
        };
      case "moderate":
        return {
          bg: "bg-moderate/10",
          border: "border-moderate/30",
          badge: "bg-moderate text-moderate-foreground",
          icon: "text-moderate-foreground",
        };
      default:
        return {
          bg: "bg-card",
          border: "border-border",
          badge: "bg-muted text-muted-foreground",
          icon: "text-primary",
        };
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case "severe": return "Urgent";
      case "moderate": return "Important";
      default: return "Update";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-foreground to-foreground/80 p-6 pt-12">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-full">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Government Updates</h1>
            <p className="text-white/80 text-sm">Official alerts & announcements</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 animate-fade-in">
        {/* Emergency Instructions Card */}
        <Card className="bg-severe/10 border-severe/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-severe/20 rounded-full">
                <AlertTriangle className="w-5 h-5 text-severe" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Emergency Instructions</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Store at least 20 liters of drinking water per person</li>
                  <li>• Report water wastage to local authorities</li>
                  <li>• Follow water rationing schedules strictly</li>
                  <li>• Contact helpline for emergency water supply</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Recent Announcements</h2>
          <div className="space-y-3">
            {notifications.map((notification) => {
              const styles = getSeverityStyles(notification.severity);
              return (
                <Card 
                  key={notification.id} 
                  className={`overflow-hidden ${styles.bg} ${styles.border} cursor-pointer hover:shadow-md transition-shadow`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${styles.bg}`}>
                        {notification.severity === "severe" ? (
                          <AlertTriangle className={`w-4 h-4 ${styles.icon}`} />
                        ) : notification.severity === "moderate" ? (
                          <Info className={`w-4 h-4 ${styles.icon}`} />
                        ) : (
                          <FileText className={`w-4 h-4 ${styles.icon}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={`text-xs ${styles.badge}`}>
                            {getSeverityLabel(notification.severity)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground mb-1">
                          {notification.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {notification.description}
                        </p>
                        <p className="text-xs text-primary">{notification.source}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Water Distribution Schedule */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Water Distribution Schedule</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 text-xs font-semibold text-foreground">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Area
                      </th>
                      <th className="text-left p-3 text-xs font-semibold text-foreground">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Time
                      </th>
                      <th className="text-left p-3 text-xs font-semibold text-foreground">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        Days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {waterSchedule.map((schedule, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-3 text-xs text-foreground">{schedule.area}</td>
                        <td className="p-3 text-xs text-primary font-medium">{schedule.time}</td>
                        <td className="p-3 text-xs text-muted-foreground">{schedule.day}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contacts */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Emergency Contacts</h2>
          <div className="grid grid-cols-2 gap-3">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-primary/5 border-primary/30">
                <CardContent className="p-4 text-center">
                  <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">{contact.name}</p>
                  <p className="text-sm font-semibold text-primary">{contact.number}</p>
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

export default GovNotifications;
