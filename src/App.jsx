import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, BookOpen, Calculator as CalcIcon, BarChart, User, Home } from 'lucide-react';
import DockNav from './components/DockNav';
import GlobalLoader from './components/GlobalLoader';
import GlassCard from './components/GlassCard';
import Dashboard from './components/Dashboard';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/70 p-2 shadow-sm">
        <Icon className="h-5 w-5 text-gray-700" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  </div>
);

function App() {
  const [currentApp, setCurrentApp] = useState('Dashboard');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [currentApp]);

  const content = useMemo(() => {
    switch (currentApp) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Timetable':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={Clock} title="Timetable" subtitle="Daily schedule with current class highlighted" />
            <GlassCard title="Today" accent="from-indigo-300/30 to-indigo-100/10">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {['Mon','Tue','Wed','Thu','Fri','Sat'].map((d, i) => (
                  <button key={d} className={`rounded-xl px-4 py-2 text-sm font-medium shadow-sm ${i===2 ? 'bg-blue-600 text-white' : 'bg-white/70 text-gray-800'}`}>{d}</button>
                ))}
              </div>
              <div className="mt-3 space-y-3">
                {[
                  { name: 'OS', time: '09:30–10:20', room: 'TB-201', current: false },
                  { name: 'DSA', time: '10:30–11:20', room: 'TB-204', current: true },
                  { name: 'DM', time: '02:00–02:50', room: 'TB-105', current: false },
                ].map((c, i) => (
                  <div key={i} className={`flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm ${c.current ? 'bg-blue-600 text-white ring-2 ring-blue-300/60' : 'bg-white/70 text-gray-800'}`}>
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className={`text-xs ${c.current ? 'text-white/90' : 'text-gray-600'}`}>{c.room}</p>
                    </div>
                    <span className="text-sm font-semibold">{c.time}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        );
      case 'Attendance':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={CheckCircle} title="Attendance" subtitle="Theory and Practical overview" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <GlassCard title="Theory" accent="from-emerald-300/30 to-emerald-100/10">
                <div className="space-y-3">
                  {[
                    { course: 'OS', code: '18CSC201', pct: 88, status: 'Safe', statusBg: 'bg-emerald-100', statusText: 'text-emerald-700', bar: 'bg-emerald-500' },
                    { course: 'DM', code: '18MAT203', pct: 76, status: 'Margin', statusBg: 'bg-amber-100', statusText: 'text-amber-700', bar: 'bg-amber-500' },
                  ].map((c) => (
                    <div key={c.code} className="rounded-xl bg-white/70 p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{c.course}</p>
                          <p className="text-xs text-gray-600">{c.code}</p>
                        </div>
                        <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${c.statusBg} ${c.statusText}`}>{c.status}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${c.pct}%` }} />
                      </div>
                      <p className="mt-1 text-right text-sm font-medium text-gray-800">{c.pct}%</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
              <GlassCard title="Practical" accent="from-violet-300/30 to-violet-100/10">
                <div className="space-y-3">
                  {[
                    { course: 'OS Lab', code: '18CSE291', pct: 94, status: 'Safe', statusBg: 'bg-emerald-100', statusText: 'text-emerald-700', bar: 'bg-violet-500' },
                    { course: 'DSA Lab', code: '18CSE292', pct: 82, status: 'Safe', statusBg: 'bg-emerald-100', statusText: 'text-emerald-700', bar: 'bg-violet-500' },
                  ].map((c) => (
                    <div key={c.code} className="rounded-xl bg-white/70 p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{c.course}</p>
                          <p className="text-xs text-gray-600">{c.code}</p>
                        </div>
                        <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${c.statusBg} ${c.statusText}`}>{c.status}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${c.pct}%` }} />
                      </div>
                      <p className="mt-1 text-right text-sm font-medium text-gray-800">{c.pct}%</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        );
      case 'Marks':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={BarChart} title="Marks" subtitle="Exam breakdown per course" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: '18CSC201', name: 'Operating Systems', CAT1: 28, CAT2: 26, Final: 78 },
                { code: '18MAT203', name: 'Discrete Mathematics', CAT1: 25, CAT2: 27, Final: 81 },
              ].map((m) => (
                <GlassCard key={m.code} accent="from-rose-300/30 to-rose-100/10">
                  <div className="mb-3">
                    <p className="font-semibold text-gray-900">{m.name}</p>
                    <p className="text-xs text-gray-600">{m.code}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                      <p className="text-xs text-gray-600">CAT 1</p>
                      <p className="text-lg font-semibold text-gray-900">{m.CAT1}</p>
                    </div>
                    <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                      <p className="text-xs text-gray-600">CAT 2</p>
                      <p className="text-lg font-semibold text-gray-900">{m.CAT2}</p>
                    </div>
                    <div className="rounded-xl bg-white/70 p-3 shadow-sm">
                      <p className="text-xs text-gray-600">Final</p>
                      <p className="text-lg font-semibold text-gray-900">{m.Final}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        );
      case 'Courses':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={BookOpen} title="Courses" subtitle="Enrolled courses overview" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Operating Systems', type: 'Theory', slot: 'E1', faculty: 'Dr. Rao', credits: 4 },
                { title: 'OS Laboratory', type: 'Practical', slot: 'L31', faculty: 'Ms. Priya', credits: 2 },
                { title: 'Discrete Mathematics', type: 'Theory', slot: 'D1', faculty: 'Dr. Nair', credits: 4 },
              ].map((c, i) => (
                <GlassCard key={i} accent="from-blue-300/30 to-blue-100/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{c.title}</p>
                      <p className="text-xs text-gray-600">{c.type} • Slot {c.slot}</p>
                    </div>
                    <span className="rounded-lg bg-white/70 px-2 py-1 text-xs font-medium text-gray-800 shadow-sm">{c.credits} cr</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Faculty: {c.faculty}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        );
      case 'Calendar':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={Calendar} title="Calendar" subtitle="Monthly overview" />
            <GlassCard accent="from-amber-300/30 to-amber-100/10">
              <div className="grid grid-cols-7 gap-2 text-center text-xs">
                {['S','M','T','W','T','F','S'].map((d) => (
                  <div key={d} className="py-2 font-medium text-gray-700">{d}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className={`h-16 rounded-xl border border-white/40 bg-white/60 p-2 text-gray-800 shadow-sm ${i===10 ? 'ring-2 ring-blue-400' : ''}`}>
                    <div className="text-right text-[10px] text-gray-600">{i+1 <= 31 ? i+1 : ''}</div>
                    {i===13 && <div className="mt-3 h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        );
      case 'Calculator':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={CalcIcon} title="Calculator" subtitle="Quick calculations" />
            <GlassCard accent="from-slate-300/30 to-slate-100/10">
              <CalculatorWidget />
            </GlassCard>
          </motion.div>
        );
      case 'Profile':
        return (
          <motion.div {...pageVariants} className="space-y-4">
            <SectionHeader icon={User} title="Profile" subtitle="Your account" />
            <GlassCard accent="from-sky-300/30 to-sky-100/10">
              <div className="flex flex-col items-center gap-2 py-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-400 text-white shadow-md">
                  <User className="h-8 w-8" />
                </div>
                <p className="text-lg font-semibold text-gray-900">Aarav Krishnan</p>
                <p className="text-sm text-gray-600">Reg: RA221100000001 • CSE • Section A</p>
                <button className="mt-3 rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700">Logout</button>
              </div>
            </GlassCard>
          </motion.div>
        );
      default:
        return null;
    }
  }, [currentApp]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:pt-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600" />
            <span className="text-base font-semibold text-gray-900">Acadia OS</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="hidden sm:inline text-gray-600">SRM Academia</span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/60 px-2.5 py-1.5 text-gray-700 shadow-sm backdrop-blur">
              <Home className="h-4 w-4" />
              {currentApp}
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentApp}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>

      <GlobalLoader loading={loading} label={`Opening ${currentApp}`} />

      <DockNav current={currentApp} onChange={setCurrentApp} />
    </div>
  );
}

function CalculatorWidget() {
  const [expr, setExpr] = useState('');
  const [out, setOut] = useState('0');

  const press = (v) => {
    if (v === 'C') { setExpr(''); setOut('0'); return; }
    if (v === '=') {
      try {
        // eslint-disable-next-line no-eval
        const res = eval(expr || '0');
        setOut(String(res));
      } catch {
        setOut('Err');
      }
      return;
    }
    setExpr((e) => e + v);
  };

  const keys = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];

  return (
    <div className="mx-auto max-w-sm">
      <div className="rounded-2xl bg-white/70 p-4 text-right text-2xl font-semibold text-gray-900 shadow-sm">{out}</div>
      <div className="mt-3 rounded-2xl bg-white/60 p-2 shadow-sm">
        <div className="grid grid-cols-4 gap-2">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => press(k)}
              className={`rounded-xl px-4 py-3 text-lg font-semibold text-gray-800 shadow-sm ${
                k==='=' ? 'col-span-1 bg-blue-600 text-white' : k==='C' ? 'col-span-4 bg-rose-600 text-white' : 'bg-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
