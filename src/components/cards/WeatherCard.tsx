import React from 'react';
import { cn } from '@/lib/utils';

interface WeatherCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  variant?: 'default' | 'primary' | 'warning' | 'danger';
  className?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  title,
  value,
  unit,
  icon,
  trend,
  trendValue,
  variant = 'default',
  className,
}) => {
  const variantStyles = {
    default: 'bg-card',
    primary: 'bg-gradient-to-br from-primary to-sky-blue text-primary-foreground',
    warning: 'bg-moderate/10 border-moderate/30',
    danger: 'bg-severe/10 border-severe/30',
  };

  const trendColors = {
    up: 'text-mint',
    down: 'text-severe',
    stable: 'text-muted-foreground',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-4 shadow-card border border-border/50 transition-all duration-300 hover:shadow-soft',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={cn(
          'text-xs font-medium uppercase tracking-wide',
          variant === 'primary' ? 'text-white/80' : 'text-muted-foreground'
        )}>
          {title}
        </span>
        <div className={cn(
          'p-2 rounded-lg',
          variant === 'primary' ? 'bg-white/20' : 'bg-muted'
        )}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline gap-1">
        <span className={cn(
          'text-3xl font-bold tracking-tight',
          variant === 'primary' ? 'text-white' : 'text-foreground'
        )}>
          {value}
        </span>
        {unit && (
          <span className={cn(
            'text-sm font-medium',
            variant === 'primary' ? 'text-white/70' : 'text-muted-foreground'
          )}>
            {unit}
          </span>
        )}
      </div>

      {trend && trendValue && (
        <div className={cn('flex items-center gap-1 mt-2', trendColors[trend])}>
          <span className="text-xs font-medium">{trendValue}</span>
          <span className="text-xs">vs last week</span>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
