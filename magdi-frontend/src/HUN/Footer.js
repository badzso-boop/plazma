import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer egyedi-asd bg-dark text-light pt-2 mt-4">
      <div className="container text-center">
        <h5>Elérhetőségek</h5>
        <div class="row">
          <div class="col-md-6">
            <p>
              Tel.: <a href="tel:+36703713313">+36703713313</a>
            </p>
          </div>
          <div class="col-md-6">
            <p>
              Email:{" "}
              <a href="mailto:legyjolkozpont@gmail.com">legyjolkozpont@gmail.com</a>
            </p>
          </div>
        </div>
        <Link className="mb-2 link" to="/Impresszum">
          Impresszum
        </Link>
        <div class="row">
          <p className="text-center">© 2024 legyjolkozpont.hu. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
