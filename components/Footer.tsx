import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-4">
            {/* Logo placeholder */}
            <div className="w-8 h-8 rounded-full bg-white mb-6"></div>
          </div>
          
          <div className="col-span-2 md:col-span-2">
            <h5 className="text-sm font-semibold text-gray-500 mb-6 text-right md:text-left">Product</h5>
          </div>
          <div className="col-span-2 md:col-span-6 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Features</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Hub</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Ready-made strategies</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Product Roadmap</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Meta ads</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Google Ads</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Snapchat Ads</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Tiktok Ads</a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-4"></div>
          <div className="col-span-2 md:col-span-2">
            <h5 className="text-sm font-semibold text-gray-500 mb-6 text-right md:text-left">Resources</h5>
          </div>
          <div className="col-span-2 md:col-span-6 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Help</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Case studies</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Blog</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Meta ad costs</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Affiliate program</a>
              <a href="#" className="text-lg font-medium hover:text-gray-300 transition-colors">Bïrch experts</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-4xl font-bold tracking-tight">Birch</div>
          <div className="text-sm text-gray-500">© Birch Team, Inc. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;