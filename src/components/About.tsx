import { motion } from "framer-motion";
import { Code, Rocket, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "Product Delivery",
    description: "Build and ship web and mobile applications end-to-end."
  },
  {
    icon: Rocket,
    title: "Execution Speed",
    description: "Deliver clear milestones and iterative improvements."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Actively improving in cloud, AI integration, and architecture."
  },
  {
    icon: Heart,
    title: "Collaboration",
    description: "Work effectively with teams, stakeholders, and clients."
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A concise overview of how I work and what I focus on.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am a full stack software engineer with experience delivering user-facing products,
                backend services, and internal tools. My work emphasizes code quality, predictable
                delivery, and practical business impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex technical problems, mentoring where needed, and collaborating
                with product and design teams to ship reliable software.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {["Problem Solving", "Team Collaboration", "Backend Systems", "Mobile Development"].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
                <Card className="text-center h-full shadow-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary" />
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
