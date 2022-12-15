import { Head } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous" />
                <link href="custum.css" rel="stylesheet" />

                <title>Document</title>

            </Head>
            <section>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class=" p-4">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">ِAccueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/spa"> mes annonces</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
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