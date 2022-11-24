import { asset, Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx"
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rain Dashboard</title>
        <link rel="stylesheet" href={asset("style.css")}></link>
      </Head>
      <Header />
      <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
          </p>
          <Counter start={1} />
        </div>
      </main>
      <Footer />
    </>
  );
}
