import React, { useState } from 'react';
import { QrCode, Download, ExternalLink, BarChart3, Check, Copy } from 'lucide-react';

export const QrStudio: React.FC = () => {
  const [targetUrl, setTargetUrl] = useState<string>('https://yourbusiness.co.uk/offer');
  const [campaignCode, setCampaignCode] = useState<string>('SPRING20');
  const [selectedSector, setSelectedSector] = useState<string>('IP1 1 — Ipswich Central');
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const fullTrackingUrl = `${targetUrl}?utm_source=marketize_door_drop&utm_campaign=${encodeURIComponent(
    campaignCode
  )}&utm_medium=leaflet&sector=${encodeURIComponent(selectedSector.split(' ')[0])}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullTrackingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQr = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="qr-studio" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
            Smart Leaflet Innovation
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            QR Code Studio & Physical-to-Digital Attribution
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Turn offline door-drops into measurable digital funnels. Marketize automatically generates unique, high-resolution QR codes tagged to specific postcode sectors, giving you real-time scan metrics, conversion rates, and ROI by street.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: QR Generator Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-emerald-600" />
              <span>Generate Print-Ready Tracked QR Code</span>
            </h3>

            {/* Target URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Destination Web Page or Landing Page
              </label>
              <input
                type="url"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="https://yourbusiness.co.uk/promo"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors shadow-xs"
              />
              <span className="text-[11px] text-slate-500">
                Where recipients land when they scan your flyer with their smartphone camera.
              </span>
            </div>

            {/* Campaign Tag */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Campaign / Promo Code</label>
                <input
                  type="text"
                  value={campaignCode}
                  onChange={(e) => setCampaignCode(e.target.value)}
                  placeholder="e.g. SAVE20"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors shadow-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Target Postal Sector</label>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors shadow-xs"
                >
                  <option value="IP1 1 — Ipswich Central">IP1 1 — Ipswich Central</option>
                  <option value="IP1 2 — Ipswich North">IP1 2 — Ipswich North</option>
                  <option value="IP2 8 — Ipswich Chantry">IP2 8 — Ipswich Chantry</option>
                  <option value="NR1 1 — Norwich Central">NR1 1 — Norwich Central</option>
                  <option value="CB1 2 — Cambridge Central">CB1 2 — Cambridge Central</option>
                  <option value="EC1V — London Clerkenwell">EC1V — London Clerkenwell</option>
                </select>
              </div>
            </div>

            {/* Encoded URL preview */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div className="flex items-center justify-between text-slate-500 mb-1.5">
                <span>Auto-Generated UTM Tracking URL:</span>
                <button
                  onClick={handleCopyLink}
                  className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy URL'}</span>
                </button>
              </div>
              <div className="font-mono-numbers text-[11px] text-slate-800 truncate select-all">
                {fullTrackingUrl}
              </div>
            </div>

            {/* Print features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">300 DPI Vector</div>
                <div className="text-[11px] text-slate-500">High-res SVG / EPS for commercial print runs.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">Quiet Zone Protected</div>
                <div className="text-[11px] text-slate-500">Guaranteed scannability on all smartphones.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">Dynamic Redirect</div>
                <div className="text-[11px] text-slate-500">Change URL anytime even after leaflets are printed.</div>
              </div>
            </div>
          </div>

          {/* Right Column: QR Asset Preview & Scan Analytics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="text-xs font-bold text-slate-600 mb-4">
                Print Asset Preview (Embedded with {selectedSector.split(' ')[0]})
              </div>

              {/* Rendered QR Card */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner flex flex-col items-center max-w-[240px] w-full">
                <svg
                  className="w-44 h-44"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="5" y="5" width="26" height="26" rx="4" fill="#0f172a" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="13" width="10" height="10" rx="1" fill="#0f172a" />

                  <rect x="69" y="5" width="26" height="26" rx="4" fill="#0f172a" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="77" y="13" width="10" height="10" rx="1" fill="#0f172a" />

                  <rect x="5" y="69" width="26" height="26" rx="4" fill="#0f172a" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="77" width="10" height="10" rx="1" fill="#0f172a" />

                  <rect x="36" y="8" width="6" height="6" fill="#0f172a" />
                  <rect x="46" y="8" width="6" height="6" fill="#0f172a" />
                  <rect x="56" y="8" width="6" height="6" fill="#0f172a" />
                  <rect x="36" y="18" width="6" height="6" fill="#0f172a" />
                  <rect x="46" y="24" width="6" height="6" fill="#0f172a" />
                  <rect x="56" y="18" width="6" height="6" fill="#0f172a" />

                  <rect x="8" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="18" y="46" width="6" height="6" fill="#0f172a" />
                  <rect x="24" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="8" y="56" width="6" height="6" fill="#0f172a" />

                  <rect x="36" y="36" width="8" height="8" rx="2" fill="#059669" />
                  <rect x="48" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="58" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="44" y="48" width="8" height="8" rx="2" fill="#059669" />
                  <rect x="36" y="58" width="6" height="6" fill="#0f172a" />
                  <rect x="56" y="58" width="6" height="6" fill="#0f172a" />

                  <rect x="69" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="79" y="46" width="6" height="6" fill="#0f172a" />
                  <rect x="89" y="36" width="6" height="6" fill="#0f172a" />
                  <rect x="79" y="56" width="6" height="6" fill="#0f172a" />

                  <rect x="36" y="74" width="6" height="6" fill="#0f172a" />
                  <rect x="46" y="74" width="6" height="6" fill="#0f172a" />
                  <rect x="56" y="84" width="6" height="6" fill="#0f172a" />
                  <rect x="69" y="74" width="6" height="6" fill="#0f172a" />
                  <rect x="79" y="84" width="6" height="6" fill="#0f172a" />
                  <rect x="89" y="74" width="6" height="6" fill="#0f172a" />
                </svg>
                <span className="mt-3 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                  SCAN FOR {campaignCode}
                </span>
                <span className="text-[10px] text-slate-500 font-mono-numbers">
                  {selectedSector.split(' ')[0]} Verified
                </span>
              </div>

              {/* Download Buttons */}
              <div className="mt-6 w-full flex items-center gap-3">
                <button
                  onClick={handleDownloadQr}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadSuccess ? 'Downloaded SVG Asset!' : 'Download Print SVG'}</span>
                </button>
              </div>
            </div>

            {/* Campaign Response Dashboard Mockup */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">Live Campaign Response Telemetry</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  REAL-TIME
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-[10px] text-slate-500">Total Scans</div>
                  <div className="font-mono-numbers text-base font-bold text-slate-900">342</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-[10px] text-slate-500">Response Rate</div>
                  <div className="font-mono-numbers text-base font-bold text-emerald-700">8.9%</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-[10px] text-slate-500">Cost / Scan</div>
                  <div className="font-mono-numbers text-base font-bold text-slate-900">£0.76</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center justify-between">
                <span>Top Performing Sector:</span>
                <strong className="text-slate-900 font-semibold">IP1 2 (Ipswich Central North)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
