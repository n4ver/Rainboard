// routes/stats/[slug].tsx
import Header from "../../islands/Header.tsx";
import Log from "../../islands/Log.tsx";
import { Footer } from "../../components/Footer.tsx";
import { asset } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function StatsPage(props: PageProps) {
  const { slug } = props.params;
  return (
    <>
      <head>
        <link rel="stylesheet" href={asset("style.css")}></link>
      </head>
      <Header />
      <main>
        <Log slug={slug}/>
      </main>
      <Footer />
    </>
  );
}