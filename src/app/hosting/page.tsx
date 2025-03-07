'use client';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import { ArrowUpRight, Server, Shield, Zap, Clock } from 'lucide-react';
import { useState } from 'react';
import ClientCalendly from '@/components/ClientCalendly';

const features = [
  'High-performance servers',
  '99.9% uptime guarantee',
  'Daily backups',
  'SSL certificates included',
  'DDoS protection',
  'Managed WordPress hosting',
  '24/7 monitoring',
  'Automatic updates',
  'CDN integration',
  'Expert support'
];

export default function HostingPage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <section className="relative isolate px-6 pt-24 lg:pt-28 bg-rich-black">
        {/* Background overlay for readability */}
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300/20 to-transparent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left column - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-serif mb-6 border border-gold-500/20">
                <span className="flex-1">All-in-One Solution</span>
                <div className="w-px h-4 bg-gold-500/30"></div>
                <span className="text-gold-400">Just $50/month</span>
              </div>
              
              <h1 className="relative space-y-3">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-300/20 rounded-full blur-2xl opacity-20"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-300/20 rounded-full blur-3xl opacity-20"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground font-serif drop-shadow-sm">Fully Managed Hosting</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold gold-gradient-text font-serif">
                    + Marketing Tools
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-gray-300 font-serif">
                    to Grow Your
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Business</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-300/20 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent opacity-20"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 max-w-2xl font-sans">
                  Speed, security, and an all-in-one platform—just $50/month. Hosting should be more than just a place to park your website. That's why our solution comes with built-in marketing and automation tools to help you capture leads, nurture relationships, and drive revenue—all without juggling multiple vendors.
                </p>
              </div>
              
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-300/20 rounded-full blur-2xl opacity-20"></div>
                <a
                  href="#calendly"
                  className="relative rounded-full gold-btn px-8 py-4 text-base font-serif shadow-lg hover:shadow-gold-300/20 transition-all duration-200 flex items-center gap-2 group z-10"
                >
                  <span>Book a FREE Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#features"
                  className="relative rounded-full dark-btn px-8 py-4 text-base font-serif shadow-lg shadow-rich-black/30 hover:shadow-md transition-all duration-200 flex items-center gap-2 bg-rich-dark/90 backdrop-blur-sm group z-10"
                >
                  <span>Explore Features</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-400" />
                </a>
              </div>
            </div>
            
            {/* Right column - Image/Visual */}
            <div className="relative lg:ml-auto">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-gold-300/20 to-transparent opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-8 shadow-xl border border-gold-500/20">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-300/20 to-transparent opacity-20"></div>
                  <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.2))] -z-10 opacity-10"></div>
                  
                  {/* Dashboard visualization */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                        <span className="font-medium text-foreground font-serif">Live Server Status</span>
                      </div>
                      <div className="text-sm text-gray-300 font-sans">All systems operational</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-rich-gray/90 rounded-lg p-4 shadow-sm border border-gold-500/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-5 h-5 text-gold-400" />
                          <span className="font-medium text-foreground font-serif">Performance</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground font-serif"><span className="text-gold-400">98</span><span className="text-lg font-medium text-gray-400">/100</span></div>
                        <div className="mt-2 w-full h-2 bg-rich-black rounded-full overflow-hidden">
                          <div className="h-full bg-gold-400 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      <div className="bg-rich-gray/90 rounded-lg p-4 shadow-sm border border-gold-500/10">
                        <div className="flex items-center gap-3 mb-2">
                          <Shield className="w-5 h-5 text-gold-400" />
                          <span className="font-medium text-foreground font-serif">Security</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground font-serif"><span className="text-gold-400">100</span><span className="text-lg font-medium text-gray-400">/100</span></div>
                        <div className="mt-2 w-full h-2 bg-rich-black rounded-full overflow-hidden">
                          <div className="h-full bg-gold-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-rich-gray/90 rounded-lg p-4 shadow-sm mb-4 border border-gold-500/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Server className="w-5 h-5 text-gold-400" />
                          <span className="font-medium text-foreground font-serif">Uptime</span>
                        </div>
                        <div className="text-sm font-medium text-gold-400">99.9%</div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-8 w-1.5 rounded-sm ${i === 15 ? 'bg-gold-300' : 'bg-gold-500'}`}
                            style={{ height: `${Math.max(60, Math.min(100, 70 + Math.sin(i * 0.5) * 30))}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-400 font-sans">
                        <span>30 days ago</span>
                        <span>Today</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 font-sans">Last updated: Just now</span>
                      </div>
                      <div className="text-gold-400 font-medium font-serif">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get for $50/Month Section */}
      <section id="features" className="py-24 bg-rich-black border-t border-gold-500/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-gold-400 font-serif">Comprehensive Solution</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground font-serif sm:text-4xl drop-shadow-sm">
              What You Get for $50/Month
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              A complete suite of hosting and marketing tools to help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Hosting & Site Maintenance Column */}
            <div className="bg-rich-dark/90 rounded-2xl shadow-xl overflow-hidden border border-gold-500/20">
              <div className="bg-gradient-to-r from-gold-600/80 to-gold-400/80 px-6 py-8">
                <div className="flex items-center gap-4">
                  <Server className="h-8 w-8 text-rich-black" />
                  <h3 className="text-xl font-bold text-rich-black font-serif">Hosting & Site Maintenance</h3>
                </div>
                <p className="mt-2 text-rich-black/80 font-sans">
                  Enterprise-grade infrastructure with hands-on support and maintenance
                </p>
              </div>
              
              <div className="px-6 py-8">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Reliable Uptime</p>
                      <p className="text-sm text-gray-300 font-sans">Your website stays accessible, fast, and secure around the clock.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Ongoing Updates & Monitoring</p>
                      <p className="text-sm text-gray-300 font-sans">We handle security patches, software updates, and performance checks.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Proactive Backups</p>
                      <p className="text-sm text-gray-300 font-sans">Daily backups ensure your data is safe, with quick restore options if needed.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Hands-On Support</p>
                      <p className="text-sm text-gray-300 font-sans">Our team is here to help with any minor site changes or troubleshooting—no extra charge.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Marketing & Automation Tools Column */}
            <div className="bg-rich-dark/90 rounded-2xl shadow-xl overflow-hidden border border-gold-500/20">
              <div className="bg-gradient-to-r from-gold-500/80 to-gold-300/80 px-6 py-8">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rich-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  <h3 className="text-xl font-bold text-rich-black font-serif">Marketing & Automation Tools</h3>
                </div>
                <p className="mt-2 text-rich-black/80 font-sans">
                  Powerful tools to attract, engage, and convert visitors into customers
                </p>
              </div>
              
              <div className="px-6 py-8">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-rich-gray text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Appointment Scheduling & Online Booking</p>
                      <p className="text-sm text-gray-300 font-sans">Let clients schedule appointments or demos in real time.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-rich-gray text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">CRM & Pipeline Management</p>
                      <p className="text-sm text-gray-300 font-sans">Track leads and deals through every stage to keep your sales process organized.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-rich-gray text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Call Tracking & Reporting</p>
                      <p className="text-sm text-gray-300 font-sans">Measure the success of campaigns by monitoring inbound calls and conversions.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-rich-gray text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground font-serif">Email Builder & Custom Templates</p>
                      <p className="text-sm text-gray-300 font-sans">Design professional emails, surveys, and automation sequences with ease.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gold-500/10">
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-sans">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>All included features are available to you—no hidden fees or extra software needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a
              href="#calendly"
              className="inline-flex items-center gap-2 text-base font-serif text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>See all features</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Take It Further with Professional Marketing Services Section */}
      <section className="py-24 bg-rich-black border-t border-gold-500/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Image/Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-300/10 rounded-3xl transform rotate-3 -z-10 blur-sm"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/10 to-gold-300/10 rounded-3xl transform -rotate-2 -z-10 opacity-30"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-500/20">
                <div className="bg-rich-dark/90 p-6 sm:p-10">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-gold-500/10">
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-serif">Email Marketing</h4>
                        <p className="text-sm text-gray-300 font-sans">Automated campaigns that convert</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center rounded-full bg-gold-400/10 px-2 py-1 text-xs font-medium text-gold-300 ring-1 ring-inset ring-gold-400/20">
                          Available
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pb-6 border-b border-gold-500/10">
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="3" y1="9" x2="21" y2="9"></line>
                          <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-serif">Funnel Design</h4>
                        <p className="text-sm text-gray-300 font-sans">High-converting sales funnels</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center rounded-full bg-gold-400/10 px-2 py-1 text-xs font-medium text-gold-300 ring-1 ring-inset ring-gold-400/20">
                          Available
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pb-6 border-b border-gold-500/10">
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-serif">Lead Nurturing</h4>
                        <p className="text-sm text-gray-300 font-sans">Automated follow-up sequences</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center rounded-full bg-gold-400/10 px-2 py-1 text-xs font-medium text-gold-300 ring-1 ring-inset ring-gold-400/20">
                          Available
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-serif">Analytics & Reporting</h4>
                        <p className="text-sm text-gray-300 font-sans">Data-driven insights</p>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center rounded-full bg-gold-400/10 px-2 py-1 text-xs font-medium text-gold-300 ring-1 ring-inset ring-gold-400/20">
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Text content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-rich-dark/90 text-gold-400 text-sm font-serif mb-6 border border-gold-500/20">
                <span>Professional Services</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-serif sm:text-4xl mb-6 drop-shadow-sm">
                Take It Further with Professional Marketing Services
              </h2>
              
              <p className="text-lg text-foreground font-serif mb-6">
                <span className="font-semibold gold-gradient-text">DIY or Done-For-You—Your Call</span>
              </p>
              
              <p className="text-lg text-gray-300 font-sans mb-8">
                Already comfortable with automation and email campaigns? Dive right in. Need expert help designing your funnels, managing email marketing, or setting up lead nurturing? We've got you covered. Our team can tailor additional marketing services to help you make the most of every tool at your disposal.
              </p>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full gold-btn px-8 py-4 text-base font-serif shadow-lg hover:shadow-gold-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 transition-all z-10"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Hosting Outperforms the Rest Section */}
      <section className="py-24 bg-rich-dark border-t border-gold-500/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-gold-400 font-serif">Superior Service</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground font-serif sm:text-4xl drop-shadow-sm">
              Why Our Hosting Outperforms the Rest
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We've designed our hosting solution with your business growth in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Feature 1 */}
            <div className="bg-rich-dark/90 rounded-xl shadow-sm p-8 border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-serif mb-3">All-in-One Convenience</h3>
                <p className="text-gray-300 font-sans">No need to juggle multiple accounts and platforms. Everything's in one place.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-rich-dark/90 rounded-xl shadow-sm p-8 border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-serif mb-3">SEO-Ready Infrastructure</h3>
                <p className="text-gray-300 font-sans">We configure your site and tools with SEO best practices in mind, increasing your online visibility.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-rich-dark/90 rounded-xl shadow-sm p-8 border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-serif mb-3">Dedicated Team</h3>
                <p className="text-gray-300 font-sans">From quick edits to larger-scale campaigns, we're here to lend our expertise whenever you need it.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-rich-dark/90 rounded-xl shadow-sm p-8 border border-gold-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/20 rounded-full -mr-16 -mt-16 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold-400/20 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-serif mb-3">Scalability</h3>
                <p className="text-gray-300 font-sans">As your traffic and needs grow, we can expand your resources, features, and sub-accounts seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-rich-black border-t border-gold-500/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-gold-400 font-serif">Questions & Answers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground font-serif sm:text-4xl drop-shadow-sm">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Everything you need to know about our hosting services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-gold-500/10">
            <div className="py-6">
              <details className="group">
                <summary className="flex w-full cursor-pointer items-center justify-between text-left font-medium text-foreground">
                  <span className="text-lg font-semibold font-serif">What's included in the $50/month hosting package?</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="h-6 w-6 rotate-0 transform text-gold-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-gray-300 font-sans">
                  <p>Our $50/month package includes website hosting with 99.9% uptime guarantee, daily backups, security monitoring, regular updates, and access to our suite of marketing tools including appointment scheduling, CRM, call tracking, and email marketing capabilities. You'll also get hands-on support from our team whenever you need it.</p>
                </div>
              </details>
            </div>

            <div className="py-6">
              <details className="group">
                <summary className="flex w-full cursor-pointer items-center justify-between text-left font-medium text-foreground">
                  <span className="text-lg font-semibold font-serif">Do I need technical knowledge to use your hosting?</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="h-6 w-6 rotate-0 transform text-gold-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-gray-300 font-sans">
                  <p>Not at all! Our hosting solution is designed to be user-friendly, and we handle all the technical aspects for you. You'll have access to an intuitive dashboard to manage your content and marketing tools. Plus, our team is always available to help with any technical needs or questions you might have.</p>
                </div>
              </details>
            </div>

            <div className="py-6">
              <details className="group">
                <summary className="flex w-full cursor-pointer items-center justify-between text-left font-medium text-foreground">
                  <span className="text-lg font-semibold font-serif">Can I migrate my existing website to your hosting?</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="h-6 w-6 rotate-0 transform text-gold-400 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-gray-300 font-sans">
                  <p>Absolutely! We offer seamless website migration services at no additional cost. Our team will handle the entire process, ensuring your website is transferred without any downtime or data loss. We'll also optimize your site during the migration to improve performance and security.</p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full gold-btn px-8 py-4 text-base font-serif shadow-lg hover:shadow-gold-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 transition-all z-10"
            >
              <span>Have More Questions? Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-rich-black">
        <div className="absolute inset-0 bg-rich-black/80 z-0"></div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-serif sm:text-4xl drop-shadow-sm">
              Ready to <span className="gold-gradient-text">Simplify Your Digital Life</span>?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              For just $50 a month, you get reliable hosting, hands-on maintenance, and a powerful suite of marketing tools—plus the option to tap our experts for extra help. No more chasing multiple vendors or paying hidden fees. Let's take your online presence to the next level.
            </p>
            <ClientCalendly />
          </div>
        </div>
        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-gold-300/20 to-gold-500/20 opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </section>
    </PageLayout>
  );
}
