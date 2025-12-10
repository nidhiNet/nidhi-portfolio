import { Section } from "@/components/ui/section";
import { projects } from "@/lib/resume-data";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" className="bg-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of key projects demonstrating full-stack capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600 w-full" />
                <CardHeader>
                  <CardTitle className="text-xl flex justify-between items-start gap-2">
                    {project.title}
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="text-sm text-muted-foreground/80 bg-white/5 p-3 rounded-md">
                    <span className="font-semibold text-foreground/80 block mb-1">My Role:</span>
                    {project.role}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/20 bg-primary/5 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {project.link !== "#" ? (
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" disabled className="w-full opacity-50 cursor-not-allowed">
                      Internal / Offline Project
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
