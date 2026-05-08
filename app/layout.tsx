import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://titanharborholdings.com"),
  title: "TitanOS by Titan Harbor Holdings | AI Operating System For Business Execution",
  description:
    "TitanOS is the AI operating system for business execution, helping companies detect operational issues, route work, generate reports, monitor KPIs, and improve daily follow-through.",
  keywords: [
    "TitanOS",
    "operational execution system",
    "business execution software",
    "AI operating system",
    "operational visibility",
    "workflow accountability",
    "issue detection",
    "business intelligence",
    "AI reporting",
    "business automation",
    "Titan Harbor Holdings",
  ],
  openGraph: {
    title: "TitanOS | AI Operating System For Business Execution",
    description:
      "Operational visibility, issue detection, workflow accountability, reporting, and business memory inside one private AI command layer.",
    url: "https://titanharborholdings.com",
    siteName: "Titan Harbor Holdings",
    images: [
      {
        url: "/images/titan-harbor-houston-command-center.png",
        width: 1600,
        height: 900,
        alt: "TitanOS AI command center overlooking Houston at night",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TitanOS by Titan Harbor Holdings",
    description: "The AI operating system for business execution.",
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
