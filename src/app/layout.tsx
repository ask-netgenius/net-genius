import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoadingProvider } from "@/components/loading-provider";
import { Fascinate, Ultra } from "next/font/google";
import {
  OrganizationStructuredData,
  WebsiteStructuredData
} from "@/components/structured-data";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Net Genius - Expert Full-Stack Development & DevOps Services",
    template: "%s | Net Genius"
  },
  description:
    "Professional web development, DevOps, automation, system design, and Rust programming services. We build scalable enterprise-grade products and full-stack solutions for businesses worldwide.",
  keywords: [
    "web development",
    "full stack development",
    "DevOps services",
    "automation",
    "system design",
    "Rust programming",
    "enterprise software",
    "cloud solutions",
    "backend development",
    "scalable applications",
    "web design",
    "software development agency"
  ],
  authors: [{ name: "Net Genius Team" }],
  creator: "Net Genius",
  publisher: "Net Genius",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://net-genius.in"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://net-genius.in",
    title: "Net Genius - Expert Full-Stack Development & DevOps Services",
    description:
      "Professional web development, DevOps, automation, system design, and Rust programming services. We build scalable enterprise-grade products and full-stack solutions for businesses worldwide.",
    siteName: "Net Genius"
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Genius - Expert Full-Stack Development & DevOps Services",
    description:
      "Professional web development, DevOps, automation, system design, and Rust programming services. We build scalable enterprise-grade products and full-stack solutions for businesses worldwide."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const fascinate = Fascinate({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fascinate"
});

const ultra = Ultra({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ultra"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fascinate.variable} ${ultra.variable} font-body antialiased min-h-screen bg-background flex flex-col`}
      >
        <LoadingProvider>
          {/* <Header /> */}
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </LoadingProvider>
        <OrganizationStructuredData
          contactPoint={{
            telephone: "+91-9348840861",
            contactType: "customer service",
            email: "asknetgenius@gmail.com"
          }}
          sameAs={[
            "https://github.com/netgenius",
            "https://linkedin.com/company/netgenius",
            "https://twitter.com/netgenius"
          ]}
        />
        <WebsiteStructuredData />
        <LocalBusinessSchema />
        <SpeedInsights />
      </body>
    </html>
  );
}
