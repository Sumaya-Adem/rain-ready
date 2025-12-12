import React, { useState } from 'react';
import { ChevronLeft, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const zones = [
  { id: 1, name: 'Northern Region', level: 'extreme', x: 45, y: 15 },
  { id: 2, name: 'Central Highlands', level: 'moderate', x: 50, y: 35 },
  { id: 3, name: 'Eastern Plains', level: 'severe', x: 70, y: 45 },
  { id: 4, name: 'Western Region', level: 'mild', x: 25, y: 40 },
  { id: 5, name: 'Coastal Area', level: 'none', x: 75, y: 70 },
  { id: 6, name: 'Southern Region', level: 'moderate', x: 45, y: 75 },
];

const levelColors = {
  none: { bg: '#4CC7A8', label: 'No Drought' },
  mild: { bg: '#E8DCC2', label: 'Mild' },
  moderate: { bg: '#FFC04D', label: 'Moderate' },
  severe: { bg: '#D98B48', label: 'Severe' },
  extreme: { bg: '#FF4D4D', label: 'Extreme' },
};

const DroughtMap: React.FC = () => {
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState<typeof zones[0] | null>(null);

  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-6 border-b border-border">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Drought Map</h1>
        </div>
        <p className="text-sm text-muted-foreground">Tap on regions to view details</p>
      </header>

      <main className="px-5 py-6 space-y-6">
        {/* Map Container */}
        <div className="relative bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden aspect-square">
          {/* Simplified Map SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Background */}
            <rect width="100" height="100" fill="#f5f5f5" />
            
            {/* Country outline (simplified Kenya shape) */}
            <path
              d="M20 20 L60 10 L85 25 L90 60 L75 85 L40 90 L15 70 L10 40 Z"
              fill="#E8E8E8"
              stroke="#CCCCCC"
              strokeWidth="0.5"
            />
            
            {/* Drought zones */}
            {zones.map((zone) => (
              <g key={zone.id} onClick={() => setSelectedZone(zone)} className="cursor-pointer">
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={12}
                  fill={levelColors[zone.level as keyof typeof levelColors].bg}
                  fillOpacity={0.7}
                  stroke={selectedZone?.id === zone.id ? '#111111' : 'transparent'}
                  strokeWidth={selectedZone?.id === zone.id ? 2 : 0}
                  className="transition-all duration-200"
                />
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={3}
                  fill="#FFFFFF"
                />
              </g>
            ))}
          </svg>

          {/* Info Panel */}
          {selectedZone && (
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg animate-slide-up">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedZone.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: levelColors[selectedZone.level as keyof typeof levelColors].bg }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {levelColors[selectedZone.level as keyof typeof levelColors].label} Drought
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedZone(null)}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <span className="text-muted-foreground text-lg">×</span>
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Last updated: 2 hours ago
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <section className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Info size={16} className="text-muted-foreground" />
            <h2 className="text-sm font-semibold text-foreground">Drought Severity Legend</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(levelColors).map(([level, config]) => (
              <div key={level} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: config.bg }}
                />
                <span className="text-sm text-medium-text">{config.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 gap-3">
          <div className="bg-severe/10 rounded-xl p-4 border border-severe/20">
            <span className="text-2xl font-bold text-severe">2</span>
            <p className="text-xs text-muted-foreground mt-1">Regions in Severe+</p>
          </div>
          <div className="bg-mint/10 rounded-xl p-4 border border-mint/20">
            <span className="text-2xl font-bold text-mint">2</span>
            <p className="text-xs text-muted-foreground mt-1">Regions Stable</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DroughtMap;
