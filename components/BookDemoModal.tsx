import React, { useEffect } from 'react';
import { RockytLogo } from './Logo';
import '../types';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-black w-full max-w-5xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[800px] animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
        </button>

        {/* Left Side: Journey & Transformation */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#1A1A1A] to-black border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 flex items-center justify-center">
                <RockytLogo className="w-full h-full" />
             </div>
             <h2 className="text-2xl font-bold text-white">Scale with Rockyt</h2>
          </div>

          <div className="space-y-10">
            {/* The Journey */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-6">Implementation Journey</h3>
              <div className="relative border-l border-white/10 pl-8 space-y-8 ml-3">
                <div className="relative">
                  <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-brand-blue border-4 border-brand-black"></div>
                  <h4 className="text-white font-semibold text-lg">1. Connect & Audit</h4>
                  <p className="text-gray-400 text-sm mt-1">We analyze your current ad stack and integrate your platforms in under 5 minutes.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-brand-purple border-4 border-brand-black"></div>
                  <h4 className="text-white font-semibold text-lg">2. Set Automation Rules</h4>
                  <p className="text-gray-400 text-sm mt-1">Configure guardrails for budget scaling and creative rotation based on our templates.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-brand-yellow border-4 border-brand-black"></div>
                  <h4 className="text-white font-semibold text-lg">3. Launch & Scale</h4>
                  <p className="text-gray-400 text-sm mt-1">Rockyt takes over manual adjustments, scaling winners 24/7 automatically.</p>
                </div>
              </div>
            </div>

            {/* Expected Results */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-6">Expected Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-bold text-brand-pink mb-1">30%</div>
                  <div className="text-xs text-gray-300">Less time managing ads manually</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-bold text-brand-yellow mb-1">23%</div>
                  <div className="text-xs text-gray-300">Increase in ROAS within 30 days</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 col-span-2 flex items-center justify-between">
                   <div>
                      <div className="text-3xl font-bold text-white mb-1">2x</div>
                      <div className="text-xs text-gray-300">Faster campaign scaling velocity</div>
                   </div>
                   <iconify-icon icon="solar:chart-square-bold-duotone" width="40" className="text-brand-blue opacity-50"></iconify-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-brand-black overflow-y-auto">
          <h2 className="text-3xl font-semibold mb-2">Schedule your demo</h2>
          <p className="text-gray-400 mb-8">See how Rockyt can transform your ad performance.</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-300 ml-1">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-300 ml-1">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 ml-1">Work Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="jane@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 ml-1">Company Website</label>
              <input type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors" placeholder="rockyt.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 ml-1">Monthly Ad Spend</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none">
                <option className="bg-brand-black text-gray-400" value="" disabled selected>Select an option</option>
                <option className="bg-brand-black" value="<10k">Less than $10k</option>
                <option className="bg-brand-black" value="10k-50k">$10k - $50k</option>
                <option className="bg-brand-black" value="50k-100k">$50k - $100k</option>
                <option className="bg-brand-black" value="100k+">$100k+</option>
              </select>
            </div>

            <button className="w-full bg-brand-yellow text-brand-black font-bold py-4 rounded-xl mt-4 hover:bg-[#fcd34d] transition-colors btn-hover-skew">
              <span>Schedule Call</span>
            </button>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BookDemoModal;