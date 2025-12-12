import React from 'react';
import { AlertTriangle, Info, AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertSeverity = 'severe' | 'high' | 'moderate' | 'mild';

interface AlertCardProps {
  severity: AlertSeverity;
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
}

const AlertCard: React.FC<AlertCardProps> = ({ severity, title, description, time, isNew }) => {
  const severityConfig = {
    severe: {
      bg: 'bg-severe',
      border: 'border-severe/50',
      icon: AlertTriangle,
      iconBg: 'bg-severe/20',
    },
    high: {
      bg: 'bg-clay',
      border: 'border-clay/50',
      icon: AlertCircle,
      iconBg: 'bg-clay/20',
    },
    moderate: {
      bg: 'bg-moderate',
      border: 'border-moderate/50',
      icon: Info,
      iconBg: 'bg-moderate/20',
    },
    mild: {
      bg: 'bg-mint',
      border: 'border-mint/50',
      icon: CheckCircle,
      iconBg: 'bg-mint/20',
    },
  };

  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <div className={cn(
      'rounded-xl p-4 border-l-4 bg-card shadow-card transition-all duration-200 hover:shadow-soft',
      config.border
    )}>
      <div className="flex gap-3">
        <div className={cn('p-2 rounded-lg shrink-0', config.iconBg)}>
          <Icon size={20} className={cn(
            severity === 'severe' && 'text-severe',
            severity === 'high' && 'text-clay',
            severity === 'moderate' && 'text-moderate',
            severity === 'mild' && 'text-mint'
          )} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground text-sm leading-tight">{title}</h3>
            {isNew && (
              <span className={cn('px-2 py-0.5 text-[10px] font-bold rounded-full text-white shrink-0', config.bg)}>
                NEW
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{description}</p>
          <span className="text-[10px] text-muted-foreground/70">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
