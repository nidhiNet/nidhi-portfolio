import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/resume-data";
import techBg from "@assets/generated_images/dark_abstract_technology_background_with_geometric_nodes.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={techBg} 
          alt="Abstract Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-2">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
              {personalInfo.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
              Specializing in scalable MERN and MEAN stack applications. 
              Building the digital future with cleaner code and robust architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.docx" download="Nidhi_Gadhavi_Resume.docx">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Abstract Code/Tech Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex flex-col shadow-2xl">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-muted-foreground font-mono">dev_profile.tsx</div>
            </div>
            <div className="font-mono text-sm space-y-4 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-purple-400">const</span>
                <span className="text-yellow-400">developer</span>
                <span className="text-white">=</span>
                <span className="text-white">{`{`}</span>
              </div>
              <div className="pl-6 space-y-2">
                <div>
                  <span className="text-blue-300">name:</span> <span className="text-green-400">"{personalInfo.name}"</span>,
                </div>
                <div>
                  <span className="text-blue-300">experience:</span> <span className="text-orange-400">7</span>,
                </div>
                <div>
                  <span className="text-blue-300">stack:</span> <span className="text-white">[</span>
                  <span className="text-green-400">"MERN"</span>, <span className="text-green-400">"MEAN"</span>
                  <span className="text-white">]</span>,
                </div>
                <div>
                  <span className="text-blue-300">skills:</span> <span className="text-white">[</span>
                </div>
                <div className="pl-6 text-green-400">
                  "React", "Angular", "Node", "AWS"
                </div>
                <div>
                  <span className="text-white">]</span>,
                </div>
                <div>
                  <span className="text-blue-300">hireable:</span> <span className="text-purple-400">true</span>
                </div>
              </div>
              <div className="text-white">{`}`}</div>
              
              <div className="pt-4 flex items-center gap-2 text-muted-foreground animate-pulse">
                <Terminal className="w-4 h-4" />
                <span>_cursor waiting...</span>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" 
          />
        </motion.div>
      </div>
    </section>
  );
}
