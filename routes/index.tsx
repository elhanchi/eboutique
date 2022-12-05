import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Example from "../islands/Example.tsx";
import ArticleItem from "../islands/ArticleItem.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <title>Headers · Bootstrap v5.2</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        >
        </link>

        <link
          href="headers.css"
          rel="stylesheet"
        >
        </link>
      </Head>
      <section>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />

      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      >
      </script>
    </>
  );
}
