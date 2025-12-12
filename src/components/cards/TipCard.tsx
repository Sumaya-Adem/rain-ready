import React from 'react';
import { Lightbulb } from 'lucide-react';

interface TipCardProps {
  tip: string;
  category: string;
}

const TipCard: React.FC<TipCardProps> = ({ tip, category }) => {
  return (
    <div className="rounded-xl p-4 bg-gradient-to-br from-mint/10 to-primary/5 border border-mint/20 shadow-card">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-mint/20 shrink-0">
          <Lightbulb size={18} className="text-mint" />
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-mint">
            {category}
          </span>
          <p className="mt-1 text-sm text-medium-text leading-relaxed">
            {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
