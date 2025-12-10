import { Navbar } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          {/* Decorative background element for sections */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none z-0" />
          
          <div className="relative z-10 space-y-0">
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>
      
      <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-sm text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nidhi Gadhavi. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
