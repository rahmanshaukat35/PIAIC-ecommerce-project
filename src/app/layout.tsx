import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/views/Navbar";
import Wrapper from "@/components/shared/Wrapper";
import Footer from "@/components/views/Footer";
const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
