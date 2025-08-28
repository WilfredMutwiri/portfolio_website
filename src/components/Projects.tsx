import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import fuelmate from '@/assets/fuelmate.png';
import debsploit from '@/assets/debsploit.png';
const projects = [
  {
    title: "Debsploit Solutions Platform",
    description: "A web platfrom for debploit solutions company.",
    image:debsploit,
    technologies: ["React", "Django","Tailwind -CSS","Postgress"],
    demoUrl: "https://debsploitsolutions.com/",
    skills: ["Problem Solving", "Creative reasoning","UI/UX"]
  },
    {
    title: "Fuel - Mate Mobile App",
    description: "A mobile app to enable motorists to order fuel in emergency critical situations to nearby fuel stations",
    image:fuelmate,
    technologies: ["React-Native", "Express", "Native-Wind", "MongoDB", "AfricasTalking API"],
    demoUrl: "https://drive.google.com/file/d/1lcA3n3JiVnJmLbVmkhbtRe0AFwmhYSTy/view?usp=sharing",
    skills: ["Problem Solving", "Creative reasoning"]
  },
  {
    title: "Savannah E-Commerce",
    description: "Niasale E-Commerce web platform for Vabrise Technologies with modern UI and seamless shopping experience.",
    image: "https://niasale.vercel.app/images/logo.jpg",
    technologies: ["React", "Django", "JavaScript", "Tailwind CSS", "Git/GitHub"],
    demoUrl: "https://niasale.vercel.app/",
    skills: ["Problem Solving", "Team work", "Collaboration"]
  },
  {
    title: "Mzedu Furniture & Decorations", 
    description: "Complete website for displaying and selling products by Mzedu furniture and decorations.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "GitHub"],
    demoUrl: "https://mzedu-furnitures.vercel.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "BeachLife Fitness (Diani)",
    description: "Complete website for the Kenya Beachlife Fitness Gym in Diani with modern design and functionality.",
    image: "https://beach-life-fitness.vercel.app/assets/logo-520698693-D8notr87.webp",
    technologies: ["JavaScript", "Tailwind CSS", "HTML", "Git/GitHub"],
    demoUrl: "https://beach-life-fitness.vercel.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "Jabana School Management",
    description: "A comprehensive school communication management system for modern educational institutions.",
    image: "https://jabana.vercel.app/assets/logo-DOzTNi7l.webp",
    technologies: ["React", "Tailwind CSS", "Flowbite", "Node.js", "MongoDB", "Git/GitHub"],
    demoUrl: "http://jabana.vercel.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "Tuongee Initiative",
    description: "Complete full-stack website for Tuongee Initiative group with backend integration.",
    image: "https://tuongee.co.ke/assets/logo-BX73BsZs.webp",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "JavaScript", "Tailwind CSS", "Git/GitHub"],
    demoUrl: "https://tuongee.co.ke/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-card border shadow-card hover:shadow-elegant transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    asChild
                    className="bg-primary/90 hover:bg-primary text-primary-foreground"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
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