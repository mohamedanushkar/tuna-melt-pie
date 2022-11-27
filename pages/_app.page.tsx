import type { AppProps } from "next/app";
import Image from "next/image";
import "styles/globals.css";
import localFont from "@next/font/local";
import { Harmattan } from "@next/font/google";
import cns from "classnames";

const myFont = localFont({
  src: [{ path: "../public/fonts/hv-cocktail-regular.woff2", weight: "400" }],
  variable: "--coktail",
});

const inter = Harmattan({ weight: "400", variable: "--harmattan" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cns(inter.variable, myFont.variable, "bg-shade3")}>
      <div className="noise"></div>
      <Component {...pageProps} />
    </main>
  );
}
