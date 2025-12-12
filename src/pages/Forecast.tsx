import React from 'react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  SunIcon, 
  CloudIcon, 
  RainIcon, 
  PartlyCloudyIcon,
  StormIcon 
} from '@/components/icons/WeatherIcons';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const forecastData = [
  { day: 'Mon', icon: PartlyCloudyIcon, high: 26, low: 18, rain: 20 },
  { day: 'Tue', icon: SunIcon, high: 28, low: 19, rain: 5 },
  { day: 'Wed', icon: SunIcon, high: 30, low: 20, rain: 0 },
  { day: 'Thu', icon: CloudIcon, high: 27, low: 19, rain: 15 },
  { day: 'Fri', icon: RainIcon, high: 24, low: 17, rain: 65 },
  { day: 'Sat', icon: StormIcon, high: 22, low: 16, rain: 80 },
  { day: 'Sun', icon: RainIcon, high: 23, low: 17, rain: 55 },
];

const rainChartData = forecastData.map(d => ({
  name: d.day,
  rain: d.rain,
}));

const Forecast: React.FC = () => {
  const navigate = useNavigate();

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
          <h1 className="text-xl font-bold text-foreground">7-Day Forecast</h1>
        </div>
        <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
      </header>

      <main className="px-5 py-6 space-y-6">
        {/* 7-Day Cards */}
        <section className="space-y-3">
          {forecastData.map((day, index) => {
            const Icon = day.icon;
            return (
              <div 
                key={day.day}
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/50 shadow-card animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 text-sm font-semibold text-foreground">{day.day}</span>
                  <Icon size={32} />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-sky-blue">💧</span>
                    <span className="text-sm text-muted-foreground">{day.rain}%</span>
                  </div>
                  <div className="flex items-center gap-2 w-20 justify-end">
                    <span className="text-sm font-semibold text-foreground">{day.high}°</span>
                    <span className="text-sm text-muted-foreground">{day.low}°</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Rain Probability Chart */}
        <section className="bg-card rounded-xl p-5 border border-border/50 shadow-card">
          <h2 className="text-sm font-semibold text-foreground mb-4">Rain Probability</h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={rainChartData}>
                <defs>
                  <linearGradient id="rainGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1B78D0" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3FA9F5" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#777777' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#777777' }}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EEEEEE',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                  formatter={(value: number) => [`${value}%`, 'Rain']}
                />
                <Area 
                  type="monotone" 
                  dataKey="rain" 
                  stroke="#1B78D0" 
                  strokeWidth={2}
                  fill="url(#rainGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="bg-gradient-to-br from-primary/5 to-sky-blue/10 rounded-xl p-5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
              <Sparkles size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">AI Recommendation</h3>
              <p className="text-sm text-medium-text leading-relaxed">
                Based on the forecast, <strong>Friday and Saturday</strong> show high rainfall probability. 
                Consider completing any outdoor work by Thursday. The expected rain will benefit soil 
                moisture levels, reducing irrigation needs by approximately 40% next week.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Forecast;
