import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Animate on Scroll CSS
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Aptech Computer Education - Benin City, Edo State",
    template: "%s | Aptech Computer Education",
  },
  description:
    "Leading computer education institute in Benin City, Edo State. Offering professional courses in software development, web design, networking, digital marketing, and IT certifications. Build your tech career with Aptech.",
  keywords: [
    "Aptech",
    "Computer Education",
    "Benin City",
    "Edo State",
    "Programming Courses",
    "Web Development",
    "Software Development",
    "IT Training",
    "Digital Marketing",
    "Networking",
    "Technology Education",
    "Career Training",
  ],
  authors: [{ name: "Aptech Computer Education Benin City" }],
  creator: "Aptech Computer Education Benin City",
  publisher: "Aptech Computer Education Benin City",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aptechbenin.com.ng"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aptech Computer Education - Benin City, Edo State",
    description:
      "Leading computer education institute in Benin City, Edo State. Offering professional courses in software development, web design, networking, digital marketing, and IT certifications.",
    url: "/",
    siteName: "Aptech Computer Education",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/aptech_logo_big.png",
        width: 1200,
        height: 630,
        alt: "Aptech Computer Education - Benin City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptech Computer Education - Benin City, Edo State",
    description:
      "Leading computer education institute in Benin City, Edo State. Build your tech career with professional IT courses.",
    images: ["/aptech_logo_big.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark';
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-screen flex flex-col !bg-white dark:!bg-gray-900`}
      >
        <Header />
        <main className="flex-1 bg-white dark:bg-gray-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
