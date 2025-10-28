import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import GlassCard from './components/GlassCard';
import Timetable from './components/Timetable';
import DockNav from './components/DockNav';

function App() {
  const [active, setActive] = useState('timetable');

  // Sample schedule data. In a full build this would come from an API.
  const schedule = useMemo(() => ({
    Monday: [
      { start: '09:00', end: '09:50', course: 'Maths II', room: 'A-102', faculty: 'Dr. Rao', type: 'Theory' },
      { start: '10:00', end: '10:50', course: 'Data Structures', room: 'B-201', faculty: 'Prof. Nisha', type: 'Theory' },
      { start: '11:00', end: '12:30', course: 'DS Lab', room: 'Lab 3', faculty: 'TA Team', type: 'Lab' },
      { start: '14:00', end: '14:50', course: 'Physics', room: 'C-110', faculty: 'Dr. Vivek', type: 'Theory' },
    ],
    Tuesday: [
      { start: '09:00', end: '09:50', course: 'Engineering Drawing', room: 'D-205', faculty: 'Mr. Shah', type: 'Theory' },
      { start: '11:00', end: '11:50', course: 'Chemistry', room: 'C-108', faculty: 'Dr. Priya', type: 'Theory' },
      { start: '13:00', end: '14:30', course: 'Workshop', room: 'Mech Lab', faculty: 'Mr. Rakesh', type: 'Practical' },
    ],
    Wednesday: [
      { start: '10:00', end: '10:50', course: 'English', room: 'H-101', faculty: 'Ms. Iyer', type: 'Theory' },
      { start: '11:00', end: '11:50', course: 'Maths II', room: 'A-102', faculty: 'Dr. Rao', type: 'Theory' },
      { start: '15:00', end: '16:30', course: 'DS Lab', room: 'Lab 3', faculty: 'TA Team', type: 'Lab' },
    ],
    Thursday: [
      { start: '09:00', end: '09:50', course: 'Data Structures', room: 'B-201', faculty: 'Prof. Nisha', type: 'Theory' },
      { start: '12:00', end: '12:50', course: 'Physics', room: 'C-110', faculty: 'Dr. Vivek', type: 'Theory' },
    ],
    Friday: [
      { start: '10:00', end: '10:50', course: 'Chemistry', room: 'C-108', faculty: 'Dr. Priya', type: 'Theory' },
      { start: '11:00', end: '11:50', course: 'English', room: 'H-101', faculty: 'Ms. Iyer', type: 'Theory' },
      { start: '14:00', end: '15:30', course: 'Workshop', room: 'Mech Lab', faculty: 'Mr. Rakesh', type: 'Practical' },
    ],
  }), []);

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white selection:bg-orange-500/30 selection:text-white">
      <HeroCover />

      <main className="px-5 sm:px-8 max-w-5xl mx-auto -mt-10 pb-28">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <GlassCard className="p-5 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold tracking-tight">{active === 'timetable' ? 'Today’s Timetable' : active === 'dashboard' ? 'Overview' : active === 'attendance' ? 'Attendance' : 'Profile'}</h2>
              <span className="text-xs text-white/50">SRM Academia</span>
            </div>

            {active === 'timetable' && (
              <Timetable schedule={schedule} />
            )}

            {active === 'dashboard' && (
              <div className="grid sm:grid-cols-2 gap-3">
                <GlassCard className="p-4">
                  <div className="text-sm text-white/70">Credits Earned</div>
                  <div className="mt-1 text-2xl font-semibold">64</div>
                </GlassCard>
                <GlassCard className="p-4">
                  <div className="text-sm text-white/70">Upcoming Exam</div>
                  <div className="mt-1 text-2xl font-semibold">Maths II • 12 Dec</div>
                </GlassCard>
              </div>
            )}

            {active === 'attendance' && (
              <div className="space-y-3">
                <GlassCard className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Data Structures</div>
                      <div className="text-xs text-white/60">Theory</div>
                    </div>
                    <div className="text-orange-300 font-semibold">92%</div>
                  </div>
                </GlassCard>
                <GlassCard className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Physics</div>
                      <div className="text-xs text-white/60">Theory</div>
                    </div>
                    <div className="text-orange-300 font-semibold">86%</div>
                  </div>
                </GlassCard>
              </div>
            )}

            {active === 'profile' && (
              <div className="space-y-2">
                <div className="text-white font-medium">Hi, Alex</div>
                <div className="text-white/60 text-sm">SRM • CSE • 2nd Year</div>
              </div>
            )}
          </GlassCard>

          <GlassCard className="p-5">
            <div className="text-sm text-white/70">Quick Actions</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Notes</button>
              <button className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Calendar</button>
              <button className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Marks</button>
              <button className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Courses</button>
            </div>
          </GlassCard>
        </div>
      </main>

      <DockNav active={active} onChange={setActive} />
    </div>
  );
}

export default App;
