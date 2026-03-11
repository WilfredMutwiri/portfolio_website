import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt="Wilfred Mutwiri background portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/75 to-background/88" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-border/80 bg-background/78 backdrop-blur-sm p-6 sm:p-8 md:p-10 text-center shadow-card">
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Full Stack Software Engineer
            </motion.p>

            <motion.p
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I build reliable web and mobile products for startups and growing teams.
            </motion.p>

            <motion.p
              className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Software developer focused on React, Django, and React Native. I ship clean,
              maintainable solutions that support business outcomes.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="#projects">View My Work</a>
              </Button>

              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/70" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-5 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="outline" size="icon" className="bg-background/70" asChild>
                <a href="https://github.com/WilfredMutwiri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="bg-background/70" asChild>
                <a href="https://www.linkedin.com/in/wilfred-mutwiri-ba3bb8236/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="bg-background/70" asChild>
                <a href="mailto:wilfredmutwiri20@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
