import { motion } from "framer-motion";
import { BrainCircuit, Code, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const currentProjects = [
  {
    icon: Smartphone,
    title: "Build-Note AI",
    company: "Zola Technologies",
    description: "Building a cross-platform product for structured project and meeting documentation.",
    technologies: ["React Native", "JavaScript", "NativeWind", "Django"],
    status: "Active",
  },
  {
    icon: Smartphone,
    title: "KikundiPay",
    company: "Personal Project",
    description: "Developing a group finance management app for local savings communities.",
    technologies: ["React Native", "MongoDB", "Express.js"],
    status: "Active",
  },
  {
    icon: BrainCircuit,
    title: "AI and Cloud Upskilling",
    company: "Professional Development",
    description: "Strengthening practical skills in AI integration patterns and cloud deployment workflows.",
    technologies: ["AI APIs", "Cloud Platforms", "Architecture"],
    status: "Ongoing",
  },
  {
    icon: Code,
    title: "Portfolio Improvements",
    company: "Personal Project",
    description: "Continuously refining this portfolio to keep projects, content, and experience current.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "Ongoing",
  },
];

export function CurrentWork() {
  return (
    <section id="current-work" className="py-20 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Focus</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ongoing projects and areas of active growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <p className="text-primary font-medium text-sm">{project.company}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
