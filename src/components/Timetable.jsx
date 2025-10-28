import React, { useEffect, useMemo, useState } from 'react';
import GlassCard from './GlassCard';

// Utility to parse HH:MM into minutes since midnight
const toMinutes = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const Timetable = ({ schedule }) => {
  const [dayIndex, setDayIndex] = useState(() => {
    const jsDay = new Date().getDay(); // 0=Sun..6=Sat
    return Math.min(Math.max(jsDay - 1, 0), 4); // clamp to 0..4
  });

  const [nowMin, setNowMin] = useState(() => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  });

  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setNowMin(d.getHours() * 60 + d.getMinutes());
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const classesToday = useMemo(() => {
    const day = weekdays[dayIndex];
    return schedule[day] || [];
  }, [dayIndex, schedule]);

  const isToday = dayIndex === Math.min(Math.max(new Date().getDay() - 1, 0), 4);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {weekdays.map((d, idx) => (
          <button
            key={d}
            onClick={() => setDayIndex(idx)}
            className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${
              idx === dayIndex
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {classesToday.length === 0 && (
          <GlassCard className="p-4">
            <p className="text-white/70">No classes scheduled.</p>
          </GlassCard>
        )}

        {classesToday.map((c, i) => {
          const start = toMinutes(c.start);
          const end = toMinutes(c.end);
          const inProgress = isToday && nowMin >= start && nowMin < end;

          return (
            <div key={i} className="relative">
              {inProgress && (
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-amber-500/40 to-orange-500/40 blur-md" aria-hidden />
              )}
              <GlassCard className={`p-4 relative ${inProgress ? 'ring-1 ring-orange-400/60' : ''}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{c.course}</div>
                    <div className="text-white/60 text-sm">{c.room} • {c.faculty}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${inProgress ? 'text-orange-300' : 'text-white/80'}`}>{c.start} — {c.end}</div>
                    <div className={`text-xs ${inProgress ? 'text-orange-300' : 'text-white/50'}`}>
                      {inProgress ? 'Happening now' : c.type}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timetable;
