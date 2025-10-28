import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import GlassCard from './components/GlassCard';
import Timetable from './components/Timetable';
import DockNav from './components/DockNav';

function App() {
  const [active, setActive] = useState('dashboard');

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

  const SectionTitle = ({ title, subtitle }) => (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {subtitle ? <span className="text-xs text-white/50">{subtitle}</span> : <span />}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white selection:bg-orange-500/30 selection:text-white">
      <HeroCover />

      <main className="px-5 sm:px-8 max-w-6xl mx-auto -mt-10 pb-32">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          <GlassCard className="p-5 lg:col-span-2">
            {active === 'timetable' && (
              <>
                <SectionTitle title="Today’s Timetable" subtitle="Acadia OS" />
                <Timetable schedule={schedule} />
              </>
            )}

            {active === 'dashboard' && (
              <>
                <SectionTitle title="Overview" subtitle="Acadia OS" />
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
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[{ k:'Attendance', v:'89%' },{ k:'GPA', v:'8.3' },{ k:'Backlogs', v:'0' }].map((s)=> (
                    <GlassCard key={s.k} className="p-4">
                      <div className="text-sm text-white/70">{s.k}</div>
                      <div className="mt-1 text-xl font-semibold">{s.v}</div>
                    </GlassCard>
                  ))}
                </div>
              </>
            )}

            {active === 'attendance' && (
              <>
                <SectionTitle title="Attendance" subtitle="This Semester" />
                <div className="space-y-3">
                  {[{c:'Data Structures', v:92},{c:'Operating Systems', v:88},{c:'Discrete Math', v:94},{c:'DBMS', v:86}].map((row)=> (
                    <GlassCard key={row.c} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">{row.c}</div>
                          <div className="text-xs text-white/60">Theory</div>
                        </div>
                        <div className="text-orange-300 font-semibold">{row.v}%</div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </>
            )}

            {active === 'marks' && (
              <>
                <SectionTitle title="Marks" subtitle="Recent Assessments" />
                <div className="space-y-3">
                  {[{n:'CAT-1 • DSA', s:'42/50'},{n:'Quiz • OS', s:'18/20'},{n:'Lab Eval • DBMS', s:'19/20'}].map((m)=> (
                    <GlassCard key={m.n} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">{m.n}</div>
                        <div className="text-emerald-300 font-semibold">{m.s}</div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </>
            )}

            {active === 'courses' && (
              <>
                <SectionTitle title="Courses" subtitle="Current" />
                <div className="grid sm:grid-cols-2 gap-3">
                  {[{n:'Data Structures', f:'Prof. Nisha'},{n:'Operating Systems', f:'Dr. Anil'},{n:'Discrete Math', f:'Dr. Rao'},{n:'DBMS', f:'Dr. Priya'}].map((c)=> (
                    <GlassCard key={c.n} className="p-4">
                      <div className="text-white font-medium">{c.n}</div>
                      <div className="text-xs text-white/60">{c.f}</div>
                      <button className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Open</button>
                    </GlassCard>
                  ))}
                </div>
              </>
            )}

            {active === 'calendar' && (
              <>
                <SectionTitle title="Calendar" subtitle={new Date().toLocaleString('default', { month: 'long', year: 'numeric' })} />
                <div className="grid grid-cols-7 gap-2 text-center text-xs">
                  {['S','M','T','W','T','F','S'].map((d)=>(
                    <div key={d} className="py-2 text-white/60">{d}</div>
                  ))}
                  {Array.from({ length: 30 }).map((_, i)=> {
                    const today = new Date().getDate();
                    const isToday = i+1 === today;
                    return (
                      <div key={i} className={`rounded-lg border border-white/10 py-3 ${isToday ? 'bg-orange-500/20 ring-1 ring-orange-400/60' : 'bg-white/5'}`}>{i+1}</div>
                    );
                  })}
                </div>
              </>
            )}

            {active === 'calculator' && (
              <>
                <SectionTitle title="Calculator" subtitle="Quick Math" />
                <Calculator />
              </>
            )}

            {active === 'profile' && (
              <>
                <SectionTitle title="Profile" subtitle="Student" />
                <div className="space-y-3">
                  <GlassCard className="p-4">
                    <div className="text-white font-medium">Alex Johnson</div>
                    <div className="text-white/60 text-sm">SRM • CSE • 2nd Year • Reg: RA221100000001</div>
                  </GlassCard>
                  <GlassCard className="p-4">
                    <div className="text-sm text-white/70">Preferences</div>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs">Dark Mode</span>
                      <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs">Compact</span>
                    </div>
                  </GlassCard>
                </div>
              </>
            )}
          </GlassCard>

          <GlassCard className="p-5">
            <div className="text-sm text-white/70">Quick Actions</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button onClick={()=>setActive('calendar')} className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Calendar</button>
              <button onClick={()=>setActive('marks')} className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Marks</button>
              <button onClick={()=>setActive('courses')} className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Courses</button>
              <button onClick={()=>setActive('calculator')} className="h-24 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">Calculator</button>
            </div>
            <div className="mt-4">
              <div className="text-sm text-white/70">Today</div>
              <div className="mt-2 space-y-2 text-sm">
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">DSA Assignment due • 8 PM</div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">OS Lab at 11:30</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>

      <DockNav active={active} onChange={setActive} />
    </div>
  );
}

function Calculator() {
  const [expr, setExpr] = useState('');
  const [ans, setAns] = useState('');

  const press = (v) => {
    if (v === 'C') { setExpr(''); setAns(''); return; }
    if (v === '=') {
      try {
        // eslint-disable-next-line no-eval
        const val = String(eval(expr || '0'));
        setAns(val);
      } catch {
        setAns('Err');
      }
      return;
    }
    setExpr((s) => s + v);
  };

  const keys = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];

  return (
    <GlassCard className="p-4">
      <div className="rounded-lg border border-white/10 bg-white/5 p-3">
        <div className="text-xs text-white/50 min-h-[18px]">{expr || ' '}</div>
        <div className="text-2xl font-semibold text-white mt-1">{ans || '0'}</div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {keys.map((k)=> (
          <button key={k} onClick={()=>press(k)} className={`rounded-lg px-3 py-2 border border-white/10 ${k==='=' ? 'bg-orange-500/20 hover:bg-orange-500/30' : 'bg-white/5 hover:bg-white/10'} transition-colors`}>{k}</button>
        ))}
      </div>
    </GlassCard>
  );
}

export default App;
