import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const WhatWeDoSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track which section is active based on scroll
  useEffect(() => {
    return smoothProgress.onChange(v => {
      if (v < 0.25) setActiveIndex(0);
      else if (v < 0.5) setActiveIndex(1);
      else if (v < 0.75) setActiveIndex(2);
      else setActiveIndex(3);
    });
  }, [smoothProgress]);

  const content = [
    {
      title: "Build Real Projects",
      subtitle: "From Concept to Deployment",
      description: "Work on production-grade applications that solve real problems. Learn industry-standard frameworks, best practices, and ship code that matters. Your portfolio starts here.",
      accent: "from-blue-500/20 to-cyan-500/20",
      glowColor: "rgba(59, 130, 246, 0.4)",
      visual: "code"
    },
    {
      title: "Conduct Hackathons",
      subtitle: "48 Hours of Pure Innovation",
      description: "Compete alongside the brightest minds. Build revolutionary ideas under pressure, collaborate with diverse teams, and win prizes. Every hackathon is a masterclass in rapid development.",
      accent: "from-orange-500/20 to-red-500/20",
      glowColor: "rgba(249, 115, 22, 0.4)",
      visual: "team"
    },
    {
      title: "Industry Mentorship",
      subtitle: "Learn from the Best",
      description: "Get guidance from engineers at top tech companies. 1-on-1 sessions, code reviews, career advice, and insider knowledge. Fast-track your journey from student to professional.",
      accent: "from-purple-500/20 to-pink-500/20",
      glowColor: "rgba(168, 85, 247, 0.4)",
      visual: "mentor"
    },
    {
      title: "Open Source Contributions",
      subtitle: "Make Your Mark on the Global Stage",
      description: "Contribute to projects used by millions. Build your reputation, network with maintainers worldwide, and leave a lasting impact. Your commits become your resume.",
      accent: "from-green-500/20 to-emerald-500/20",
      glowColor: "rgba(34, 197, 94, 0.4)",
      visual: "opensource"
    }
  ];

  // Visual components for each section
  const CodeEditorVisual = ({ isActive }) => (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative w-full max-w-2xl">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl blur-3xl opacity-60"
          style={{ background: `radial-gradient(circle, ${content[0].glowColor} 0%, transparent 70%)` }}
        />
        
        {/* Code editor mockup */}
        <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-zinc-500 text-sm ml-3 font-mono">app.jsx</span>
          </div>
          
          {/* Code content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex gap-3">
              <span className="text-zinc-600 select-none">1</span>
              <span className="text-purple-400">import</span>
              <span className="text-blue-300">React</span>
              <span className="text-zinc-500">from</span>
              <span className="text-green-400">'react'</span>
            </div>
            <div className="flex gap-3">
              <span className="text-zinc-600 select-none">2</span>
              <span className="text-purple-400">import</span>
              <span className="text-blue-300">{'{ useState }'}</span>
              <span className="text-zinc-500">from</span>
              <span className="text-green-400">'react'</span>
            </div>
            <div className="h-2" />
            <div className="flex gap-3">
              <span className="text-zinc-600 select-none">4</span>
              <span className="text-purple-400">const</span>
              <span className="text-yellow-300">App</span>
              <span className="text-zinc-400">=</span>
              <span className="text-zinc-400">{'() => {'}</span>
            </div>
            <div className="flex gap-3 pl-6">
              <span className="text-zinc-600 select-none">5</span>
              <span className="text-purple-400">return</span>
              <span className="text-zinc-400">{'('}</span>
            </div>
            <div className="flex gap-3 pl-12">
              <span className="text-zinc-600 select-none">6</span>
              <span className="text-blue-400">{'<div'}</span>
              <span className="text-cyan-300">className</span>
              <span className="text-zinc-400">=</span>
              <span className="text-green-400">"app"</span>
              <span className="text-blue-400">{'>'}</span>
            </div>
            <div className="flex gap-3 pl-16">
              <span className="text-zinc-600 select-none">7</span>
              <span className="text-blue-400">{'<h1>'}</span>
              <span className="text-white">Building the Future</span>
              <span className="text-blue-400">{'</h1>'}</span>
            </div>
            <div className="flex gap-3 pl-12">
              <span className="text-zinc-600 select-none">8</span>
              <span className="text-blue-400">{'</div>'}</span>
            </div>
            <div className="flex gap-3 pl-6">
              <span className="text-zinc-600 select-none">9</span>
              <span className="text-zinc-400">{')'}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-zinc-600 select-none">10</span>
              <span className="text-zinc-400">{'}'}</span>
            </div>
          </div>
          
          {/* Cursor blink */}
          <motion.div
            className="absolute bottom-6 left-[108px] w-2 h-5 bg-cyan-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );

  const HackathonVisual = ({ isActive }) => (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative w-full max-w-2xl">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl blur-3xl opacity-60"
          style={{ background: `radial-gradient(circle, ${content[1].glowColor} 0%, transparent 70%)` }}
        />
        
        {/* Team collaboration grid */}
        <div className="relative grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-xl border border-zinc-800/50 p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 border border-orange-500/50 mb-3" />
              
              {/* Activity bars */}
              <div className="space-y-2">
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? `${60 + i * 10}%` : "0%" }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                  />
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? `${40 + i * 8}%` : "0%" }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-zinc-500 font-mono">Active</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating particles */}
        {isActive && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-500"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  const MentorshipVisual = ({ isActive }) => (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative w-full max-w-2xl">
        {/* Gradient background */}
        <div 
          className="absolute inset-0 rounded-3xl blur-3xl opacity-50"
          style={{ background: `radial-gradient(circle, ${content[2].glowColor} 0%, transparent 70%)` }}
        />
        
        {/* Meeting interface */}
        <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-zinc-800/50 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50 bg-zinc-900/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-zinc-400 text-sm font-medium">1:1 Mentorship Session</span>
            </div>
            <div className="text-zinc-500 text-sm font-mono">45:32</div>
          </div>
          
          {/* Video grid */}
          <div className="grid grid-cols-2 gap-4 p-6">
            {/* Mentor */}
            <motion.div
              className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30 overflow-hidden"
              animate={{
                borderColor: isActive ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.3)"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 border-2 border-purple-400/50" />
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-xs text-white border border-zinc-700">
                Senior Engineer @ Google
              </div>
            </motion.div>
            
            {/* Student */}
            <motion.div
              className="relative aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30 overflow-hidden"
              animate={{
                borderColor: isActive ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 border-2 border-blue-400/50" />
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-xs text-white border border-zinc-700">
                You
              </div>
            </motion.div>
          </div>
          
          {/* Code discussion */}
          <div className="px-6 pb-6">
            <div className="bg-black/60 rounded-xl border border-zinc-800/50 p-4 font-mono text-xs">
              <div className="text-purple-400">// Feedback on your React component</div>
              <div className="text-zinc-400 mt-2">
                <span className="text-green-400">+</span> Great use of custom hooks
              </div>
              <div className="text-zinc-400">
                <span className="text-yellow-400">~</span> Consider memoization here
              </div>
              <div className="text-zinc-400">
                <span className="text-blue-400">→</span> This pattern is production-ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const OpenSourceVisual = ({ isActive }) => (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(10px)"
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative w-full max-w-2xl">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl blur-3xl opacity-60"
          style={{ background: `radial-gradient(circle, ${content[3].glowColor} 0%, transparent 70%)` }}
        />
        
        {/* Contribution graph */}
        <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold">Your Contributions</h3>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-sm">1,247 contributions this year</span>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>
          
          {/* Contribution squares grid */}
          <div className="grid grid-cols-52 gap-1">
            {[...Array(364)].map((_, i) => {
              const intensity = Math.random();
              const delay = i * 0.002;
              return (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0,
                    backgroundColor: intensity > 0.7 ? 'rgb(34, 197, 94)' :
                                   intensity > 0.5 ? 'rgb(74, 222, 128)' :
                                   intensity > 0.3 ? 'rgb(134, 239, 172)' :
                                   intensity > 0.1 ? 'rgb(187, 247, 208)' :
                                   'rgb(39, 39, 42)'
                  }}
                  transition={{ delay, duration: 0.3 }}
                />
              );
            })}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: "Pull Requests", value: "47" },
              { label: "Issues Closed", value: "89" },
              { label: "Repos", value: "23" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const visuals = [CodeEditorVisual, HackathonVisual, MentorshipVisual, OpenSourceVisual];

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: '400vh' }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* LEFT SIDE - Text Content */}
            <div className="relative z-10">
              {/* Section tag */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                <span className="text-sm text-zinc-400 font-medium tracking-wide">WHAT WE DO</span>
              </motion.div>

              {/* Dynamic content */}
              <div className="relative">
                {content.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 20,
                      filter: activeIndex === index ? "blur(0px)" : "blur(10px)"
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h2>
                    <h3 className="text-xl lg:text-2xl text-zinc-400 mb-6 font-light">
                      {item.subtitle}
                    </h3>
                    <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
                {/* Placeholder for height */}
                <div className="opacity-0">
                  <h2 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {content[0].title}
                  </h2>
                  <h3 className="text-xl lg:text-2xl mb-6">
                    {content[0].subtitle}
                  </h3>
                  <p className="text-lg leading-relaxed max-w-xl">
                    {content[0].description}
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex gap-3 mt-12">
                {content.map((_, index) => (
                  <motion.div
                    key={index}
                    className="relative h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: activeIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Visual Content */}
            <div className="relative h-full flex items-center justify-center">
              {visuals.map((Visual, index) => (
                <div key={index} className="absolute inset-0">
                  <Visual isActive={activeIndex === index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical progress indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {content.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gradient-to-b from-orange-500 to-red-500 scale-125' 
                  : 'bg-zinc-700 hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;