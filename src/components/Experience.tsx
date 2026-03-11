import { motion } from "framer-motion";
import { Building2, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Tekkstudio",
    location: "Remote, USA",
    period:"Jan 2026 - Present",
    type:"Experience",
    description:"Contributed to the development of an AI-powered  web crawler to manage businesses websites and online presence.",
    technologies:["Python", "Django", "AI Integration", "Web Crawling", "AWS"],
  },
  {
    title: "Backend Developer Intern",
    company: "Zola Technologies",
    location: "Hybrid, Kenya",
    period: "Apr 2025 - Dec 2025",
    type: "experience",
    description:
      "Contributing to a student career support platform with Django, DRF, and Docker while supporting demos and technical reviews.",
    technologies: ["Django", "Django REST Framework", "Docker"],
  },
  {
    title: "Mobile App Development Intern",
    company: "Swap Space",
    location: "Remote, Dubai",
    period: "Nov 2024 - Mar 2025",
    type: "experience",
    description:
      "Built product features for a real estate mobile app and collaborated with the team on iterative releases.",
    technologies: ["React Native", "JavaScript", "NativeWind", "GitHub"],
  },
  {
    title: "Backend Development Intern",
    company: "Abetec Hub",
    location: "Remote, Kenya",
    period: "Nov 2024 - Jan 2025",
    type: "experience",
    description:
      "Supported backend development for an EdTech platform including Moodle integration and data workflows.",
    technologies: ["MySQL", "Moodle", "PHP"],
  },
  {
    title: "Web Development Intern",
    company: "Vabrise Technologies",
    location: "Remote, Kenya",
    period: "Jul 2024 - Nov 2024",
    type: "experience",
    description:
      "Delivered features for an e-commerce platform across frontend and backend services.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "BSc. Software Development",
    company: "University of Eastern Africa, Baraton",
    location: "Nandi County, Kenya",
    period: "Aug 2021 - Aug 2025",
    type: "education",
    description:
      "Coursework covered software engineering, data structures, web and mobile development, cloud computing, and AI fundamentals.",
    technologies: ["Software Engineering", "Data Structures", "Web Development", "Mobile Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience and Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional roles and academic background relevant to software delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-card">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={item.type === "education" ? "secondary" : "default"}>
                      {item.type === "education" ? (
                        <GraduationCap className="w-3.5 h-3.5 mr-1" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5 mr-1" />
                      )}
                      {item.type === "education" ? "Education" : "Experience"}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{item.company}</p>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
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
