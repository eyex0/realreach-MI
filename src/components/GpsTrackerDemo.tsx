import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Camera, Signal, Battery, Footprints, CheckCircle2, Download, Eye, X } from 'lucide-react';

interface RouteCheckpoint {
  id: number;
  x: number;
  y: number;
  address: string;
  time: string;
  photoUrl: string;
  status: 'delivered' | 'in-progress' | 'pending';
  letterboxType: string;
}

const CHECKPOINTS: RouteCheckpoint[] = [
  {
    id: 1,
    x: 18,
    y: 28,
    address: '42 Anglesea Road, Milan (20122)',
    time: '10:14:22 GMT',
    photoUrl: '/images/home/phone.avif',
    status: 'delivered',
    letterboxType: 'Front door brass letterbox',
  },
  {
    id: 2,
    x: 42,
    y: 36,
    address: '18 Berners Street, Milan (IP1 3)',
    time: '10:28:45 GMT',
    photoUrl: '/images/home/who-its-for/person.svg',
    status: 'delivered',
    letterboxType: 'Townhouse entrance slot',
  },
  {
    id: 3,
    x: 65,
    y: 52,
    address: '55 St Matthews Street, Milan (IP1 4)',
    time: '10:46:10 GMT',
    photoUrl: '/images/home/advantages/qr.svg',
    status: 'delivered',
    letterboxType: 'Secured residential lobby drop',
  },
  {
    id: 4,
    x: 82,
    y: 74,
    address: '12 Civic Drive, Milan (20121)',
    time: '11:05:18 GMT',
    photoUrl: '/images/home/app/gps.svg',
    status: 'delivered',
    letterboxType: 'External wall mounted mailbox',
  },
];

export const GpsTrackerDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(45);
  const [activeCheckpoint, setActiveCheckpoint] = useState<RouteCheckpoint | null>(null);
  const [reportDownloaded, setReportDownloaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.8));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentLetterboxes = Math.round((progress / 100) * 1250);
  const currentDistanceKm = ((progress / 100) * 5.4).toFixed(2);

  const getMarkerPos = (pct: number) => {
    const points = [
      { x: 12, y: 20 },
      { x: 22, y: 28 },
      { x: 35, y: 32 },
      { x: 45, y: 40 },
      { x: 58, y: 48 },
      { x: 70, y: 62 },
      { x: 82, y: 74 },
      { x: 92, y: 82 },
    ];
    const totalSegments = points.length - 1;
    const scaled = (pct / 100) * totalSegments;
    const idx = Math.min(Math.floor(scaled), totalSegments - 1);
    const fraction = scaled - idx;
    const p1 = points[idx];
    const p2 = points[idx + 1];
    return {
      x: p1.x + (p2.x - p1.x) * fraction,
      y: p1.y + (p2.y - p1.y) * fraction,
    };
  };

  const marker = getMarkerPos(progress);

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    setTimeout(() => setReportDownloaded(false), 4000);
  };

  return (
    <section id="live-gps" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Real-Time Accountability Engine
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Live GPS Tracking & Photo Verification
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminate leaflet dumping and skipped streets. The Marketize mobile app tracks every footstep in real time, caches GPS coordinates locally during cellular dead zones, and pins timestamped delivery photos directly to your client portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Viewer Column */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-white">Live Round #2841</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">Milan Central (IP1)</span>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Signal className="w-3.5 h-3.5" />
                  <span className="font-mono-numbers">GPS ±2.4m</span>
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono-numbers">86%</span>
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  Distributor: <strong className="text-white">Sarah M.</strong>
                </span>
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="relative w-full h-[380px] sm:h-[460px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 select-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                <path d="M 50 80 Q 200 120 400 90 T 700 150" fill="none" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
                <path d="M 120 40 L 150 400" fill="none" stroke="#334155" strokeWidth="16" />
                <path d="M 320 20 L 380 420" fill="none" stroke="#334155" strokeWidth="14" />
                <path d="M 540 80 L 620 440" fill="none" stroke="#334155" strokeWidth="16" />
                <path d="M 40 280 L 750 320" fill="none" stroke="#334155" strokeWidth="18" />

                <text x="140" y="70" fill="#64748b" fontSize="10" fontWeight="600">Anglesea Rd</text>
                <text x="340" y="160" fill="#64748b" fontSize="10" fontWeight="600">Berners St</text>
                <text x="560" y="240" fill="#64748b" fontSize="10" fontWeight="600">St Matthews St</text>
                <text x="180" y="310" fill="#64748b" fontSize="10" fontWeight="600">Civic Drive</text>

                <polyline
                  points="90,90 170,130 260,150 340,185 440,220 530,285 620,340 700,380"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="4"
                  strokeDasharray="6,6"
                />

                <polyline
                  points="90,90 170,130 260,150 340,185 440,220 530,285 620,340 700,380"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 - (progress / 100) * 750}
                  className="transition-all duration-150"
                />
              </svg>

              {CHECKPOINTS.map((cp) => (
                <button
                  key={cp.id}
                  onClick={() => setActiveCheckpoint(cp)}
                  style={{ left: `${cp.x}%`, top: `${cp.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-none"
                  aria-label={`View photo verification for ${cp.address}`}
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-slate-900 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Camera className="w-4 h-4 text-slate-950" />
                    </div>
                    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-slate-900 text-white border border-slate-700 px-2.5 py-1 rounded text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                      📸 Geo-Photo #{cp.id} (Click to inspect)
                    </div>
                  </div>
                </button>
              ))}

              <div
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-150"
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-8 h-8 rounded-full bg-emerald-400/30 animate-ping" />
                  <div className="w-7 h-7 rounded-full bg-emerald-400 border-2 border-white shadow-xl flex items-center justify-center text-slate-950">
                    <Footprints className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl text-xs space-y-1">
                <div className="text-slate-400 text-[11px]">Letterboxes Delivered</div>
                <div className="font-mono-numbers text-base font-extrabold text-emerald-400">
                  {currentLetterboxes.toLocaleString()} / 1,250
                </div>
                <div className="text-[10px] text-slate-400">
                  Distance: <span className="font-mono-numbers text-white">{currentDistanceKm} km</span> · Pace: <span className="font-mono-numbers text-white">4.3 km/h</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Blind-Spots: Local Device Cache Active</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause Simulation' : 'Resume Simulation'}</span>
                </button>
                <button
                  onClick={() => {
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Walk</span>
                </button>
              </div>

              <button
                onClick={handleDownloadReport}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>{reportDownloaded ? 'Downloaded GPX / PDF Report!' : 'Download Sample GPS Report'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: App Showcase */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/images/home/phone.avif"
                  alt="Marketize distributor GPS tracking mobile app"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
                  Marketize Mobile GPS App (iOS & Android)
                </div>
              </div>
              <div className="p-5 text-xs space-y-3">
                <p className="text-slate-300 leading-relaxed">
                  Every distributor uses our proprietary tracking app. It records high-frequency GPS breadcrumbs locally on the device every 3 seconds—meaning even inside underground parking, rural dips, or poor cellular signal, zero delivery steps are lost.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>GPS Sampling Frequency:</span>
                    <span className="font-mono-numbers font-semibold text-white">Every 3.0 sec</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Offline Sync Tolerance:</span>
                    <span className="font-mono-numbers font-semibold text-white">Up to 72 hours</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Geo-Photo EXIF Verifier:</span>
                    <span className="font-mono-numbers font-semibold text-emerald-400">Cryptographically Signed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                <span>Geo-Photo Verification Log</span>
                <span className="text-emerald-400 font-mono-numbers">4 / 4 Verified</span>
              </h4>
              <div className="space-y-2.5">
                {CHECKPOINTS.map((cp) => (
                  <button
                    key={cp.id}
                    onClick={() => setActiveCheckpoint(cp)}
                    className="w-full text-left p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between text-xs cursor-pointer group"
                  >
                    <div className="space-y-0.5 truncate pr-2">
                      <div className="font-semibold text-white truncate group-hover:text-emerald-400 transition-colors">
                        {cp.address}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono-numbers">{cp.time}</div>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-semibold bg-emerald-950 border border-emerald-800/80 text-emerald-400 rounded-md shrink-0 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Inspect
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeCheckpoint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Geo-Tagged Delivery Proof Photo</h4>
                <div className="text-xs text-slate-400">EXIF Verified GPS Stamp</div>
              </div>
              <button
                onClick={() => setActiveCheckpoint(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-64 bg-slate-950">
              <img
                src={activeCheckpoint.photoUrl}
                alt={activeCheckpoint.address}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-200">
                <div className="font-bold text-white">{activeCheckpoint.address}</div>
                <div className="font-mono-numbers text-emerald-400">Time: {activeCheckpoint.time} · Accuracy: ±1.8m</div>
              </div>
            </div>

            <div className="p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Letterbox Type:</span>
                <span className="text-white font-medium">{activeCheckpoint.letterboxType}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Verification Authority:</span>
                <span className="text-emerald-400 font-medium">Marketize Independent Automated Audit</span>
              </div>
              <button
                onClick={() => setActiveCheckpoint(null)}
                className="mt-3 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs cursor-pointer"
              >
                Close Verification Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
