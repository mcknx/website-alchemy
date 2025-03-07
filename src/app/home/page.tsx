import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ClientCalendly from '@/components/ClientCalendly';
import LogoBadge from '@/components/LogoBadge';
import NewsletterForm from '@/components/NewsletterForm';
import { 
  ComputerDesktopIcon,
  ShareIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { ArrowUpRight, ArrowRight, BarChart3, LineChart, Network } from 'lucide-react';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-24 lg:pt-28 font-serif bg-rich-black">
        {/* Background pattern - reduced opacity */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-300 to-gold-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>

        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left column - Text content */}
            <div className="relative z-10">
              {/* Badge with improved contrast */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-dark/90 text-foreground text-sm font-medium mb-6 border border-gold-500/30 shadow-lg">
                <span className="flex-1 font-sans">Data-Driven Marketing Agency</span>
                <div className="w-px h-4 bg-gold-400"></div>
                <span className="text-gold-400 font-sans font-semibold">98% Client Satisfaction</span>
              </div>
              
              {/* Heading with improved contrast */}
              <h1 className="relative space-y-3 font-serif">
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-gold-100 rounded-full blur-2xl opacity-20"></div>
                <div className="absolute right-8 bottom-8 w-32 h-32 bg-gold-50 rounded-full blur-3xl opacity-20"></div>
                <div className="relative">
                  <span className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground drop-shadow-sm">Stop Guessing,</span>
                </div>
                <div className="relative">
                  <span className="text-4xl lg:text-6xl font-bold gold-gradient-text drop-shadow-md">
                    Start Growing
                  </span>
                </div>
                <div className="relative pt-2">
                  <span className="text-2xl lg:text-4xl font-medium tracking-tight text-foreground drop-shadow-sm">
                    Data-Driven Digital Marketing
                    <br />
                    That
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">Works</span>
                      <div className="absolute -bottom-1 left-0 w-full h-3 bg-gold-400/80 -rotate-1"></div>
                    </span>
                  </span>
                </div>
              </h1>
              
              {/* Paragraph with improved contrast */}
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-40"></div>
                <p className="pl-6 text-lg leading-8 text-gray-300 max-w-2xl font-sans">
                  Your digital presence should be more than just a 'website.' It should be your brand's online heartbeat—where customers connect, engage, and discover the real value you offer.
                </p>
              </div>
              
              {/* Buttons with improved contrast */}
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-4">
                <div className="absolute -left-4 top-1/2 w-20 h-20 bg-gold-300/20 rounded-full blur-2xl opacity-30"></div>
                <Link
                  href="/services"
                  className="relative rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-4 text-base font-semibold text-rich-black shadow-lg hover:shadow-gold-500/20 hover:from-gold-400 hover:to-gold-500 transition-all duration-200 flex items-center gap-2 group font-serif border border-gold-400"
                >
                  <span className="text-rich-black drop-shadow-sm font-bold">Services</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-rich-black" />
                </Link>
                <Link
                  href="/pricing"
                  className="relative rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center gap-2 bg-rich-dark/90 backdrop-blur-sm group border border-gold-300/50 font-serif"
                >
                  <span className="text-gold-300 font-bold">Pricing</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-300" />
                </Link>
              </div>

              {/* Stats with improved contrast */}
              <div className="relative mt-16 grid grid-cols-3 gap-6 py-8 border-y border-gold-500/20 font-sans">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 opacity-50 blur-xl"></div>
                <div>
                  <div className="text-2xl font-bold text-foreground">250%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">1.2M+</div>
                  <div className="text-sm text-gray-300">Leads Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-gray-300">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right column - Interactive visualization */}
            <div className="relative lg:ml-auto z-10">
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-tr from-gold-300/20 to-transparent opacity-30 blur-2xl"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-rich-dark/90 p-8 shadow-xl border border-gold-500/20">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-400/15 to-gold-300/5 opacity-30"></div>
                  <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] opacity-10 -z-10"></div>
                  
                  <div className="relative grid grid-cols-6 gap-4 font-sans">
                    {/* Dashboard header with improved contrast */}
                    <div className="col-span-6 overflow-hidden rounded-lg bg-rich-gray/90 p-3 shadow-sm border border-gold-500/20">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gold-100/90 flex items-center justify-center">
                            <BarChart3 className="h-5 w-5 text-gold-700" />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-foreground">Marketing Dashboard</div>
                            <div className="text-xs text-gray-300">Comprehensive analytics</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-xs font-medium text-green-500">Live</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Middle section - Performance graph */}
                    <div className="col-span-4 h-40 overflow-hidden rounded-lg bg-rich-dark/90 p-3 shadow-sm border border-gold-500/10">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-gray-300">Conversion Rate</div>
                        <div className="text-sm font-semibold text-gold-400">+32.5% MoM</div>
                      </div>
                      <div className="relative h-28">
                        {/* Area chart */}
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(255, 186, 0)" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="rgb(255, 186, 0)" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M0,56 L20,48 L40,52 L60,40 L80,44 L100,28 L120,32 L140,24 L160,16 L180,20 L200,8 L220,12 L240,4 L260,0 L280,8 L300,4 L320,12 L340,8 L360,16 L380,8 L400,12 L420,4 L440,8 L460,4 L480,0 L500,8 L520,4 L540,8 L560,4 L580,8 L600,4"
                            fill="url(#chart-gradient)"
                            stroke="rgb(255, 186, 0)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="scale(0.5, 0.5)"
                          />
                        </svg>
                        
                        {/* Horizontal grid lines */}
                        <div className="absolute inset-0 grid grid-rows-4 h-full w-full">
                          {[0, 1, 2, 3].map((i) => (
                            <div key={i} className="border-t border-gold-500/10 w-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Side metrics */}
                    <div className="col-span-2 grid grid-rows-2 gap-4">
                      <div className="overflow-hidden rounded-lg bg-rich-dark/90 p-3 shadow-sm border border-gold-500/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Engagement</div>
                            <div className="text-lg font-semibold text-foreground">87.4%</div>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-100/80 flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg bg-rich-dark/90 p-3 shadow-sm border border-gold-500/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Bounce Rate</div>
                            <div className="text-lg font-semibold text-foreground">12.8%</div>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-100/80 flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-green-600 rotate-180" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom row - Channel distribution */}
                    <div className="col-span-3 overflow-hidden rounded-lg bg-rich-dark/90 p-3 shadow-sm border border-gold-500/10">
                      <div className="text-sm font-medium text-gray-300 mb-2">Channel Mix</div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Organic</span>
                            <span className="font-medium text-foreground">42%</span>
                          </div>
                          <div className="h-1.5 w-full bg-rich-gray/90 rounded-full overflow-hidden">
                            <div className="h-full bg-gold-500 rounded-full" style={{ width: '42%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-300">Social</span>
                            <span className="font-medium text-foreground">28%</span>
                          </div>
                          <div className="h-1.5 w-full bg-rich-gray/90 rounded-full overflow-hidden">
                            <div className="h-full bg-gold-400 rounded-full" style={{ width: '28%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* ROI calculator */}
                    <div className="col-span-3 overflow-hidden rounded-lg bg-rich-dark/90 p-3 shadow-sm border border-gold-500/10">
                      <div className="text-sm font-medium text-gray-300 mb-1">ROI</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">Input</div>
                        <div className="text-xs font-medium text-foreground">$10k</div>
                      </div>
                      <div className="h-1.5 w-full bg-rich-gray/90 rounded-full overflow-hidden my-1">
                        <div className="h-full bg-gold-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">Output</div>
                        <div className="text-xs font-medium text-gold-400">$35k</div>
                      </div>
                      <div className="h-1.5 w-full bg-rich-gray/90 rounded-full overflow-hidden my-1">
                        <div className="h-full bg-gold-400 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern - reduced opacity */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gold-300 to-gold-200 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="relative overflow-hidden bg-rich-black">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Decorative elements with reduced opacity */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-300/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gold-200/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Data Visualization (previously right column) */}
            <div className="relative z-10">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                {/* Abstract Data Elements */}
                <div className="absolute inset-0">
                  {/* Network Nodes */}
                  <div className="absolute left-1/4 top-1/4 w-3 h-3 bg-gold-400 rounded-full animate-pulse shadow-gold-400/30 shadow-md"></div>
                  <div className="absolute right-1/3 top-1/2 w-3 h-3 bg-gold-300 rounded-full animate-pulse delay-75 shadow-gold-300/30 shadow-md"></div>
                  <div className="absolute left-1/2 bottom-1/3 w-3 h-3 bg-gold-500 rounded-full animate-pulse delay-150 shadow-gold-500/30 shadow-md"></div>
                  
                  {/* Connection Lines */}
                  <div className="absolute left-1/4 top-1/4 w-[200px] h-[1px] bg-gradient-to-r from-gold-400/60 to-transparent transform rotate-45"></div>
                  <div className="absolute right-1/3 top-1/2 w-[150px] h-[1px] bg-gradient-to-l from-gold-400/60 to-transparent transform -rotate-45"></div>
                  
                  {/* Data Visualization Elements */}
                  <div className="absolute left-1/4 bottom-1/4 w-32 h-32">
                    <div className="w-full h-full border-4 border-gold-400/30 rounded-xl transform rotate-45 shadow-lg shadow-gold-400/10"></div>
                    <div className="absolute inset-2 border-4 border-gold-300/20 rounded-lg transform rotate-45"></div>
                  </div>
                  
                  <div className="absolute right-1/4 top-1/3 w-40 h-40">
                    <div className="w-full h-full border border-gold-400/40 rounded-full shadow-lg shadow-gold-400/10"></div>
                    <div className="absolute inset-4 border border-gold-300/30 rounded-full"></div>
                    <div className="absolute inset-8 border border-gold-200/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Content (previously left column) */}
            <div className="relative lg:ml-8">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
              <div className="max-w-xl space-y-6">
                <h2 className="text-[32px] font-serif font-medium text-foreground leading-tight tracking-tight drop-shadow-sm">
                  We combine captivating design, strategic marketing, and
                  <span className="block mt-1 gold-gradient-text">relentless optimization</span>
                  to turn casual visitors into loyal customers.
                </h2>
                
                <p className="text-base text-gray-300 font-sans">
                  Interested in a FREE 20-Minute Consultation?
                </p>
                
                <div className="pt-2">
                  <Link
                    href="#calendly"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-rich-black rounded-full text-sm font-serif font-medium hover:from-gold-400 hover:to-gold-500 transition-all duration-200 group shadow-lg border border-gold-400"
                  >
                    Grow My Business Today!
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-rich-black" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services section */}
      <div className="py-24 sm:py-32 bg-rich-black relative">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-gold-300/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gold-200/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl relative">
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
            <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl drop-shadow-sm">
              Our Alchemy: Services That Turn Heads
              <span className="block gold-gradient-text mt-1">and Drive Results</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Whether you need a bold new website, an engaging social media presence, or a powerhouse reputation on Google,
              our solutions are tailored to fit your goals—no cookie-cutter templates here.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {/* Service Cards */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-300/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
              <ServiceCard
                icon={ComputerDesktopIcon}
                title="Stunning Websites That Convert"
                description="First impressions matter. We build beautiful, responsive websites that are not just visually appealing, but strategically designed to convert visitors into customers."
                href="/services/website-design"
                className="bg-rich-dark/90 border border-gold-500/20 rounded-xl p-6 shadow-md hover:shadow-gold-500/10 transition-all"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-300/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
              <ServiceCard
                icon={ShareIcon}
                title="Ignite Your Social Presence"
                description="Connect with your audience on a deeper level. We create engaging social media strategies that build brand awareness, foster community, and drive traffic."
                href="/services/social-media-marketing"
                className="bg-rich-dark/90 border border-gold-500/20 rounded-xl p-6 shadow-md hover:shadow-gold-500/10 transition-all"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-gold-300/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
              <ServiceCard
                icon={MapPinIcon}
                title="Dominate Local Search & Protect Your Reputation"
                description="Get found where it matters most – local search. We optimize your Google My Business profile and manage your online reputation to build trust and attract local customers."
                href="/services/google-my-business-reputation-management"
                className="bg-rich-dark/90 border border-gold-500/20 rounded-xl p-6 shadow-md hover:shadow-gold-500/10 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Us section */}
      <div className="relative overflow-hidden py-24 sm:py-32 bg-rich-black">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Decorative background with reduced opacity */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none -z-5">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-gold-300 to-gold-200 -rotate-[30deg]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
              <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl drop-shadow-sm">
                Why Partner {" "}
                <span className="block gold-gradient-text mt-1">with Us?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
                Just like the old alchemists who turned base metals into gold, we take ordinary digital efforts and transform them into powerful, results-driven strategies. It's not magic—it's expertise, creativity, and a passion for seeing you thrive online.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-rich-black rounded-full text-sm font-serif font-medium hover:from-gold-400 hover:to-gold-500 transition-all duration-200 group shadow-lg border border-gold-400"
                >
                  About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-rich-black" />
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative lg:ml-8 z-10">
              <div className="relative aspect-[4/3] w-full">
                {/* Main Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central Element */}
                  <div className="relative w-48 h-48 bg-gradient-to-br from-rich-dark to-rich-gray rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 border border-gold-500/20">
                    <div className="absolute inset-2 border-2 border-gold-400/20 rounded-xl"></div>
                    <div className="text-2xl font-bold gold-gradient-text">ASTRVE</div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-1/4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-400/10 to-gold-300/5 rounded-lg shadow-lg transform rotate-12 animate-float-slow border border-gold-500/10"></div>
                  <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-300/10 to-gold-200/5 rounded-full animate-float-slow delay-150 border border-gold-500/10"></div>

                  {/* Connection Lines */}
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent transform -rotate-45"></div>
                  <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent transform rotate-45"></div>

                  {/* Data Points */}
                  <div className="absolute top-0 left-1/4 w-3 h-3 bg-gold-400 rounded-full animate-pulse shadow-md shadow-gold-400/20"></div>
                  <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-gold-300 rounded-full animate-pulse delay-75 shadow-md shadow-gold-300/20"></div>
                  <div className="absolute top-1/4 right-0 w-3 h-3 bg-gold-500 rounded-full animate-pulse delay-150 shadow-md shadow-gold-500/20"></div>
                  <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-gold-200 rounded-full animate-pulse delay-225 shadow-md shadow-gold-200/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="relative py-24 sm:py-32 bg-rich-black">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
          <div className="h-full w-full">
            {/* Dots Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 186, 0, 0.1) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-600/10"></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-300/10 rounded-full blur-3xl opacity-30"></div>
            <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl drop-shadow-sm">
              Real Results,
              <span className="block gold-gradient-text mt-1">Real Stories</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              We're proud to have helped businesses of all sizes discover their digital potential.
              Here's a quick look at what they're saying:
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <TestimonialCard
              quote="Website Alchemy took our online presence to the next level! We saw a significant increase in traffic and leads within just a few months."
              name="Sarah Johnson"
              title="Marketing Director, Acme Corp"
              imageUrl="https://randomuser.me/api/portraits/women/23.jpg"
              className="bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <TestimonialCard
              quote="Their data-driven approach helped us make informed decisions and optimize our marketing campaigns for maximum ROI."
              name="David Lee"
              title="CEO, Beta Industries"
              imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
              className="bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <TestimonialCard
              quote="We highly recommend Website Alchemy to any business looking for a reliable and results-oriented digital marketing partner."
              name="Emily Chen"
              title="Owner, Gamma Solutions"
              imageUrl="https://randomuser.me/api/portraits/women/45.jpg"
              className="bg-rich-dark/90 border border-gold-500/20 rounded-xl shadow-lg hover:shadow-gold-500/10 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Calendly section */}
      <div className="relative bg-rich-black">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/80 -z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-gold-300/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gold-200/10 rounded-full blur-3xl opacity-20 -z-5"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 pt-8 relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-gold-300/10 rounded-full blur-2xl opacity-30"></div>
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-semibold tracking-tight text-foreground drop-shadow-sm">
                  Ready to Transform
                  <span className="block gold-gradient-text mt-1">Your Marketing?</span>
                </h2>
                <p className="text-2xl font-serif font-medium text-foreground">Book Your FREE Consultation Now</p>
              </div>

              <p className="text-lg leading-8 text-gray-300 font-sans">
                You've worked hard to build your business. Now, let's make sure everyone else sees the value you bring.
                Our team is here to help you stand out, grow faster, and leave a lasting impression on every visitor.
              </p>

              {/* Time Indicator */}
              <div className="flex items-center gap-3 text-gold-400">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-sans">30-minute free consultation</span>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div className="bg-rich-dark/90 rounded-xl shadow-lg border border-gold-500/20 overflow-hidden">
              <ClientCalendly />
            </div>
          </div>
        </div>
      </div>

      {/* Accolades Section */}
      <div className="relative bg-gradient-to-b from-rich-black via-rich-dark to-rich-black py-24 sm:py-32 overflow-hidden">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/60 -z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Floating Shapes */}
          <div className="absolute inset-0">
            {/* Top Left Square */}
            <div className="absolute top-20 left-[5%] w-24 h-24 border border-gold-500/20 rounded-xl transform rotate-[15deg] animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent rounded-xl" />
            </div>

            {/* Top Right Circle */}
            <div className="absolute top-40 right-[10%] w-16 h-16 border border-gold-400/20 rounded-full animate-float-slower">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full" />
            </div>

            {/* Bottom Left Diamond */}
            <div className="absolute bottom-32 left-[15%] w-20 h-20 border border-gold-600/20 transform rotate-45 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent" />
            </div>

            {/* Bottom Right Square */}
            <div className="absolute bottom-40 right-[8%] w-28 h-28 border border-gold-500/20 rounded-xl transform -rotate-[15deg] animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent rounded-xl" />
            </div>

            {/* Center Decorative Elements */}
            <div className="absolute top-1/2 left-[2%] w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <div className="absolute top-[40%] right-[3%] w-3 h-3 bg-gold-500 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-[35%] left-[7%] w-2 h-2 bg-gold-600 rounded-full animate-pulse delay-300" />
          </div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3730_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3730_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground drop-shadow-sm mb-4">
              Industry <span className="gold-gradient-text">Recognition</span>
            </h2>
            <div className="mt-4">
              <p className="text-lg leading-8 text-gray-300 font-sans">
                Trusted by industry leaders and powered by cutting-edge tools
              </p>
            </div>
          </div>

          {/* All Logos Grid */}
          <div className="mx-auto grid max-w-lg grid-cols-1 items-start gap-10 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/google-ads-2.svg"
              name="Google Ads Partner"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/hubspot-1.svg"
              name="HubSpot Solutions"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
              name="AWS Advanced"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/semrush.svg"
              name="SEMrush Pro"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/mailchimp.svg"
              name="Mailchimp Expert"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
            <LogoBadge
              logo="https://cdn.worldvectorlogo.com/logos/ahrefs.svg"
              name="Ahrefs Master"
              className="bg-rich-dark/90 border border-gold-500/20 hover:border-gold-500/40 shadow-lg hover:shadow-gold-500/10 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="relative bg-gradient-to-b from-rich-black via-rich-dark to-rich-black py-24 sm:py-32 overflow-hidden">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/60 -z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-1/2 -z-5 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-rich-dark/80 shadow-xl shadow-gold-600/5 ring-1 ring-gold-500/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="absolute -left-8 top-full w-96 h-96 -translate-y-1/2 bg-gold-500/5 opacity-30 blur-3xl"></div>
          <div className="absolute -right-8 bottom-full w-96 h-96 translate-y-1/2 bg-gold-500/5 opacity-30 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl">
              Latest from Our
              <span className="block gold-gradient-text mt-1">Digital Alchemy Lab</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 font-sans">
              Discover insights, strategies, and success stories that can transform your digital presence
              from ordinary to extraordinary.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Blog Post 1 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-rich-dark/80 border border-gold-500/10 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:shadow-gold-500/10 hover:border-gold-500/30 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                alt="Data Analytics Dashboard"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-75"
                fill
                priority
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-rich-black via-rich-black/60"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-15" className="mr-8">Jan 15, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gold-300/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5 text-gold-300">Data Analytics</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-serif font-semibold leading-6 text-foreground">
                <Link href="/blog/data-driven-marketing-strategies" className="hover:text-gold-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  Data-Driven Marketing Strategies for 2024
                </Link>
              </h3>
            </article>

            {/* Blog Post 2 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-rich-dark/80 border border-gold-500/10 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:shadow-gold-500/10 hover:border-gold-500/30 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="SEO Strategy Meeting"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-75"
                fill
                priority
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-rich-black via-rich-black/60"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-10" className="mr-8">Jan 10, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gold-300/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5 text-gold-300">SEO</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-serif font-semibold leading-6 text-foreground">
                <Link href="/blog/seo-best-practices" className="hover:text-gold-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  SEO Best Practices That Actually Work in 2024
                </Link>
              </h3>
            </article>

            {/* Blog Post 3 */}
            <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-rich-dark/80 border border-gold-500/10 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:shadow-gold-500/10 hover:border-gold-500/30 transition-all">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Social Media Strategy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-75"
                fill
                priority
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-rich-black via-rich-black/60"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2024-01-05" className="mr-8">Jan 05, 2024</time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gold-300/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="flex gap-x-2.5 text-gold-300">Social Media</div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-serif font-semibold leading-6 text-foreground">
                <Link href="/blog/social-media-engagement" className="hover:text-gold-300 transition-colors">
                  <span className="absolute inset-0"></span>
                  Boost Your Social Media Engagement with AI
                </Link>
              </h3>
            </article>
          </div>

          {/* View All Posts Button */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 transition-all duration-200 group"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-rich-black to-rich-dark py-24 sm:py-32">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-rich-black/60 -z-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-5">
          {/* Background Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.07) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>
          
          {/* Gradient Blobs */}
          <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-500/5 opacity-20 blur-3xl"></div>
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-500/5 opacity-20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="relative isolate overflow-hidden bg-rich-dark/80 shadow-2xl shadow-gold-600/5 rounded-3xl border border-gold-500/10">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-x-8">
              {/* Left Column - Content */}
              <div className="relative px-8 py-12 lg:px-12 lg:py-16">
                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 -ml-12 -mt-12 h-20 w-20 rotate-6">
                  <svg className="h-full w-full text-gold-500/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.003 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                  </svg>
                </div>

                <div className="mx-auto max-w-xl lg:mx-0">
                  <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground sm:text-4xl animate-slide-up">
                    Let's Keep the
                    <span className="block gold-gradient-text mt-1">Conversation Going</span>
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300 font-sans animate-slide-up" style={{animationDelay: '100ms'}}>
                    Not quite ready to chat? Sign up for our newsletter to get fresh tips on digital marketing, promos, and more—all delivered straight to your inbox.
                  </p>
                  
                  {/* Newsletter Form */}
                  <NewsletterForm />

                  {/* Trust Indicators */}
                  <div className="mt-8 flex items-center gap-x-6 text-sm leading-6 text-gray-400 animate-slide-up" style={{animationDelay: '300ms'}}>
                    <div className="flex items-center gap-x-2">
                      <svg className="h-5 w-5 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.719.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.179a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                      </svg>
                      <span>We respect your privacy</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <svg className="h-5 w-5 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.719.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.179a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                      </svg>
                      <span>Unsubscribe anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Illustration */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-bl from-gold-500/10 to-rich-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Email Icon */}
                  <div className="relative w-48 h-48 transform hover:scale-105 transition-transform duration-300 animate-scale-up">
                    <div className="absolute inset-0 bg-gold-500/10 rounded-3xl rotate-6"></div>
                    <div className="absolute inset-0 bg-rich-dark/90 border border-gold-500/20 rounded-2xl shadow-sm flex items-center justify-center">
                      <svg className="w-24 h-24 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gold-500/10 rounded-full animate-float-slow"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gold-600/10 rounded-lg rotate-12 animate-float"></div>
                  <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gold-400/10 rounded-full animate-float-slower"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
