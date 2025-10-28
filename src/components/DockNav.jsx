import React from 'react';
import { Home, Calendar, Clock, CheckCircle, BookOpen, Calculator, BarChart, User } from 'lucide-react';

const items = [
  { key: 'Dashboard', icon: Home, label: 'Dashboard' },
  { key: 'Timetable', icon: Clock, label: 'Timetable' },
  { key: 'Attendance', icon: CheckCircle, label: 'Attendance' },
  { key: 'Marks', icon: BarChart, label: 'Marks' },
  { key: 'Courses', icon: BookOpen, label: 'Courses' },
  { key: 'Calendar', icon: Calendar, label: 'Calendar' },
  { key: 'Calculator', icon: Calculator, label: 'Calculator' },
  { key: 'Profile', icon: User, label: 'Profile' },
];

const DockNav = ({ current, onChange }) => {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-2xl border border-white/20 bg-white/60 p-2 backdrop-blur-xl shadow-lg sm:gap-2">
        {items.map(({ key, icon: Icon, label }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group flex items-center gap-2 rounded-xl px-2.5 py-2 sm:px-3 sm:py-2 transition-all ${
                active ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-white'
              }`}
              aria-label={label}
            >
              <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${active ? 'scale-110' : ''}`} />
              <span className="hidden sm:inline text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DockNav;
