import { SidebarProvider } from "@/context/SidebarContext";
// import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
