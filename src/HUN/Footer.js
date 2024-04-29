function Footer() {
    return (
        <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Magamról</h5>
              <p>
                Üdvözlöm! Kozma Magdolna vagyok, évtizedek óta az egészséges
                életmód híve, mind saját magam, mind pedig a szeretteim körében.
              </p>
            </div>
            <div className="col-6">
              <h5>Elérhetőségek</h5>
              <address>
                <p>Tel.: <a href="tel:+36703713313">+36703713313</a></p>
                <p>Email: <a href="mailto:kozmagdi28@gmail.com">kozmagdi28@gmail.com</a></p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;