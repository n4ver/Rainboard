// routes/stats.tsx
import Header from "../islands/Header.tsx";
import { asset } from "$fresh/runtime.ts";


export default function AboutPage() {
    return (
      <>
        <head>
          <link rel="stylesheet" href={asset("style.css")}></link>
        </head>
        <main>
          <Header />
          <h1>Stats</h1>
          <p>This is the stats page.</p>
        </main>
      </>
    );
  }