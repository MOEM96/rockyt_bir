import React, { useEffect, useState } from 'react';
import '../types';

interface PerformancePageProps {
  onBookDemo: () => void;
}

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'rules', label: 'Rules' },
  { id: 'workspaces', label: 'Workspaces' },
  { id: 'explorer', label: 'Explorer' },
  { id: 'advertising-platforms', label: 'Advertising platforms' },
  { id: 'launcher', label: 'Launcher' },
  { id: 'post-boosting', label: 'Post boosting' },
  { id: 'custom-metrics', label: 'Custom metrics' },
  { id: 'daily-updates', label: 'Daily updates' },
  { id: 'slack-alerts', label: 'Slack alerts' },
  { id: 'best-and-worst', label: 'Best and worst' },
  { id: 'automation-logs', label: 'Automation logs' },
  { id: 'automated-reports', label: 'Automated reports' },
];

const PerformancePage: React.FC<PerformancePageProps> = ({ onBookDemo }) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header height approx
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
      
      {/* Page Header */}
      <div className="py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Automate, analyze, amplify <br/> <span className="text-brand-pink">your ad campaigns</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="relative mb-8">
               <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6920945750dc374e3cc9eaef_e8edec91cca6f4f855402557ee16cca9_Hero%20Features.svg" className="w-full h-auto opacity-80" alt="Features Hero" />
            </div>
            <nav className="border-l border-white/10 pl-6 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block text-sm font-medium transition-all duration-200 text-left w-full hover:text-brand-yellow flex items-center gap-3 ${
                    activeSection === section.id ? 'text-brand-yellow scale-105 origin-left' : 'text-gray-500'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${activeSection === section.id ? 'bg-brand-yellow' : 'bg-transparent border border-gray-600'}`}></span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow space-y-16 w-full lg:max-w-4xl">
          
          {/* Overview / Video */}
          <section id="overview" className="scroll-mt-32">
            <div className="bg-brand-black border border-white/10 rounded-[32px] overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-6">Video overview</h2>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/5">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/AFCZIFBLmU8?modestbranding=1&rel=0" 
                    title="Overview of Rockyt features"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Rules */}
          <section id="rules" className="scroll-mt-32">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-[32px] p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Rules</h2>
                <p className="text-gray-400 text-lg mb-8">Fine-tune your ad performance — with an easy-to-use automation builder.</p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multiple Actions</h3>
                    <p className="text-gray-400">Create universal automations by choosing from more than 20 actions.</p>
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c6bc251ba3cb5b4d0b4bda_rules_features.avif" className="w-full h-auto" alt="Rules UI" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Nested conditions</h3>
                      <p className="text-gray-400 text-sm">Create complex rules by grouping conditions with AND/OR operators.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Metric comparison</h3>
                      <p className="text-gray-400 text-sm">Compare metric to metric over the same or different time periods.</p>
                    </div>
                  </div>

                  <div className="bg-brand-yellow rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-brand-black">
                     <div className="flex-shrink-0">
                        <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/6931872965313525d30d459d_strategy%20icons%20-%20features.svg" alt="Strategy" className="w-16 h-16" />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold mb-2">Strategies: pre-built rules</h4>
                       <p className="text-sm font-medium opacity-80 mb-4">Ad management techniques from us and our clients packed into easy-to-apply rules bundles.</p>
                       <button onClick={onBookDemo} className="px-6 py-2 bg-brand-black text-white rounded-full text-sm font-bold hover:bg-black/80 transition-colors">Learn more</button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workspaces */}
          <section id="workspaces" className="scroll-mt-32">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden relative">
              <h2 className="text-3xl font-bold text-white mb-6">Workspaces with Overview</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">Keep your hand on important metrics — Rockyt clearly shows you which metrics are worth monitoring.</p>
              
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e8655597215_workspaces_birch.avif" className="w-full h-auto" alt="Workspaces UI" />
              </div>
            </div>
          </section>

          {/* Explorer */}
          <section id="explorer" className="scroll-mt-32">
            <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
                 <iconify-icon icon="solar:graph-new-up-bold-duotone" width="200" className="text-brand-purple"></iconify-icon>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">Explorer</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl">Rockyt technologies will show important creative insights. And you'll always be aware of what's important.</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                 <div className="bg-brand-black/50 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-brand-yellow font-bold text-lg mb-1">Top Ads</div>
                    <div className="text-xs text-gray-400">Last Week</div>
                 </div>
                 <div className="bg-brand-black/50 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-brand-blue font-bold text-lg mb-1">Video Ads</div>
                    <div className="text-xs text-gray-400">Best Formats</div>
                 </div>
                 <div className="bg-brand-black/50 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-brand-pink font-bold text-lg mb-1">Fatigue</div>
                    <div className="text-xs text-gray-400">Replace Needed</div>
                 </div>
                 <div className="bg-brand-black/50 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-red-500 font-bold text-lg mb-1">Downtrend</div>
                    <div className="text-xs text-gray-400">Stop Now</div>
                 </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c711ce104dcbd2b052b37b_explorer.avif" className="w-full h-auto" alt="Explorer UI" />
              </div>
            </div>
          </section>

          {/* Advertising Platforms */}
          <section id="advertising-platforms" className="scroll-mt-32">
            <div className="bg-white rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-brand-black mb-8">Advertising platforms</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                 <iconify-icon icon="logos:meta-icon" width="48"></iconify-icon>
                 <iconify-icon icon="logos:google-icon" width="40"></iconify-icon>
                 <iconify-icon icon="logos:tiktok-icon" width="40"></iconify-icon>
                 <iconify-icon icon="fa-brands:snapchat-ghost" width="44" style={{ color: 'black' }}></iconify-icon>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-brand-black">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold mb-2">Meta Ads</h3>
                  <p className="text-sm text-gray-600">Create a fully automated system with a complete suite of automation tools.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold mb-2">Google Ads</h3>
                  <p className="text-sm text-gray-600">Build automations without scripts and create reports for the whole team.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold mb-2">Snapchat Ads</h3>
                  <p className="text-sm text-gray-600">Scale profitable snaps and optimize your cost per swipe with automation.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-bold mb-2">TikTok Ads</h3>
                  <p className="text-sm text-gray-600">Create automations with advanced tools that go beyond what is possible natively.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Launcher */}
          <section id="launcher" className="scroll-mt-32">
            <div className="bg-brand-blue rounded-[32px] p-8 md:p-12 text-white overflow-hidden relative">
              <h2 className="text-3xl font-bold mb-6">Launcher</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl">Stop checking on your campaigns all the time. Rockyt will do that for you.</p>
              
              <div className="space-y-8 relative z-10">
                <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Launch ads in bulk</h3>
                  <p className="text-sm opacity-80">Quickly set up and launch multiple ad sets at once, each containing up to 50 ads.</p>
                </div>
                <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-bold mb-2">Macros</h3>
                  <p className="text-sm opacity-80">Just tag it! Rockyt will create tags automatically for new campaigns, ad sets, and ads.</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-xl border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e865559720a_adslauncher2.avif" className="w-full h-auto" alt="Launcher UI" />
              </div>
            </div>
          </section>

          {/* Post Boosting */}
          <section id="post-boosting" className="scroll-mt-32">
            <div className="bg-brand-pink rounded-[32px] p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Post boosting</h2>
              <p className="text-white/90 text-lg mb-8">Rockyt will turn your cool Instagram and Facebook posts into effective ads automatically.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold mb-2">1. Set</div>
                  <p className="text-sm opacity-90">Specify organic impressions, engagement, or keywords to filter posts.</p>
                </div>
                <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold mb-2">2. Select</div>
                  <p className="text-sm opacity-90">Set your budget, show time, and audience. Rockyt remembers settings.</p>
                </div>
                <div className="bg-black/20 p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold mb-2">3. Launch!</div>
                  <p className="text-sm opacity-90">Rockyt monitors effectiveness and sends notifications.</p>
                </div>
              </div>
              
              <div className="mt-8 rounded-xl overflow-hidden border border-white/20 shadow-xl">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e865559724d_postboosting.png" className="w-full h-auto" alt="Post Boosting UI" />
              </div>
            </div>
          </section>

          {/* Custom Metrics */}
          <section id="custom-metrics" className="scroll-mt-32">
            <div className="bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Custom metrics</h2>
              <p className="text-gray-400 text-lg mb-8">Make your own metrics as a calculation or as a variable to store a static number.</p>
              
              <div className="rounded-xl overflow-hidden border border-white/10 mb-8">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e865559725f_custom_metrics.avif" className="w-full h-auto" alt="Custom Metrics UI" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">Google Sheets integration</h3>
                    <p className="text-gray-400 text-sm">Trigger automations based on data in a Google Sheet and create unique metrics based on spreadsheets.</p>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">Integrations</h3>
                    <p className="text-gray-400 text-sm">Automate your marketing decisions based on external attribution data.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Daily Updates */}
          <section id="daily-updates" className="scroll-mt-32">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Daily updates</h2>
              <p className="text-gray-400 text-lg mb-8">Update your team daily and show your results to clients and stakeholders with beautiful scheduled reports.</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e865559727f_daily_updates_desktop.png" className="w-full h-auto" alt="Daily Updates" />
              </div>
            </div>
          </section>

          {/* Slack Alerts */}
          <section id="slack-alerts" className="scroll-mt-32">
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-500/20 rounded-[32px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div>
                   <h2 className="text-3xl font-bold text-white mb-4">Slack alerts</h2>
                   <p className="text-gray-300">Stop checking on your campaigns all the time. Rockyt will do that for you and send alerts directly to Slack.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2">
                   <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e8655597268_slack_alerts.avif" className="w-full h-auto rounded-xl border border-white/10 shadow-2xl" alt="Slack Alerts" />
                </div>
              </div>
            </div>
          </section>

          {/* Best and Worst */}
          <section id="best-and-worst" className="scroll-mt-32">
            <div className="bg-[#161616] border border-white/10 rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Best and worst</h2>
              <p className="text-gray-400 text-lg mb-8">Figure out which audiences are a hit and which aren't.</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e8655597240_best_and_worst.avif" className="w-full h-auto" alt="Best and Worst Analysis" />
              </div>
            </div>
          </section>

          {/* Logs */}
          <section id="automation-logs" className="scroll-mt-32">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Automation logs</h2>
              <p className="text-gray-400 text-lg mb-8">Understand why items were (or were not) affected by automations.</p>
              <div className="rounded-xl overflow-hidden border border-white/10 mb-8">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e8655597234_automation_logs.avif" className="w-full h-auto" alt="Logs" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">Track changes</h3>
                    <p className="text-gray-400 text-sm">Analyze results and optimize your automated rules with historical log reports.</p>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">Troubleshooting</h3>
                    <p className="text-gray-400 text-sm">Debug where automated rules should have or should not have fired.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Reports */}
          <section id="automated-reports" className="scroll-mt-32">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Automated reports</h2>
              <p className="text-gray-400 text-lg mb-8">Make cross-platform reports: manually or automatically on a schedule. Rockyt will automatically create handy charts.</p>
              
              <div className="rounded-xl overflow-hidden border border-white/10 mb-8">
                 <img src="https://cdn.prod.website-files.com/6716718ea408f53194adf9a9/67c5b2eecfad4e86555971f0_automated_reports.avif" className="w-full h-auto" alt="Reports" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">White Label Reports</h3>
                    <p className="text-gray-400 text-sm">Create professional and stylish reports for clients — with elements of your brand.</p>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">Uncover new insights</h3>
                    <p className="text-gray-400 text-sm">Measure audience and creative performance across all your campaigns.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-brand-black border border-dashed border-white/20 rounded-[32px] p-12 text-center hover:border-brand-yellow/50 transition-colors group">
             <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-brand-yellow transition-colors">Ready to scale?</h2>
             <button 
               onClick={onBookDemo} 
               data-cal-link="rock-yt-admanager/15min"
               data-cal-namespace="15min"
               data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
               className="bg-brand-yellow text-brand-black px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fcd34d] transition-colors btn-hover-skew"
              >
                <span>Book a demo</span>
             </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PerformancePage;