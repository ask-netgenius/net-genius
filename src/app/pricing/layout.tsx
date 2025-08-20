import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Transparent Plans for Every Business',
  description: 'Explore Net Genius transparent pricing for web development, DevOps, and automation services. From Starter at $1,200/sprint to Enterprise custom solutions. No hidden fees.',
  keywords: [
    'pricing',
    'web development pricing',
    'DevOps pricing',
    'software development costs',
    'sprint pricing',
    'enterprise software pricing',
    'full-stack development rates',
    'transparent pricing',
    'no hidden fees'
  ],
  openGraph: {
    title: 'Pricing - Transparent Plans for Every Business | Net Genius',
    description: 'Explore Net Genius transparent pricing for web development, DevOps, and automation services. From Starter at $1,200/sprint to Enterprise custom solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Transparent Plans for Every Business | Net Genius',
    description: 'Explore Net Genius transparent pricing for web development, DevOps, and automation services. From Starter at $1,200/sprint to Enterprise custom solutions.',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}