import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import DashboardLayout from "./components/dashboardLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return ( 
  <main>
    <ClerkProvider {...pageProps}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ClerkProvider>
  </main>)
};

export default api.withTRPC(MyApp);
