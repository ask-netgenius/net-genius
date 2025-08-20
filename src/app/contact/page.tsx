"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-20 px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-primary-foreground">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2
              className="font-headline text-3xl font-semibold text-primary"
              variants={fadeInUp}
            >
              Contact Information
            </motion.h2>
            <motion.div className="space-y-6 text-lg" variants={fadeInUp}>
              <div className="flex items-start">
                <MapPin className="h-7 w-7 mr-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  National Institute of Technology
                  <br />
                  Rourkela, Odisha 769008
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-accent" />
                <a
                  href="mailto:asknetgenius@gmail.com"
                  className="hover:text-accent transition-colors text-muted-foreground"
                >
                  asknetgenius@gmail.com
                </a>
              </div>
              <div className="flex items-center pt-3">
                <Phone className="h-6 w-6 mr-4 text-accent" />
                <a
                  href="tel:+919348840861"
                  className="hover:text-accent transition-colors text-muted-foreground"
                >
                  +91 9348840861
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Separator />
            </motion.div>

            <motion.h3
              className="font-headline text-2xl font-semibold text-primary"
              variants={fadeInUp}
            >
              Follow Us
            </motion.h3>
            <motion.div className="flex space-x-6" variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <Github className="h-7 w-7" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="h-7 w-7" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="font-headline text-3xl font-semibold mb-6 text-primary">
              Send Us a Message
            </h2>
            <Card className="p-8 shadow-xl border-t-4 border-accent">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
