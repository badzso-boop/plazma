import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

function Frekvencia() {
  return (
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              style={{ width: "20rem" }}
              src="images/plasma-generator.JPG"
              alt="plasma-generator.JPG"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>Frekvencia terápia</h5>
              <p>
                A frekvenciaterápia (plazmagenerátoros kezelés) olyan módszer,
                amelyben a rezgések alkalmazásával kioltják az élősködőket,
                kórokozókat, különböző mikroorganizmusokat, miközben
                harmonizálják és támogatják a szervezetet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <div className="card-body">
                <p className="card-text">
                  A kezelés során a gép azonosítja a betegségeket okozó
                  rezgéseket, majd ezeket a sajátos frekvenciákat használja föl
                  a kórokozók kioltására. Ezek az irányított rezgések lengésbe
                  hozzák a mikroorganizmus sejtfalát, membránját, azok nem
                  bírják elviselni a növekvő lengést és egy idő után
                  megrepednek. Ezzel a mikroorganizmus elpusztul, azaz
                  deaktiválódik!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <img
                src="images/nls.jpg"
                className="card-img-top"
                alt="nls.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="testimonial bg-light p-4">
              <h3 className="text-center mb-4">
                ADJ CÍMET
              </h3>
              <blockquote className="blockquote">
                <p className="mb-0">
                A szervezetünkben minden folyamatos mozgásban van, és minden, még a legapróbb alkotóelem is rezeg. A rezonancia, vagyis a gerjesztett rezgés jelentőségét egyszerű példákon keresztül is könnyű megérteni. Az inga vagy a hangvillák rezgése szemlélteti, hogy hogyan képes egy rezonáns rendszer megváltoztatni a környezetét.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">ADJ CÍMET</h5>
              <p className="m-2 text-start">
              Szervezetünk nagy része víz, és minden sejtnek saját elektromágneses rezonanciája van. A harmonikus együttműködésnek köszönhetően építik fel a szerveket és a szervrendszereket. A frekvenciaterápia alapját képező tudományos felfedezéseknek köszönhetően ma már világosabb a kép arról, hogy miként befolyásolhatók és támogathatók a szervezet saját rezgései.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3  text-center">
              <img
                src="images/bgnd.jpeg"
                style={{width: "20rem"}}
                className="rounded"
                alt="Leech Therapy Process"
              />
            </div>
          </div>
        </div>
        <div>
            <p>
              A frekvenciakezelés során azonosítva van a betegségeket okozó rezgések, majd ezek a sajátos frekvenciák vannak felhasználva a kórokozók kioltására. Ezek az irányított rezgések lengésbe hozzák a mikroorganizmus sejtfalát, membránját nem bírják elviselni a növekvő lengést és egy idő után megrepednek. Ezzel a mikroorganizmus elpusztul, az az deaktiválódik!
            </p>
            <div class="p-3">
                <p>
                Az 1920-as években Raymond Royal Rife és George Lakhowsky dolgozták ki a frekvenciakezelés alapjait, melyeket korukban csodabogaraknak tartottak. Ők határozták meg a vírusok és kórokozók pusztító frekvenciáit, és fejlesztették ki azokat a módszereket, amelyekkel kizárólag a támadni kívánt élősködőkre lehetett hatást gyakorolni.
                </p>
                <div class="row">
                  <div class="col">
                    <div className="slider m-auto">
                      <Slider {...settings}>
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                        <img
                          src="/images/sample.jpeg"
                          className="rounded"
                          alt="Leech Therapy Slide"
                        />
                      </Slider>
                      <br />
                    </div>
                  </div>
                  <div class="col">
                    <p>
                      Az eljárásnak nincs kockázata, és számos esetben eredményesnek bizonyult, még olyan betegeknél is, akik már feladták a gyógyulás reményét. A frekvenciakezelés egy ígéretes módszer, amely jelentős változásokat hozhat az emberi általános közérzet és jólét érdekében.
                    </p>
                  </div>
                </div>
            </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Frekvencia;