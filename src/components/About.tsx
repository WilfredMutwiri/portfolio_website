import { motion } from "framer-motion";
import { Code, Rocket, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  {
    icon: Code,
    title: "3+ Years Experience",
    description: "Building modern web and mobile applications"
  },
  {
    icon: Rocket,
    title: "Space Technology",
    description: "Passionate about space exploration and tech innovation"
  },
  {
    icon: GraduationCap,
    title: "EdTech Enthusiast",
    description: "Creating solutions for educational technology"
  },
  {
    icon: Heart,
    title: "Problem Solver",
    description: "Love tackling complex challenges with elegant solutions"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                I am a Full Stack Software Engineer with three years' experience building web 
                applications and Mobile apps using modern technologies. I have strong problem-solving 
                skills and effective collaboration with cross-functional teams, leading to delivering 
                high-quality solutions meeting requirements.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                As a continuous learner, I stay up-to-date with the latest trends and technologies, 
                hence eager to adopt and contribute my skills and passion in software engineering 
                to innovative organizations. I'm particularly passionate about space technology 
                and educational technology solutions.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["Problem Solving", "Team Collaboration", "Critical Thinking", "Continuous Learning"].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-glow text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-sm">{highlight.title}</h3>
                    <p className="text-xs text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}