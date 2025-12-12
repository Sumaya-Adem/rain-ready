import React from 'react';
import { MapPin, Bell } from 'lucide-react';
import WeatherCard from '@/components/cards/WeatherCard';
import DroughtLevelCard from '@/components/cards/DroughtLevelCard';
import TipCard from '@/components/cards/TipCard';
import AlertCard from '@/components/cards/AlertCard';
import { 
  DropletIcon, 
  ThermometerIcon, 
  SoilIcon, 
  PartlyCloudyIcon 
} from '@/components/icons/WeatherIcons';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header */}
      <header className="gradient-primary px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-1 text-white/80 text-sm mb-1">
              <MapPin size={14} />
              <span>Nairobi, Kenya</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Good Morning</h1>
          </div>
          <button className="relative p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Bell size={22} className="text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-severe rounded-full" />
          </button>
        </div>

        {/* Main Weather Display */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-light text-white">24</span>
                <span className="text-2xl text-white/70">°C</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Partly Cloudy</p>
            </div>
            <PartlyCloudyIcon size={80} className="opacity-90" />
          </div>
          
          <div className="flex gap-6 mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <DropletIcon size={18} />
              <span className="text-white/90 text-sm">45% Rain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-sm">💨 12 km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-sm">💧 65% Humidity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-5 -mt-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <WeatherCard
            title="Rainfall"
            value={45}
            unit="%"
            icon={<DropletIcon size={20} />}
            trend="up"
            trendValue="+12%"
          />
          <WeatherCard
            title="Temperature"
            value={24}
            unit="°C"
            icon={<ThermometerIcon size={20} />}
            trend="stable"
            trendValue="0°"
          />
        </div>

        {/* Drought Level */}
        <DroughtLevelCard level="moderate" percentage={58} />

        {/* Soil Moisture */}
        <WeatherCard
          title="Soil Moisture"
          value={32}
          unit="%"
          icon={<SoilIcon size={20} />}
          trend="down"
          trendValue="-8%"
          variant="warning"
          className="col-span-2"
        />

        {/* Farmer Tip */}
        <TipCard
          category="Water Conservation"
          tip="Consider mulching your crops today. With the current soil moisture levels at 32%, mulching can help retain water and reduce evaporation by up to 70%."
        />

        {/* Recent Alerts */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Recent Alerts</h2>
            <button className="text-xs text-primary font-medium">View All</button>
          </div>
          <div className="space-y-3">
            <AlertCard
              severity="moderate"
              title="Heat Wave Expected"
              description="Temperatures expected to rise above 35°C this weekend. Take precautions for livestock."
              time="2 hours ago"
              isNew
            />
            <AlertCard
              severity="mild"
              title="Rain Expected Tomorrow"
              description="Light rain forecasted for tomorrow afternoon. Good time for planting."
              time="5 hours ago"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
