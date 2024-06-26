import Footer from "./Footer";

function Arak() {
  return (
    <div className="teljes">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="mt-4">
              <div className="card-body">
                <h3>Balatonalmádiban érvényes árak</h3>
                <ul>
                  <h5 className="card-title">NLS diagnosztika</h5>
                  <li>60 és 90 perc között (tüneteggyüttestől függően) - 70 Euro</li>
                  <br />
                  <h5 className="card-title">Frekvencia terápia</h5>
                  <li>60 perc - 50 Euro</li>
                  <br />
                  <h5 className="card-title">Safe laser kezelés</h5>
                  <li>40 perc - 20 Euro</li>
                  <br />
                  <h5 className="card-title">Pióca kezelés</h5>
                  <li>30 és 90 perc között - 60 Euro</li>
                  <li>
                    Az alapkezelésben 2db pióca van, amennyiben szükség lenne
                    további piócára - 4 Euro / db
                  </li>
                </ul>
                <p>Több kezelés azonos alkalommal történő igénybevétele esetén kedvezményt bíztosítunk.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0"></div>
          <div className="col-md-6"></div>
        </div>
      </div>

      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto d-none d-md-block"></div>
      <div className="kitolto"></div>
      <div className="kitolto"></div>

      <Footer />
    </div>
  );
}

export default Arak;
