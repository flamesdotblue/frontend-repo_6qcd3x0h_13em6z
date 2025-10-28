import React from 'react';
import { Home, Calendar, Clock, BarChart3, BookOpen, CalendarDays, Calculator, User } from 'lucide-react';

const tabs = [
  { key: 'dashboard', label: 'Home', icon: Home },
  { key: 'timetable', label: 'Timetable', icon: Calendar },
  { key: 'attendance', label: 'Attendance', icon: Clock },
  { key: 'marks', label: 'Marks', icon: BarChart3 },
  { key: 'courses', label: 'Courses', icon: BookOpen },
  { key: 'calendar', label: 'Calendar', icon: CalendarDays },
  { key: 'calculator', label: 'Calc', icon: Calculator },
  { key: 'profile', label: 'Profile', icon: User },
];

const DockNav = ({ active, onChange }) => {
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-lg px-2 py-2 shadow-2xl">
          {tabs.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => onChange(key)}
                className={`group flex-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[11px] sm:text-sm transition-colors ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                aria-label={label}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-white/70'} />
                <span className="hidden sm:inline-block">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DockNav;
