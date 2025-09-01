"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  GitBranch,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { AboutUs } from "@/components/landing/AboutUs";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { WeJustDontCode } from "@/components/landing/WeJustDontCode";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const services = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Full-Stack Development",
      description:
        "Crafting seamless, end-to-end web solutions with modern technologies for optimal performance and user experience."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Security & Compliance",
      description:
        "Implementing robust security measures and ensuring your application complies with industry standards."
    },
    {
      icon: <GitBranch className="w-10 h-10 text-accent" />,
      title: "DevOps & Automation",
      description:
        "Streamlining development pipelines and automating deployment for faster, more reliable releases."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: "Rust Programming",
      description:
        "Leveraging the power of Rust for building high-performance, memory-safe, and concurrent systems."
    }
  ];

  return (
    <div className="flex min-h-screen justify-center flex-col items-center">
      <section
        className=" fixed top-0 -z-10 w-full min-h-screen flex items-center justify-center text-center overflow-hidden pt-20 pb-16 md:pt-0 md:pb-0"
        aria-label="Hero section introducing Net Genius services"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <motion.div
          className="container mx-auto px-4 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex justify-center md:-mt-10"></div>
          <motion.h1
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground"
            variants={fadeInUp}
          >
            Build, Secure,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Deploy.
            </span>
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Net Genius is your trusted partner in creating robust, secure, and
            scalable software solutions from concept to cloud.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            variants={fadeInUp}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 h-auto"
            >
              <Link href="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-2"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInScale}
            >
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInScale}
            >
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInScale}
            >
              <div className="text-3xl font-bold text-accent mb-2">48h</div>
              <div className="text-muted-foreground">Response Time</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <AboutUs />
      <WhatWeDo />
      <WeJustDontCode />
      {/*    <section
        className="w-full py-20 lg:py-32 bg-background border-t border-b"
        aria-labelledby="why-choose-us"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
            >
              Why Choose Us
            </Badge>
            <h2
              id="why-choose-us"
              className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              We Don't Just Code,{" "}
              <span className="text-accent">We Innovate</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We are more than just developers; we are architects of digital
              excellence who turn your vision into reality.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInScale}>
              <Card className="group text-center border-0 bg-gradient-to-br from-card to-card/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-accent transition-colors">
                    Unmatched Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team consists of industry veterans with deep knowledge
                    in modern frameworks, languages, and cutting-edge platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInScale}>
              <Card className="group text-center border-0 bg-gradient-to-br from-card to-card/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-accent transition-colors">
                    Security-First Mindset
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We integrate security into every phase of the development
                    lifecycle, protecting your data and users from day one.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInScale}>
              <Card className="group text-center border-0 bg-gradient-to-br from-card to-card/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-accent transition-colors">
                    Lightning Fast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We embrace agile methodologies to deliver high-quality
                    software quickly and efficiently, adapting to your evolving
                    needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Services Section */}
      <section
        className="w-full py-20 lg:py-24 bg-card border-t border-b"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2
              id="services-heading"
              className="font-headline text-3xl md:text-4xl font-bold tracking-tight"
            >
              Our Core Services
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground">
              A comprehensive suite of services to bring your vision to life.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center text-center"
                variants={fadeInScale}
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Button asChild variant="link" className="text-accent text-lg">
              <Link href="/pricing">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 lg:py-32 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          className="container mx-auto px-4 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-foreground to-white">
                Next Project?
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/90 mb-12 leading-relaxed">
              Let's discuss how we can help you achieve your business goals with
              cutting-edge technology and unmatched expertise.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeInUp}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
              >
                <Link href="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/30 bg-white/10 text-lg px-8 py-4 h-auto"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
