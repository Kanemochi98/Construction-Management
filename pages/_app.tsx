import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@/context/ThemeContext';
import { SidebarProvider } from '@/context/SidebarContext'; // Import SidebarProvider
import { StaffProvider } from '@/context/StaffContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <StaffProvider>
          <Component {...pageProps} />
        </StaffProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
