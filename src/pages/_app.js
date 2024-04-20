import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import User from "@/contexts/User";

export default function App({ Component, pageProps }) {
  return (
    <User>
      <>
        <div className="w-full h-full overflow-x-hidden">
          <Navbar />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </div>
      </>
    </User>
  );
}
