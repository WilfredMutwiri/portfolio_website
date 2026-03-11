import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git / GitHub", "Docker", "REST APIs", "Cloud Fundamentals", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core technologies I use to build and maintain production-ready software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-card">
                <CardHeader className="pb-4 space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="inline-flex"
                    >
                      <Badge variant="secondary" className="font-medium">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Additional Exposure</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Flask", "Moodle", "PHP", "NativeWind", "Vercel", "Netlify", "Figma"].map((tech) => (
              <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
