import "./globals.css";

import { Inter } from "next/font/google";
import Overlay from "./UI/Overlay";
import OverlayTop from "./UI/OverlayTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "˗ˏˋ Ihsan ˎˊ",
  description: "Resume Page for Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="googlebot" content="noindex" />
      </head>
      <body className={inter.className}>
        <main>
          <OverlayTop />
          {children}
          <Overlay />
        </main>
      </body>
    </html>
  );
}
