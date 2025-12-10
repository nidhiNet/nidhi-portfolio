import { Section } from "@/components/ui/section";
import { experience } from "@/lib/resume-data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey through diverse tech stacks and companies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300 group ${
                     index % 2 === 0 ? "text-left" : "md:text-right text-left"
                  }`}>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.role}
                    </h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">
                      {job.company}
                    </h4>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 ${
                       index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                    }`}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary/70" />
                        <span>{job.duration}</span>
                      </div>
                      {(job.location || job.type) && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary/70" />
                          <span>{job.location || job.type}</span>
                        </div>
                      )}
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground/80 ${
                       index % 2 === 0 ? "text-left" : "md:text-right text-left"
                    }`}>
                      {job.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
