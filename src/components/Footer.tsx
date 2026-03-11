import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button onClick={scrollToTop} variant="outline" size="icon" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-lg font-semibold">Wilfred Mutwiri</p>
            <p className="text-sm text-muted-foreground max-w-xl">
              Full stack software engineer focused on practical, reliable, and scalable digital products.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            (c) {new Date().getFullYear()} Wilfred Mutwiri. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
