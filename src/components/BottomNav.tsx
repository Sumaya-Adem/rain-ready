import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Map, Bell, MoreHorizontal, X, FileEdit, BookOpen, MessageCircle, Shield } from 'lucide-react';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: CalendarDays, label: 'Forecast', path: '/forecast' },
  { icon: Map, label: 'Map', path: '/map' },
  { icon: Bell, label: 'Alerts', path: '/alerts' },
];

const moreNavItems = [
  { icon: FileEdit, label: 'Report Issue', path: '/report', color: 'text-primary' },
  { icon: BookOpen, label: 'Knowledge Base', path: '/knowledge', color: 'text-accent' },
  { icon: MessageCircle, label: 'AI Assistant', path: '/chat', color: 'text-sky' },
  { icon: Shield, label: 'Gov Updates', path: '/gov', color: 'text-foreground' },
];

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const isMoreActive = moreNavItems.some(item => item.path === location.pathname);

  return (
    <>
      {/* More Menu Overlay */}
      {showMore && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 animate-fade-in"
          onClick={() => setShowMore(false)}
        />
      )}

      {/* More Menu Panel */}
      {showMore && (
        <div className="fixed bottom-[72px] left-4 right-4 bg-card rounded-2xl shadow-xl z-50 p-4 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">More Features</h3>
            <button 
              onClick={() => setShowMore(false)}
              className="p-1 rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {moreNavItems.map(({ icon: Icon, label, path, color }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => {
                    navigate(path);
                    setShowMore(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary/10 ring-1 ring-primary/30' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-safe z-50">
        <div className="flex items-center justify-around py-2">
          {mainNavItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[56px] ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-medium-text'
                }`}
              >
                <Icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className="transition-all duration-200"
                />
                <span className={`text-[10px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {label}
                </span>
              </button>
            );
          })}

          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[56px] ${
              isMoreActive || showMore
                ? 'text-primary bg-primary/10' 
                : 'text-muted-foreground hover:text-medium-text'
            }`}
          >
            <MoreHorizontal 
              size={22} 
              strokeWidth={isMoreActive || showMore ? 2.5 : 2}
              className="transition-all duration-200"
            />
            <span className={`text-[10px] font-medium ${isMoreActive || showMore ? 'font-semibold' : ''}`}>
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
