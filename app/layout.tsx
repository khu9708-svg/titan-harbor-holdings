import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://titanharborholdings.com"),
  title: "Titan Harbor Holdings | AI Ideas, Venture Systems & Automation Infrastructure",
  description:
    "Titan Harbor Holdings is an AI-powered holding company investing in, building, automating, and scaling practical AI ideas, digital infrastructure, and modern business systems.",
  keywords: [
    "Titan Harbor Holdings",
    "AI holding company",
    "AI ideas",
    "AI investments",
    "AI venture studio",
    "AI automation",
    "business automation",
    "digital infrastructure",
    "workflow automation",
    "AI business ideas",
  ],
  openGraph: {
    title: "Titan Harbor Holdings | AI Ideas & Venture Infrastructure",
    description:
      "An AI-powered holding company focused on practical AI ideas, automation systems, venture infrastructure, and real-world execution.",
    url: "https://titanharborholdings.com",
    siteName: "Titan Harbor Holdings",
    images: [
      {
        url: "/images/titan-harbor-houston-command-center.png",
        width: 1600,
        height: 900,
        alt: "Titan Harbor Holdings AI venture headquarters overlooking Houston at night",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Harbor Holdings",
    description: "AI ideas. Venture systems. Real-world execution.",
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
