import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Savannah e-Commerce",
    description: "E-Commerce web platform for Vabrise Technologies with modern UI and seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Django", "JavaScript", "Tailwind CSS", "Git/GitHub"],
    demoUrl: "https://shop.vabrisetech.com/",
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
    title: "Destinykers Bookstore",
    description: "A bookstore website with the best books collection, allowing users to download books in PDF format.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Flowbite", "Git/GitHub"],
    demoUrl: "https://destinykers-bookstore.vercel.app/",
    skills: ["Problem Solving", "Creative reasoning"]
  },
  {
    title: "BeachLife Fitness (Diani)",
    description: "Complete website for the Kenya Beachlife Fitness Gym in Diani with modern design and functionality.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    technologies: ["JavaScript", "Tailwind CSS", "HTML", "Git/GitHub"],
    demoUrl: "https://beach-life-fitness.vercel.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "Jabana School Management",
    description: "A comprehensive school communication management system for modern educational institutions.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Flowbite", "Node.js", "MongoDB", "Git/GitHub"],
    demoUrl: "http://jabana.vercel.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "Wake and Shine SHG",
    description: "Complete website for Wake and Shine Self Help Group with modern interface and features.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    technologies: ["JavaScript", "Tailwind CSS", "HTML", "Git/GitHub"],
    demoUrl: "https://wakeandshineshg.netlify.app/",
    skills: ["Problem Solving", "Communication", "Critical Reasoning"]
  },
  {
    title: "Tuongee Initiative",
    description: "Complete full-stack website for Tuongee Initiative group with backend integration.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "JavaScript", "Tailwind CSS", "Git/GitHub"],
    demoUrl: "https://tuongee.vercel.app/",
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