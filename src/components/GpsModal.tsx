import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Camera, Signal, Battery, Footprints, CheckCircle2, Download } from 'lucide-react';

interface RouteCheckpoint {
  id: number;
  x: number;
  y: number;
  address: string;
  time: string;
  status: 'pending' | 'delivered' | 'photographed';
  photoUrl?: string;
}

const SAMPLE_ROUTE: RouteCheckpoint[] = [
  { id: 1, x: 14, y: 78, address: '12 Princes St, Milan IP1', time: '09:14 AM', status: 'delivered' },
  { id: 2, x: 22, y: 68, address: '18 Princes St, Milan IP1', time: '09:21 AM', status: 'delivered' },
  { id: 3, x: 30, y: 55, address: '4 Friars Road, Milan IP1', time: '09:34 AM', status: 'photographed', photoUrl: '/images/home/phone.avif' },
  { id: 4, x: 42, y: 48, address: '16 Friars Road, Milan IP1', time: '09:47 AM', status: 'delivered' },
  { id: 5, x: 55, y: 40, address: '28 Curriers Lane, Milan IP1', time: '10:02 AM', status: 'delivered' },
  { id: 6, x: 68, y: 32, address: '8 Franciscan Way, Milan IP1', time: '10:18 AM', status: 'photographed', photoUrl: '/images/home/phone.avif' },
  { id: 7, x: 79, y: 25, address: '22 Wolsey Street, Milan IP1', time: '10:35 AM', status: 'delivered' },
  { id: 8, x: 88, y: 16, address: '35 St Nicholas St, Milan IP1', time: '10:52 AM', status: 'delivered' },
];

interface GpsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GpsModal: React.FC<GpsModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [selectedPhoto, setSelectedPhoto] = useState<RouteCheckpoint | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev >= SAMPLE_ROUTE.length - 1 ? 0 : prev + 1));
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  const activeCheckpoint = SAMPLE_ROUTE[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / SAMPLE_ROUTE.length) * 100);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <div>
              <h2 className="font-semibold text-lg text-white">Live GPS Telemetry Simulation</h2>
              <p className="text-xs text-slate-400">Campaign #MKZ-8912 • Courier: Liam Henderson (Verified #402)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-slate-900/90 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Signal className="w-4 h-4 text-emerald-400" />
            <span>GPS: <strong className="text-white">Active (±1.8m)</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Footprints className="w-4 h-4 text-red-400" />
            <span>Steps: <strong className="text-white">7,842 delivered</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Battery className="w-4 h-4 text-emerald-400" />
            <span>Device: <strong className="text-white">88% (Offline Sync OK)</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Photos: <strong className="text-white">14 geo-stamped</strong></span>
          </div>
        </div>

        {/* Map Simulation Canvas */}
        <div className="relative flex-1 min-h-[350px] bg-slate-950 overflow-hidden flex items-center justify-center">
          {/* Street Grid background representation */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          {/* Simulated Street Outlines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-800 stroke-[4]">
            <line x1="10%" y1="85%" x2="90%" y2="15%" />
            <line x1="20%" y1="15%" x2="80%" y2="85%" />
            <line x1="15%" y1="50%" x2="85%" y2="50%" />
            <line x1="50%" y1="10%" x2="50%" y2="90%" />
          </svg>

          {/* Drawn GPS Trail */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeDasharray="6 4"
              points={SAMPLE_ROUTE.slice(0, currentStep + 1)
                .map((p) => `${p.x * 8.5 + 40},${p.y * 3.2 + 30}`)
                .join(' ')}
            />
          </svg>

          {/* Interactive Checkpoint Markers */}
          {SAMPLE_ROUTE.map((pt, idx) => {
            const isReached = idx <= currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div
                key={pt.id}
                style={{
                  left: `${pt.x}%`,
                  top: `${pt.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute transition-all duration-500 cursor-pointer ${
                  isCurrent ? 'scale-125 z-20' : 'z-10'
                }`}
                onClick={() => {
                  if (pt.status === 'photographed') {
                    setSelectedPhoto(pt);
                  }
                }}
              >
                {pt.status === 'photographed' ? (
                  <div className="relative group">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-lg shadow-amber-500/50 hover:scale-110 transition-transform">
                      📷
                    </div>
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-800 text-[10px] text-amber-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Photo Stamp
                    </span>
                  </div>
                ) : (
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isReached
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/50'
                        : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {pt.id}
                  </div>
                )}
              </div>
            );
          })}

          {/* Active Courier Beacon */}
          <div
            style={{
              left: `${activeCheckpoint.x}%`,
              top: `${activeCheckpoint.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute z-30 pointer-events-none transition-all duration-700"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/30 animate-ping absolute inset-0"></div>
            <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white shadow-xl flex items-center justify-center text-[10px]">
              🚶
            </div>
          </div>

          {/* Current Address Overlay Box */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-slate-900/95 border border-slate-700 p-3.5 rounded-2xl shadow-xl backdrop-blur-md max-w-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Current Checkpoint</span>
              <span>{activeCheckpoint.time}</span>
            </div>
            <p className="font-medium text-sm text-white">{activeCheckpoint.address}</p>
            <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> GPS coordinates verified &amp; logged
            </p>
          </div>
        </div>

        {/* Controls Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-slate-950 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs font-medium transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Pause Replay' : 'Play Simulation'}
            </button>
            <button
              onClick={() => setCurrentStep(0)}
              className="flex items-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Progress: <strong className="text-white">{progressPercent}%</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Escrow Status: <strong className="text-emerald-400">Locked in Stripe</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
