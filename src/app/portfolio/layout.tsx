import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Proven Track Record',
  description: 'Explore Net Genius portfolio showcasing enterprise fintech platforms, IoT dashboards, e-commerce marketplaces, and high-performance Rust applications. See our full-stack development expertise.',
  keywords: [
    'portfolio',
    'case studies',
    'web development projects',
    'enterprise software',
    'fintech platform',
    'IoT dashboard',
    'e-commerce marketplace',
    'healthcare technology',
    'Rust applications',
    'full-stack projects'
  ],
  openGraph: {
    title: 'Portfolio - Our Proven Track Record | Net Genius',
    description: 'Explore Net Genius portfolio showcasing enterprise fintech platforms, IoT dashboards, e-commerce marketplaces, and high-performance Rust applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Our Proven Track Record | Net Genius',
    description: 'Explore Net Genius portfolio showcasing enterprise fintech platforms, IoT dashboards, e-commerce marketplaces, and high-performance Rust applications.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}