'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$1,200',
    period: '/sprint',
    description: 'Ideal for startups and small projects.',
    features: [
      '1 Full-Stack Developer',
      '2-week Sprints',
      'Agile Project Management',
      'Basic UI/UX Design',
      'Standard Support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$4,500',
    period: '/sprint',
    description: 'Perfect for growing businesses and complex applications.',
    features: [
      'Dedicated Project Team',
      'Advanced Security Audits',
      'CI/CD Pipeline Setup',
      'Custom UI/UX Design',
      'Priority Support',
      'DevOps Consultation',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale enterprise needs.',
    features: [
      'Dedicated Engineering Pods',
      'Full Architecture Design',
      'Rust-based Performance Systems',
      '24/7 Enterprise Support',
      'Compliance & Governance',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  const footerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
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
          Transparent Pricing for Every Need
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Choose a plan that scales with your business. No hidden fees, just pure value.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pricingTiers.map((tier, index) => (
          <motion.div 
            key={tier.name} 
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="h-full"
          >
            <Card
              className={`flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? 'border-accent ring-2 ring-accent' : 'hover:border-accent/50'}`}
            >
            <CardHeader className="text-center">
              {tier.popular && (
                <div className="text-accent font-semibold mb-2">Most Popular</div>
              )}
              <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-center mb-6">
                <span className="font-headline text-5xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary hover:bg-primary/90'}`}>
                <a href="/contact">{tier.cta}</a>
              </Button>
            </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-16"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <h3 className="font-headline text-2xl font-semibold mb-4">Not sure which plan is right for you?</h3>
        <p className="text-muted-foreground mb-6">
          Contact us for a custom quote or to discuss your project requirements in detail.
        </p>
        <Button asChild variant="outline">
          <a href="/contact">Schedule a Consultation</a>
        </Button>
      </motion.div>
    </div>
  );
}
