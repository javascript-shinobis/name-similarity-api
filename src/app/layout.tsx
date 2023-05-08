import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>{children}</Provider>
        {/* Allow more height on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
