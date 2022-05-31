import React from "react";
import NavbarComponent from "../../include/NavbarComponent";
import tkj from "../../include/asset/tkj2.jpg";

const Tkj = () => {
  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-md-4 mt-4">
            <p className="py-2">
              <img
                src={tkj}
                alt="teknik komputer jaringan"
                style={{
                  width: "300px",
                  margin: "30px 0 30px 0",
                  borderRadius: "15px",
                }}
              />
            </p>
          </div>
          <div className="col-md-8 mt-3 containerText p-4 text-white">
            <p>
              <h2>Teknik Komputer Jaringan (TKJ)</h2>
              <h4>
                TKJ merupakan sebuah kejuruan yang <br /> mempelajari tentang
                cara merakit komputer, <br /> mengenal dan mempelajari komponen
                hardware <br /> apa saja yang ada di dalam komputer, merakit{" "}
                <br /> komputer serta fokus mempelajari jaringan dasar.
              </h4>
            </p>
          </div>
        </div>
        <div className="row justify-content-center containerText p-5">
          <div className="col-md-12 text-center text-white">
            <h2 className="py-3">APA SAJA YANG DI PELAJARI?</h2>
          </div>
          <div className="col-md-5 mx-3">
            <h5 className="text-center containerSpesial py-3">
              Perakitan Komputer <br /> Simulasi Digital <br /> Jaringan Dasar{" "}
              <br /> Pemrograman Web <br /> Komputer Terapan <br /> Komunikasi
              Data
            </h5>
          </div>
          <div className="col-md-5 mx-3">
            <h5 className="text-center containerSpesial py-3">
              Rancang Bangun Jaringan <br /> Administrasi Server <br /> Sistem
              Operasi Jaringan <br /> Jaringan Nirkabel <br /> Keamanan Jaringan{" "}
              <br /> Troubleshooting Jaringan
            </h5>
          </div>
        </div>
        <div className="row mt-4 py-5 justify-content-center containerText">
          <div className="col-md-12 text-center py-4 text-white">
            <h2>Profesi Dan Bidang Pekerjaan</h2>
          </div>
          <div className="col-md-5 text-center text-white">
            <h5>
              Administrator Jaringan Komputer <br /> Teknisi Jaringan Komputer{" "}
              <br /> Administrator System Jaringan <br /> Teknisi Komputer dan
              Jaringan <br /> Distributor / toko komputer
            </h5>
          </div>
          <div className="col-md-5 text-white text-center">
            <h5>
              Internet Service Provider (ISP) <br /> Embeded System Jaringan{" "}
              <br /> Administrator Jaringan <br /> Robotic Engineer <br />{" "}
              Control Engineer IT <br /> Robotics engineer
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tkj;
