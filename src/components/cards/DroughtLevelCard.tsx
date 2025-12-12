import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DroughtLevelCardProps {
  level: 'none' | 'mild' | 'moderate' | 'severe' | 'extreme';
  percentage: number;
}

const DroughtLevelCard: React.FC<DroughtLevelCardProps> = ({ level, percentage }) => {
  const levelConfig = {
    none: { 
      label: 'No Drought', 
      color: 'bg-mint', 
      textColor: 'text-mint',
      bgColor: 'bg-mint/10',
      borderColor: 'border-mint/30'
    },
    mild: { 
      label: 'Mild Drought', 
      color: 'bg-sand', 
      textColor: 'text-clay',
      bgColor: 'bg-sand/30',
      borderColor: 'border-sand'
    },
    moderate: { 
      label: 'Moderate Drought', 
      color: 'bg-moderate', 
      textColor: 'text-moderate',
      bgColor: 'bg-moderate/10',
      borderColor: 'border-moderate/30'
    },
    severe: { 
      label: 'Severe Drought', 
      color: 'bg-clay', 
      textColor: 'text-clay',
      bgColor: 'bg-clay/10',
      borderColor: 'border-clay/30'
    },
    extreme: { 
      label: 'Extreme Drought', 
      color: 'bg-severe', 
      textColor: 'text-severe',
      bgColor: 'bg-severe/10',
      borderColor: 'border-severe/30'
    },
  };

  const config = levelConfig[level];

  return (
    <div className={`rounded-xl p-4 border ${config.bgColor} ${config.borderColor} shadow-card`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Drought Level
        </span>
        <AlertTriangle size={18} className={config.textColor} />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-3 h-3 rounded-full ${config.color} animate-pulse-soft`} />
        <span className={`text-lg font-semibold ${config.textColor}`}>
          {config.label}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Severity Index</span>
          <span className="font-medium text-foreground">{percentage}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${config.color} rounded-full transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default DroughtLevelCard;
