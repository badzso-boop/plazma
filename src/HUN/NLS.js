import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function NLS() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="btn btn-primary slick-prev">Previous</button>,
    nextArrow: <button className="btn btn-primary slick-next">Next</button>,
  };

  return (
    <div>
      <div className="background">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 text-center">
            <img
              className="m-3 rounded border"
              src="/images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-3">
            <div class="container w-75">
              <h5>NLS Diagnosztika</h5>
              <p>
                Az NLS technológia új korszakot nyit az egészségügyben, kínálva
                egy hatékony és pontos eszközt a diagnózis és terápia terén.
                Összehasonlítva a hagyományos képalkotó módszerekkel, az NLS
                technológia kiemelkedő pontosságot és sokoldalúságot biztosít az
                emberi test elemzésében.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3">
              <h5 className="text-center">Pontos Diagnosztika</h5>
              <p className="m-2 text-start">
                E technológia átfogó elemzéstesz lehetővé az emberi test minden
                szervéről és rendszeréről. Ez magában foglalja a
                kardiovaszkuláris, gasztrointesztinális, urogenitális,
                muszkuloszkeletális, bronchopulmonális, endokrin és
                idegrendszeri rendszereket.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <img
                src="images/sample.jpeg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 order-md-1">
            <div className="p-3">
              <img
                src="images/sample.jpeg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 order-md-2">
            <div className="p-3">
              <h5 className="text-center">
                Laboratóriumi Minőségű Információk
              </h5>
              <p className="text-start">
                Az eszköz nem csupán anatómiai információkat szolgáltat, hanem
                képes biokémiai elemzést is végezni a vérben lévő anyagokról,
                hormonszintekről és immunitásról anélkül, hogy beavatkozást
                igényelne.
              </p>
              <p className="text-start">
                A frekvencia terápia alkalmazása során különböző frekvenciájú
                rezgések segítségével céltudatosan befolyásolhatjuk a test
                energiamezőjét és támogathatjuk az öngyógyító folyamatokat. A
                kezelés hatékony és fájdalommentes, és számos egészségügyi
                probléma esetén segíthet a gyógyulásban.
              </p>
              <h5 className="text-center">Átfogó Kórfolyamatok Feltárása</h5>
              <p className="text-start">
                E modern analizátor képes elemzést végezni a fertőzések
                jelenlétéről a szervekben és rendszerekben, segítségével
                megvizsgálhatók és kezelhetők a különféle kórfolyamatok,
                beleértve allergiákat, hormonális egyensúlytalanságokat és az
                idegi vagy érzelmi problémákat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-75 m-auto mt-4">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-center">A Tudományos Alapok Háttére</h3>

            <div className="row">
              <div className="col">
                <p className="text-start">
                  Az NLS technológia nem csupán a modern idők terméke, hanem
                  gyökerei az 1920-as évekig nyúlnak vissza, amikor Dr. Rife és
                  Dr. Lakhovsky már kutatásaikkal előrevetítették az ilyen
                  típusú diagnosztika és terápia lehetőségeit.
                </p>
              </div>
              <div className="col">
                <p className="text-start">
                  Ősi gyógyító hagyományokra épít, miközben a modern tudományos
                  kutatások eredményeire támaszkodik.
                </p>
              </div>
            </div>
            <div className="row">
              <p>
                E modern analizátor képes elemzést végezni a fertőzések
                jelenlétéről a szervekben és rendszerekben, segítségével
                megvizsgálhatók és kezelhetők a különféle kórfolyamatok,
                beleértve allergiákat, hormonális egyensúlytalanságokat és az
                idegi vagy érzelmi problémákat.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="slider m-auto">
              <Slider {...settings}>
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
                <img src="images/sample.jpeg" className="rounded" alt="" />
              </Slider>
              <br />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark text-light py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h5>Rólunk</h5>
              <p>
                Az NLS Terápia csapatával együtt dolgozunk azon, hogy az
                egészség és a harmonikus élet mindenki számára elérhetővé
                váljon. Célunk, hogy segítsünk az embereknek megtalálni az
                egyensúlyt testük, lelkük és környezetük között.
              </p>
            </div>
            <div className="col-6">
              <h5>Kapcsolat</h5>
              <address>
                <p>Telefon: 123-456-7890</p>
                <p>Email: info@nlsterapia.com</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NLS;
