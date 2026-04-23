"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import SWRegister from "./swregister";
import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <SWRegister />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}