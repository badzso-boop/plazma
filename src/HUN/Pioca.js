import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "./Footer";

function Pioca() {
  return (
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              src="images/pioca.jpeg"
              alt="Pioca Therapy"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div className="container w-75">
              <h5>Pióca terápia</h5>
              <p>
                A hidroterápia hatékony és mellékhatások nélküli módszer
                különféle betegségek kezelésére, elsősorban érrendszeri
                problémáknál alkalmazzák, a nyirok keringés serkentésére, segít
                felszabadítani a méreganyagokat.
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
                  A piócák segítenek enyhíteni a véráramlást, normalizálni a
                  vérnyomást, a vér sűrűségét, és kezelni a vérrögképződéssel
                  kapcsolatos problémákat. Emellett hatékonyak az aranyér, az
                  ízületi, idegrendszeri és bőrbetegségek kezelésében, valamint
                  az immunrendszer erősítésében is. A piócaterápia széles körben
                  alkalmazható és jó eredményeket mutat, valamint kozmetikai
                  célokra is felhasználható.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow">
              <img
                src="/images/bgnd.jpeg"
                className="card-img-top"
                alt="Leech Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4">
              Fedezze fel a természet gyógyító erejét
            </h2>
            <p className="lead">
              A pióca terápia nem csupán egy kezelés, hanem egy élmény, amely
              összeköt minket a természet csodáival.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center my-4">
        <img
          src="/images/sample.jpeg"
          className="img-fluid rounded mb-3"
          alt="Leech Therapy"
        />
        <p>
          A pióca terápia során a piócák speciális enzimeket juttatnak a
          vérbe, melyek segíthetnek csökkenteni a gyulladást és javítani a
          vérkeringést.
        </p>
      </div>

      
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">Hogyan működik?</h5>
              <p className="m-2 text-start">
                A piócák nyálukban olyan enzimeket tartalmaznak, amelyek
                véralvadásgátló hatással rendelkeznek. Ezáltal segíthetnek
                csökkenteni a vérrögképződést és javítani a vérkeringést.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3  text-center">
              <img
                src="/images/sample.jpeg"
                className="rounded"
                alt="Pioca Therapy Process"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mt-4">
        <div className="row">
          <div className="p-3">
            <h3 className="text-center">Egy elégedett páciens vallomása</h3>
            <p className="text-start">
              "Sokáig szenvedtem a lábdagadástól, és semmi sem segített. Azután
              kipróbáltam a pióca terápiát, és hihetetlenül hatékonynak
              bizonyult. Most újra könnyedén tudok járni, és a dagadás teljesen
              eltűnt!"
            </p>
            <p className="text-start">- Kovács Katalin, 58 éves, Budapest</p>
          </div>
        </div>
      </div>

      
      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-center">Hogyan segíthet a pióca terápia?</h3>

            <div className="row">
              <div className="col">
                <p className="text-start">
                  A pióca terápia számos egészségügyi problémára lehet hatékony
                  megoldás, például:
                </p>
                <ul>
                  <li>Lábdagadás</li>
                  <li>Magas vérnyomás</li>
                  <li>Migrén</li>
                  <li>Ízületi gyulladás</li>
                  <li>Érszűkület</li>
                </ul>
              </div>
              <div className="col">
                <p className="text-start">
                  A pióca terápia természetes módszer, mely minimalizálja a
                  mellékhatásokat, és hozzájárulhat az általános egészség és
                  jólét javításához.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Pioca;
