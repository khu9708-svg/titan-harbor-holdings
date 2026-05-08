import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://titanharborholdings.com"),
  title: "Titan Harbor Holdings | AI Infrastructure For Modern Business",
  description:
    "Titan Harbor Holdings is an AI-powered venture and automation infrastructure company building intelligent systems, digital operations, and scalable business ecosystems.",
  keywords: [
    "AI automation",
    "AI infrastructure",
    "business automation",
    "AI holding company",
    "digital systems",
    "workflow automation",
    "AI chatbot",
    "business ventures",
    "Titan Harbor Holdings",
  ],
  openGraph: {
    title: "Titan Harbor Holdings | AI Infrastructure For Modern Business",
    description:
      "AI-powered venture and automation infrastructure for modern businesses.",
    url: "https://titanharborholdings.com",
    siteName: "Titan Harbor Holdings",
    images: [
      {
        url: "/images/titan-harbor-houston-command-center.png",
        width: 1600,
        height: 900,
        alt: "Titan Harbor Holdings AI headquarters overlooking Houston at night",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Harbor Holdings",
    description: "AI Operating Systems For Modern Business.",
    images: ["/images/titan-harbor-houston-command-center.png"],
  },
  alternates: {
    canonical: "https://titanharborholdings.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#03050a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-titan-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
