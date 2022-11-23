// routes/about.tsx
import { Header } from "../components/Header.tsx";
import { asset } from "$fresh/runtime.ts";


export default function AboutPage() {
    return (
      <>
        <head>
          <link rel="stylesheet" href={asset("style.css")}></link>
        </head>
        <main>
          <Header />
          <h1>About</h1>
          <p>This is the about page.</p>
        </main>
      </>
    );
  }