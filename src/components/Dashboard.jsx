import React from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp, Clock, Calendar as CalIcon } from 'lucide-react';
import GlassCard from './GlassCard';

const QuickStat = ({ icon: Icon, label, value, accent }) => (
  <GlassCard accent={accent}>
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/70 p-2 shadow-sm">
        <Icon className="h-5 w-5 text-gray-700" />
      </div>
      <div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </GlassCard>
);

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      {/* Profile summary */}
      <GlassCard title="Profile" accent="from-sky-300/30 to-sky-100/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-400 text-white shadow-md">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">Aarav Krishnan</p>
              <p className="text-sm text-gray-600">Reg: RA221100000001 • CSE • Sem 5</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">Active</span>
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">Section A</span>
          </div>
        </div>
      </GlassCard>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStat icon={TrendingUp} label="Attendance" value="89%" accent="from-emerald-300/30 to-emerald-100/10" />
        <QuickStat icon={Clock} label="Classes Today" value="4" accent="from-amber-300/30 to-amber-100/10" />
        <QuickStat icon={Clock} label="Next Class" value="DSA • 10:30 AM" accent="from-violet-300/30 to-violet-100/10" />
        <QuickStat icon={TrendingUp} label="Marks Avg" value="81.4" accent="from-rose-300/30 to-rose-100/10" />
      </div>

      {/* Mini widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassCard title="Today’s Timetable" accent="from-indigo-300/30 to-indigo-100/10">
          <div className="space-y-3">
            {[
              { name: 'Data Structures', time: '10:30–11:20', room: 'TB-204' },
              { name: 'OS Lab', time: '11:30–1:20', room: 'Lab-3' },
              { name: 'Discrete Math', time: '2:00–2:50', room: 'TB-105' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl bg-white/60 px-3 py-2.5 text-sm text-gray-800 shadow-sm">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-gray-600">{c.room}</p>
                </div>
                <span className="text-xs font-medium text-gray-700">{c.time}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard title="Attendance Projection" accent="from-emerald-300/30 to-emerald-100/10">
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">If you attend the next 3 classes, your projected attendance will be</p>
            <div className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 shadow-sm">
              <span className="text-gray-600">Projected</span>
              <span className="text-lg font-semibold text-emerald-600">92%</span>
            </div>
            <button className="mt-2 w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">Open Predictor</button>
          </div>
        </GlassCard>

        <GlassCard title="Upcoming" accent="from-amber-300/30 to-amber-100/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3 text-sm text-gray-800 shadow-sm">
              <CalIcon className="h-4 w-4 text-amber-600" />
              <div>
                <p className="font-medium">CAT-2 • OS</p>
                <p className="text-xs text-gray-600">Nov 21, 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/60 p-3 text-sm text-gray-800 shadow-sm">
              <CalIcon className="h-4 w-4 text-emerald-600" />
              <div>
                <p className="font-medium">Holiday • Pongal</p>
                <p className="text-xs text-gray-600">Jan 15</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default Dashboard;
