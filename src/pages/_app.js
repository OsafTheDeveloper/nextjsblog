import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <>
      {isHomePage ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
