import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@/context/ThemeContext';
import { SidebarProvider } from '@/context/SidebarContext'; // Import SidebarProvider
import { StaffProvider } from '@/context/StaffContext'
import  { PartnerProvider } from '@/context/PartnerContex'
import  { VehicleProvider } from '@/context/VehicleContext'
import  { SiteProvider } from '@/context/SiteContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <StaffProvider>
          <PartnerProvider>
            <VehicleProvider>
              <SiteProvider>
                <Component {...pageProps} />
              </SiteProvider>
            </VehicleProvider>
          </PartnerProvider>
        </StaffProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
