import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amoghkalyanshetti.dev"),
  title: "Amogh Kalyanshetti — Software Developer | MCA Student",
  description:
    "Portfolio of Amogh Kalyanshetti — MCA student at Pillai HOC College of Engineering & Technology (University of Mumbai) with a BSc IT background, specializing in Java, Python, React.js, Next.js, Node.js, databases, and Explainable AI.",
  keywords: [
    "Amogh Kalyanshetti",
    "Software Developer",
    "MCA Student",
    "Pillai HOC",
    "Java",
    "Python",
    "React.js",
    "Next.js",
    "Node.js",
    "Explainable AI",
    "Web Application Firewall",
    "Panvel",
    "Maharashtra",
  ],
  authors: [{ name: "Amogh Kalyanshetti" }],
  openGraph: {
    title: "Amogh Kalyanshetti — Software Developer | MCA Student",
    description:
      "Portfolio of Amogh Kalyanshetti — MCA student at Pillai HOC College of Engineering & Technology (University of Mumbai) with a BSc IT background, specializing in Java, Python, React.js, Next.js, Node.js, databases, and Explainable AI.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amogh Kalyanshetti — Software Developer | MCA Student",
    description:
      "Portfolio of Amogh Kalyanshetti — MCA student at Pillai HOC College of Engineering & Technology (University of Mumbai) with a BSc IT background, specializing in Java, Python, React.js, Next.js, Node.js, databases, and Explainable AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                var stored = localStorage.getItem('amogh_theme');
                if (stored === 'light' || stored === 'dark') {
                  document.documentElement.setAttribute('data-theme', stored);
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className="bg-background text-foreground font-body antialiased selection:bg-[#2563eb]/20 selection:text-[#3b82f6]"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
