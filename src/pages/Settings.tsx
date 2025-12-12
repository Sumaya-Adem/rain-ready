import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  MapPin, 
  Globe, 
  Moon, 
  Shield, 
  HelpCircle,
  MessageSquare,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';

const settingsGroups = [
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', type: 'toggle', value: true },
      { icon: MapPin, label: 'Location Services', type: 'toggle', value: true },
      { icon: Globe, label: 'Language', type: 'link', value: 'English' },
      { icon: Moon, label: 'Dark Mode', type: 'toggle', value: false },
    ],
  },
  {
    title: 'Alert Settings',
    items: [
      { icon: Bell, label: 'Severe Alerts', type: 'toggle', value: true },
      { icon: Bell, label: 'Weather Updates', type: 'toggle', value: true },
      { icon: Bell, label: 'Farming Tips', type: 'toggle', value: false },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', type: 'link' },
      { icon: MessageSquare, label: 'Send Feedback', type: 'link' },
      { icon: Shield, label: 'Privacy Policy', type: 'link' },
      { icon: Info, label: 'About AquaGuard', type: 'link', value: 'v1.0.0' },
    ],
  },
];

const Settings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-6 border-b border-border">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Settings</h1>
        </div>
      </header>

      <main className="px-5 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-white">JK</span>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-foreground">John Kamau</h2>
              <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </div>
        </div>

        {/* Settings Groups */}
        {settingsGroups.map((group) => (
          <section key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 px-1">
              {group.title}
            </h3>
            <div className="bg-card rounded-xl border border-border/50 shadow-card divide-y divide-border/50">
              {group.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center justify-between px-4 py-4 first:rounded-t-xl last:rounded-b-xl hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <Icon size={18} className="text-muted-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                    {item.type === 'toggle' ? (
                      <Switch defaultChecked={item.value as boolean} />
                    ) : (
                      <div className="flex items-center gap-2">
                        {item.value && (
                          <span className="text-sm text-muted-foreground">{item.value}</span>
                        )}
                        <ChevronRight size={18} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            Made with 💙 for farmers worldwide
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            AquaGuard v1.0.0
          </p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
