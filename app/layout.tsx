import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SparkleClean Co. | Professional Cleaning Services",
  description: "Residential and commercial cleaning services. Deep cleaning, move in/out, office cleaning, and regular schedules. Insured & bonded.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
