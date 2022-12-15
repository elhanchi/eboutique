import { Head } from "$fresh/runtime.ts";

export default function Details() {
    return (<>
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
                <div class="bg-dark p-4">
                    <div className="btn"></div>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <div class="container my-5">
                        <div id="demo" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="a.png" alt="Los Angeles" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="a.png" alt="Chicago" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="a.png" alt="New York" class="d-block w-100" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div></div>
                </div>
                <div class="col">
                    <div class="container my-5">

                        <div class="row row row-cols-1 row-cols-md-2">

                            <div class="col">
                                <div class="row">
                                    Nom : Med Lemin
                                </div>

                                <div class="row">
                                    Tel : +222 22222222
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    Adress : Capitall-Nouakchotte
                                </div>

                                <div class="row">
                                    Car Toyotta Avensice 100000 km
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
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