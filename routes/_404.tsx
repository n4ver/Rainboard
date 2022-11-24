import Header from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { asset } from "$fresh/runtime.ts";

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <head>
          <title>Page Not Found</title>
          <link rel="stylesheet" href={asset("style.css")}></link>
      </head>
      <Header />
      <main>
        <section class="w-full flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-6xl md:text-9xl font-medium">
                    {props.serverCode}
                </h1>
                <p class="p-4 text-2xl md:text-3xl">
                    {props.codeDescription}
                </p>
                <p class="p-4">
                    <a href="/" class="hover:underline">Back to the Homepage</a>
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}