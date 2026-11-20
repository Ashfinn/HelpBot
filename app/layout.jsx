import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata = {
  title: "HelpBot",
  description: "AI customer support chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-ink text-soft">{children}</body>
    </html>
  );
}
