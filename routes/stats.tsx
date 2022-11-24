// routes/stats.tsx
import Header from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { asset } from "$fresh/runtime.ts";


export default function AboutPage() {
    return (
      <>
        <head>
          <link rel="stylesheet" href={asset("style.css")}></link>
        </head>
        <Header />
        <main>
          <h1>Stats</h1>
          <p>This is the stats page.</p>
        </main>
        <Footer />
      </>
    );
  }