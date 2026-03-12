import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import fuelmate from "@/assets/fuelmate.png";
import debsploit from "@/assets/debsploit.png";
import wakeandshine from "@/assets/wakeandshine.png";
import squidlight from "@/assets/squidlight.png";
import fithub from "@/assets/fithub.png";
import Kamuganka from "@/assets/Kamuganka.png";
import beachlife from "@/assets/beachlife.png";

const projects = [
  {
    title: "Fithub Gym Management System",
    description: "Gym management system with member management, gym sessions scheduling, and subscriptions processing.",
    image: fithub,
    technologies: ["React", "Django", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://fithubke.vercel.app",
    skills: ["Frontend Development", "AI Integration", "Multi-tenancy Design"],
  },
  {
    title: "SquidLight Solar Africa",
    description: "Corporate website and product showcase for a solar energy company.",
    image: squidlight,
    technologies: ["React", "Tailwind CSS"],
    demoUrl: "https://squidlight.vercel.app/",
    skills: ["UI Engineering", "Responsive Layout", "Client Delivery"],
  },
  {
    title: "Debsploit Solutions Platform",
    description: "Business platform for service discovery and lead generation.",
    image: debsploit,
    technologies: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://debsploitsolutions.com/",
    skills: ["Product Development", "Backend Integration", "UX"],
  },
  {
    title: "Beach Life Fitness Gym Website",
    description: "Website for Beach Life Fitness Gym showcasing services and classes.",
    image: beachlife,
    technologies: ["React", "Tailwind CSS"],
    demoUrl: "https://beachlifefitness.co.ke/",
    skills: ["UI Design", "Responsive Layout", "Client Engagement"],
  },
  {
    title: "Fuel Mate Mobile App",
    description: "Emergency fuel ordering app connecting motorists to nearby stations.",
    image: fuelmate,
    technologies: ["React Native", "Express", "NativeWind", "MongoDB", "Africa's Talking API"],
    demoUrl: "https://drive.google.com/file/d/1lcA3n3JiVnJmLbVmkhbtRe0AFwmhYSTy/view?usp=sharing",
    skills: ["Mobile UX", "API Design", "Operational Flows"],
  },
  {
    title: "Kamuganka Community Platform",
    description: "Kamuganka group's community website for engagement and collaboration.",
    image: Kamuganka,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "http://kamuganka.vercel.app/",
    skills: ["Full-Stack Development", "Customer-centric development", "Requirements Gathering"],
  },
  {
    title: "Wake and Shine SHG",
    description: "Community organization platform with clear information architecture.",
    image: wakeandshine,
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://wakeandshine.co.ke/",
    skills: ["UX Delivery", "Backend Services", "Deployment"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recent work across web platforms, mobile apps, and internal tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-card border shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Focus Areas</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Technologies</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            More projects and code samples are available on GitHub.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/WilfredMutwiri" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
