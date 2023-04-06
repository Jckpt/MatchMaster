import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import Link from "next/link";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              League Match History
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
