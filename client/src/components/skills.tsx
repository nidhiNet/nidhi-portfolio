import { Section } from "@/components/ui/section";
import { skills } from "@/lib/resume-data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Cloud, Layout, Terminal } from "lucide-react";

export function Skills() {
  const skillCategories = [
    { name: "Languages", icon: Code, items: skills.languages, color: "text-blue-400" },
    { name: "Web Frameworks", icon: Layout, items: skills.webFrameworks, color: "text-purple-400" },
    { name: "Databases & Caches", icon: Database, items: skills.databases, color: "text-green-400" },
    { name: "Cloud & DevOps", icon: Cloud, items: skills.cloud, color: "text-orange-400" },
    { name: "Architecture", icon: Server, items: skills.architecture, color: "text-red-400" },
    { name: "Tools & Others", icon: Terminal, items: skills.tools, color: "text-yellow-400" },
  ];

  return (
    <Section id="skills" className="bg-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolset developed over 7 years of full-stack engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 h-full hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`p-2 rounded-lg bg-white/5 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-medium">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="secondary" 
                        className="bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
