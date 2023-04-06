import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
