'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    title: 'Enterprise Fintech Platform',
    description: 'A secure, scalable platform for financial data analysis and reporting, built with a focus on compliance and high performance.',
    image: 'https://placehold.co/600x400.png',
    hint: 'financial chart',
    tags: ['Next.js', 'Rust', 'Kubernetes', 'PostgreSQL', 'Security'],
  },
  {
    title: 'Real-time IoT Dashboard',
    description: 'An IoT solution for monitoring and managing a fleet of devices in real-time, featuring a highly responsive user interface.',
    image: 'https://placehold.co/600x400.png',
    hint: 'data dashboard',
    tags: ['React', 'Node.js', 'MQTT', 'TimescaleDB', 'DevOps'],
  },
  {
    title: 'E-commerce Marketplace',
    description: 'A multi-vendor e-commerce platform with complex inventory management and a seamless checkout experience.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online shopping',
    tags: ['Vue.js', 'Go', 'Elasticsearch', 'Stripe', 'GCP'],
  },
  {
    title: 'Healthcare Data Exchange',
    description: 'A HIPAA-compliant data exchange for healthcare providers, ensuring data integrity and patient privacy.',
    image: 'https://placehold.co/600x400.png',
    hint: 'medical technology',
    tags: ['Full-Stack', 'Security', 'Compliance', 'AWS'],
  },
  {
    title: 'High-Frequency Trading Bot',
    description: 'A low-latency trading bot developed in Rust for maximum performance and memory safety in a high-stakes environment.',
    image: 'https://placehold.co/600x400.png',
    hint: 'stock market',
    tags: ['Rust', 'WebSockets', 'Performance', 'DevOps'],
  },
  {
    title: 'Cloud-Native SaaS Boilerplate',
    description: 'A comprehensive boilerplate for SaaS applications, featuring automated deployment, multi-tenancy, and subscription billing.',
    image: 'https://placehold.co/600x400.png',
    hint: 'cloud infrastructure',
    tags: ['Terraform', 'CI/CD', 'Kubernetes', 'Full-Stack'],
  },
];

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-primary-foreground">
          Our Proven Track Record
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          We take pride in the solutions we build. Explore some of our recent work.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolioProjects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="group flex flex-col overflow-hidden border border-border/50 bg-card hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={`${project.title} - ${project.description.substring(0, 50)}...`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint={project.hint}
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="relative flex-grow">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-lg">{index + 1}</span>
              </div>
              <CardTitle className="font-headline text-2xl text-foreground mt-4">{project.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-muted-foreground mt-3">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="bg-accent p-4 flex items-center justify-between gap-3">
              <Link href="#" className="flex items-center gap-2 text-accent-foreground font-semibold hover:opacity-80 transition-opacity group/link">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
                <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
              <div className="h-4 w-px bg-accent-foreground/30" />
              <Link href="#" className="flex items-center gap-2 text-accent-foreground hover:opacity-80 transition-opacity">
                <Github className="h-4 w-4" />
                <span className="text-sm">Source</span>
              </Link>
            </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
