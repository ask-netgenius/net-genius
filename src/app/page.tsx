"use client";

import React from "react";
import Image from "next/image";
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
  Star,
  Users,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Full-Stack Development",
      description:
        "Crafting seamless, end-to-end web solutions with modern technologies for optimal performance and user experience.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Security & Compliance",
      description:
        "Implementing robust security measures and ensuring your application complies with industry standards.",
    },
    {
      icon: <GitBranch className="w-10 h-10 text-accent" />,
      title: "DevOps & Automation",
      description:
        "Streamlining development pipelines and automating deployment for faster, more reliable releases.",
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: "Rust Programming",
      description:
        "Leveraging the power of Rust for building high-performance, memory-safe, and concurrent systems.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-center -mt-10"></div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
            Build, Secure,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Deploy.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            FullStack Forge is your trusted partner in creating robust, secure,
            and scalable software solutions from concept to cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
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
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guaranteed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
            >
              Why Choose Us
            </Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
              We Don't Just Code,{" "}
              <span className="text-accent">We Innovate</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We are more than just developers; we are architects of digital
              excellence who turn your vision into reality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  Our team consists of industry veterans with deep knowledge in
                  modern frameworks, languages, and cutting-edge platforms.
                </p>
              </CardContent>
            </Card>

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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 lg:py-24 bg-card border-t border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              Our Core Services
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground">
              A comprehensive suite of services to bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="font-headline text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-accent text-lg">
              <Link href="/pricing">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 lg:py-32 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Forge Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-foreground to-white">
                Next Project?
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/90 mb-12 leading-relaxed">
              Let's discuss how we can help you achieve your business goals with
              cutting-edge technology and unmatched expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
