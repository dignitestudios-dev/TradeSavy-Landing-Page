import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Trade Savvy — Rent & Lend Items Easily Within Your Community",
  description:
    "Share items, earn money, and connect with trusted people nearby through a secure, location-based rental app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans bg-ink text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}