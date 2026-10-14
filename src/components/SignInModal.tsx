import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'client' | 'distributor' | 'agency'>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 600);
  };

  const handleReset = () => {
    setIsLoggedIn(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-gray-200 max-w-md w-full rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
          <div className="flex items-center gap-2.5">
            <img src="/images/Logo.png" alt="Marketize" className="h-7 w-auto object-contain" />
            <span className="text-sm font-bold text-gray-900">Portal Login</span>
          </div>
          <button onClick={handleReset} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role toggle */}
        <div className="p-2 bg-gray-100 border-b border-gray-200 flex gap-1">
          <button
            type="button"
            onClick={() => setRole('client')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              role === 'client'
                ? 'bg-white text-gray-900 shadow-xs font-bold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => setRole('distributor')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              role === 'distributor'
                ? 'bg-white text-gray-900 shadow-xs font-bold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Distributor
          </button>
          <button
            type="button"
            onClick={() => setRole('agency')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              role === 'agency'
                ? 'bg-white text-gray-900 shadow-xs font-bold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Agency CRM
          </button>
        </div>

        {isLoggedIn ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 text-green-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Welcome Back</h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto">
              Logged in successfully as <strong>{email || 'client@business.co.uk'}</strong> ({role.toUpperCase()}). Accessing live GPS campaign dashboard.
            </p>
            <button
              onClick={handleReset}
              className="mt-3 px-6 py-2.5 bg-red-500 text-white rounded-full text-xs font-medium hover:bg-red-600 transition-colors shadow-md"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="p-6 space-y-4 text-xs">
            <div>
              <label htmlFor="login-email" className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.co.uk"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="login-password" className="text-xs font-medium text-gray-700">Password</label>
                <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Password reset link sent.'); }} className="text-[11px] text-red-500 hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full text-sm transition-colors cursor-pointer shadow-md disabled:opacity-50"
              >
                {isLoading ? 'Verifying Credentials...' : 'Sign In'}
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-500 pt-2">
              Protected by Marketize Secure Auth &amp; Cloudflare
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
