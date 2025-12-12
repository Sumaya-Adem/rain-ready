import React, { useState } from 'react';
import { ChevronLeft, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AlertCard from '@/components/cards/AlertCard';

type AlertSeverity = 'severe' | 'high' | 'moderate' | 'mild';

interface Alert {
  id: number;
  severity: AlertSeverity;
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
}

const alerts: Alert[] = [
  {
    id: 1,
    severity: 'severe',
    title: 'Extreme Drought Warning',
    description: 'Northern Region experiencing extreme drought conditions. Water rationing may be implemented.',
    time: '30 minutes ago',
    isNew: true,
  },
  {
    id: 2,
    severity: 'high',
    title: 'Heat Wave Alert',
    description: 'Temperatures expected to exceed 38°C in Eastern Plains over the next 3 days.',
    time: '2 hours ago',
    isNew: true,
  },
  {
    id: 3,
    severity: 'moderate',
    title: 'Low Soil Moisture Warning',
    description: 'Soil moisture levels dropping below optimal range. Consider increasing irrigation.',
    time: '5 hours ago',
  },
  {
    id: 4,
    severity: 'mild',
    title: 'Rain Expected This Weekend',
    description: 'Light to moderate rainfall expected Saturday through Sunday. Plan accordingly.',
    time: '8 hours ago',
  },
  {
    id: 5,
    severity: 'moderate',
    title: 'Wind Advisory',
    description: 'Strong winds expected tomorrow afternoon. Secure loose equipment and livestock shelters.',
    time: '12 hours ago',
  },
  {
    id: 6,
    severity: 'mild',
    title: 'Optimal Planting Window',
    description: 'Conditions favorable for planting drought-resistant crops over the next week.',
    time: '1 day ago',
  },
];

const filterOptions = ['All', 'Severe', 'High', 'Moderate', 'Mild'] as const;

const Alerts: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<typeof filterOptions[number]>('All');

  const filteredAlerts = alerts.filter((alert) => {
    if (activeFilter === 'All') return true;
    return alert.severity === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-4 border-b border-border">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Alerts</h1>
            <p className="text-xs text-muted-foreground">{alerts.length} total alerts</p>
          </div>
          <button className="p-2 rounded-xl bg-muted">
            <Filter size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <main className="px-5 py-6">
        {/* Alert Summary */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { count: alerts.filter(a => a.severity === 'severe').length, label: 'Severe', color: 'bg-severe' },
            { count: alerts.filter(a => a.severity === 'high').length, label: 'High', color: 'bg-clay' },
            { count: alerts.filter(a => a.severity === 'moderate').length, label: 'Moderate', color: 'bg-moderate' },
            { count: alerts.filter(a => a.severity === 'mild').length, label: 'Mild', color: 'bg-mint' },
          ].map(({ count, label, color }) => (
            <div key={label} className="bg-card rounded-xl p-3 text-center border border-border/50">
              <div className={`w-3 h-3 rounded-full ${color} mx-auto mb-2`} />
              <span className="text-lg font-bold text-foreground">{count}</span>
              <p className="text-[10px] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Alert List */}
        <div className="space-y-3">
          {filteredAlerts.map((alert, index) => (
            <div 
              key={alert.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AlertCard
                severity={alert.severity}
                title={alert.title}
                description={alert.description}
                time={alert.time}
                isNew={alert.isNew}
              />
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No alerts found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Alerts;
