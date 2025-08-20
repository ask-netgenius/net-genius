import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Project Started Today',
  description: 'Contact Net Genius for professional web development, DevOps, automation, and system design services. Schedule a free consultation or get a custom quote for your project.',
  keywords: [
    'contact',
    'get quote',
    'free consultation',
    'web development inquiry',
    'DevOps consultation',
    'project consultation',
    'software development contact',
    'hello@netgenius.dev'
  ],
  openGraph: {
    title: 'Contact Us - Get Your Project Started Today | Net Genius',
    description: 'Contact Net Genius for professional web development, DevOps, automation, and system design services. Schedule a free consultation or get a custom quote.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get Your Project Started Today | Net Genius',
    description: 'Contact Net Genius for professional web development, DevOps, automation, and system design services. Schedule a free consultation or get a custom quote.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}